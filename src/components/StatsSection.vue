<script setup lang="ts">
import StatItem from './StatItem.vue'

const stats = [
  { target: 10, label: 'Projects in this portfolio' },
  { target: 10, suffix: '+', label: 'Modules deployed to production' },
  { target: 10210, label: 'Records analyzed' },
  { target: 20, suffix: '+', label: 'Integrated systems' },
]
</script>

<template>
  <section class="block no-pad" id="stats" aria-label="Key numbers">
    <div class="wrap">
      <div class="stats">
        <StatItem
          v-for="(s, i) in stats"
          :key="s.label"
          :target="s.target"
          :suffix="s.suffix"
          :label="s.label"
          :delay="i"
        />
      </div>
    </div>
  </section>
</template>
