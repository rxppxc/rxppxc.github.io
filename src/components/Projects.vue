<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects, type ProjectCategory } from '../data/projects'
import { useLang } from '../composables/useLang'
import ProjectCard from './ProjectCard.vue'

type FilterValue = ProjectCategory | 'all'

const filters: { label: string; labelEs: string; value: FilterValue }[] = [
  { label: 'All', labelEs: 'Todos', value: 'all' },
  { label: 'Web & Portals', labelEs: 'Web y Portales', value: 'web' },
  { label: 'Dashboards & Analytics', labelEs: 'Paneles y Analítica', value: 'data' },
  { label: 'System Modules', labelEs: 'Módulos de Sistema', value: 'modulo' },
  { label: 'Security & Access', labelEs: 'Seguridad y Acceso', value: 'auth' },
]

const active = ref<FilterValue>('all')
const lang = useLang()

const visible = computed(() =>
  active.value === 'all' ? projects : projects.filter((p) => p.category === active.value),
)
</script>

<template>
  <section class="block" id="projects">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">{{ lang === 'es' ? 'Trabajo seleccionado' : 'Selected work' }}</span>
        <h2 class="section-title">{{ lang === 'es' ? 'Proyectos' : 'Projects' }}</h2>
        <p v-if="lang === 'es'">
          Sistemas reales diseñados, construidos y desplegados a producción. Mi experiencia
          profesional abarca el desarrollo del ecosistema <strong>APOLO</strong> y el Portal Interno
          del Servicio Nacional de Migración de Panamá.
        </p>
        <p v-else>
          Real systems designed, built, and deployed to production. My professional experience covers
          the development of the <strong>APOLO</strong> ecosystem and the Internal Portal of Panama's
          National Migration Service.
        </p>
      </div>

      <div class="filters" role="group" aria-label="Filter projects">
        <button
          v-for="f in filters"
          :key="f.value"
          class="filter"
          :class="{ active: active === f.value }"
          @click="active = f.value"
        >
          {{ lang === 'es' ? f.labelEs : f.label }}
        </button>
      </div>

      <div class="block-divider">
        <span class="eyebrow">{{ lang === 'es' ? 'Experiencia profesional' : 'Professional experience' }}</span>
        <p class="block-divider-note" v-if="lang === 'es'">
          Sistemas desarrollados durante mi paso por el
          <strong>Servicio Nacional de Migración de Panamá</strong> · Dirección de Tecnología e
          Innovación (DTI)
        </p>
        <p class="block-divider-note" v-else>
          Systems developed during my tenure at the
          <strong>National Migration Service of Panama</strong> · Directorate of Technology and
          Innovation (DTI)
        </p>
      </div>

      <TransitionGroup name="card" tag="div" class="projects" id="grid">
        <ProjectCard v-for="p in visible" :key="p.id" :project="p" :lang="lang" />
      </TransitionGroup>
    </div>
  </section>
</template>
