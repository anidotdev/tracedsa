export function getProblemLinkLabel(problem) {
  if (problem.platform.toLowerCase().includes('big-o')) {
    return 'Open Big-O Cheat Sheet'
  }

  return `Open ${problem.platform}`
}
