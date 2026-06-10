import { ref } from 'vue'

export type Theme = 'dark' | 'light'

// Shared singleton state. The initial value is read from the <html> attribute,
// which index.html sets from localStorage before paint to avoid a flash.
const initial = (document.documentElement.getAttribute('data-theme') as Theme | null) ?? 'dark'
const theme = ref<Theme>(initial)

export function useTheme() {
  function toggle() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    theme.value = next
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable — ignore */
    }
  }

  return { theme, toggle }
}
