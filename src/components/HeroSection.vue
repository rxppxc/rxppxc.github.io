<script setup lang="ts">
import { useTypewriter } from '../composables/useTypewriter'

const { text: role } = useTypewriter([
  'Full-Stack Developer',
  'Laravel & Vue Specialist',
  'Infrastructure Administrator',
  'DevOps & Systems',
])

const spec = [
  { label: 'Role', value: 'Full-Stack Developer', strong: true },
  { label: 'Backend', value: 'PHP · Laravel' },
  { label: 'Frontend', value: 'Vue 3 · JS · Bootstrap' },
  { label: 'Data', value: 'MySQL · PostgreSQL' },
  { label: 'Infra', value: 'VMware · Linux · AD' },
  { label: 'Focus', value: 'clean + scalable' },
]
</script>

<template>
  <section class="hero" id="top">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <div class="status" v-reveal><span class="pulse"></span> Available for new projects</div>
          <h1 v-reveal="1"><span class="grad">Víctor A.<br>Pérez M.</span></h1>
          <div class="role" v-reveal="2">{{ role }}<span class="cursor"></span></div>
          <p class="lede" v-reveal="3">
            I design and build end-to-end web applications — from the database model to the user
            interface. I specialize in robust systems and clean code, with real production experience
            and a growing profile in infrastructure and DevOps.
          </p>
          <div class="hero-cta" v-reveal="4">
            <a href="#projects" class="btn btn-primary">View projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="/assets/img/CV_Victor_Perez.pdf" download class="btn btn-ghost">Download CV
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            </a>
          </div>
          <div class="hero-meta" v-reveal="4">
            <div class="m">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Panama City, Panama
            </div>
          </div>
        </div>

        <!-- Spec plate — engraved steel dossier -->
        <div v-reveal="3">
          <div class="plate">
            <div class="plate-head">
              <span class="rivet"></span><span class="rivet"></span><span class="rivet"></span>
              <span class="tname">~/victor — profile.spec</span>
            </div>
            <div class="plate-body">
              <div class="plate-row" v-for="row in spec" :key="row.label">
                <span class="plate-label">{{ row.label }}</span>
                <span class="plate-value"><b v-if="row.strong">{{ row.value }}</b><template v-else>{{ row.value }}</template></span>
              </div>
              <div class="deploy">deploy ➜ production ✓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
