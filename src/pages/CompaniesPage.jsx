import { companies } from '../data/interviews'
import { CompanyCard } from '../components/companies/CompanyCard'

export function CompaniesPage() {
  return (
    <section className="page">
      <div className="companies-header">
        <span className="mono section-kicker">INTERVIEW INTELLIGENCE</span>
        <h1>
          Companies.
          <br />
          <span>Actual questions.</span>
        </h1>
        <p className="lead">
          Reported DSA questions collected from interview experiences. Pick a
          company to see what candidates were actually asked.
        </p>
      </div>

      <div className="companies-directory-head">
        <span className="mono">COMPANIES</span>
        <span className="mono">{companies.length} COMPANIES</span>
      </div>

      <div className="companies-grid">
        {companies.map((company) => (
          <CompanyCard key={company.slug} company={company} />
        ))}
      </div>
    </section>
  )
}
