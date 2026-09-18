import { useState, type ReactNode } from 'react'
import { LogOut, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BuiltBy } from './BuiltBy'
import { NavItem } from './NavItem'
import { LogoutDialog } from './LogoutDialog'

export function AppShell({ children, xp, userName, logout }: { children: ReactNode; xp: number; userName: string; logout: () => void }) {
  const [mobileNav, setMobileNav] = useState(false)
  const [logoutOpen, setLogoutOpen] = useState(false)
  return (
    <div className="app-shell">
      <header className="top-nav">
        <Link to="/" className="brand">TRACE</Link>
        <nav className={mobileNav ? 'nav-links nav-open' : 'nav-links'}>
          <NavItem to="/" label="Home" />
          <NavItem to="/journey" label="Journey" />
          <NavItem to="/problems" label="Problems" />
          <NavItem to="/resources" label="Resources" />
        </nav>
        <div className="nav-right">
          <Link to="/profile" className="xp-link"><span className="mono">XP</span><strong>{xp}</strong></Link>
          <Link to="/profile" className="profile-chip" aria-label={`Open ${userName}'s profile`}>{userName.slice(0, 1).toUpperCase()}</Link>
          <button className="logout-btn" onClick={() => setLogoutOpen(true)}><LogOut size={13} /><span>Logout</span></button>
          <button className="mobile-menu" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? <X size={16} /> : <Menu size={16} />}</button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer-wrap"><BuiltBy /></footer>
      {logoutOpen && <LogoutDialog onCancel={() => setLogoutOpen(false)} onConfirm={() => { setLogoutOpen(false); void logout() }} />}
    </div>
  )
}
