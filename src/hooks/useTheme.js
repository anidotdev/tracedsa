import { useEffect, useState } from 'react'

const THEME_KEY = 'trace:theme'
const DEFAULT_THEME = 'dark'

function getStoredTheme() {
  if (typeof window === 'undefined') return DEFAULT_THEME
  const stored = window.localStorage.getItem(THEME_KEY)
  return stored === 'light' || stored === 'dark' ? stored : DEFAULT_THEME
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  const themeColor = document.querySelector('meta[name="theme-color"]')
  if (themeColor) themeColor.setAttribute('content', theme === 'light' ? '#f5f4ef' : '#090909')
}

export function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
