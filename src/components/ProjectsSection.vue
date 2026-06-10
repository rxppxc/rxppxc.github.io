<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects, type ProjectCategory } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

type FilterValue = ProjectCategory | 'all'

const filters: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web & Portals', value: 'web' },
  { label: 'Dashboards & Analytics', value: 'data' },
  { label: 'System Modules', value: 'modulo' },
  { label: 'Security & Access', value: 'auth' },
]

const active = ref<FilterValue>('all')

const visible = computed(() =>
  active.value === 'all' ? projects : projects.filter((p) => p.category === active.value),
)
</script>

<template>
  <section class="block" id="projects">
    <div class="wrap">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Selected work</span>
        <h2 class="section-title">Projects</h2>
        <p>
          Real systems designed, built, and deployed to production. My professional experience covers
          the development of the <strong>APOLO</strong> ecosystem and the Internal Portal of Panama's
          National Migration Service.
        </p>
      </div>

      <div class="filters" v-reveal="1" role="group" aria-label="Filter projects">
        <button
          v-for="f in filters"
          :key="f.value"
          class="filter"
          :class="{ active: active === f.value }"
          @click="active = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="block-divider" v-reveal="2">
        <span class="eyebrow">Professional experience</span>
        <p class="block-divider-note">
          Systems developed during my tenure at the
          <strong>National Migration Service of Panama</strong> · Directorate of Technology and
          Innovation (DTI)
        </p>
      </div>

      <div class="projects" id="grid">
        <ProjectCard v-for="(p, i) in visible" :key="p.id" :project="p" :index="i" />
      </div>
    </div>
  </section>
</template>
