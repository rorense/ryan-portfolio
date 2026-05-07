import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use repo base only for production builds (GitHub Pages).
  base: command === 'build' ? '/ryan-portfolio/' : '/',
}))
