import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. Tell Vite the public directory is where static assets (like index.html) live.
  // 2. Tell Vite that the build output should be placed in a directory Vercel expects (dist).
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html' // Explicitly set the entry point path for the build
    }
  },
  // Base is often required for deployment environments like Vercel
  base: '/',
});