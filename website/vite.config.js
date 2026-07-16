import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // Critical for GitHub Pages to resolve assets correctly
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        docs: resolve(__dirname, 'docs.html'),
        benchmarks: resolve(__dirname, 'benchmarks.html')
      }
    }
  }
})
