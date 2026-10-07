import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { CloudLessonLink } from './CloudLessonLink'

export function CloudChapter({ chapter, activeSlug }) {
  const hasActiveLesson = chapter.lessons.some((lesson) => lesson.slug === activeSlug)
  const [open, setOpen] = useState(hasActiveLesson)

  return (
    <section className={`cloud-chapter${open ? ' open' : ''}`}>
      <button
        type="button"
        className="cloud-chapter-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="cloud-chapter-title">
          <span className="mono">{chapter.number}</span>
          <strong>{chapter.title}</strong>
        </span>
        <ChevronDown aria-hidden="true" size={15} strokeWidth={1.5} />
      </button>

      <div className="cloud-lesson-list">
        {chapter.lessons.map((lesson) => (
          <CloudLessonLink
            key={lesson.slug}
            lesson={lesson}
            active={lesson.slug === activeSlug}
          />
        ))}
      </div>
    </section>
  )
}
