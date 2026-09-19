# DSA Journey

A small React + TypeScript + Vite DSA progression system built around a dependency graph where **topics and problems are both nodes**.

The implementation follows the supplied brief: monochrome technical/editorial UI, derived progress, locked/current/completed states, lightweight XP, curated resources, minimal profile, and Supabase persistence without duplicating the curriculum per user.

## Run

```bash
npm install
npm run dev
```

Without Supabase environment variables, the app runs in a local demo mode with a seeded progression so the interface can be explored immediately.

For Supabase mode, copy `.env.example` to `.env` and fill:

```text
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Then run `supabase/schema.sql` followed by `supabase/seed.sql` in the Supabase SQL editor.

## Replace builder links

Edit `src/lib/config.ts`. The `APP_CONFIG` object contains the four `YOUR_*_URL` placeholders and the display name used by the small Built By footer.

## Important implementation note

Problem state is derived from solved rows and order/dependency data. There are no per-user rows for unsolved problems, no user-topic progress table, no XP history table, and no analytics/event log.


## UI revision

The latest revision separates the marketing-style home screen from the progression journey. The home screen contains the product copy and primary actions; the dependency graph lives on `/journey`. Desktop uses a horizontal graph with DOM-measured SVG connections, while mobile switches the same graph into a vertical sequence. The Problems page is topic-first and expands problems on click. Topic detail pages use bordered problem boxes with a restrained black / off-white / coral theme.

## Code organization

The UI is split into page modules, reusable components, hooks, data, domain logic, persistence, and CSS layers. `src/App.tsx` owns only application state and routing orchestration.

```text
src/
├── App.tsx
├── components/
│   ├── journey/
│   ├── layout/
│   ├── problems/
│   └── resources/
├── hooks/
│   └── useJourneyPaths.ts
├── lib/
│   ├── config.ts
│   ├── problemLinks.ts
│   ├── progress.ts
│   ├── storage.ts
│   └── supabase.ts
├── pages/
└── styles/
    ├── index.css
    ├── tokens.css
    ├── base.css
    ├── layout.css
    ├── home.css
    ├── journey.css
    ├── detail.css
    ├── lists.css
    ├── profile.css
    ├── auth.css
    └── responsive.css
```

The graph connection layer is an SVG whose paths are recalculated from the rendered node positions using `ResizeObserver` and `getBoundingClientRect`, so the connections follow the actual layout rather than hardcoded coordinates.


### Horizontal graph scrolling
The desktop Journey graph uses Lenis for smooth horizontal scrolling with the graph viewport as a custom wrapper. Mobile keeps the existing vertical graph layout.
