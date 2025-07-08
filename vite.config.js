// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
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
