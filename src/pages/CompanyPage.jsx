import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getCompanyBySlug, getCompanyQuestions } from '../data/interviews'
import { InterviewQuestionCard } from '../components/companies/InterviewQuestionCard'

export function CompanyPage() {
  const { companySlug } = useParams()
  const company = getCompanyBySlug(companySlug)
  const [logoFailed, setLogoFailed] = useState(false)

  if (!company) {
    return <Navigate to="/companies" replace />
  }

  const questions = getCompanyQuestions(company.slug)
  const uniqueCount = questions.length

  return (
    <section className="page company-page">
      <Link to="/companies" className="company-back-link mono">
        <ArrowLeft size={13} strokeWidth={1.5} />
        COMPANIES
      </Link>

      <header className="company-page-header">
        <div className="company-page-brand">
          <div className="company-page-logo">
            {logoFailed ? (
              <span>{company.name.slice(0, 1)}</span>
            ) : (
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                onError={() => setLogoFailed(true)}
              />
            )}
          </div>

          <div>
            <span className="mono section-kicker">COMPANY</span>
            <h1>{company.name}</h1>
            <p className="lead">
              {company.reportedQuestions} reported question rows · {uniqueCount}{' '}
              unique canonical questions in this dataset.
            </p>
          </div>
        </div>

        <div className="company-page-stats">
          <div>
            <span className="mono">REPORTED</span>
            <strong>{String(company.reportedQuestions).padStart(2, '0')}</strong>
          </div>
          <div>
            <span className="mono">UNIQUE</span>
            <strong>{String(uniqueCount).padStart(2, '0')}</strong>
          </div>
        </div>
      </header>

      <div className="company-questions-head">
        <div>
          <span className="mono">REPORTED QUESTIONS</span>
          <h2>What candidates were asked.</h2>
        </div>
        <span className="mono company-questions-note">PARTIAL EVIDENCE DATASET</span>
      </div>

      <div className="company-question-list">
        {questions.map((question) => (
          <InterviewQuestionCard key={question.canonicalId} question={question} />
        ))}
      </div>

      <Link className="text-link company-bottom-link" to="/companies">
        Browse another company <ArrowUpRight size={13} />
      </Link>
    </section>
  )
}
