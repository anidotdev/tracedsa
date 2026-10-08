import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { AuthPage } from './pages/AuthPage'
import { CloudIndexPage } from './pages/CloudIndexPage'
import { CloudPage } from './pages/CloudPage'
import { CompaniesPage } from './pages/CompaniesPage'
import { CompanyPage } from './pages/CompanyPage'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'
import { APP_CONFIG, hasSupabaseEnv } from './lib/config'
import { supabase } from './lib/supabase'

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
    <AppShell userName={userName} logout={logout}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cloud" element={<CloudIndexPage />} />
        <Route path="/cloud/:chapterSlug/*" element={<CloudPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:companySlug" element={<CompanyPage />} />
        <Route path="/profile" element={<ProfilePage userName={userName} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}
