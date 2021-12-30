const timestamp = 1640873979189;
const build = [
  "/dishi/internal/start-ae272efb.js",
  "/dishi/internal/assets/start-61d1577b.css",
  "/dishi/internal/pages/__layout.svelte-5a6a7357.js",
  "/dishi/internal/assets/pages/__layout.svelte-2b7db775.css",
  "/dishi/internal/error.svelte-119c7c79.js",
  "/dishi/internal/pages/index.svelte-f28dd275.js",
  "/dishi/internal/assets/pages/index.svelte-6dd47286.css",
  "/dishi/internal/pages/anime.svelte-b4c4d305.js",
  "/dishi/internal/assets/pages/anime.svelte-fba01625.css",
  "/dishi/internal/pages/menu.svelte-522e62b6.js",
  "/dishi/internal/chunks/vendor-1ce14ce5.js"
];
const files = [
  "/dishi/.nojekyll",
  "/dishi/favicon.png",
  "/dishi/fonts/A Bug s Life - Debugged.ttf",
  "/dishi/fonts/NewsGoth Lt BT Light.ttf",
  "/dishi/media/adalia.jpg",
  "/dishi/media/adalia2.jpg",
  "/dishi/media/dan.jpg",
  "/dishi/media/stil.jpg"
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
