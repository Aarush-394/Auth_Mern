import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',                 // ← important for Render
    port: import.meta.env.VITE_BACKEND_URL || 5173,  // ← use PORT from environment
  }
})
