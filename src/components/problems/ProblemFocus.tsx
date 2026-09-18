import { ArrowUpRight, Check } from 'lucide-react'
import type { Problem, NodeState } from '../../types/domain'
import { getProblemLinkLabel } from '../../lib/problemLinks'

export function ProblemFocus({ problem, status, onSolved }: { problem: Problem; status: NodeState; onSolved: (problem: Problem) => void }) {
  return (
    <div className="focus-block">
      <span className={`mono focus-status state-text-${status.toLowerCase()}`}>{status}</span>
      <h2>{problem.title}</h2>
      <div className="focus-meta mono">{problem.difficulty} · {problem.platform} · REQUIRED</div>
      <p>{status === 'LOCKED' ? 'The preceding required work needs to be complete before this problem opens.' : status === 'COMPLETED' ? 'Completed. Your progression state is stored and this node is behind you.' : 'This is the next required step in the sequence.'}</p>
      <div className="focus-actions">
        {status === 'CURRENT' && <button className="button button-accent" onClick={() => onSolved(problem)}>Mark as solved <Check size={13} /></button>}
        {status !== 'LOCKED' && <a className="button button-outline" href={problem.url} target="_blank" rel="noreferrer">{getProblemLinkLabel(problem)} <ArrowUpRight size={13} /></a>}
      </div>
    </div>
  )
}
