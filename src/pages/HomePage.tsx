import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems, topics } from '../data/curriculum'
import { getCurrentProblem, getCurrentTopic, getTopicStatus } from '../lib/progress'

export function HomePage({ solved }: { solved: Set<string> }) {
  const currentTopic = getCurrentTopic(topics, problems, solved)
  const currentProblem = getCurrentProblem(currentTopic, problems, solved)
  const completedTopics = topics.filter((topic) => getTopicStatus(topic, topics, problems, solved) === 'COMPLETED').length

  return (
    <section className="home-page">
      <div className="hero-shell">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <span className="hero-kicker mono">DSA, WITHOUT THE GUESSWORK.</span>
          <h1>Stop choosing what to solve.<br /><span>Follow the path.</span></h1>
          <p className="hero-lead">A dependency-driven DSA curriculum that unlocks one required problem at a time. Know where you are, what you've finished, and exactly what comes next.</p>
          <div className="hero-actions">
            <Link className="button button-accent" to="/journey">Start the journey <ArrowRight size={15} /></Link>
            <Link className="button button-outline" to="/problems">See the curriculum <ArrowUpRight size={14} /></Link>
          </div>
        </div>
        <div className="hero-note"><span className="mono">THE IDEA</span><p>Less browsing.<br />More solving.<br />One clear next step.</p></div>
        <div className="hero-foot"><span className="mono">BUILT AROUND DEPENDENCIES</span><span className="mono"><strong>{solved.size}</strong> / {problems.length} problems solved</span></div>
      </div>

      <section className="home-section">
        <div className="section-intro"><span className="mono section-kicker">HOW IT WORKS</span><h2>The system narrows the path for you.</h2><p>You don't get a giant problem bank and a blank search box. Your progress determines what unlocks next.</p></div>
        <div className="principle-list">
          <div className="principle"><span className="principle-no mono">01</span><div><h3>Follow dependencies</h3><p>Topics unlock in order. Problems inside a topic unlock one required step at a time.</p></div></div>
          <div className="principle"><span className="principle-no mono">02</span><div><h3>Solve the current step</h3><p>There is one next required problem. Locked problems stay visible, but they stay out of reach until earned.</p></div></div>
          <div className="principle"><span className="principle-no mono">03</span><div><h3>Keep moving forward</h3><p>Complete a topic and the next dependency opens. Your journey is always derived from what you've solved.</p></div></div>
        </div>
      </section>

      <section className="home-section home-snapshot">
        <div className="snapshot-copy"><span className="mono section-kicker">YOUR NEXT MOVE</span><h2>{currentProblem ? currentProblem.title : 'The journey is complete.'}</h2><p>{currentProblem ? `${currentTopic?.title} is your current topic. Open the problem, solve it, then mark it complete to move the graph forward.` : 'Every required problem is complete.'}</p>{currentProblem && <Link className="text-link" to={`/topic/${currentTopic!.slug}?problem=${currentProblem.id}`}>Open the next problem <ArrowUpRight size={13} /></Link>}</div>
        <div className="snapshot-stats"><div><span className="mono">PROBLEMS</span><strong>{solved.size}<small>/ {problems.length}</small></strong></div><div><span className="mono">TOPICS</span><strong>{completedTopics}<small>/ {topics.length}</small></strong></div></div>
      </section>
    </section>
  )
}
