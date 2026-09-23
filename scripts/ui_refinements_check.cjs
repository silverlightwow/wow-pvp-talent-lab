const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');
const {pathToFileURL}=require('node:url');const {chromium}=require('playwright');
(async()=>{
 const launch={headless:true};if(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE)launch.executablePath=process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
 if(process.env.SITE_URL&&process.env.HTTPS_PROXY)launch.proxy={server:process.env.HTTPS_PROXY};
 const browser=await chromium.launch(launch),errors=[];
 const base=process.env.SITE_URL||pathToFileURL(path.resolve(__dirname,'../web/index.html')).href;
 const shot=async(p,name)=>{if(process.env.QA_SCREENSHOTS){fs.mkdirSync(process.env.QA_SCREENSHOTS,{recursive:true});await p.screenshot({path:path.join(process.env.QA_SCREENSHOTS,name+'.png'),fullPage:true});}};
 try{for(const width of [2560,1920,1536,1440,1366,1280,1040,1024,390,320]){
  const page=await browser.newPage({viewport:{width,height:1050},hasTouch:width<600,isMobile:width<600,ignoreHTTPSErrors:true});page.on('pageerror',e=>errors.push(e.message));
  if(!process.env.SITE_URL)await page.route('https://**/*',r=>{
   const name=r.request().url().split('/').pop();const file=process.env.QA_ICON_CACHE&&path.join(process.env.QA_ICON_CACHE,name);
   return file&&fs.existsSync(file)?r.fulfill({path:file,contentType:'image/jpeg'}):r.abort();
  });
  await page.goto(base,{waitUntil:'domcontentloaded'});
  assert.equal(await page.locator('.welcome-class h2 img').count(),13);
  assert.equal(await page.locator('.welcome-spec img').count(),40);
  assert.ok((await page.locator('#welcomePanel h1').textContent()).includes('PvP modifiers'));
  assert.equal((await page.locator('#welcomePanel h1').textContent()).trim().endsWith('.'),false);
  assert.equal(await page.locator('#welcomePanel > p:not(.docs-eyebrow) br').count(),1);
  assert.equal(await page.locator('.welcome-features').count(),0);
  assert.equal(await page.title(),'WoW PvP Talent Lab');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
  if([1440,390].includes(width))await shot(page,`new-home-${width}`);
  await page.locator('.welcome-spec[data-class="Paladin"][data-spec="Holy"]').click();
  await page.waitForFunction(()=>document.querySelector('#treeTitle').textContent==='Holy Paladin');
  await page.locator('#heroSelect').selectOption('Lightsmith');
  const rows=await page.locator('#heroTree .talent-node').evaluateAll(ns=>new Set(ns.map(n=>Math.round(n.getBoundingClientRect().top))).size);
  assert.equal(rows,5,'Lightsmith must have five aligned source rows');
  const rects=await page.locator('.tree-card').evaluateAll(ns=>ns.map(n=>{const r=n.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height};}));
  if(width<=1040)assert.ok(rects[1].y>=rects[0].y+rects[0].h-1&&rects[2].y>=rects[1].y+rects[1].h-1,'Trees must stack only at the narrow breakpoint');
  else assert.equal(new Set(rects.map(r=>Math.round(r.y))).size,1,`Trees must stay on one row at ${width}px`);
  assert.equal(await page.title(),'Holy Paladin · WoW PvP Talent Lab');
  assert.match(await page.locator('#buildInfo').innerText(), /(?:Verified|Built) \d{2}\.\d{2}\.\d{4}, \d{2}:\d{2}/);
  assert.equal(await page.locator('#homeBrand img[src="app-icon.svg"]').count(),1);
  if(width>=701)assert.ok(await page.locator('.talent-node').evaluateAll(ns=>ns.every(n=>n.getBoundingClientRect().width>=36)));
  if(width===1366){
   await page.locator('#homeBrand').click();
   assert.equal(await page.evaluate(()=>document.body.classList.contains('welcome-active')),true);
   assert.equal(await page.title(),'WoW PvP Talent Lab');
   assert.equal(new URL(page.url()).hash,'');
   await page.locator('.welcome-spec[data-class="Paladin"][data-spec="Holy"]').click();
   await page.waitForFunction(()=>document.querySelector('#treeTitle').textContent==='Holy Paladin');
  }
  if([1920,1440,390].includes(width))await shot(page,`lightsmith-${width}`);
  await page.locator('[data-tab="compendium"]').click();
  await page.locator('.compendium-item').first().click();
  const description=page.locator(width<=700?'.mobile-compendium-inline .mechanic-description': '#compendiumDetail .mechanic-description');
  await description.waitFor({state:'visible'});assert.ok((await description.innerText()).length>40);
  if([1440,390].includes(width))await shot(page,`mechanics-description-${width}`);
  await page.locator('.documentation-link').click();
  const frame=page.frameLocator('#docsFrame');await frame.locator('#spec-aura').waitFor();
  assert.equal(await frame.locator('a[href^="https://"]:not([target="_blank"])').count(),0);
  const before=page.url();const iframeUrl=await page.locator('#docsFrame').getAttribute('src');
  const popupEvent=page.waitForEvent('popup');await frame.locator('a[href^="https://github.com/"]').first().click();
  const popup=await popupEvent;await popup.close();assert.equal(page.url(),before);assert.equal(await page.locator('#docsFrame').getAttribute('src'),iframeUrl);
  await page.locator('#docsDialog [data-close-dialog]').click();assert.ok(await description.isVisible());
  await page.close();console.log(`UI refinements passed at ${width}px`);
 }assert.deepEqual(errors,[]);}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
