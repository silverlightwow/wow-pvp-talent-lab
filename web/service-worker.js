const CACHE = "wow-pvp-talent-lab-v25";
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./change-direction.js",
  "./loadout-codec.js",
  "./class-icons.js",
  "./docs.html",
  "./manifest.json",
  "./favicon-v22-32.png",
  "./favicon-v22-16.png",
  "./site-icon-v22-64.png",
  "./data/manifest.js",
  "./data/manifest.json",
  "./data/priest-discipline.js",
  "./data/priest-discipline.json",
  "./icons/ability_rogue_trip.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith("wow-pvp-talent-lab-") && key !== CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, copy)));
        }
        return response;
      })
      .catch(async () => (await caches.match(event.request)) || Response.error())
  );
});
