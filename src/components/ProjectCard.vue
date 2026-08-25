<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '../data/projects'
import type { Lang } from '../composables/useLang'

const props = defineProps<{ project: Project; lang: Lang }>()

const imgStyle = props.project.objectPosition
  ? { objectPosition: props.project.objectPosition }
  : undefined

const tag = computed(() => (props.lang === 'es' ? props.project.es.tag : props.project.tag))
const title = computed(() => (props.lang === 'es' ? props.project.es.title : props.project.title))
const description = computed(() =>
  props.lang === 'es' ? props.project.es.description : props.project.description,
)
// `es.metrics` mirrors `metrics` by index — only the caption (`k`) translates,
// the headline value (`v`) is language-neutral (a number or short code).
const metrics = computed(() =>
  props.project.metrics.map((m, i) => ({
    v: m.v,
    k: props.lang === 'es' ? props.project.es.metrics[i].k : m.k,
  })),
)
</script>

<template>
  <article class="card" :data-cat="project.category">
    <div class="preview">
      <div class="frame">
        <div class="frame-bar"><span></span><span></span><span></span><div class="url"></div></div>
        <img class="shot" :src="project.img" :alt="project.alt" :style="imgStyle" loading="lazy" />
      </div>
    </div>
    <div class="card-body">
      <span class="card-tag">{{ tag }}</span>
      <h3>{{ title }}</h3>
      <!-- description is static, authored content; v-html renders inline <code> -->
      <p v-html="description"></p>
      <div class="metrics">
        <div class="metric" v-for="m in metrics" :key="m.k">
          <div class="v">{{ m.v }}</div>
          <div class="k">{{ m.k }}</div>
        </div>
      </div>
      <div class="tags"><span v-for="t in project.tags" :key="t">{{ t }}</span></div>
    </div>
  </article>
</template>
