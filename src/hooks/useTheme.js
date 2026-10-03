import { useEffect, useState } from 'react'

const THEME_KEY = 'trace:theme'
const DEFAULT_THEME = 'dark'

function getStoredTheme() {
  const stored = window.localStorage.getItem(THEME_KEY)

  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return DEFAULT_THEME
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme

  const themeColor = document.querySelector('meta[name="theme-color"]')
  if (themeColor) {
    themeColor.setAttribute(
      'content',
      theme === 'light' ? '#f5f4ef' : '#090909',
    )
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return {
    theme,
    toggleTheme,
  }
}
