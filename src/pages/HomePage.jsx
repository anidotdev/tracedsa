import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problems, topics } from '../data/curriculum'
import { cloudLessons } from '../data/cloud'
import {
  getCurrentProblem,
  getCurrentTopic,
  getTopicStatus,
} from '../lib/progress'

export function HomePage({ solved }) {
  const currentTopic = getCurrentTopic(topics, problems, solved)
  const currentProblem = getCurrentProblem(currentTopic, problems, solved)

  let completedTopics = 0

  for (const topic of topics) {
    const status = getTopicStatus(topic, topics, problems, solved)

    if (status === 'COMPLETED') {
      completedTopics += 1
    }
  }

  return (
    <section className="home-page">
      <div className="hero-shell">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <span className="hero-kicker mono">
            TECHNICAL LEARNING, WITHOUT THE GUESSWORK.
          </span>

          <h1>
            Stop randomly
            <br />
            learning <span className="hero-accent">cloud</span>.
          </h1>

          <p className="hero-lead">
            Structured learning paths for Cloud and DSA. Learn what you need,
            understand where you are, and know what to work on next.
          </p>

          <div className="hero-actions">
            <Link
              className="button button-accent"
              to="/cloud"
            >
              Start Cloud <ArrowRight size={15} />
            </Link>

            <Link
              className="button button-outline"
              to="/journey"
            >
              Explore DSA <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="hero-note">
          <span className="mono">THE IDEA</span>

          <p>
            Less browsing.
            <br />
            More learning.
            <br />
            One clear next step.
          </p>
        </div>

        <div className="hero-foot">
          <span className="mono">
            CLOUD IS THE MAIN PATH
          </span>

          <span className="mono">
            <strong>{cloudLessons.length}</strong> lessons ·{' '}
            <strong>{problems.length}</strong> DSA problems
          </span>
        </div>
      </div>

      <section className="home-section">
        <div className="section-intro">
          <span className="mono section-kicker">
            THE CLOUD PATH
          </span>

          <h2>
            Cloud is easier when the concepts come in the right order.
          </h2>

          <p>
            TRACE takes you from the fundamentals of servers and data centers
            to networking, infrastructure, deployment, and architecture
            without making you figure out what to learn next.
          </p>
        </div>

        <div className="principle-list">
          <div className="principle">
            <span className="principle-no mono">01</span>

            <div>
              <h3>Build the foundation</h3>

              <p>
                Start with servers, data centers, cloud computing,
                virtualization, and the infrastructure underneath everything
                else.
              </p>

              <Link className="text-link" to="/cloud">
                Start the Cloud course <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          <div className="principle">
            <span className="principle-no mono">02</span>

            <div>
              <h3>Understand the infrastructure</h3>

              <p>
                Move into networking, compute, storage, databases, containers,
                security, scaling, and the systems that make applications work.
              </p>
            </div>
          </div>

          <div className="principle">
            <span className="principle-no mono">03</span>

            <div>
              <h3>Build the system</h3>

              <p>
                Eventually connect everything through deployment,
                observability, reliability, and cloud architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-snapshot">
        <div className="snapshot-copy">
          <span className="mono section-kicker">
            START HERE
          </span>

          <h2>
            What Is a Server?
          </h2>

          <p>
            Start with the machine that actually does the work behind a
            service. Then move through data centers, cloud computing,
            virtualization, and the rest of the infrastructure stack.
          </p>

          <Link
            className="text-link"
            to="/cloud/what-is-a-server"
          >
            Start the first lesson <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="snapshot-stats">
          <div>
            <span className="mono">CLOUD LESSONS</span>

            <strong>
              {cloudLessons.length}
            </strong>
          </div>

          <div>
            <span className="mono">CLOUD PATH</span>

            <strong>
              01
              <small> chapter</small>
            </strong>
          </div>

          <div>
            <span className="mono">OTHER PATH</span>

            <strong>
              DSA
            </strong>
          </div>
        </div>
      </section>
    </section>
  )
}
