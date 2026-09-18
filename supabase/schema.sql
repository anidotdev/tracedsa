create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  display_name text,
  avatar_url text,
  xp integer not null default 0 check (xp >= 0),
  created_at timestamptz not null default now()
);

create table if not exists public.topics (
  id text primary key,
  title text not null,
  slug text not null unique,
  description text not null default '',
  order_index integer not null unique
);

create table if not exists public.topic_prerequisites (
  topic_id text not null references public.topics(id) on delete cascade,
  prerequisite_topic_id text not null references public.topics(id) on delete cascade,
  primary key (topic_id, prerequisite_topic_id),
  check (topic_id <> prerequisite_topic_id)
);

create table if not exists public.problems (
  id text primary key,
  topic_id text not null references public.topics(id) on delete cascade,
  title text not null,
  difficulty text not null check (difficulty in ('EASY','MEDIUM','HARD')),
  platform text not null,
  url text not null,
  required boolean not null default true,
  order_index integer not null,
  unique (topic_id, order_index)
);

create table if not exists public.problem_dependencies (
  problem_id text not null references public.problems(id) on delete cascade,
  prerequisite_problem_id text not null references public.problems(id) on delete cascade,
  primary key (problem_id, prerequisite_problem_id),
  check (problem_id <> prerequisite_problem_id)
);

create table if not exists public.resources (
  id text primary key,
  topic_id text not null references public.topics(id) on delete cascade,
  title text not null,
  type text not null check (type in ('NOTES','VIDEO','ARTICLE','REFERENCE')),
  source text not null,
  url text not null,
  order_index integer not null,
  unique (topic_id, order_index)
);

create table if not exists public.user_problem_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  problem_id text not null references public.problems(id) on delete cascade,
  solved_at timestamptz not null default now(),
  primary key (user_id, problem_id)
);

create index if not exists idx_problems_topic on public.problems(topic_id, order_index);
create index if not exists idx_resources_topic on public.resources(topic_id, order_index);
create index if not exists idx_topic_prereq on public.topic_prerequisites(prerequisite_topic_id, topic_id);
create index if not exists idx_problem_deps on public.problem_dependencies(prerequisite_problem_id, problem_id);
create index if not exists idx_progress_problem on public.user_problem_progress(problem_id);

alter table public.profiles enable row level security;
alter table public.topics enable row level security;
alter table public.topic_prerequisites enable row level security;
alter table public.problems enable row level security;
alter table public.problem_dependencies enable row level security;
alter table public.resources enable row level security;
alter table public.user_problem_progress enable row level security;

drop policy if exists "public read topics" on public.topics;
create policy "public read topics" on public.topics for select using (true);
drop policy if exists "public read topic prerequisites" on public.topic_prerequisites;
create policy "public read topic prerequisites" on public.topic_prerequisites for select using (true);
drop policy if exists "public read problems" on public.problems;
create policy "public read problems" on public.problems for select using (true);
drop policy if exists "public read problem dependencies" on public.problem_dependencies;
create policy "public read problem dependencies" on public.problem_dependencies for select using (true);
drop policy if exists "public read resources" on public.resources;
create policy "public read resources" on public.resources for select using (true);

drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles for select using (auth.uid() = id);
drop policy if exists "update own profile" on public.profiles;
create policy "update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "read own progress" on public.user_problem_progress;
create policy "read own progress" on public.user_problem_progress for select using (auth.uid() = user_id);
-- Inserts are performed by the security-definer RPC below, not directly from the client.


create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'user_name', split_part(coalesce(new.email, new.id::text), '@', 1)),
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(coalesce(new.email, new.id::text), '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.complete_problem(p_problem_id text)
returns json
language plpgsql
security definer set search_path = public
as $$
declare
  uid uuid := auth.uid();
  p public.problems%rowtype;
  inserted_count integer := 0;
  problem_xp integer;
  topic_solved integer;
  topic_required integer;
  topic_bonus integer := 0;
  new_xp integer;
begin
  if uid is null then raise exception 'Not authenticated'; end if;

  if exists (
    select 1
    from public.topic_prerequisites tp
    where tp.topic_id = (select topic_id from public.problems where id = p_problem_id)
      and exists (
        select 1
        from public.problems req
        where req.topic_id = tp.prerequisite_topic_id and req.required = true
          and not exists (select 1 from public.user_problem_progress upp where upp.user_id = uid and upp.problem_id = req.id)
      )
  ) then
    raise exception 'Topic is locked';
  end if;

  select * into p from public.problems where id = p_problem_id and required = true;
  if not found then raise exception 'Problem not found'; end if;

  -- Problem progression is sequential within a topic for V1.
  if exists (
    select 1
    from public.problems prior
    where prior.topic_id = p.topic_id
      and prior.required = true
      and prior.order_index < p.order_index
      and not exists (
        select 1 from public.user_problem_progress upp
        where upp.user_id = uid and upp.problem_id = prior.id
      )
  ) then
    raise exception 'This problem is locked';
  end if;

  insert into public.user_problem_progress (user_id, problem_id)
  values (uid, p.id)
  on conflict (user_id, problem_id) do nothing;

  get diagnostics inserted_count = row_count;
  if inserted_count = 0 then
    select xp into new_xp from public.profiles where id = uid;
    return json_build_object('xp', coalesce(new_xp, 0), 'inserted', false, 'topic_completed', false);
  end if;

  problem_xp := case p.difficulty when 'EASY' then 10 when 'MEDIUM' then 20 else 30 end;
  select count(*) into topic_solved
  from public.user_problem_progress upp
  join public.problems pp on pp.id = upp.problem_id
  where upp.user_id = uid and pp.topic_id = p.topic_id and pp.required = true;

  select count(*) into topic_required
  from public.problems pp
  where pp.topic_id = p.topic_id and pp.required = true;

  if topic_required > 0 and topic_solved = topic_required then
    topic_bonus := 50;
  end if;

  update public.profiles
  set xp = xp + problem_xp + topic_bonus
  where id = uid
  returning xp into new_xp;

  return json_build_object('xp', new_xp, 'inserted', true, 'topic_completed', topic_bonus > 0);
end;
$$;

grant execute on function public.complete_problem(text) to authenticated;
