import { onMounted, onUnmounted, ref } from 'vue'

export type Lang = 'en' | 'es'

/**
 * Reactive language for Vue islands. Source of truth is `<html data-lang>`,
 * toggled by the plain-JS button in Header.astro (see its inline <script>),
 * which also dispatches a `langchange` CustomEvent so islands stay in sync
 * without a shared store across Astro's per-island hydration boundaries.
 */
export function useLang() {
  const lang = ref<Lang>('en')

  const read = () => {
    const attr = document.documentElement.dataset.lang
    lang.value = attr === 'es' ? 'es' : 'en'
  }

  const onLangChange = (e: Event) => {
    const detail = (e as CustomEvent<Lang>).detail
    lang.value = detail === 'es' ? 'es' : 'en'
  }

  onMounted(() => {
    read()
    window.addEventListener('langchange', onLangChange)
  })
  onUnmounted(() => window.removeEventListener('langchange', onLangChange))

  return lang
}
