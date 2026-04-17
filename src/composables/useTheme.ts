import { ref } from 'vue'

export type Theme = 'dark' | 'light'

const theme = ref<Theme>('dark')
let initialized = false

export function useTheme() {
  function init() {
    if (initialized) return
    initialized = true

    const stored = localStorage.getItem('ix-theme') as Theme | null
    if (stored === 'dark' || stored === 'light') {
      theme.value = stored
    } else if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      theme.value = 'light'
    }
    apply()
  }

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('ix-theme', theme.value)
    apply()
  }

  function apply() {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  return { theme, init, toggle }
}
