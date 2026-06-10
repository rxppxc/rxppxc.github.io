<script setup lang="ts">
import type { Project } from '../data/projects'

const props = defineProps<{ project: Project; index: number }>()

const imgStyle = props.project.objectPosition
  ? { objectPosition: props.project.objectPosition }
  : undefined
</script>

<template>
  <article class="card" :data-cat="project.category" v-reveal="(index % 2) + 1">
    <div class="preview">
      <div class="frame">
        <div class="frame-bar"><span></span><span></span><span></span><div class="url"></div></div>
        <img class="shot" :src="project.img" :alt="project.alt" :style="imgStyle" loading="lazy" />
      </div>
    </div>
    <div class="card-body">
      <span class="card-tag">{{ project.tag }}</span>
      <h3>{{ project.title }}</h3>
      <!-- description is static, authored content; v-html renders inline <code> -->
      <p v-html="project.description"></p>
      <div class="metrics">
        <div class="metric" v-for="m in project.metrics" :key="m.k">
          <div class="v">{{ m.v }}</div>
          <div class="k">{{ m.k }}</div>
        </div>
      </div>
      <div class="tags"><span v-for="t in project.tags" :key="t">{{ t }}</span></div>
    </div>
  </article>
</template>
