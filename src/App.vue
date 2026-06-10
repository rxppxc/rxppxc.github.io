<script setup lang="ts">
import { useScroll } from './composables/useScroll'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBar from './components/MarqueeBar.vue'
import StatsSection from './components/StatsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StackSection from './components/StackSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { progress } = useScroll()
</script>

<template>
  <div class="progress" :style="{ width: progress + '%' }"></div>
  <TheHeader />
  <main>
    <HeroSection />
    <MarqueeBar />
    <StatsSection />
    <ProjectsSection />
    <StackSection />
    <AboutSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
