const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');

const web = path.resolve(__dirname, '../web');
const manifest = JSON.parse(fs.readFileSync(path.join(web, 'manifest.json'), 'utf8'));
const icons = [...manifest.icons.map(icon => icon.src), 'favicon-v25-16.png', 'favicon-v25-32.png'];
const oldIcon = '<svg xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" fill="red"/></svg>';
let oldWorker = true, blockIcons = false, iconRequests = 0;
const mime = { '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const file = decodeURIComponent(url.pathname).slice(1) || 'index.html';
  res.setHeader('Cache-Control', 'no-store');
  if (file === 'prime.html') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<!doctype html><title>Old cache fixture</title>');
    return;
  }
  if (file === 'service-worker.js' && oldWorker) {
    res.setHeader('Content-Type', 'application/javascript');
    res.end(`const CACHE='wow-pvp-talent-lab-v30';
      self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE).then(async c=>{
        for(const p of ['app-icon.svg','site-icon-v23.svg?v=24','favicon-v23-32.png?v=24'])
          await c.put(p,new Response(${JSON.stringify(oldIcon)},{headers:{'Content-Type':'image/svg+xml'}}));
        await self.skipWaiting();
      })));
      self.addEventListener('activate', e=>e.waitUntil(self.clients.claim()));
      self.addEventListener('fetch', e=>e.respondWith(fetch(e.request).catch(async()=>await caches.match(e.request)||Response.error())));`);
    return;
  }
  if (icons.includes(file)) {
    iconRequests++;
    if (blockIcons) { res.destroy(); return; }
  }
  const resolved = path.resolve(web, file);
  if (!resolved.startsWith(web + path.sep) || !fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
    res.writeHead(404); res.end(); return;
  }
  res.setHeader('Content-Type', mime[path.extname(resolved)] || 'application/octet-stream');
  res.end(fs.readFileSync(resolved));
});

(async () => {
  await new Promise(resolve => server.listen(0, 'localhost', resolve));
  const base = `http://localhost:${server.address().port}/`;
  const launch = { headless: true };
  if (process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE) launch.executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
  const browser = await chromium.launch(launch);
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    await context.route('https://**/*', route => route.abort());
    const page = await context.newPage();
    await page.goto(base + 'prime.html');
    await page.evaluate(async () => {
      await navigator.serviceWorker.register('service-worker.js');
      await navigator.serviceWorker.ready;
      if (!navigator.serviceWorker.controller) await new Promise(resolve => navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true }));
    });
    assert.equal(await page.evaluate(async () => (await caches.keys()).includes('wow-pvp-talent-lab-v30')), true);
    oldWorker = false;
    await page.goto(base);
    await page.waitForFunction(async () => (await caches.keys()).includes('wow-pvp-talent-lab-v31') && !(await caches.keys()).includes('wow-pvp-talent-lab-v30'));
    await page.waitForFunction(() => document.querySelector('.welcome-spec') && document.querySelector('.brand-mark')?.naturalWidth === 192);
    const brand = await page.locator('.brand-mark').getAttribute('src');
    const pixels = () => page.locator('.brand-mark').evaluate(img => {
      const c = document.createElement('canvas'); c.width = c.height = 192;
      c.getContext('2d').drawImage(img, 0, 0, 192, 192);
      return c.toDataURL();
    });
    const expectedPixels = await pixels();
    await page.evaluate(() => {
      window.brandChanges = [];
      const img = document.querySelector('.brand-mark'), initial = img.src;
      const watch = () => {
        if (img.src !== initial || !img.complete || !img.naturalWidth) window.brandChanges.push(img.src);
        window.brandWatch = requestAnimationFrame(watch);
      }; watch();
    });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.locator('.welcome-spec[data-class="Paladin"][data-spec="Holy"]').click();
    await page.waitForFunction(() => document.querySelector('#treeTitle').textContent === 'Holy Paladin');
    await page.locator('[data-tab="compare"]').click();
    await page.locator('.documentation-link').click();
    const frame = page.frameLocator('#docsFrame');
    await frame.locator('#spec-aura').waitFor();
    const favicons = locator => locator.locator('link[rel="icon"], link[rel="shortcut icon"]').evaluateAll(links => links.map(link => link.href));
    assert.deepEqual(await favicons(frame), await favicons(page), 'Embedded documentation must use the calculator favicons');
    assert.equal(new URL(await page.locator('#docsFrame').getAttribute('src')).searchParams.get('v'), '25');
    await frame.locator('#checks').scrollIntoViewIfNeeded();
    await page.locator('#docsDialog [data-close-dialog]').click();
    await page.locator('#homeBrand').click();
    assert.equal(await page.locator('.brand-mark').getAttribute('src'), brand);
    assert.equal(await pixels(), expectedPixels, 'Rune pixels must stay unchanged through scrolls, clicks and frame focus');
    assert.deepEqual(await page.evaluate(() => { cancelAnimationFrame(window.brandWatch); return window.brandChanges; }), []);

    // Once installed, immutable icons stay available even if their server fails.
    blockIcons = true;
    const before = iconRequests;
    const bytes = await page.evaluate(async urls => Promise.all(urls.map(async url => {
      const response = await fetch(url); return { ok: response.ok, bytes: [...new Uint8Array(await response.arrayBuffer())] };
    })), icons);
    bytes.forEach((result, i) => {
      assert.equal(result.ok, true);
      assert.deepEqual(Buffer.from(result.bytes), fs.readFileSync(path.join(web, icons[i])));
    });
    assert.equal(iconRequests, before, 'Cached rune must not be refetched on interactions');

    // A missing current icon must never fall back to an unrelated stale cache.
    await page.evaluate(async ({ brand, oldIcon }) => {
      await (await caches.open('foreign-cache')).put(brand, new Response(oldIcon));
      await (await caches.open('wow-pvp-talent-lab-v31')).delete(brand);
    }, { brand, oldIcon });
    const stale = await page.evaluate(async brand => {
      try { return await (await fetch(brand)).text(); } catch { return null; }
    }, brand);
    assert.notEqual(stale, oldIcon);
    console.log('Brand icon checks passed: old-worker migration, page/frame consistency, pixel stability, cached icons, stale-cache isolation');
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
