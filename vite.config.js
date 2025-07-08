// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rexoliver.github.io/', // Set the base path for GitHub Pages
  plugins: [react()],
  // if you have path aliases in CRA (jsconfig/tsconfig), mirror them here:
  resolve: {
    alias: {
      '@': '/src',
      // ...other aliases
    }
  },
  // if you used CRA proxy, replicate here:
})
