import { CloudMarkdown } from './CloudMarkdown'

export function CloudLesson({ lesson }) {
  return (
    <article className="cloud-lesson">
      <header className="cloud-lesson-header">
        <span className="mono section-kicker">{lesson.chapterNumber} / {lesson.chapterTitle}</span>
        <div className="cloud-lesson-title-row">
          <span className="cloud-lesson-number mono">{lesson.number}</span>
          <h1>{lesson.title}</h1>
        </div>
        <p className="lead">{lesson.description}</p>
      </header>

      <CloudMarkdown content={lesson.content} />
    </article>
  )
}
