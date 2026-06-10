import type { Directive } from 'vue'

// Single shared observer for every element using the directive.
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
)

/**
 * v-reveal — fades/slides an element into view on scroll.
 * Optional value sets a stagger step (e.g. v-reveal="2" → 0.16s delay).
 */
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value * 0.08}s`
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
