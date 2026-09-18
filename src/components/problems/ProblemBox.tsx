import { Check, ExternalLink, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems } from '../../data/curriculum'
import { getProblemLinkLabel } from '../../lib/problemLinks'
import { getProblemStatus } from '../../lib/progress'
import type { Problem } from '../../types/domain'

export function ProblemBox({ index, problem, solved, selected, onSolved, topicLocked }: { index: number; problem: Problem; solved: Set<string>; selected: boolean; onSolved: (problem: Problem) => void; topicLocked: boolean }) {
  const status = topicLocked ? 'LOCKED' : getProblemStatus(problem, problems, solved)
  return (
    <article className={`problem-box ${selected ? 'selected' : ''} state-${status.toLowerCase()}`}>
      <div className="problem-box-index mono">{String(index).padStart(2, '0')}</div>
      <div className="problem-box-copy">
        <Link to={`/topic/${problem.topic_id}?problem=${problem.id}`}><strong>{problem.title}</strong></Link>
        <span className="mono">{problem.difficulty} · {problem.platform}</span>
      </div>
      <div className="problem-box-status">
        {status === 'COMPLETED' && <Check size={15} />}
        {status === 'CURRENT' && <span className="current-marker" />}
        {status === 'LOCKED' && <LockKeyhole size={14} />}
      </div>
      {status === 'CURRENT' && <button className="button button-small" onClick={() => onSolved(problem)}>Mark solved</button>}
      {status !== 'LOCKED' && <a className="icon-link" href={problem.url} target="_blank" rel="noreferrer" aria-label={`${getProblemLinkLabel(problem)} for ${problem.title}`}><ExternalLink size={14} /></a>}
    </article>
  )
}
