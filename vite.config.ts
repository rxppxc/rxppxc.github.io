import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// User/org GitHub Pages site (rxppxc.github.io) is served from root, so base is '/'.
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
