import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves this from /ryan-portfolio/; Vercel and the dev server
  // serve it from the root. VERCEL is set automatically in Vercel builds.
  base: command === 'build' && !process.env.VERCEL ? '/ryan-portfolio/' : '/',
}))
