import { problems } from '../../data/curriculum'
import { getTopicProgress } from '../../lib/progress'

export function ProgressBar({ topic, solved }) {
  const progress = getTopicProgress(topic, problems, solved)
  const value = progress.total ? (progress.solved / progress.total) * 100 : 0
  return <div className="progress-line" aria-label={`${progress.solved} of ${progress.total} solved`}><span style={{ width: `${value}%` }} /></div>
}
