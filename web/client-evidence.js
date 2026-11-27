"use strict";
(() => {
  const $ = id => document.getElementById(id);
  const el = (tag, value, parent, cls) => {
    const node = document.createElement(tag);
    if (value !== undefined) node.textContent = String(value);
    if (cls) node.className = cls;
    if (parent) parent.append(node);
    return node;
  };
  const rawNumber = v => v === null || v === undefined ? "Unresolved" : String(v);
  function table(parent, headers, rows) {
    const wrap = el("div", undefined, parent, "table-wrap");
    const t = el("table", undefined, wrap), head = el("tr", undefined, el("thead", undefined, t));
    for (const h of headers) el("th", h, head);
    const body=el("tbody",undefined,t);
    for(const values of rows) {
      const row=el("tr",undefined,body);
      for(const v of values) el("td",rawNumber(v),row);
    }
  }
  function card(parent, heading, text) {
    const c = el("article",undefined,parent,"card");
    el("h3",heading,c); if(text) el("p",text,c);
    return c;
  }
  function wowhead(parent,id) {
    if(!Number.isSafeInteger(Number(id)) || Number(id)<=0) return;
    const a=el("a","Open spell reference",parent);
    a.href="https://www.wowhead.com/spell="+Number(id);
    a.target="_blank";a.rel="noopener noreferrer";
  }
  function magnitude(p) {
    const unit=p.unit==="percent"?"%":" sec";
    return p.old+unit+" to "+p.new+unit+" (client token "+p.expression+")";
  }
  function render(report) {
    const sid=Number($("spec").value), q=$("search").value.trim().toLowerCase();
    const client=report.client;
    for (const id of ["talents","auras","pending","summary"]) $(id).replaceChildren();
    const spec=report.specs.find(s=>s.spec_id===sid);
    if(!spec) return;
    if(client) {
      const talents=client.pvp_talent_spells.filter(t=>t.availability_conditions.some(r=>r.SpecID===sid))
        .filter(t=>!q||String(t.name).toLowerCase().includes(q)||String(t.spell_id).includes(q))
        .sort((a,b)=>String(a.name).localeCompare(String(b.name)));
      const adjustments=client.resolved_aura_operations.filter(a=>a.spec_id===sid);
      el("p",talents.length+" PvP talent records shown for "+spec.spec_name+" "+spec.class_name+".", $("summary"));
      for(const t of talents) {
        const c=card($("talents"),(t.name||"Unknown spell")+" | "+t.spell_id);
        const own=t.availability_conditions.filter(r=>r.SpecID===sid);
        for(const r of own) el("small","Talent entry "+r.ID+" | level "+r.LevelRequired+
          (r.PlayerConditionID?" | condition "+r.PlayerConditionID:"")+
          (r.OverridesSpellID?" | overrides "+r.OverridesSpellID:""),c);
        const projected=adjustments.flatMap(a=>a.targets.filter(x=>x.spell_id===t.spell_id&&x.ownership==="PVP_TALENT")
          .map(x=>[x.effect_index,x.base_value,x.adjusted_raw_value,a.game_effect_id,
            x.display_projection?magnitude(x.display_projection):"Not proved"]));
        if(projected.length) {
          el("p","Exact additive raw projections (not a PvE comparison)",c,"good");
          table(c,["Effect","Client base","Adjusted","Aura effect ID","Display magnitude"],projected);
        }
        if(t.description&&!t.description.includes("$")) el("p",t.description,c);
        wowhead(c,t.spell_id);
        const d=el("details",undefined,c);
        el("summary","Inspect raw client description and effects",d);
        el("p","Client tokens and coefficients are unresolved; this is not a final PvP tooltip.",d,"warning");
        el("pre",t.description||"No client description",d);
        table(d,["Effect","Base points","PvP coefficient","SP coefficient","AP coefficient","Effect ID"],
          t.effects.map(e=>[Number(e.EffectIndex)+1,e.EffectBasePointsF,e.PvpMultiplier,e.EffectBonusCoefficient,e.BonusCoefficientFromAP,e.ID]));
      }
      if(!talents.length) el("p","No matching PvP talent records.",$("talents"));
      for(const a of adjustments) {
        const c=card($("auras"),"Aura effect "+a.game_effect_id+" | "+a.status.replaceAll("_"," "),
          "Raw delta: "+a.raw_delta+" | aura spell "+a.aura_spell_id+" | PvP multiplier "+a.aura_pvp_multiplier);
        if(a.affected_unit_type) el("p","Unit category: "+a.affected_unit_type+"; effective PvP effect magnitude "+a.effective_pvp_percent+
          "%. Individual summon ownership is unresolved.",c,"warning");
        for(const t of a.targets) {
          const base=t.base_category_ms!==undefined?t.base_category_ms:t.base_value;
          const next=t.adjusted_category_ms!==undefined?t.adjusted_category_ms:t.adjusted_raw_value;
          const suffix=t.base_category_ms!==undefined?" ms (category recovery)":" raw points";
          el("p",(t.name||"Spell "+t.spell_id)+" | "+rawNumber(base)+" to "+rawNumber(next)+suffix+
            " | "+t.ownership.replaceAll("_"," "),c);
          if(t.display_projection) el("p",magnitude(t.display_projection),c,"good");
        }
      }
      if(!adjustments.length) el("p","No supplemental conditional aura records for this specialization.",$("auras"));
    } else {
      el("p","Exact-client supplemental dataset unavailable. No stale data substituted.",$("talents"),"warning");
    }
    const pending=report.unresolved_flat_targets.filter(x=>x.spec_id===sid);
    for(const t of pending) {
      const c=card($("pending"),"Spell "+t.spell_id+" | effect "+t.effect_index,
        t.status.replaceAll("_"," ")+" | aura effect "+t.aura_game_effect_id+" | raw delta "+t.raw_delta);
      if(t.regular_specialization_baseline){
        const b=t.regular_specialization_baseline;
        el("p","Exact regular specialization baseline: "+b.raw_value+" to "+b.baseline_value+
          " raw points. PvP operation order remains unresolved.",c,"warning");
        table(c,["Regular aura effect ID","Source spell ID","Raw delta"],
          b.modifiers.map(m=>[m.game_effect_id,m.source_spell_id,m.raw_delta]));
        if(t.candidate_order_values) table(c,["Hypothesis (not a verified PvP value)","Raw value"],
          Object.entries(t.candidate_order_values).map(([k,v])=>[k.replaceAll("_"," "),v]));
      }
      wowhead(c,t.spell_id);
    }
    if(!pending.length) el("p","No remaining flat targets in the supplemental inventory.",$("pending"));
  }
  async function load() {
    try {
      const get=async url=>{const r=await fetch(url,{cache:"no-store"});if(!r.ok)throw Error("HTTP "+r.status);return r.json();};
      const [manifest,report]=await Promise.all([get("data/manifest.json"),get("data/client-evidence/report.json")]);
      if(report.schema!==1||report.build!==manifest.tree_build||
        report.dataset_content_hash!==manifest.content_hash||
        report.dataset_source_snapshot_hash!==manifest.source_snapshot_hash||report.source_snapshot_hash!==manifest.source_snapshot_hash) throw Error("Dataset identity mismatch");
      $("status").textContent=report.status==="AVAILABLE"?
        "Exact client build "+report.build+" | "+report.client.pvp_talent_unique_spells+" unique PvP talents | supplemental evidence":
        "Supplemental export unavailable for build "+report.build+". Core calculator remains independently verified.";
      $("status").className=report.status==="AVAILABLE"?"good":"warning";
      for(const s of report.specs) {
        const o=el("option",s.class_name+" | "+s.spec_name,$("spec"));o.value=s.spec_id;
      }
      const slug=new URLSearchParams(location.search).get("spec")||manifest.default_slug;
      const selected=report.specs.find(s=>s.slug===slug);
      if(selected)$("spec").value=selected.spec_id;
      $("controls").hidden=false;
      $("spec").addEventListener("change",()=>render(report));
      $("search").addEventListener("input",()=>render(report));
      const source=$("sources");
      el("p","Source snapshot SHA-256: "+report.source_snapshot_hash,source);
      if(report.client) {
        for(const [name,evidence] of Object.entries(report.client.source_tables)) {
          const p=el("p",name+" | SHA-256 "+evidence.sha256+" | ",source);
          const u=new URL(evidence.url);
          if(u.protocol==="https:"&&u.hostname==="wago.tools") {
            const a=el("a","Exact-build CSV",p);a.href=u.href;a.target="_blank";a.rel="noopener noreferrer";
          }
        }
        for(const note of report.client.limitations) el("p",note,source,"warning");
      }
      render(report);
    }catch(e){
      $("status").textContent="Supplemental evidence is unavailable or does not match this calculator snapshot. Refresh after publication.";
      $("status").className="warning";
    }
  }
  load();
})();
