<script setup lang="ts">
// Chip groups for the stack section. Icons are rendered per group below.
const groups = {
  backend: ['PHP', 'Laravel', 'MVC Architecture', 'Eloquent ORM', 'Blade', 'Artisan', 'REST APIs', 'Java', 'Python'],
  frontend: ['Vue 3', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'Highcharts', 'Ionic', 'Capacitor'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'HeidiSQL', 'Schema design'],
  infra: ['VMware', 'Windows Server', 'Active Directory', 'Linux', 'Veeam', 'Zabbix', 'Git', 'VS Code'],
}
</script>

<template>
  <section class="block" id="stack">
    <div class="wrap">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Toolbox</span>
        <h2 class="section-title">Tech Stack</h2>
        <p>Full-stack development as a foundation, with a growing profile in systems administration and infrastructure.</p>
      </div>

      <div class="stack-grid">
        <div class="stack-card" v-reveal>
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
            Backend
          </h3>
          <div class="chips">
            <span class="chip" v-for="(c, i) in groups.backend" :key="c">
              <span v-if="i === 0" class="pre">$</span>{{ c }}
            </span>
          </div>
        </div>

        <div class="stack-card" v-reveal="1">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
            Frontend &amp; Mobile
          </h3>
          <div class="chips">
            <span class="chip" v-for="c in groups.frontend" :key="c">{{ c }}</span>
          </div>
        </div>

        <div class="stack-card" v-reveal>
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
            Databases
          </h3>
          <div class="chips">
            <span class="chip" v-for="c in groups.databases" :key="c">{{ c }}</span>
          </div>
        </div>

        <div class="stack-card" v-reveal="1">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
            Infrastructure &amp; DevOps
          </h3>
          <div class="chips">
            <span class="chip" v-for="c in groups.infra" :key="c">{{ c }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
