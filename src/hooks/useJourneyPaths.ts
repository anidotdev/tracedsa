import { useLayoutEffect, useState, type RefObject } from 'react'
import { getProblemStatus, getProblemsForTopic, getTopicStatus } from '../lib/progress'
import { problems, topics } from '../data/curriculum'

type GraphPath = { d: string; kind: 'complete' | 'current' | 'locked' }
type Point = { left: number; right: number; top: number; bottom: number; cx: number; cy: number }

function getPoint(element: HTMLElement, root: DOMRect): Point {
  const rect = element.getBoundingClientRect()
  return {
    left: rect.left - root.left,
    right: rect.right - root.left,
    top: rect.top - root.top,
    bottom: rect.bottom - root.top,
    cx: rect.left - root.left + rect.width / 2,
    cy: rect.top - root.top + rect.height / 2,
  }
}

function curve(a: Point, b: Point, compact = false) {
  const horizontal = Math.abs(b.cx - a.cx) >= Math.abs(b.cy - a.cy)
  if (horizontal) {
    const bend = compact ? 24 : 70
    return `M ${a.right} ${a.cy} C ${a.right + bend} ${a.cy}, ${b.left - bend} ${b.cy}, ${b.left} ${b.cy}`
  }
  const bend = compact ? 18 : 46
  return `M ${a.cx} ${a.bottom} C ${a.cx} ${a.bottom + bend}, ${b.cx} ${b.top - bend}, ${b.cx} ${b.top}`
}

export function useJourneyPaths(rootRef: RefObject<HTMLElement | null>, solved: Set<string>) {
  const [paths, setPaths] = useState<GraphPath[]>([])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const measure = () => {
      const graphRect = root.getBoundingClientRect()
      if (!graphRect.width || !graphRect.height) return

      const topicElements = Array.from(root.querySelectorAll<HTMLElement>('[data-topic-id]'))
      const pointFor = (selector: string) => {
        const el = root.querySelector<HTMLElement>(selector)
        return el ? getPoint(el, graphRect) : null
      }

      const next: GraphPath[] = []

      for (let i = 0; i < topics.length - 1; i += 1) {
        const a = pointFor(`[data-topic-id="${topics[i].id}"]`)
        const b = pointFor(`[data-topic-id="${topics[i + 1].id}"]`)
        if (!a || !b) continue
        const fromState = getTopicStatus(topics[i], topics, problems, solved)
        const toState = getTopicStatus(topics[i + 1], topics, problems, solved)
        next.push({
          d: curve(a, b),
          kind: fromState === 'COMPLETED' && toState !== 'LOCKED' ? 'complete' : toState === 'CURRENT' ? 'current' : 'locked',
        })
      }

      for (const topic of topics) {
        const topicPoint = pointFor(`[data-topic-id="${topic.id}"]`)
        const firstProblem = getProblemsForTopic(problems, topic.id)[0]
        const problemPoint = firstProblem ? pointFor(`[data-problem-id="${firstProblem.id}"]`) : null
        if (!topicPoint || !problemPoint) continue
        const state = getTopicStatus(topic, topics, problems, solved)
        next.push({ d: curve(topicPoint, problemPoint, true), kind: state === 'COMPLETED' ? 'complete' : state === 'CURRENT' ? 'current' : 'locked' })
      }

      for (const topic of topics) {
        const topicProblems = getProblemsForTopic(problems, topic.id)
        for (let i = 0; i < topicProblems.length - 1; i += 1) {
          const a = pointFor(`[data-problem-id="${topicProblems[i].id}"]`)
          const b = pointFor(`[data-problem-id="${topicProblems[i + 1].id}"]`)
          if (!a || !b) continue
          const fromState = getProblemStatus(topicProblems[i], problems, solved)
          const toState = getProblemStatus(topicProblems[i + 1], problems, solved)
          next.push({ d: curve(a, b, true), kind: fromState === 'COMPLETED' && toState !== 'LOCKED' ? 'complete' : toState === 'CURRENT' ? 'current' : 'locked' })
        }
      }

      if (topicElements.length) setPaths(next)
    }

    measure()
    const frame = requestAnimationFrame(measure)
    window.addEventListener('resize', measure)
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', measure)
      observer.disconnect()
    }
  }, [rootRef, solved])

  return paths
}
