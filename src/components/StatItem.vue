<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
  target: number
  label: string
  suffix?: string
  delay?: number
}>()

const display = ref('0')
const el = ref<HTMLElement | null>(null)

function animate() {
  const duration = 1400
  const start = performance.now()
  const suffix = props.suffix ?? ''

  function frame(now: number) {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    if (p < 1) {
      display.value = Math.floor(eased * props.target).toLocaleString('en') + suffix
      requestAnimationFrame(frame)
    } else {
      display.value = props.target.toLocaleString('en') + suffix
    }
  }
  requestAnimationFrame(frame)
}

onMounted(() => {
  const node = el.value
  if (!node) return
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        animate()
        io.unobserve(node)
      }
    },
    { threshold: 0.5 },
  )
  io.observe(node)
})
</script>

<template>
  <div class="stat" ref="el" v-reveal="delay">
    <div class="num">{{ display }}</div>
    <div class="lbl">{{ label }}</div>
  </div>
</template>
