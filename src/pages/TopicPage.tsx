import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { problems, topics } from '../data/curriculum'
import { getCurrentProblem, getProblemStatus, getProblemsForTopic, getTopicProgress, getTopicStatus } from '../lib/progress'
import { ProgressBar } from '../components/journey/ProgressBar'
import { ProblemBox } from '../components/problems/ProblemBox'
import { ProblemFocus } from '../components/problems/ProblemFocus'
import { ResourcesForTopic } from '../components/resources/ResourcesForTopic'
import type { Problem } from '../types/domain'

export function TopicPage({ solved, onSolved }: { solved: Set<string>; onSolved: (problem: Problem) => void }) {
  const { pathname, search } = useLocation()
  const slug = pathname.split('/').pop() ?? ''
  const topic = topics.find((item) => item.slug === slug) ?? topics[0]
  const selectedProblemId = new URLSearchParams(search).get('problem')
  const topicProblems = getProblemsForTopic(problems, topic.id)
  const currentProblem = getCurrentProblem(topic, problems, solved)
  const selected = useMemo(() => topicProblems.find((problem) => problem.id === selectedProblemId) ?? currentProblem ?? topicProblems[0], [topicProblems, selectedProblemId, currentProblem])
  const state = getTopicStatus(topic, topics, problems, solved)
  const progress = getTopicProgress(topic, problems, solved)

  return (
    <section className="page detail-page">
      <Link to="/journey" className="back-link mono">← JOURNEY</Link>
      <div className="detail-head"><div><span className={`topic-state mono state-text-${state.toLowerCase()}`}>{state}</span><h1>{topic.title}</h1><p className="lead">{topic.description}</p></div><div className="detail-progress"><span className="mono">{progress.solved} / {progress.total} SOLVED</span><ProgressBar topic={topic} solved={solved} /></div></div>
      <div className="detail-body">
        <section className="topic-problems-panel"><div className="panel-head"><span className="mono">PROBLEMS IN THIS TOPIC</span><span className="mono">{topicProblems.length} TOTAL</span></div><div className="topic-problem-stack">{topicProblems.map((problem, index) => <ProblemBox key={problem.id} index={index + 1} problem={problem} solved={solved} selected={selected?.id === problem.id} onSolved={onSolved} topicLocked={state === 'LOCKED'} />)}</div></section>
        <aside className="problem-side"><div className="panel-head"><span className="mono">CURRENT SELECTION</span></div>{selected && <ProblemFocus problem={selected} status={state === 'LOCKED' ? 'LOCKED' : getProblemStatus(selected, problems, solved)} onSolved={onSolved} />}<ResourcesForTopic topic={topic} /></aside>
      </div>
    </section>
  )
}
