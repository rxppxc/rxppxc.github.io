<script setup lang="ts">
import { ref } from 'vue'
import { useScroll } from '../composables/useScroll'
import { useTheme } from '../composables/useTheme'

const { scrolled } = useScroll()
const { theme, toggle } = useTheme()
const menuOpen = ref(false)

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header :class="{ scrolled }">
    <nav>
      <a href="#top" class="logo"><span class="dot"></span>rxppxc<span>.dev</span></a>

      <div class="nav-links">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </div>

      <div class="nav-right">
        <button
          class="icon-btn"
          @click="toggle"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        >
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
        </button>

        <a href="#contact" class="btn btn-primary nav-cta">Contact me
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
        </a>

        <button class="icon-btn menu-btn" @click="menuOpen = true" aria-label="Open menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>
    </nav>
  </header>

  <div class="mobile-menu" :class="{ open: menuOpen }">
    <button class="icon-btn close" @click="menuOpen = false" aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    </button>
    <a v-for="l in links" :key="l.href" :href="l.href" class="mm-link" @click="menuOpen = false">{{ l.label }}</a>
  </div>
</template>
