import { useState } from 'react'
import { LogOut, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BuiltBy } from './BuiltBy'
import { NavItem } from './NavItem'
import { LogoutDialog } from './LogoutDialog'
import { ThemeToggle } from './ThemeToggle'

export function AppShell({ children, xp, userName, logout }) {
  const [mobileNav, setMobileNav] = useState(false)
  const [logoutOpen, setLogoutOpen] = useState(false)

  function openLogout() {
    setLogoutOpen(true)
  }

  function closeLogout() {
    setLogoutOpen(false)
  }

  function toggleMobileNav() {
    setMobileNav(!mobileNav)
  }

  async function confirmLogout() {
    setLogoutOpen(false)
    await logout()
  }

  let navClass = 'nav-links'
  if (mobileNav) {
    navClass += ' nav-open'
  }

  return (
    <div className="app-shell">
      <header className="top-nav">
        <Link to="/" className="brand">TRACE</Link>

        <nav className={navClass}>
          <NavItem to="/" label="Home" />
          <NavItem to="/journey" label="Journey" />
          <NavItem to="/cloud" label="Cloud" />
          <NavItem to="/problems" label="Problems" />
          <NavItem to="/resources" label="Resources" />
        </nav>

        <div className="nav-right">
          <ThemeToggle />
          <Link to="/profile" className="xp-link">
            <span className="mono">XP</span>
            <strong>{xp}</strong>
          </Link>
          <Link
            to="/profile"
            className="profile-chip"
            aria-label={`Open ${userName}'s profile`}
          >
            {userName.slice(0, 1).toUpperCase()}
          </Link>
          <button className="logout-btn" onClick={openLogout}>
            <LogOut size={13} />
            <span>Logout</span>
          </button>
          <button
            className="mobile-menu"
            onClick={toggleMobileNav}
            aria-label="Toggle navigation"
          >
            {mobileNav ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      <main>{children}</main>
      <footer className="footer-wrap"><BuiltBy /></footer>

      {logoutOpen && (
        <LogoutDialog onCancel={closeLogout} onConfirm={confirmLogout} />
      )}
    </div>
  )
}
