import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resources, topics } from '../data/curriculum'

export function ResourcesPage() {
  return (
    <section className="page list-page">
      <div className="page-title-row"><div><span className="mono section-kicker">REFERENCE SHELF</span><h1>Resources</h1><p className="lead">Curated notes, videos, articles and references attached to the curriculum.</p></div><span className="mono page-count">{resources.length} RESOURCES</span></div>
      <div className="resource-directory">{topics.filter((topic) => resources.some((item) => item.topic_id === topic.id)).map((topic) => <section className="resource-group" key={topic.id}><div className="group-heading"><Link to={`/topic/${topic.slug}`}>{topic.title}</Link><span className="mono">{resources.filter((item) => item.topic_id === topic.id).length}</span></div><div className="resource-directory-list">{resources.filter((item) => item.topic_id === topic.id).map((item) => <a className="resource-list-row" key={item.id} href={item.url} target="_blank" rel="noreferrer"><span className="mono">{item.type}</span><span><strong>{item.title}</strong><small>{item.source}</small></span><ArrowUpRight size={13} /></a>)}</div></section>)}</div>
    </section>
  )
}
