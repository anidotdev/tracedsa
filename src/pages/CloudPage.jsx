import { Navigate, useParams } from 'react-router-dom'
import { CloudSidebar } from '../components/cloud/CloudSidebar'
import { CloudLesson } from '../components/cloud/CloudLesson'
import { cloudLessons } from '../data/cloud'

export function CloudPage() {
  const { '*': lessonSlug } = useParams()
  const activeSlug = lessonSlug || cloudLessons[0]?.slug
  const lesson = cloudLessons.find((item) => item.slug === activeSlug)

  if (!lesson) {
    return <Navigate to={`/cloud/${cloudLessons[0].slug}`} replace />
  }

  return (
    <section className="page cloud-page">
      <CloudSidebar activeSlug={lesson.slug} />
      <CloudLesson lesson={lesson} />
    </section>
  )
}
