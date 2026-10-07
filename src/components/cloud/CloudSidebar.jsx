import { CloudChapter } from './sidebar/CloudChapter'
import { cloudChapters } from '../../data/cloud'

export function CloudSidebar({ activeSlug }) {
  return (
    <aside className="cloud-sidebar">
      <div className="cloud-sidebar-inner">
        <div className="cloud-sidebar-head">
          <span className="mono section-kicker">CLOUD PATH</span>
          <strong>COURSE</strong>
        </div>

        <div className="cloud-chapter-list">
          {cloudChapters.map((chapter) => (
            <CloudChapter key={chapter.number} chapter={chapter} activeSlug={activeSlug} />
          ))}
        </div>
      </div>
    </aside>
  )
}
