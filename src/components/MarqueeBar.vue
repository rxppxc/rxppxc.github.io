<script setup lang="ts">
const items = [
  'Laravel', 'PHP', 'Vue 3', 'MySQL', 'JavaScript',
  'Ionic', 'Bootstrap', 'Highcharts', 'Active Directory', 'Git',
]
// Duplicated so the loop scrolls seamlessly (-50% keyframe).
const track = [...items, ...items]
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span class="marquee-item" v-for="(item, i) in track" :key="i">{{ item }}</span>
    </div>
  </div>
</template>
