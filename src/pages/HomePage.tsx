import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems, topics } from '../data/curriculum'
import { getCurrentProblem, getCurrentTopic, getTopicStatus } from '../lib/progress'

export function HomePage({ solved }: { solved: Set<string> }) {
  const currentTopic = getCurrentTopic(topics, problems, solved)
  const currentProblem = getCurrentProblem(currentTopic, problems, solved)
  const completedTopics = topics.filter(
    (topic) => getTopicStatus(topic, topics, problems, solved) === 'COMPLETED'
  ).length

  return (
    <section className="home-page">
      <div className="hero-shell">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <span className="hero-kicker mono">DSA, WITHOUT THE “WHAT NOW?”</span>

          <h1>
            No Guessing.
            <br />
            <span>Just Solving.</span>
          </h1>

          <p className="hero-lead">
            No giant problem list. No picking something random because it
            looks easy. TRACE gives you a proper path through DSA, one problem
            at a time, so you always know what to work on next.
          </p>

          <div className="hero-actions">
            <Link className="button button-accent" to="/journey">
              Start the journey <ArrowRight size={15} />
            </Link>

            <Link className="button button-outline" to="/problems">
              See the curriculum <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="hero-note">
          <span className="mono">THE IDEA</span>
          <p>
            No random problems.
            <br />
            No “what should I solve?”
          </p>
        </div>

        <div className="hero-foot">
          <span className="mono">BUILT AROUND DEPENDENCIES</span>

          <span className="mono">
            <strong>{solved.size}</strong> / {problems.length} problems solved
          </span>
        </div>
      </div>

      <section className="home-section">
        <div className="section-intro">
          <span className="mono section-kicker">HOW IT WORKS</span>

          <h2>You don't need another giant DSA sheet.</h2>

          <p>
            Most of the time, the hard part isn't finding a problem. It's
            figuring out which one you should be doing in the first place.
            TRACE handles that part.
          </p>
        </div>

        <div className="principle-list">
          <div className="principle">
            <span className="principle-no mono">01</span>

            <div>
              <h3>Follow the path</h3>
              <p>
                Topics unlock when you're ready for them, and problems unlock
                in the order they're meant to be learned.
              </p>
            </div>
          </div>

          <div className="principle">
            <span className="principle-no mono">02</span>

            <div>
              <h3>Solve what's next</h3>
              <p>
                You get one required problem at a time. So instead of staring
                at 200 tabs, you already know where to go.
              </p>
            </div>
          </div>

          <div className="principle">
            <span className="principle-no mono">03</span>

            <div>
              <h3>Keep moving</h3>
              <p>
                Solve it, mark it done, and the next step opens up. That's
                pretty much the whole loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-snapshot">
        <div className="snapshot-copy">
          <span className="mono section-kicker">UP NEXT</span>

          <h2>
            {currentProblem
              ? currentProblem.title
              : 'You actually finished the whole thing.'}
          </h2>

          <p>
            {currentProblem
              ? `${currentTopic?.title} is where you're at right now. Go solve this one, mark it complete, and keep it moving.`
              : 'Every required problem is done. Touch grass.'}
          </p>

          {currentProblem && (
            <Link
              className="text-link"
              to={`/topic/${currentTopic!.slug}?problem=${currentProblem.id}`}
            >
              Open the next problem <ArrowUpRight size={13} />
            </Link>
          )}
        </div>

        <div className="snapshot-stats">
          <div>
            <span className="mono">PROBLEMS</span>
            <strong>
              {solved.size}
              <small>/ {problems.length}</small>
            </strong>
          </div>

          <div>
            <span className="mono">TOPICS</span>
            <strong>
              {completedTopics}
              <small>/ {topics.length}</small>
            </strong>
          </div>
        </div>
      </section>
    </section>
  )
}
