import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

// https://astro.build/config
// Tailwind v4 is wired in via PostCSS (postcss.config.mjs).
// User/org GitHub Pages site is served from the root, so no `base` is needed.
export default defineConfig({
  site: 'https://rxppxc.github.io',
  integrations: [vue()],
})
