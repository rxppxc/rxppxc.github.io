import { ref } from 'vue'

// Shared singleton: one scroll listener feeds both the progress bar and the
// "scrolled" header state, regardless of how many components read them.
const progress = ref(0)
const scrolled = ref(false)

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? (window.scrollY / max) * 100 : 0
  scrolled.value = window.scrollY > 20
}

window.addEventListener('scroll', onScroll, { passive: true })

export function useScroll() {
  return { progress, scrolled }
}
