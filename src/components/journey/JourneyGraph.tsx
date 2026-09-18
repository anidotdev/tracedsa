import { useRef } from 'react'
import { problems, topics } from '../../data/curriculum'
import { getCurrentTopic } from '../../lib/progress'
import { useJourneyPaths } from '../../hooks/useJourneyPaths'
import { useHorizontalLenis } from '../../hooks/useHorizontalLenis'
import { GraphTopicLane } from './GraphTopicLane'

export function JourneyGraph({ solved }: { solved: Set<string> }) {
  const graphViewportRef = useRef<HTMLDivElement | null>(null)
  const graphRef = useRef<HTMLDivElement | null>(null)
  useHorizontalLenis(graphViewportRef, graphRef)
  const paths = useJourneyPaths(graphRef, solved)
  const currentTopic = getCurrentTopic(topics, problems, solved)

  return (
    <section className="graph-section">
      <div className="graph-section-head">
        <div><span className="mono section-kicker">THE PATH</span><h2>{currentTopic ? `You're in ${currentTopic.title}.` : 'The path is complete.'}</h2></div>
        <span className="mono graph-hint">SWIPE SIDEWAYS TO EXPLORE</span>
      </div>
      <div className="graph-viewport" ref={graphViewportRef}>
        <div className="graph-canvas" ref={graphRef}>
          <svg className="graph-svg" aria-hidden="true" focusable="false">
            {paths.map((path, index) => <path key={`${path.d}-${index}`} className={`graph-path ${path.kind}`} d={path.d} fill="none" />)}
          </svg>
          <div className="graph-board">
            {topics.map((topic) => <GraphTopicLane key={topic.id} topic={topic} solved={solved} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
