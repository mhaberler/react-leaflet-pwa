import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { clientsClaim } from 'workbox-core'

registerRoute(
  new RegExp('.*(www.ign.es\/wms-inspire|openstreetmap|opentopomap).*'),
  new CacheFirst({
    cacheName: 'cache-map',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,// Limitamos a 500 el número de recursos de ese directorio que queremos cachear.
        maxAgeSeconds: 24 * 60 * 60// Tiempo de vida de la cache 
      })
    ]
  })
)

self.skipWaiting()
clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)