import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/tarock-scoring-app/' : '/',

  build: {
    outDir: process.env.GITHUB_PAGES === 'true' ? 'dist' : '../tarock-app/www',
    emptyOutDir: true
  },

  plugins: [
    vue(),
    vueDevTools(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
