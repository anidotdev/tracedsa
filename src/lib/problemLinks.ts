import type { Problem } from '../types/domain'

export function getProblemLinkLabel(problem: Problem): string {
  if (problem.platform.toLowerCase().includes('big-o')) return 'Open Big-O Cheat Sheet'
  return `Open ${problem.platform}`
}

export function getProblemSourceMeta(problem: Problem): string {
  return `${problem.difficulty} · ${problem.platform}`
}
