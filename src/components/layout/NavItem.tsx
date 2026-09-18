import { Link, useLocation } from 'react-router-dom'

export function NavItem({ to, label }: { to: string; label: string }) {
  const location = useLocation()
  const active = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
  return <Link className={active ? 'nav-link active' : 'nav-link'} to={to}>{label}</Link>
}
