<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects, type Project, type ProjectCategory } from '../data/projects'
import { useLang } from '../composables/useLang'
import ProjectCard from './ProjectCard.vue'

type FilterValue = ProjectCategory | 'all'

const filters: { label: string; labelEs: string; value: FilterValue }[] = [
  { label: 'All', labelEs: 'Todos', value: 'all' },
  { label: 'Web & Portals', labelEs: 'Web y Portales', value: 'web' },
  { label: 'Dashboards & Analytics', labelEs: 'Paneles y Analítica', value: 'data' },
  { label: 'System Modules', labelEs: 'Módulos de Sistema', value: 'modulo' },
  { label: 'Security & Access', labelEs: 'Seguridad y Acceso', value: 'auth' },
  { label: 'Academic & Team', labelEs: 'Académico y Equipo', value: 'academic' },
]

const active = ref<FilterValue>('all')
const lang = useLang()

const visible = computed(() =>
  active.value === 'all' ? projects : projects.filter((p) => p.category === active.value),
)

// Narrative grouping shown only in the "All" view — turns the flat list into
// a progression (foundation → modules → analytics), with academic/team work
// kept visually separate from institutional SNM projects.
interface Group {
  key: string
  label: string
  labelEs: string
  categories: ProjectCategory[]
}
const GROUPS: Group[] = [
  { key: 'core', label: 'Core Platform & Access', labelEs: 'Plataforma Base y Acceso', categories: ['web', 'auth'] },
  { key: 'modules', label: 'Operational Modules', labelEs: 'Módulos Operativos', categories: ['modulo'] },
  { key: 'analytics', label: 'Analytics & Dashboards', labelEs: 'Analítica y Dashboards', categories: ['data'] },
]

const professionalGroups = computed(() =>
  GROUPS.map((g) => ({ ...g, items: projects.filter((p) => g.categories.includes(p.category)) })).filter(
    (g) => g.items.length > 0,
  ),
)
const academicItems = computed<Project[]>(() => projects.filter((p) => p.category === 'academic'))
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

      <!-- "All": grouped into a narrative progression, professional work first -->
      <template v-if="active === 'all'">
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

        <div v-for="g in professionalGroups" :key="g.key" class="project-group">
          <span class="eyebrow group-eyebrow">{{ lang === 'es' ? g.labelEs : g.label }}</span>
          <TransitionGroup name="card" tag="div" class="projects">
            <ProjectCard v-for="p in g.items" :key="p.id" :project="p" :lang="lang" />
          </TransitionGroup>
        </div>

        <template v-if="academicItems.length > 0">
          <div class="block-divider">
            <span class="eyebrow">{{ lang === 'es' ? 'Proyectos académicos y de equipo' : 'Academic & team projects' }}</span>
            <p class="block-divider-note" v-if="lang === 'es'">
              Trabajo de equipo universitario — separado del trabajo institucional, con la autoría
              de cada aporte aclarada en cada tarjeta.
            </p>
            <p class="block-divider-note" v-else>
              University team work — kept separate from institutional work, with each card
              clarifying my specific contribution.
            </p>
          </div>
          <TransitionGroup name="card" tag="div" class="projects">
            <ProjectCard v-for="p in academicItems" :key="p.id" :project="p" :lang="lang" />
          </TransitionGroup>
        </template>
      </template>

      <!-- Specific filter: flat grid of that one category -->
      <template v-else>
        <div class="block-divider">
          <span class="eyebrow">
            {{ active === 'academic'
              ? (lang === 'es' ? 'Proyectos académicos y de equipo' : 'Academic & team projects')
              : (lang === 'es' ? 'Experiencia profesional' : 'Professional experience') }}
          </span>
        </div>
        <TransitionGroup name="card" tag="div" class="projects" id="grid">
          <ProjectCard v-for="p in visible" :key="p.id" :project="p" :lang="lang" />
        </TransitionGroup>
      </template>
    </div>
  </section>
</template>
