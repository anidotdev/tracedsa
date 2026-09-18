import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { demoSolvedIds, demoXp, problems, topics } from './data/curriculum'
import { AuthPage } from './pages/AuthPage'
import { HomePage } from './pages/HomePage'
import { JourneyPage } from './pages/JourneyPage'
import { ProblemsPage } from './pages/ProblemsPage'
import { ProfilePage } from './pages/ProfilePage'
import { ResourcesPage } from './pages/ResourcesPage'
import { TopicPage } from './pages/TopicPage'
import { APP_CONFIG, hasSupabaseEnv } from './lib/config'
import { getTopicProgress, getProblemStatus } from './lib/progress'
import { loadSolved, loadXp, saveSolved, saveXp } from './lib/storage'
import { supabase } from './lib/supabase'
import type { Problem } from './types/domain'

export default function App() {
  const [solved, setSolved] = useState<Set<string>>(() => hasSupabaseEnv ? new Set() : (loadSolved().size ? loadSolved() : new Set(demoSolvedIds)))
  const [xp, setXp] = useState(() => hasSupabaseEnv ? 0 : (loadXp() || demoXp))
  const [userName, setUserName] = useState(APP_CONFIG.builtBy)
  const [authLoading, setAuthLoading] = useState(Boolean(hasSupabaseEnv))
  const [authed, setAuthed] = useState(!hasSupabaseEnv)

  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => {
      setAuthed(Boolean(data.session)); setAuthLoading(false)
      setUserName(data.session?.user.user_metadata?.full_name ?? data.session?.user.email?.split('@')[0] ?? APP_CONFIG.builtBy)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(Boolean(session)); setUserName(session?.user.user_metadata?.full_name ?? session?.user.email?.split('@')[0] ?? APP_CONFIG.builtBy)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!supabase || !authed) return
    const load = async () => {
      const { data: progressRows } = await supabase.from('user_problem_progress').select('problem_id')
      if (progressRows) setSolved(new Set(progressRows.map((row) => row.problem_id)))
      const { data: profile } = await supabase.from('profiles').select('xp,display_name').single()
      if (profile?.xp != null) setXp(profile.xp)
      if (profile?.display_name) setUserName(profile.display_name)
    }
    void load()
  }, [authed])

  const handleSolved = async (problem: Problem) => {
    if (solved.has(problem.id) || getProblemStatus(problem, problems, solved) !== 'CURRENT') return
    if (supabase && authed) {
      const { data, error } = await supabase.rpc('complete_problem', { p_problem_id: problem.id })
      if (error) { window.alert(error.message); return }
      setSolved((previous) => new Set(previous).add(problem.id)); if (typeof data?.xp === 'number') setXp(data.xp)
      return
    }
    const next = new Set(solved).add(problem.id)
    const award = problem.difficulty === 'EASY' ? 10 : problem.difficulty === 'MEDIUM' ? 20 : 30
    const topic = topics.find((item) => item.id === problem.topic_id)!
    const before = getTopicProgress(topic, problems, solved)
    const after = getTopicProgress(topic, problems, next)
    const topicBonus = before.solved < before.total && after.solved === after.total ? 50 : 0
    const nextXp = xp + award + topicBonus
    setSolved(next); setXp(nextXp); saveSolved(next); saveXp(nextXp)
  }

  const logout = async () => { if (supabase) await supabase.auth.signOut(); setAuthed(false) }
  if (authLoading) return <div className="boot-screen"><span className="mono">LOADING</span></div>
  if (!authed) return <AuthPage onAuthed={() => setAuthed(true)} />

  return <AppShell xp={xp} userName={userName} logout={logout}><Routes>
    <Route path="/" element={<HomePage solved={solved} />} />
    <Route path="/journey" element={<JourneyPage solved={solved} />} />
    <Route path="/problems" element={<ProblemsPage solved={solved} onSolved={handleSolved} />} />
    <Route path="/resources" element={<ResourcesPage />} />
    <Route path="/profile" element={<ProfilePage userName={userName} xp={xp} solved={solved} />} />
    <Route path="/topic/:slug" element={<TopicPage solved={solved} onSolved={handleSolved} />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></AppShell>
}
