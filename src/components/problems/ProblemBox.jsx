import { Check, ExternalLink, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems } from '../../data/curriculum'
import { getProblemLinkLabel } from '../../lib/problemLinks'
import { getProblemStatus } from '../../lib/progress'

export function ProblemBox({ index, problem, solved, selected, onSolved, topicLocked, onSelect }) {
  let status = getProblemStatus(problem, problems, solved)
  if (topicLocked) {
    status = 'LOCKED'
  }

  const selectable = Boolean(onSelect)
  let className = `problem-box state-${status.toLowerCase()}`

  if (selected) {
    className += ' selected'
  }

  if (selectable) {
    className += ' is-selectable'
  }

  function handleSelect() {
    if (onSelect) {
      onSelect(problem)
    }
  }

  function handleKeyDown(event) {
    if (!selectable) {
      return
    }

    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }

    event.preventDefault()
    handleSelect()
  }

  function handleSolved(event) {
    event.stopPropagation()
    onSolved(problem)
  }

  function stopClick(event) {
    event.stopPropagation()
  }

  return (
    <article
      className={className}
      onClick={selectable ? handleSelect : undefined}
      onKeyDown={selectable ? handleKeyDown : undefined}
      role={selectable ? 'button' : undefined}
      tabIndex={selectable ? 0 : undefined}
    >
      <div className="problem-box-index mono">{String(index).padStart(2, '0')}</div>
      <div className="problem-box-copy">
        {selectable ? (
          <strong>{problem.title}</strong>
        ) : (
          <Link
            to={`/topic/${problem.topic_id}?problem=${problem.id}`}
            onClick={stopClick}
          >
            <strong>{problem.title}</strong>
          </Link>
        )}
        <span className="mono">{problem.difficulty} · {problem.platform}</span>
      </div>
      <div className="problem-box-status">
        {status === 'COMPLETED' && <Check size={15} />}
        {status === 'CURRENT' && <span className="current-marker" />}
        {status === 'LOCKED' && <LockKeyhole size={14} />}
      </div>

      {status === 'CURRENT' && (
        <button className="button button-small" onClick={handleSolved}>
          Mark solved
        </button>
      )}

      {status !== 'LOCKED' && (
        <a
          className="icon-link"
          href={problem.url}
          target="_blank"
          rel="noreferrer"
          onClick={stopClick}
          aria-label={`${getProblemLinkLabel(problem)} for ${problem.title}`}
        >
          <ExternalLink size={14} />
        </a>
      )}
    </article>
  )
}
