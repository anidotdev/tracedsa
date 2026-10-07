import { Link } from 'react-router-dom'

export function CloudLessonLink({ lesson, chapter, active }) {
  return (
    <Link
      to={`/cloud/${chapter.slug}/${lesson.slug}`}
      className={`cloud-lesson-link${active ? ' active' : ''}`}
    >
      <span className="mono">{lesson.number}</span>
      <span>{lesson.title}</span>
    </Link>
  )
}
