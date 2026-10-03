import { Check, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems, topics } from '../../data/curriculum'
import {
  getProblemStatus,
  getProblemsForTopic,
  getTopicProgress,
  getTopicStatus,
} from '../../lib/progress'
import { ProgressBar } from './ProgressBar'

export function GraphTopicLane({ topic, solved }) {
  const state = getTopicStatus(topic, topics, problems, solved)
  const progress = getTopicProgress(topic, problems, solved)
  const topicProblems = getProblemsForTopic(problems, topic.id)
  const laneClass = `graph-lane state-${state.toLowerCase()}`

  return (
    <div className={laneClass}>
      <Link
        to={`/topic/${topic.slug}`}
        className="graph-topic-card"
        data-topic-id={topic.id}
      >
        <div className="graph-topic-top">
          <span className="mono">{String(topic.order_index).padStart(2, '0')}</span>
        </div>
        <strong>{topic.title}</strong>
        <p>{topic.description}</p>
        <div className="graph-topic-meta">
          <span className="mono">{progress.solved} / {progress.total}</span>
          <span className="mono">{state}</span>
        </div>
        <ProgressBar topic={topic} solved={solved} />
      </Link>

      <div className="graph-problem-stack">
        {topicProblems.map((problem, index) => {
          let problemState = getProblemStatus(problem, problems, solved)

          if (state === 'LOCKED') {
            problemState = 'LOCKED'
          }

          let marker = <LockKeyhole size={11} />
          if (problemState === 'COMPLETED') {
            marker = <Check size={12} />
          } else if (problemState === 'CURRENT') {
            marker = <span className="current-marker" />
          }

          return (
            <Link
              key={problem.id}
              to={`/topic/${topic.slug}?problem=${problem.id}`}
              className={`graph-problem-card state-${problemState.toLowerCase()}`}
              data-problem-id={problem.id}
            >
              <span className="problem-marker">{marker}</span>
              <span className="graph-problem-copy">
                <strong>{problem.title}</strong>
                <small className="mono">{problem.difficulty} · {problem.platform}</small>
              </span>
              <span className="mono graph-problem-no">
                {String(index + 1).padStart(2, '0')}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
