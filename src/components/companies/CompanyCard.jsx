import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function CompanyCard({ company }) {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <Link to={`/companies/${company.slug}`} className="company-card">
      <div className="company-card-top">
        <span className="mono company-card-count">
          {String(company.reportedQuestions).padStart(2, '0')} REPORTED
        </span>
        <ArrowUpRight
          size={17}
          strokeWidth={1.5}
          className="company-card-arrow"
        />
      </div>

      <div className="company-logo-wrap">
        {logoFailed ? (
          <span className="company-logo-fallback">
            {company.name.slice(0, 1)}
          </span>
        ) : (
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="company-logo"
            loading="lazy"
            decoding="async"
            onError={() => setLogoFailed(true)}
          />
        )}
      </div>

      <div className="company-card-bottom">
        <h2>{company.name}</h2>
        <span className="mono">VIEW REPORTED QUESTIONS</span>
      </div>
    </Link>
  )
}
