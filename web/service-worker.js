const CACHE = "wow-pvp-talent-lab-v31";
// A new drawing gets new paths; never reuse a browser's older icon entry.
const BRAND_ICONS = [
  "./favicon-v25-32.png",
  "./favicon-v25-16.png",
  "./site-icon-v25.svg",
  "./site-icon-v25-192.png",
  "./site-icon-v25-512.png"
];
const BRAND_URLS = new Set(BRAND_ICONS.map(path => new URL(path, self.location.href).href));
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js?v=29",
  "./change-direction.js",
  "./loadout-codec.js",
  "./class-icons.js",
  "./docs.html",
  "./docs.html?v=25",
  "./docs.html?v=25&embedded=1",
  "./manifest.json?v=25",
  ...BRAND_ICONS,
  "./data/manifest.js",
  "./data/manifest.json",
  "./data/priest-discipline.js",
  "./data/priest-discipline.json",
  "./icons/ability_rogue_trip.jpg",
  "./icons/spells/195645.jpg"
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
    (async () => {
      const cache = await caches.open(CACHE);
      // The versioned rune is immutable. Scrolls and frame focus must not
      // trigger a network refresh or fall back to a different cache version.
      if (BRAND_URLS.has(event.request.url)) {
        const cached = await cache.match(event.request);
        if (cached) return cached;
      }
      try {
        const response = await fetch(event.request, { cache: "no-store" });
        if (response.ok) event.waitUntil(cache.put(event.request, response.clone()));
        return response;
      } catch {
        return (await cache.match(event.request)) || Response.error();
      }
    })()
  );
});
