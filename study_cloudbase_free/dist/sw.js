const CACHE = 'study-v3.7-static-audio';
const ASSETS = ['./', './index.html', './styles.css', './app.js', './manifest.json', './icon.svg', './SOURCES.md'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.startsWith('study-v') && k !== CACHE).map(k => caches.delete(k))
    )),
    self.clients.claim()
  ]));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Audio sprites are already CDN/HTTP cached; do not duplicate large audio in CacheStorage.
  if (url.pathname.includes('/audio/')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then(
        cached => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : undefined)
      ))
  );
});
