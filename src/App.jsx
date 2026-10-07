import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { demoSolvedIds, demoXp, problems, topics } from './data/curriculum'
import { AuthPage } from './pages/AuthPage'
import { CloudIndexPage } from './pages/CloudIndexPage'
import { CloudPage } from './pages/CloudPage'
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

function getStartingSolved() {
  if (hasSupabaseEnv) {
    return new Set()
  }

  const saved = loadSolved()
  if (saved.size > 0) {
    return saved
  }

  return new Set(demoSolvedIds)
}

function getStartingXp() {
  if (hasSupabaseEnv) {
    return 0
  }

  const saved = loadXp()
  if (saved > 0) {
    return saved
  }

  return demoXp
}

function getUserName(session) {
  if (!session) {
    return APP_CONFIG.builtBy
  }

  if (session.user.user_metadata?.full_name) {
    return session.user.user_metadata.full_name
  }

  if (session.user.email) {
    return session.user.email.split('@')[0]
  }

  return APP_CONFIG.builtBy
}

export default function App() {
  const [solved, setSolved] = useState(getStartingSolved)
  const [xp, setXp] = useState(getStartingXp)
  const [userName, setUserName] = useState(APP_CONFIG.builtBy)
  const [authLoading, setAuthLoading] = useState(hasSupabaseEnv)
  const [authed, setAuthed] = useState(!hasSupabaseEnv)

  useEffect(() => {
    if (!supabase) {
      return undefined
    }

    supabase.auth.getSession().then(({ data }) => {
      setAuthed(Boolean(data.session))
      setAuthLoading(false)
      setUserName(getUserName(data.session))
    })

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(Boolean(session))
      setUserName(getUserName(session))
    })

    return () => data.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!supabase || !authed) {
      return undefined
    }

    async function loadUserData() {
      const { data: progressRows } = await supabase
        .from('user_problem_progress')
        .select('problem_id')

      if (progressRows) {
        const solvedIds = progressRows.map((row) => row.problem_id)
        setSolved(new Set(solvedIds))
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('xp,display_name')
        .single()

      if (profile?.xp != null) {
        setXp(profile.xp)
      }

      if (profile?.display_name) {
        setUserName(profile.display_name)
      }
    }

    loadUserData()
  }, [authed])

  async function handleSolved(problem) {
    if (solved.has(problem.id)) {
      return
    }

    const status = getProblemStatus(problem, problems, solved)
    if (status !== 'CURRENT') {
      return
    }

    if (supabase && authed) {
      const { data, error } = await supabase.rpc('complete_problem', {
        p_problem_id: problem.id,
      })

      if (error) {
        window.alert(error.message)
        return
      }

      const nextSolved = new Set(solved)
      nextSolved.add(problem.id)
      setSolved(nextSolved)

      if (typeof data?.xp === 'number') {
        setXp(data.xp)
      }

      return
    }

    const nextSolved = new Set(solved)
    nextSolved.add(problem.id)

    const topic = topics.find((item) => item.id === problem.topic_id)
    if (!topic) {
      return
    }

    const before = getTopicProgress(topic, problems, solved)
    const after = getTopicProgress(topic, problems, nextSolved)

    let problemXp = 30
    if (problem.difficulty === 'EASY') {
      problemXp = 10
    } else if (problem.difficulty === 'MEDIUM') {
      problemXp = 20
    }

    let topicBonus = 0
    if (before.solved < before.total && after.solved === after.total) {
      topicBonus = 50
    }

    const nextXp = xp + problemXp + topicBonus

    setSolved(nextSolved)
    setXp(nextXp)
    saveSolved(nextSolved)
    saveXp(nextXp)
  }

  async function logout() {
    if (supabase) {
      await supabase.auth.signOut()
    }

    setAuthed(false)
  }

  if (authLoading) {
    return (
      <div className="boot-screen">
        <span className="mono">LOADING</span>
      </div>
    )
  }

  if (!authed) {
    return <AuthPage onAuthed={() => setAuthed(true)} />
  }

  return (
    <AppShell xp={xp} userName={userName} logout={logout}>
      <Routes>
        <Route path="/" element={<HomePage solved={solved} />} />
        <Route path="/journey" element={<JourneyPage solved={solved} />} />
        <Route path="/cloud" element={<CloudIndexPage />} />
        <Route path="/cloud/:chapterSlug/*" element={<CloudPage />} />
        <Route path="/problems" element={<ProblemsPage solved={solved} onSolved={handleSolved} />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/profile" element={<ProfilePage userName={userName} xp={xp} solved={solved} />} />
        <Route path="/topic/:slug" element={<TopicPage solved={solved} onSolved={handleSolved} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}
