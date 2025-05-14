import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// You don't need to import tailwindcss directly as a PostCSS plugin here anymore.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://auth-mern-backend-9pgx.onrender.com',  // Adjust the backend URL accordingly
    },
  },
});
