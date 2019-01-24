const cacheName = 's2';

const staticAssets = [
  './',
  './app.js',
  './album.css',
  './manifest.json',
  '/bootstrap/3.3.7/css/bootstrap.min.css',
];

importScripts('./workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

//workbox.precaching.precache(staticAssets);

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
  new RegExp('.*\.json'),
  workbox.strategies.networkFirst()
);
