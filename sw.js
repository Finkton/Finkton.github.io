//importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
importScripts('./workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// const staticAssets = [
//   './',
//   './styles.js',
//   './app.js',
//   './Chart.js',
// ]

//workbox.precaching.precache(staticAssets);

workbox.routing.registerRoute(
  new RegExp('./'),
  new workbox.strategies.CacheFirst()
);

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});

// workbox.routing.registerRoute(
//   new RegExp('.*\.json'),
//   workbox.strategies.CacheFirst()
// );

// workbox.routing.registerRoute(
//   new RegExp('.*\.css'),
//   workbox.strategies.networkFirst()
// );
