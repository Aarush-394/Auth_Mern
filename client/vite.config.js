import { defineConfig } from 'vite';  // Add this import

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'https://auth-mern-backend-9pgx.onrender.com',
    },
  },
});
