import { APP_CONFIG } from '../../lib/config'

export function BuiltBy() {
  return (
    <div className="built-by">
      <div className="built-copy">
        <span className="mono">BUILT BY</span>
        <strong>{APP_CONFIG.builtBy}</strong>
        <small>{APP_CONFIG.tagline}</small>
      </div>
      <div className="built-links">
        <a href={APP_CONFIG.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={APP_CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={APP_CONFIG.x} target="_blank" rel="noreferrer">X</a>
        <a href={APP_CONFIG.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
      </div>
    </div>
  )
}
