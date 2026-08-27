import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Port 5818 — deliberately chosen to avoid clashing with prior task ports.
export default defineConfig({
  plugins: [react()],
  base: '/jack-3d-creator/',
  server: {
    host: true,
    port: 5818,
    strictPort: false,
  },
})
