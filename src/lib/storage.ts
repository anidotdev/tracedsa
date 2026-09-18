const SOLVED_KEY = 'dsa-journey:solved'
const XP_KEY = 'dsa-journey:xp'

export function loadSolved(): Set<string> {
  try {
    const parsed = JSON.parse(localStorage.getItem(SOLVED_KEY) ?? '[]')
    return new Set(Array.isArray(parsed) ? parsed : [])
  } catch {
    return new Set()
  }
}

export function saveSolved(ids: Set<string>) {
  localStorage.setItem(SOLVED_KEY, JSON.stringify([...ids]))
}

export function loadXp() {
  const value = Number(localStorage.getItem(XP_KEY))
  return Number.isFinite(value) && value > 0 ? value : 0
}

export function saveXp(xp: number) {
  localStorage.setItem(XP_KEY, String(xp))
}
