import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  plugins: [react()],
  build: {
    // Never inline assets as base64 — always use URL references
    assetsInlineLimit: 0,
    // CSS code splitting per page
    cssCodeSplit: true,
    // Raise chunk size warning limit (our HTML chunks are large)
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Split React vendor from app code for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
          }
        },
      },
    },
  },
  // Optimize dep pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})

