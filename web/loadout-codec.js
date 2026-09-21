/* Blizzard ClassTalentImportExport format, version 2, LSB-first six-bit alphabet.
 * Node order includes other specs and inactive nodes; never derive it from visible nodes.
 * https://github.com/Gethe/wow-ui-source/blob/live/Interface/AddOns/Blizzard_PlayerSpells/ClassTalents/Blizzard_ClassTalentImportExport.lua
 */
(function(root) {
 const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
 function reader(code) {
  if(!/^[A-Za-z0-9+/]+$/.test(code)||code.length>4096)throw Error('Invalid talent string. Paste the complete in-game export string.');
  let offset=0;
  return {read(n){if(offset+n>code.length*6)throw Error('The talent string is incomplete.');let value=0;for(let i=0;i<n;i++,offset++)value+=((alphabet.indexOf(code[Math.floor(offset/6)])>>(offset%6))&1)*2**i;return value;},remaining(){return code.length*6-offset;}};
 }
 function header(code) {
  const stream=reader(code.trim());const version=stream.read(8),specId=stream.read(16),hash=[];
  if(version!==2)throw Error(`Unsupported talent string version ${version}. Export a new string from the current game client.`);
  for(let i=0;i<16;i++)hash.push(stream.read(8));return {stream,version,specId,hash};
 }
 function schema(data) {
  if(!data.serialization?.node_order?.length)throw Error('Import/export data is not available for this snapshot.');
  const nodes=new Map();
  for(const t of data.talents){let n=nodes.get(t.node_id);if(!n){n={id:t.node_id,max:t.tree_data.max_ranks,free:t.tree_data.free_node,type:t.tree_data.node_type,tree:t.tree_type,hero:t.hero_tree,entries:[]};nodes.set(n.id,n);}n.entries.push(t);}
  for(const n of nodes.values())n.entries.sort((a,b)=>a.tree_data.entry_index-b.tree_data.entry_index);
  for(const n of data.serialization.subtree_nodes||[])nodes.set(n.id,{id:n.id,type:'subtree',max:1,entries:n.entries});
  return nodes;
 }
 function decode(code,data) {
  const {stream,specId}=header(code);if(specId!==data.serialization?.spec_id)throw Error('This talent string belongs to another specialization.');
  const nodes=schema(data),selected=new Map();let hero=null;
  for(const id of data.serialization.node_order){
   if(!stream.read(1))continue;
   const purchased=Boolean(stream.read(1));let rank=1,choice=false,index=0,partial=false;
   if(purchased){partial=Boolean(stream.read(1));rank=partial?stream.read(6):null;choice=Boolean(stream.read(1));if(choice)index=stream.read(2);}
   const node=nodes.get(id);if(!node)throw Error(`This string selects an unavailable node (${id}). Its tree may be from another patch.`);
   rank=rank??node.max;
   if(rank<1||rank>node.max||(partial&&rank>=node.max))throw Error(`Invalid rank for node ${id}.`);
   if(choice!==(node.type==='choice'||node.type==='subtree')&&purchased)throw Error(`Choice mismatch at node ${id}.`);
   if(index>=node.entries.length)throw Error(`Invalid choice at node ${id}.`);
   if(!purchased&&!node.free)throw Error(`Unexpected granted node ${id}.`);
   if(node.type==='subtree'){hero=node.entries[index].name;continue;}
   selected.set(id,{entryIndex:index,rank});
  }
  if(stream.remaining()>5)throw Error('The string contains extra nodes from a different tree version.');
  while(stream.remaining())if(stream.read(1))throw Error('Invalid trailing data in talent string.');
  const heroes=new Set([...selected.keys()].filter(id=>!nodes.get(id).free).map(id=>nodes.get(id).hero).filter(Boolean));
  if(heroes.size>1||(hero&&heroes.size&& !heroes.has(hero)))throw Error('The string mixes incompatible hero trees.');
  hero=hero||[...heroes][0]||null;
  for(const id of selected.keys()){const n=nodes.get(id);if(n.free&&n.hero&&n.hero!==hero)selected.delete(id);}
  const totals={class:0,spec:0,hero:0};
  for(const [id,s] of selected){const n=nodes.get(id);if(!n.free)totals[n.tree]+=s.rank;}
  if(totals.class>34||totals.spec>34||totals.hero>13)throw Error('This build exceeds the current talent point limits.');
  return {selected,hero,specId};
 }
 function encode(data,selected,hero) {
  const nodes=schema(data),bits=[];const put=(n,v)=>{for(let i=0;i<n;i++)bits.push(Math.floor(v/2**i)%2);};
  put(8,2);put(16,data.serialization.spec_id);for(let i=0;i<16;i++)put(8,0);
  for(const id of data.serialization.node_order){const n=nodes.get(id);let s=selected.get(id);if(n?.free)s={rank:1,entryIndex:0};
   if(n?.type==='subtree'&&hero){const index=n.entries.findIndex(e=>e.name===hero);if(index>=0)s={entryIndex:index,rank:1};}
   if(!s||!n||(n.hero&&n.hero!==hero&&!n.free)){put(1,0);continue;}
   put(1,1);put(1,n.free?0:1);if(n.free)continue;
   const partial=s.rank<n.max;put(1,partial?1:0);if(partial)put(6,s.rank);
   const choice=n.type==='choice'||n.type==='subtree';put(1,choice?1:0);if(choice)put(2,s.entryIndex);
  }
  let out='';for(let i=0;i<bits.length;i+=6){let v=0;for(let j=0;j<6;j++)v+=(bits[i+j]||0)*2**j;out+=alphabet[v];}return out;
 }
 const api={header,decode,encode,schema};if(typeof module!=='undefined')module.exports=api;else root.WowLoadout=api;
})(globalThis);
