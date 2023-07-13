
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const toCache = [
  '_next/static/chunks/698-d3628749fb7230e8.js',
  '_next/static/chunks/app/layout-b9bff60c688c5e94.js',
  '_next/static/chunks/app/page-9ae715e89e8f9a6b.js',
  '_next/static/chunks/main-app-470a2845c665bf19.js',
  '_next/static/chunks/webpack-94f5b18e55d7af89.js',
  '_next/static/css/ff764f5ccaab796b.css',
  '_next/static/media/2aaf0723e720e8b9-s.p.woff2',
  'favicon.ico',
  'icons/icon-144x144.png',
  'manifest.json',
  'next.svg',
  'vercel.svg',
  '/'
]

self.addEventListener("install", (event) => {
  console.log('installed');
  event.waitUntil(
    addResourcesToCache(toCache),
  );
});

self.addEventListener('fetch', (event) => {
  if(!navigator.onLine){
    console.log('offline');
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
