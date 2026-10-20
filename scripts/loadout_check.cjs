const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const codec=require('../web/loadout-codec.js');
const dir=path.resolve(__dirname,'../web/data');
const sample='CAQAAAAAAAAAAAAAAAAAAAAAAADswMWGjZmZmxMbwMzYmZAAAAAAAAAAYmZ2mBjZGLzYmhlFTzEDmZAQAMLz2CYsZAAYMjZMYgZGYCG';
const priest=JSON.parse(fs.readFileSync(path.join(dir,'priest-discipline.json')));
const parsed=codec.decode(sample,priest);
assert.equal(parsed.hero,'Voidweaver');
assert.equal(codec.encode(priest,parsed.selected,parsed.hero),sample);
assert.throws(()=>codec.decode(sample.slice(0,-3),priest),/incomplete/);
assert.throws(()=>codec.decode(sample+'A',priest),/extra nodes/);
assert.throws(()=>codec.header('not-a-code'),/Invalid/);
for(const filename of fs.readdirSync(dir).filter(f=>f.endsWith('.json')&&f!=='manifest.json')){
 const data=JSON.parse(fs.readFileSync(path.join(dir,filename)));
 const schema=codec.schema(data);
 for(const hero of new Set(data.talents.map(t=>t.hero_tree).filter(Boolean))){
  const encoded=codec.encode(data,new Map(),hero),decoded=codec.decode(encoded,data);
  assert.equal(decoded.hero,hero);assert.equal(codec.encode(data,decoded.selected,hero),encoded);
 }
 for(const node of schema.values()){
  if(node.type==='subtree'||node.free)continue;
  for(let index=0;index<(node.type==='choice'?node.entries.length:1);index++){
   for(let rank=1;rank<=node.max;rank++){
    const hero=node.hero||data.talents.find(t=>t.hero_tree)?.hero_tree;
    const selected=new Map([[node.id,{entryIndex:index,rank}]]);
    const encoded=codec.encode(data,selected,hero);
    const decoded=codec.decode(encoded,data);
    assert.deepEqual(decoded.selected.get(node.id),selected.get(node.id),`${filename} ${node.id} ${rank}`);
   }
  }
 }
}
console.log('Loadout codec: exact in-game fixture, all specs, hero choices, partial ranks, Apex, malformed strings passed.');
require('./numeric_evidence_check.cjs').checkDirectory(dir);
