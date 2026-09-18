import { ArrowUpRight } from 'lucide-react'
import { resources } from '../../data/curriculum'
import type { Topic } from '../../types/domain'

export function ResourcesForTopic({ topic }: { topic: Topic }) {
  const items = resources.filter((item) => item.topic_id === topic.id)
  return (
    <div className="aside-resources">
      <div className="panel-head"><span className="mono">LEARN</span></div>
      {items.length ? items.map((item) => (
        <a key={item.id} className="resource-row" href={item.url} target="_blank" rel="noreferrer">
          <span><small className="mono">{item.type}</small><strong>{item.title}</strong><small>{item.source}</small></span>
          <ArrowUpRight size={13} />
        </a>
      )) : <p className="faint">No resources seeded for this topic yet.</p>}
    </div>
  )
}
