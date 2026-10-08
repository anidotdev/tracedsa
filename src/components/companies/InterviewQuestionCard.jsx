function ReportMeta({ report }) {
  return (
    <div className="interview-report-meta">
      <span>{report.difficulty}</span>
      <span>{report.topic}</span>
      <span>{report.round}</span>
      <span>{report.interviewYear}</span>
    </div>
  )
}

export function InterviewQuestionCard({ question }) {
  const firstReport = question.reports[0]
  const reportCount = question.reports.length

  return (
    <article className="interview-question-card">
      <div className="interview-question-top">
        <span className="mono">{question.canonicalId}</span>
        {reportCount > 1 && (
          <span className="mono interview-repeat">REPORTED {reportCount}×</span>
        )}
      </div>

      <h2>{question.question}</h2>

      <div className="interview-question-details">
        <div>
          <span className="mono">TECHNIQUE</span>
          <strong>{question.technique}</strong>
        </div>

        <div>
          <span className="mono">TOPIC</span>
          <strong>{question.topic}</strong>
        </div>
      </div>

      <div className="interview-question-footer">
        <ReportMeta report={firstReport} />
        <span className="interview-source">REPORTED QUESTION</span>
      </div>
    </article>
  )
}
