import { onMounted, ref } from 'vue'

interface TypewriterOptions {
  /** ms per typed character */
  typeSpeed?: number
  /** ms per deleted character */
  deleteSpeed?: number
  /** ms to hold a completed word */
  hold?: number
  /** ms to pause before typing the next word */
  pause?: number
}

/** Cycles through words with a type/delete effect, exposing the current text. */
export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 70, deleteSpeed = 35, hold = 1700, pause = 350 } = options
  const text = ref('')
  let wordIndex = 0
  let charIndex = 0
  let deleting = false

  function tick() {
    const word = words[wordIndex] ?? ''
    text.value = word.substring(0, charIndex)

    if (!deleting && charIndex < word.length) {
      charIndex++
      setTimeout(tick, typeSpeed)
    } else if (deleting && charIndex > 0) {
      charIndex--
      setTimeout(tick, deleteSpeed)
    } else if (!deleting) {
      deleting = true
      setTimeout(tick, hold)
    } else {
      deleting = false
      wordIndex = (wordIndex + 1) % words.length
      setTimeout(tick, pause)
    }
  }

  onMounted(tick)
  return { text }
}
