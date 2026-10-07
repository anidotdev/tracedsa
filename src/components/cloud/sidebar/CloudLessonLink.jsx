import { Link } from 'react-router-dom'

export function CloudLessonLink({ lesson, active }) {
  return (
    <Link
      to={`/cloud/${lesson.slug}`}
      className={`cloud-lesson-link${active ? ' active' : ''}`}
    >
      <span className="mono">{lesson.number}</span>
      <span>{lesson.title}</span>
    </Link>
  )
}
