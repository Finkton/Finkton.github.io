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
  ./",
  workbox.strategies.CacheFirst()
);

// workbox.routing.registerRoute(
//   new RegExp('.*\.json'),
//   workbox.strategies.CacheFirst()
// );

// workbox.routing.registerRoute(
//   new RegExp('.*\.css'),
//   workbox.strategies.networkFirst()
// );
