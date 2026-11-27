// Supplemental evidence is not a replacement for core tooltip verification.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const { chromium } = require("playwright");
const root = path.resolve(__dirname,"../web");
const dataDir = process.env.CLIENT_EVIDENCE_FIXTURE_DIR || path.join(root,"data");
const manifest=JSON.parse(fs.readFileSync(path.join(dataDir,"manifest.json")));
const report=JSON.parse(fs.readFileSync(path.join(dataDir,"client-evidence/report.json")));
const expectedSpecs=manifest.classes.flatMap(c=>c.specs.map(s=>s.spec_id)).sort((a,b)=>a-b);
assert.deepEqual(report.specs.map(s=>s.spec_id).sort((a,b)=>a-b),expectedSpecs);
assert.equal(report.source_snapshot_hash,manifest.source_snapshot_hash);
assert.equal(report.dataset_content_hash,manifest.content_hash);
assert.equal(report.build,manifest.tree_build);
let served=report;
const server=http.createServer((req,res)=>{
  const name=new URL(req.url,"http://localhost").pathname;
  if(name==="/data/manifest.json"||name==="/data/client-evidence/report.json"){
    res.setHeader("Content-Type","application/json");
    return res.end(JSON.stringify(name.endsWith("/report.json")?served:manifest));
  }
  const allowed=new Set(["/client-evidence.html","/client-evidence.css","/client-evidence.js","/favicon-v25-32.png"]);
  if(!allowed.has(name))return res.writeHead(404).end();
  const file=path.join(root,name.slice(1));
  res.setHeader("Content-Type",({".html":"text/html",".js":"text/javascript",".css":"text/css",".png":"image/png"})[path.extname(file)]);
  res.end(fs.readFileSync(file));
});
(async()=>{
 await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
 const launch={headless:true};if(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE)launch.executablePath=process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
 let browser;
 try{
  browser=await chromium.launch(launch);
  for(const width of [1440,390,320]){
    const context=await browser.newContext({viewport:{width,height:950}});
    const page=await context.newPage(),errors=[];
    page.on("pageerror",e=>errors.push(e.message));
    const url="http://127.0.0.1:"+server.address().port+"/client-evidence.html";
    served=report;
    await page.goto(url);
    await page.locator("#controls").waitFor({state:"visible"});
    assert.equal(await page.locator("#spec option").count(),expectedSpecs.length);
    if(report.status==="AVAILABLE"){
      assert.equal(report.client.pvp_talent_spells.length,report.client.pvp_talent_unique_spells);
      for(const spec of report.specs){
        await page.locator("#spec").selectOption(String(spec.spec_id));
        const records=report.client.pvp_talent_spells.filter(t=>t.availability_conditions.some(r=>r.SpecID===spec.spec_id));
        assert.equal(await page.locator("#talents .card").count(),records.length);
        assert.equal(await page.locator("#auras .card").count(),report.client.resolved_aura_operations.filter(a=>a.spec_id===spec.spec_id).length);
        assert.equal(await page.locator("#pending .card").count(),report.unresolved_flat_targets.filter(x=>x.spec_id===spec.spec_id).length);
        if(records.length){
          await page.locator("#search").fill(String(records[0].spell_id));
          assert.ok(await page.locator("#talents .card").count()>=1);
          await page.locator("#search").fill("not a real spell 9f8c1");
          assert.equal(await page.locator("#talents .card").count(),0);
          await page.locator("#search").clear();
        }
      }
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),
        "Page overflow: "+JSON.stringify(await page.evaluate(()=>[...document.querySelectorAll("body *")]
          .filter(n=>n.getBoundingClientRect().right>innerWidth+1).slice(0,8).map(n=>[n.tagName,n.id,n.className]))));
    }else{
      assert.equal(report.status,"UNAVAILABLE");
      assert.ok(!report.client);
      assert.match(await page.locator("#status").textContent(),/unavailable/i);
    }
    // Test source mismatch, explicit network-unavailable state and safe text.
    served={...report,dataset_content_hash:"wrong"};
    await page.reload();
    await page.waitForFunction(()=>document.getElementById("status").textContent.includes("does not match"));
    assert.equal(await page.locator("#controls").isVisible(),false);
    served={...report,status:"UNAVAILABLE",unavailable_reason:"test outage"};
    delete served.client;
    await page.reload();
    await page.locator("#controls").waitFor({state:"visible"});
    assert.match(await page.locator("#talents").textContent(),/No stale data/);
    const spec=report.specs[0], malicious="<img src=x onerror=alert(1)>";
    served={...report,status:"AVAILABLE",client:{pvp_talent_unique_spells:1,
      pvp_talent_spells:[{spell_id:1,name:malicious,description:malicious,effects:[],
        availability_conditions:[{SpecID:spec.spec_id,ID:1,LevelRequired:30}]}],
      resolved_aura_operations:[],source_tables:{},limitations:[]}};
    await page.goto(url+"?spec="+spec.slug);
    await page.locator("#controls").waitFor({state:"visible"});
    assert.match(await page.locator("#talents .card h3").textContent(),/<img src=x/);
    assert.equal(await page.locator("#talents img").count(),0);
    assert.deepEqual(errors,[]);
    await context.close();
    console.log("Supplemental evidence: "+expectedSpecs.length+" specs; "+width+"px; "+report.status+"; source mismatch, outage and safe text passed.");
  }
 }finally{if(browser)await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
