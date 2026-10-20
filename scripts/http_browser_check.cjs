// HTTP-specific loading and service-worker regressions (file:// cannot cover these).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '../web');
const manifest = JSON.parse(fs.readFileSync(path.join(root,'data/manifest.json')));
const specs = manifest.classes.flatMap(c=>c.specs.map(s=>({...s,className:c.name})));
let delayedSlug = null;
const server = http.createServer((req,res)=>{
 const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));
 if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 const send=()=>fs.readFile(file,(error,body)=>{
  if(error){res.writeHead(404).end();return;}
  res.setHeader('Content-Type', ({'.js':'text/javascript','.json':'application/json','.html':'text/html','.css':'text/css'}[path.extname(file)]||'application/octet-stream'));
  res.end(body);
 });
 if(delayedSlug && name===`/data/${delayedSlug}.json`)setTimeout(send,500);
 else send();
});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const launch={headless:true};if(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE)launch.executablePath=process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
 const browser=await chromium.launch(launch);
 try{
  for(const width of [1440,390]){
   const context=await browser.newContext({viewport:{width,height:1000},isMobile:width<600,hasTouch:width<600});
   const page=await context.newPage(), errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto(`http://127.0.0.1:${server.address().port}/`);
   await page.locator('.welcome-spec').first().waitFor();
   const chosen=specs.find(s=>s.slug!== 'priest-discipline');
   delayedSlug=chosen.slug;
   await page.locator(`.welcome-spec[data-class="${chosen.className}"][data-spec="${chosen.name}"]`).click();
   await page.locator('#homeBrand').click();
   await page.locator('.welcome-spec[data-class="Priest"][data-spec="Discipline"]').click();
   await page.waitForFunction(()=>!document.querySelector('#specSelect').disabled);
   await new Promise(resolve=>setTimeout(resolve,800));
   assert.equal(await page.locator('#treeTitle').textContent(),'Discipline Priest','Obsolete request replaced the chosen spec');
   delayedSlug=null;
   // Every class/spec uses request-owned JSON through the actual HTTP app.
   for(const spec of specs){
    await page.locator('#homeBrand').click();
    await page.locator(`.welcome-spec[data-class="${spec.className}"][data-spec="${spec.name}"]`).click();
    await page.waitForFunction(({cls,name})=>!document.querySelector('#specSelect').disabled &&
      document.querySelector('#treeTitle').textContent===`${name} ${cls}` &&
      window.WOW_PVP_DATA.class_name===cls && window.WOW_PVP_DATA.spec_name===name,
      {cls:spec.className,name:spec.name});
    assert.ok(await page.locator('.talent-node').count()>25);
   }
   await page.evaluate(()=>navigator.serviceWorker.ready);
   await page.locator('#homeBrand').click();
   await page.reload({waitUntil:'domcontentloaded'});
   await page.waitForFunction(()=>!!navigator.serviceWorker.controller, null, {timeout:15000});
   await page.locator('.welcome-spec').first().waitFor();
   assert.deepEqual(errors,[]);
   await context.close();
   console.log(`HTTP JSON identity/cancellation and service-worker reload: ${specs.length} specs at ${width}px passed.`);
  }
 }finally{await browser.close();server.close();}
})().catch(error=>{console.error(error);server.close();process.exitCode=1;});
