import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems, topics } from '../data/curriculum'
import { getProblemsForTopic, getTopicProgress, getTopicStatus } from '../lib/progress'
import { ProblemBox } from '../components/problems/ProblemBox'

export function ProblemsPage({ solved, onSolved }: { solved: Set<string>; onSolved: (problem: import('../types/domain').Problem) => void }) {
  const [openTopic, setOpenTopic] = useState<string | null>(null)
  return (
    <section className="page list-page problems-page">
      <div className="page-title-row"><div><span className="mono section-kicker">CURRICULUM</span><h1>Problems</h1><p className="lead">Open a topic to see its sequence. Locked steps remain visible without turning this page into a wall of problems.</p></div><span className="mono page-count">{solved.size} / {problems.length} SOLVED</span></div>
      <div className="topic-accordion">
        {topics.map((topic, index) => {
          const isOpen = openTopic === topic.id
          const state = getTopicStatus(topic, topics, problems, solved)
          const progress = getTopicProgress(topic, problems, solved)
          return (
            <section key={topic.id} className={`topic-accordion-item ${isOpen ? 'open' : ''} state-${state.toLowerCase()}`}>
              <button className="topic-accordion-trigger" onClick={() => setOpenTopic(isOpen ? null : topic.id)} aria-expanded={isOpen}>
                <span className="topic-accordion-no mono">{String(index + 1).padStart(2, '0')}</span><span className="topic-accordion-main"><strong>{topic.title}</strong><small>{topic.description}</small></span><span className="topic-accordion-progress mono">{progress.solved} / {progress.total}</span><ChevronDown size={17} className={`accordion-chevron ${isOpen ? 'rotated' : ''}`} />
              </button>
              {isOpen && <div className="topic-accordion-content">{getProblemsForTopic(problems, topic.id).map((problem, problemIndex) => <ProblemBox key={problem.id} index={problemIndex + 1} problem={problem} solved={solved} selected={false} onSolved={onSolved} topicLocked={state === 'LOCKED'} />)}<Link className="topic-open-link" to={`/topic/${topic.slug}`}>Open full topic <span aria-hidden="true">↗</span></Link></div>}
            </section>
          )
        })}
      </div>
    </section>
  )
}

