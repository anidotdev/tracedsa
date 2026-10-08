import { useEffect } from 'react'

export function LogoutDialog({ onCancel, onConfirm }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCancel()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCancel])

  const stopPropagation = (event) => event.stopPropagation()

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onCancel}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="logout-title" onMouseDown={stopPropagation}>
        <span className="mono modal-kicker">SIGN OUT</span>
        <h2 id="logout-title">Sign out of KisoKata?</h2>
        <p>You can sign back in at any time to continue learning.</p>
        <div className="modal-actions">
          <button className="button button-outline" onClick={onCancel}>Cancel</button>
          <button className="button button-accent" onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  )
}
