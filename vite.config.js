import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'

console.log("base:", process.env.NODE_ENV)
export default defineConfig({

  base: process.env.NODE_ENV === 'production'
          ? '/leaflet-react-pwa/' 
          : '/', 
  plugins: [
    mkcert(),
    react(),
    VitePWA({
      // strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      includeAssets: [
        'img/favicon.ico',
        'robots.txt',
        'icons/apple-touch-icon.png',
        'markers/pin-icon-end.png',
        'markers/pin-icon-start.png',
        'markers/pin-icon-wpt.png',
        'markers/pin-shadow.png',
        'markers/marker-icon.png',
        'markers/marker-icon-2x.png',
        'markers/marker-shadow.png'
      ],  
      manifest: {
        name: 'Camina 🥾 con mi App GPS',
        short_name: 'Leaflet React App-GPS',
        description: 'App GPS con Leaflet y React js',
        theme_color: '#088C2F',
        icons: [
          {
            src: 'icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ],
        start_url: '.',
        // scope: 'https://emarifer.github.io/test-vite/',
        display: 'standalone',
      }
    })
  ]
})
