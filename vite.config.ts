import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      devOptions: { enabled: true },
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      manifest: {
        name: 'Music Visualizer',
        display: 'standalone',
        icons: [
          {
            src: 'web-app-manifest-192x192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: ['any'],
          },
          {
            src: 'web-app-manifest-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: ['any'],
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
