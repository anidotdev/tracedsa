import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems, topics } from '../data/curriculum'
import { getCurrentProblem, getCurrentTopic, getTopicProgress } from '../lib/progress'
import { ProgressBar } from '../components/journey/ProgressBar'
import { JourneyGraph } from '../components/journey/JourneyGraph'

export function JourneyPage({ solved }: { solved: Set<string> }) {
  const currentTopic = getCurrentTopic(topics, problems, solved)
  const currentProblem = getCurrentProblem(currentTopic, problems, solved)
  const topicProgress = currentTopic ? getTopicProgress(currentTopic, problems, solved) : null
  return (
    <section className="page journey-page">
      <div className="journey-topline"><div><span className="mono section-kicker">YOUR JOURNEY</span><h1>Keep moving.</h1><p className="lead">Every node is a dependency. Completed work opens the next required step.</p></div><div className="journey-totals"><strong>{solved.size}<span>/ {problems.length}</span></strong><span className="mono">PROBLEMS SOLVED</span></div></div>
      <section className="focus-strip">
        <div><span className="mono">CURRENT TOPIC</span><strong>{currentTopic?.title ?? 'Complete'}</strong><p>{currentTopic?.description ?? 'Every required step is complete.'}</p></div>
        <div><span className="mono">NEXT PROBLEM</span><strong>{currentProblem?.title ?? '—'}</strong><p>{currentProblem ? `${currentProblem.difficulty} · ${currentProblem.platform}` : 'No remaining required problems.'}</p></div>
        <div className="focus-progress"><span className="mono">TOPIC PROGRESS</span><strong>{topicProgress ? `${topicProgress.solved} / ${topicProgress.total}` : '—'}</strong>{currentTopic && <ProgressBar topic={currentTopic} solved={solved} />}{currentProblem && <Link className="text-link" to={`/topic/${currentTopic!.slug}?problem=${currentProblem.id}`}>Open next <ArrowUpRight size={13} /></Link>}</div>
      </section>
      <JourneyGraph solved={solved} />
    </section>
  )
}
