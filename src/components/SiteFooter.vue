<script setup lang="ts">
import { onMounted, ref } from 'vue'

const year = new Date().getFullYear()
const visits = ref<string | null>(null)

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(async () => {
  try {
    const res = await fetch('https://api.counterapi.dev/v1/rxppxc-portfolio/visits/up')
    const data: { count?: number } = await res.json()
    if (typeof data.count === 'number') {
      visits.value = data.count.toLocaleString('en')
    }
  } catch {
    /* network/counter unavailable — leave it hidden */
  }
})
</script>

<template>
  <footer>
    <div class="wrap">
      <div class="foot">
        <div class="cp">
          © {{ year }} Víctor A. Pérez M. · Built with
          <b>Vue 3 · TypeScript · Vite · Tailwind</b>.
        </div>

        <div class="visit-counter" v-if="visits">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
          {{ visits }} visits
        </div>

        <div class="top" @click="scrollTop">
          Back to top
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
        </div>
      </div>
    </div>
  </footer>
</template>
