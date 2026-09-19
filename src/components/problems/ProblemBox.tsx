import type { KeyboardEvent } from 'react'
import { Check, ExternalLink, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems } from '../../data/curriculum'
import { getProblemLinkLabel } from '../../lib/problemLinks'
import { getProblemStatus } from '../../lib/progress'
import type { Problem } from '../../types/domain'

type ProblemBoxProps = {
  index: number
  problem: Problem
  solved: Set<string>
  selected: boolean
  onSolved: (problem: Problem) => void
  topicLocked: boolean
  onSelect?: (problem: Problem) => void
}

export function ProblemBox({
  index,
  problem,
  solved,
  selected,
  onSolved,
  topicLocked,
  onSelect,
}: ProblemBoxProps) {
  const status = topicLocked ? 'LOCKED' : getProblemStatus(problem, problems, solved)
  const selectable = Boolean(onSelect)

  const handleSelect = () => {
    onSelect?.(problem)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!selectable || (event.key !== 'Enter' && event.key !== ' ')) return
    event.preventDefault()
    handleSelect()
  }

  return (
    <article
      className={`problem-box ${selected ? 'selected' : ''} state-${status.toLowerCase()} ${selectable ? 'is-selectable' : ''}`}
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
          <Link to={`/topic/${problem.topic_id}?problem=${problem.id}`} onClick={(event) => event.stopPropagation()}>
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
        <button
          className="button button-small"
          onClick={(event) => { event.stopPropagation(); onSolved(problem) }}
        >
          Mark solved
        </button>
      )}
      {status !== 'LOCKED' && (
        <a
          className="icon-link"
          href={problem.url}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          aria-label={`${getProblemLinkLabel(problem)} for ${problem.title}`}
        >
          <ExternalLink size={14} />
        </a>
      )}
    </article>
  )
}
