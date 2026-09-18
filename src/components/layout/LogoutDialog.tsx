import { useEffect, type MouseEvent } from 'react'

export function LogoutDialog({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCancel()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCancel])

  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation()

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onCancel}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="logout-title" onMouseDown={stopPropagation}>
        <span className="mono modal-kicker">SIGN OUT</span>
        <h2 id="logout-title">Leave the path?</h2>
        <p>Your progress stays saved. You can continue whenever you sign back in.</p>
        <div className="modal-actions">
          <button className="button button-outline" onClick={onCancel}>Cancel</button>
          <button className="button button-accent" onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  )
}
