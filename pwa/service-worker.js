const CACHE_NAME = "cvv-calculator-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/app.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
];

// Install service worker and cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch from cache first, then network
self.addEventListener("fetch", (event) => {
  // Don't cache API requests
  if (event.request.url.includes("web.spaggiari.eu")) {
    return event.respondWith(fetch(event.request));
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
