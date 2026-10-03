const SOLVED_KEY = 'dsa-journey:solved'
const XP_KEY = 'dsa-journey:xp'

export function loadSolved() {
  try {
    const value = localStorage.getItem(SOLVED_KEY)
    const parsed = JSON.parse(value || '[]')

    if (Array.isArray(parsed)) {
      return new Set(parsed)
    }
  } catch {
    return new Set()
  }

  return new Set()
}

export function saveSolved(ids) {
  localStorage.setItem(SOLVED_KEY, JSON.stringify([...ids]))
}

export function loadXp() {
  const value = Number(localStorage.getItem(XP_KEY))

  if (Number.isFinite(value) && value > 0) {
    return value
  }

  return 0
}

export function saveXp(xp) {
  localStorage.setItem(XP_KEY, String(xp))
}
