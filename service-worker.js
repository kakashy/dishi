const timestamp = 1640873082801;
const build = [
  "/_app/start-4126571c.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-55f12a54.js",
  "/_app/assets/pages/__layout.svelte-2b7db775.css",
  "/_app/error.svelte-119c7c79.js",
  "/_app/pages/index.svelte-f28dd275.js",
  "/_app/assets/pages/index.svelte-6dd47286.css",
  "/_app/pages/anime.svelte-b4c4d305.js",
  "/_app/assets/pages/anime.svelte-fba01625.css",
  "/_app/pages/menu.svelte-522e62b6.js",
  "/_app/chunks/vendor-1ce14ce5.js"
];
const files = [
  "/.nojekyll",
  "/favicon.png",
  "/fonts/A Bug s Life - Debugged.ttf",
  "/fonts/NewsGoth Lt BT Light.ttf",
  "/media/adalia.jpg",
  "/media/adalia2.jpg",
  "/media/dan.jpg",
  "/media/stil.jpg"
];
const applicationCache = `applicationCache-v${timestamp}`;
const staticCache = `staticCache-v${timestamp}`;
self.addEventListener("install", (event) => {
  event.waitUntil(Promise.all([
    caches.open("ssrCache").then((cache) => cache.addAll(["/", "/admission", "/administration"])),
    caches.open(applicationCache).then((cache) => cache.addAll(build)),
    caches.open(staticCache).then((cache) => cache.addAll(files))
  ]).then(self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim(), caches.keys().then((keys) => {
    return Promise.all(keys.filter((key) => key !== applicationCache && key !== staticCache && key !== "postsCache" && key !== "ssrCache").map((key) => caches.delete(key)));
  }).then(self.skipWaiting()).then(() => console.log("activated")));
});
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(caches.match(fetchEvent.request).then((res) => {
    return res || fetch(fetchEvent.request);
  }));
});
