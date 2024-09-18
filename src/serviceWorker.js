// Este es un service worker básico para hacer que tu app funcione offline y cargue más rápido
const CACHE_NAME = 'tibot-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js',
  '/static/js/bundle.js', // ajusta esto según tus archivos estáticos
  // agrega más URLs a cachear si es necesario
];

// Evento de instalación
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return the cached response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Evento de activación
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
