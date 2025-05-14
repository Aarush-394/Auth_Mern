import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite will auto-detect the PostCSS config, no need to explicitly reference it here
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://auth-mern-backend-9pgx.onrender.com',  // Adjust the backend URL accordingly
    },
  },
});
