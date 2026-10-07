import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cloudChapters } from '../data/cloud'

export function CloudIndexPage() {
  return (
    <section className="page cloud-index-page">
      <div className="cloud-index-header">
        <span className="mono section-kicker">CLOUD PATH</span>

        <h1>
          Learn cloud
          <br />
          <span>from the ground up.</span>
        </h1>

        <p className="lead">
          A structured Cloud course that starts with the fundamentals and
          gradually builds toward networking, infrastructure, deployment,
          reliability, and architecture.
        </p>
      </div>

      <div className="cloud-index-course">
        <div className="cloud-index-course-head">
          <span className="mono">COURSE</span>
          <span className="mono">{cloudChapters.length} CHAPTERS</span>
        </div>

        <div className="cloud-index-chapters">
          {cloudChapters.map((chapter) => (
            <Link
              key={chapter.number}
              to={`/cloud/${chapter.slug}`}
              className="cloud-index-chapter"
            >
              <div className="cloud-index-chapter-number mono">
                {chapter.number}
              </div>

              <div className="cloud-index-chapter-content">
                <div className="cloud-index-chapter-title">
                  {chapter.title}
                </div>

                <p>{chapter.description}</p>

                <span className="cloud-index-chapter-meta mono">
                  {chapter.lessons.length} lessons
                </span>
              </div>

              <ArrowRight
                className="cloud-index-chapter-arrow"
                size={18}
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
