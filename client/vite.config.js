import { defineConfig } from 'vite';  // Import defineConfig from vite
import react from '@vitejs/plugin-react';  // Import react plugin from @vitejs/plugin-react
 // Ensure tailwindcss is imported

export default defineConfig({
  plugins: [react()],  // Use the react plugin
  server: {
    proxy: {
      '/api': 'https://auth-mern-backend-9pgx.onrender.com',
    },
  },
});
