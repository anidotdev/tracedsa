import { Navigate, useParams } from 'react-router-dom'
import { CloudSidebar } from '../components/cloud/CloudSidebar'
import { CloudLesson } from '../components/cloud/CloudLesson'
import { cloudChapters, cloudLessons } from '../data/cloud'

export function CloudPage() {
  const { chapterSlug, '*': lessonSlug } = useParams()

  const chapter = cloudChapters.find(
    (item) => item.slug === chapterSlug,
  )

  if (!chapter) {
    return <Navigate to="/cloud" replace />
  }

  const activeSlug = lessonSlug || chapter.lessons[0]?.slug

  const lesson = cloudLessons.find(
    (item) => item.chapterNumber === chapter.number && item.slug === activeSlug,
  )

  if (!lesson) {
    return <Navigate to={`/cloud/${chapter.slug}`} replace />
  }

  return (
    <section className="page cloud-page">
      <CloudSidebar activeSlug={lesson.slug} />
      <CloudLesson lesson={lesson} />
    </section>
  )
}
