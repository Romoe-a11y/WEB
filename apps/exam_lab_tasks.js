"use strict";
/* ================================================================
   WEB DEV EXAM LAB — task bank + assessment engine
   150 high-difficulty tasks derived from the course TDs, project
   sessions and expert extensions. Categories: HTML, CSS, Responsive,
   Debugging, Practical Projects, Mixed Challenges.
   ================================================================ */
const TASKS=[];
/* compact task builder: T(cat,diff,title,statement,constraints,deliverables,skills,rubric,hints,solution) */
function T(cat,diff,title,statement,constraints,deliverables,skills,rubric,hints,solution){
  const n=TASKS.filter(t=>t.cat===cat).length+1;
  TASKS.push({id:cat+"-"+n,cat,diff,title,statement,
    constraints:constraints||[],deliverables:deliverables||[],skills:skills||[],
    rubric:rubric||[],hints:hints||[],solution:solution||""});
}
/*__TASKS__*/

/* ================================================================
   ENGINE
   ================================================================ */
const CAT_META={
  html:{n:"HTML",cls:"html"},css:{n:"CSS",cls:"css"},responsive:{n:"Responsive",cls:"responsive"},
  debug:{n:"Debugging",cls:"debug"},project:{n:"Project",cls:"project"},mixed:{n:"Mixed",cls:"mixed"}
};
const DIFFS=["Hard","Very Hard","Expert"];
const diffCls=d=>"d-"+d.replace(/\s/g,"");
const PASS_MARK=60;

const LS="wdrevision_v2";
const todayStr=()=>new Date().toISOString().slice(0,10);
function blank(){return{attempts:{},exams:[],prefs:{theme:"light"}};}
let S=load();
function load(){try{return Object.assign(blank(),JSON.parse(localStorage.getItem(LS)||"{}"));}catch(e){return blank();}}
function save(){try{localStorage.setItem(LS,JSON.stringify(S));writeSummary();}catch(e){}}
function writeSummary(){ /* shared with the progress tracker */
  try{
    const best=S.exams.length?Math.max(...S.exams.map(e=>e.pct)):null;
    const weak=weakCategories(3).map(w=>CAT_META[w.cat].n);
    localStorage.setItem("wdrevision_v2_summary",JSON.stringify({
      bestPct:best,attempts:Object.keys(S.attempts).length,exams:S.exams.length,weak}));
  }catch(e){}
}
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
let toastT;function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),2400);}
const OUT_SCORE={got:1,partial:0.5,missed:0};
const OUT_LABEL={got:"Got it ✓",partial:"Partial",missed:"Missed"};

/* ---------- analytics over attempts ---------- */
function attempt(id){return S.attempts[id];}
function outcomeScore(id){const a=attempt(id);return a?OUT_SCORE[a.outcome]:null;}
function catTasks(cat){return TASKS.filter(t=>t.cat===cat);}
function catMastery(cat){const ts=catTasks(cat).filter(t=>attempt(t.id));
  if(!ts.length)return null;return Math.round(ts.reduce((s,t)=>s+OUT_SCORE[attempt(t.id).outcome],0)/ts.length*100);}
function catAttempted(cat){return catTasks(cat).filter(t=>attempt(t.id)).length;}
function overallMastery(){const done=TASKS.filter(t=>attempt(t.id));if(!done.length)return 0;
  return Math.round(done.reduce((s,t)=>s+OUT_SCORE[attempt(t.id).outcome],0)/done.length*100);}
function attemptedCount(){return TASKS.filter(t=>attempt(t.id)).length;}
function weakCategories(n){return Object.keys(CAT_META).map(cat=>({cat,m:catMastery(cat)}))
  .filter(x=>x.m!=null).sort((a,b)=>a.m-b.m).slice(0,n);}
function missedTasks(){return TASKS.filter(t=>{const a=attempt(t.id);return a&&a.outcome!=="got";});}
function skillMistakes(){ /* count partial/missed by skill -> frequently-missed concepts */
  const map={};missedTasks().forEach(t=>t.skills.forEach(sk=>{map[sk]=(map[sk]||0)+1;}));
  return Object.entries(map).map(([sk,c])=>({sk,c})).sort((a,b)=>b.c-a.c);}

/* ================== THEME ================== */
function applyTheme(){const t=(S.prefs&&S.prefs.theme)||"light";document.documentElement.setAttribute("data-theme",t);
  $("#themeIc").innerHTML=t==="dark"
    ?'<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
    :'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>';}
function toggleTheme(){S.prefs.theme=((S.prefs&&S.prefs.theme)==="dark")?"light":"dark";save();applyTheme();}

/* ================== TASK CARD ================== */
function taskCard(t,index,opts){
  opts=opts||{};const a=attempt(t.id);const open=opts.open;
  const statusTag=a?`<span class="tag ${a.outcome==="got"?"done":a.outcome}">${OUT_LABEL[a.outcome]}</span>`:"";
  return `<div class="panel task ${open?"open":""}" data-id="${t.id}">
    <div class="task-head" onclick="toggleTask('${t.id}')">
      <div class="task-num">${index!=null?index:t.id.split("-")[1]}</div>
      <div class="task-tt"><b>${esc(t.title)}</b>
        <div class="task-meta">
          <span class="tag cat ${CAT_META[t.cat].cls}">${CAT_META[t.cat].n}</span>
          <span class="tag ${diffCls(t.diff)}">${esc(t.diff)}</span>
          ${statusTag}
          <span class="small muted">#${t.id}</span>
        </div>
      </div>
      <svg class="task-caret" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="task-body">
      <div class="block"><h4>📋 Problem statement</h4><p class="statement">${t.statement}</p></div>
      ${t.constraints.length?`<div class="block"><h4>⛓️ Constraints</h4><ul>${t.constraints.map(c=>`<li>${c}</li>`).join("")}</ul></div>`:""}
      ${t.deliverables.length?`<div class="block"><h4>📦 Expected deliverables</h4><ul>${t.deliverables.map(c=>`<li>${c}</li>`).join("")}</ul></div>`:""}
      ${t.skills.length?`<div class="block"><h4>🎯 Skills tested</h4><div class="task-meta">${t.skills.map(s=>`<span class="chip">${esc(s)}</span>`).join("")}</div></div>`:""}
      ${t.rubric.length?`<div class="block"><h4>✅ Evaluation criteria</h4><table class="rubric">${t.rubric.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table></div>`:""}
      ${t.hints.length?`<details class="block"><summary style="cursor:pointer;font-weight:800;color:var(--amber)">💡 Show hints (${t.hints.length})</summary>${t.hints.map(h=>`<div class="hint">${h}</div>`).join("")}</details>`:""}
      ${t.solution?`<details class="solution block"><summary>🔓 Reveal model solution</summary><div class="sol-inner">${t.solution}</div></details>`:""}
      <div class="self-grade">
        <span class="lbl">Self-assess:</span>
        <button class="btn sm ${a&&a.outcome==="got"?"primary":""}" onclick="grade('${t.id}','got')">Got it ✓</button>
        <button class="btn sm ${a&&a.outcome==="partial"?"primary":""}" onclick="grade('${t.id}','partial')">Partial</button>
        <button class="btn sm ${a&&a.outcome==="missed"?"coral":""}" onclick="grade('${t.id}','missed')">Missed</button>
        ${a?`<button class="btn sm ghost danger" onclick="grade('${t.id}',null)">Clear</button>`:""}
      </div>
    </div>
  </div>`;
}
let openSet=new Set();
function toggleTask(id){const card=document.querySelector(`.task[data-id="${id}"]`);if(!card)return;
  if(openSet.has(id))openSet.delete(id);else openSet.add(id);card.classList.toggle("open");}
function grade(id,outcome){
  if(outcome===null||outcome==="null"){delete S.attempts[id];}
  else S.attempts[id]={outcome,at:todayStr()};
  save();
  if(examState.active){examState.answers[id]=outcome;renderExamDots();}
  else{const card=document.querySelector(`.task[data-id="${id}"]`);
    if(card){const wasOpen=openSet.has(id);const idx=card.querySelector(".task-num").textContent;
      card.outerHTML=taskCard(TASKS.find(t=>t.id===id),idx,{open:wasOpen});}
    updateBankChip();}
  toast(outcome?`Marked: ${OUT_LABEL[outcome]}`:"Cleared");
}

/* ================== BROWSE VIEW ================== */
let filters={q:"",cat:"all",diff:"all",status:"all"};
function renderBrowse(){
  const v=$("#view-browse");
  v.innerHTML=`
  <div class="grid cols-4" style="margin-bottom:14px">
    <div class="panel stat"><div class="lbl">Task Bank</div><div class="val" style="color:var(--coral)">${TASKS.length}</div><div class="sub">high-difficulty tasks</div></div>
    <div class="panel stat"><div class="lbl">Attempted</div><div class="val" style="color:var(--blue)">${attemptedCount()}</div><div class="sub">${Math.round(attemptedCount()/TASKS.length*100)}% of bank</div></div>
    <div class="panel stat"><div class="lbl">Mastery</div><div class="val" style="color:var(--teal)">${overallMastery()}%</div><div class="sub">across attempted tasks</div></div>
    <div class="panel stat"><div class="lbl">Mock Exams</div><div class="val" style="color:var(--purple)">${S.exams.length}</div><div class="sub">${S.exams.length?"best "+Math.max(...S.exams.map(e=>e.pct))+"%":"none yet"}</div></div>
  </div>
  <div class="filterbar">
    <input type="search" id="fq" placeholder="Search titles, statements, skills…" value="${esc(filters.q)}">
    <select id="fdiff"><option value="all">All difficulty</option>${DIFFS.map(d=>`<option ${filters.diff===d?"selected":""}>${d}</option>`).join("")}</select>
    <select id="fstatus"><option value="all">All status</option><option value="todo" ${filters.status==="todo"?"selected":""}>Not attempted</option><option value="got" ${filters.status==="got"?"selected":""}>Got it</option><option value="weak" ${filters.status==="weak"?"selected":""}>Partial / Missed</option></select>
  </div>
  <div class="seg" id="catSeg" style="margin-bottom:14px">
    <button data-cat="all" class="${filters.cat==="all"?"active":""}">All (${TASKS.length})</button>
    ${Object.keys(CAT_META).map(c=>`<button data-cat="${c}" class="${filters.cat===c?"active":""}">${CAT_META[c].n} (${catTasks(c).length})</button>`).join("")}
  </div>
  <div id="taskList"></div>`;
  $("#fq").addEventListener("input",e=>{filters.q=e.target.value;renderList();});
  $("#fdiff").addEventListener("change",e=>{filters.diff=e.target.value;renderList();});
  $("#fstatus").addEventListener("change",e=>{filters.status=e.target.value;renderList();});
  $("#catSeg").addEventListener("click",e=>{const b=e.target.closest("button[data-cat]");if(b){filters.cat=b.dataset.cat;renderBrowse();}});
  renderList();
}
function filteredTasks(){
  const q=filters.q.trim().toLowerCase();
  return TASKS.filter(t=>{
    if(filters.cat!=="all"&&t.cat!==filters.cat)return false;
    if(filters.diff!=="all"&&t.diff!==filters.diff)return false;
    const a=attempt(t.id);
    if(filters.status==="todo"&&a)return false;
    if(filters.status==="got"&&!(a&&a.outcome==="got"))return false;
    if(filters.status==="weak"&&!(a&&a.outcome!=="got"))return false;
    if(q){const hay=(t.title+" "+t.statement+" "+t.skills.join(" ")+" "+t.id).toLowerCase();if(!hay.includes(q))return false;}
    return true;
  });
}
function renderList(){
  const list=filteredTasks();const el=$("#taskList");if(!el)return;
  if(!list.length){el.innerHTML=`<div class="empty">No tasks match these filters.</div>`;return;}
  el.innerHTML=list.map((t,i)=>taskCard(t,i+1,{open:openSet.has(t.id)})).join("");
}
function updateBankChip(){$("#bankCount").textContent=TASKS.length;}

/* ================== EXAM SIMULATION ================== */
let examState={active:false,ids:[],idx:0,answers:{},timeLeft:0,iv:null,config:null};
function renderExamConfig(){
  const v=$("#view-exam");
  if(examState.active){renderExamRunner();return;}
  v.innerHTML=`
  <div class="panel pad">
    <h2 style="margin-bottom:6px">⏱️ Generate a Mock Exam</h2>
    <p class="muted small" style="margin:0 0 16px">Build a randomized, timed assessment from the task bank. Work each task on paper or in a code editor, then self-grade against the rubric. Score ≥ ${PASS_MARK}% to pass.</p>
    <div class="grid cols-2">
      <div>
        <label class="fl">Number of tasks</label>
        <select id="exCount">${[5,8,10,15,20].map(n=>`<option ${n===8?"selected":""}>${n}</option>`).join("")}</select>
      </div>
      <div>
        <label class="fl">Time limit (minutes)</label>
        <select id="exTime">${[15,20,30,45,60,90].map(n=>`<option ${n===30?"selected":""}>${n}</option>`).join("")}</select>
      </div>
    </div>
    <div class="divider"></div>
    <label class="fl">Topics</label>
    <div class="seg" id="exCats" style="margin-bottom:14px">
      <button data-c="all" class="active">All topics</button>
      ${Object.keys(CAT_META).map(c=>`<button data-c="${c}">${CAT_META[c].n}</button>`).join("")}
    </div>
    <label class="fl">Difficulty</label>
    <div class="seg" id="exDiffs" style="margin-bottom:18px">
      <button data-d="all" class="active">All</button>
      ${DIFFS.map(d=>`<button data-d="${d}">${d}</button>`).join("")}
    </div>
    <button class="btn primary" style="width:100%" onclick="startExam()">🚀 Start timed exam</button>
  </div>
  <div class="panel pad" style="margin-top:14px">
    <h2 style="margin-bottom:6px">📁 Past Mock Exams</h2>
    ${S.exams.length?`<div style="margin-top:10px">${S.exams.slice().reverse().map(e=>`<div class="panel pad" style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div><b>${esc(e.date)}</b> · ${e.count} tasks · ${esc((e.cats||["All"]).join(", "))}</div>
        <div><span class="tag ${e.pass?"done":"missed"}">${e.pass?"PASS":"FAIL"} · ${e.pct}%</span></div></div>`).join("")}</div>`
      :`<p class="muted small">No mock exams completed yet — generate one above.</p>`}
  </div>`;
  $("#exCats").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;toggleSeg($("#exCats"),b,"all");});
  $("#exDiffs").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;toggleSeg($("#exDiffs"),b,"all");});
}
function toggleSeg(container,btn,allKey){
  const all=container.querySelector(`button[data-c="${allKey}"],button[data-d="${allKey}"]`);
  if(btn===all){container.querySelectorAll("button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");return;}
  if(all)all.classList.remove("active");
  btn.classList.toggle("active");
  if(!container.querySelector("button.active"))(all||btn).classList.add("active");
}
function readSeg(container,attr){const act=Array.from(container.querySelectorAll("button.active")).map(b=>b.dataset[attr]);
  return act.includes("all")||!act.length?"all":act;}
function startExam(){
  const count=+$("#exCount").value;const time=+$("#exTime").value;
  const cats=readSeg($("#exCats"),"c");const diffs=readSeg($("#exDiffs"),"d");
  let pool=TASKS.filter(t=>(cats==="all"||cats.includes(t.cat))&&(diffs==="all"||diffs.includes(t.diff)));
  if(pool.length<1){toast("No tasks match — widen your filters");return;}
  pool=pool.slice();for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const ids=pool.slice(0,Math.min(count,pool.length)).map(t=>t.id);
  examState={active:true,ids,idx:0,answers:{},timeLeft:time*60,iv:null,
    config:{cats:cats==="all"?["All"]:cats.map(c=>CAT_META[c].n),time}};
  document.body.classList.add("in-exam");
  examState.iv=setInterval(tickExam,1000);
  renderExamBar();renderExamRunner();window.scrollTo(0,0);
  toast(`Exam started · ${ids.length} tasks · ${time} min`);
}
function tickExam(){examState.timeLeft--;const el=$("#examTimer");
  if(examState.timeLeft<=0){clearInterval(examState.iv);finishExam(true);return;}
  if(el){el.textContent=fmtTime(examState.timeLeft);el.classList.toggle("warn",examState.timeLeft<=60);}}
function fmtTime(s){const m=Math.floor(s/60);return String(m).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}
function renderExamBar(){
  $("#examTimer").textContent=fmtTime(examState.timeLeft);
  $("#examPos").textContent=`Task ${examState.idx+1} / ${examState.ids.length}`;
  renderExamDots();
}
function renderExamDots(){
  const wrap=$("#examDots");if(!wrap)return;
  wrap.innerHTML=examState.ids.map((id,i)=>{const o=examState.answers[id];
    const cls=(o?o==="got"?"done":o:"")+(i===examState.idx?" cur":"");
    return `<i class="${cls}" title="Task ${i+1}" onclick="gotoExam(${i})" style="cursor:pointer"></i>`;}).join("");
}
function gotoExam(i){examState.idx=Math.max(0,Math.min(examState.ids.length-1,i));renderExamBar();renderExamRunner();window.scrollTo(0,0);}
function renderExamRunner(){
  const v=$("#view-exam");const t=TASKS.find(x=>x.id===examState.ids[examState.idx]);
  v.innerHTML=`<div style="margin-bottom:10px" class="muted small">Solve this task, then self-grade at the bottom. Use Prev/Next or the dots above to navigate. The model solution is hidden until you reveal it.</div>
    ${taskCard(t,examState.idx+1,{open:true})}`;
}
function finishExam(auto){
  clearInterval(examState.iv);
  const ids=examState.ids;const ans=examState.answers;
  const scored=ids.map(id=>ans[id]?OUT_SCORE[ans[id]]:0);
  const pct=Math.round(scored.reduce((a,b)=>a+b,0)/ids.length*100);
  const pass=pct>=PASS_MARK;
  const catB={};ids.forEach(id=>{const t=TASKS.find(x=>x.id===id);catB[t.cat]=catB[t.cat]||{s:0,n:0};
    catB[t.cat].s+=ans[id]?OUT_SCORE[ans[id]]:0;catB[t.cat].n++;});
  ids.forEach(id=>{if(ans[id])S.attempts[id]={outcome:ans[id],at:todayStr()};});
  const exam={date:todayStr(),count:ids.length,pct,pass,cats:examState.config.cats,
    breakdown:Object.fromEntries(Object.entries(catB).map(([c,o])=>[c,Math.round(o.s/o.n*100)])),
    answered:Object.keys(ans).length};
  S.exams.push(exam);save();
  examState.active=false;document.body.classList.remove("in-exam");
  showExamResult(exam,auto);
}
function showExamResult(exam,auto){
  switchTab("exam");
  const v=$("#view-exam");
  const breakdown=Object.entries(exam.breakdown).map(([c,p])=>barRow(CAT_META[c].n,p)).join("");
  v.innerHTML=`<div class="panel pad" style="text-align:center">
    ${auto?`<p class="tag missed" style="display:inline-block;margin-bottom:10px">⏰ Time expired</p>`:""}
    <div class="result-ring" style="--p:${exam.pct};--c:${exam.pass?"var(--green)":"var(--coral)"}">
      <div class="rc"><b>${exam.pct}%</b><span>${exam.pass?"Passed":"Below pass"}</span></div></div>
    <h2 style="margin-top:16px">${exam.pass?"🎉 You passed the mock exam":"📈 Keep going — not a pass yet"}</h2>
    <p class="muted">${exam.answered}/${exam.count} tasks self-graded · pass mark ${PASS_MARK}% · ${esc(exam.date)}</p>
    <div style="max-width:480px;margin:16px auto 0;text-align:left">${breakdown}</div>
    <div style="display:flex;gap:8px;justify-content:center;margin-top:18px;flex-wrap:wrap">
      <button class="btn primary" onclick="examState.active=false;renderExamConfig()">New exam</button>
      <button class="btn" onclick="switchTab('stats')">View progress</button>
    </div>
  </div>`;
  toast(exam.pass?"Mock exam passed 🎉":"Mock exam recorded");
}
function barRow(name,pct,color){return `<div class="barrow"><span class="nm">${esc(name)}</span><div style="flex:2"><div class="bar"><i style="width:${pct}%;${color?'background:'+color:''}"></i></div></div><span class="pct">${pct}%</span></div>`;}

/* ================== STATS / MISTAKES ================== */
function renderStats(){
  const v=$("#view-stats");const exams=S.exams;
  const sm=skillMistakes();const weak=weakCategories(6);
  v.innerHTML=`
  <div class="grid cols-4" style="margin-bottom:14px">
    <div class="panel stat"><div class="lbl">Overall mastery</div><div class="val" style="color:var(--teal)">${overallMastery()}%</div><div class="sub">${attemptedCount()}/${TASKS.length} attempted</div></div>
    <div class="panel stat"><div class="lbl">Mock exams</div><div class="val" style="color:var(--purple)">${exams.length}</div><div class="sub">${exams.length?"avg "+Math.round(exams.reduce((a,e)=>a+e.pct,0)/exams.length)+"%":"—"}</div></div>
    <div class="panel stat"><div class="lbl">Best score</div><div class="val" style="color:var(--green)">${exams.length?Math.max(...exams.map(e=>e.pct))+"%":"—"}</div><div class="sub">across all mocks</div></div>
    <div class="panel stat"><div class="lbl">Weak tasks</div><div class="val" style="color:var(--coral)">${missedTasks().length}</div><div class="sub">partial or missed</div></div>
  </div>
  <div class="grid cols-2">
    <div class="panel pad">
      <h2 style="margin-bottom:10px">📊 Mastery by Topic</h2>
      ${Object.keys(CAT_META).map(c=>{const m=catMastery(c);return barRow(CAT_META[c].n+" ("+catAttempted(c)+"/"+catTasks(c).length+")",m==null?0:m,m==null?"var(--line2)":m<PASS_MARK?"var(--coral)":"var(--green)");}).join("")}
    </div>
    <div class="panel pad">
      <h2 style="margin-bottom:10px">📈 Improvement Curve</h2>
      ${exams.length?sparkline(exams.map(e=>e.pct),exams.map(e=>e.date)):`<div class="empty">Complete mock exams to see your trend.</div>`}
      ${exams.length>=2?`<p class="muted small" style="margin-top:10px">Change since first mock: <b style="color:${exams[exams.length-1].pct-exams[0].pct>=0?'var(--green)':'var(--coral)'}">${exams[exams.length-1].pct-exams[0].pct>=0?"+":""}${exams[exams.length-1].pct-exams[0].pct}%</b></p>`:""}
    </div>
  </div>
  <div class="grid cols-2" style="margin-top:14px">
    <div class="panel pad">
      <h2 style="margin-bottom:10px">🔁 Frequently-Missed Concepts</h2>
      ${sm.length?sm.slice(0,10).map(x=>`<div class="barrow"><span class="nm">${esc(x.sk)}</span><span class="tag missed">${x.c} miss${x.c>1?"es":""}</span></div>`).join(""):`<p class="muted small">No misses recorded yet — mark tasks Partial/Missed to surface weak concepts.</p>`}
    </div>
    <div class="panel pad">
      <h2 style="margin-bottom:10px">🧭 Personalized Recommendations</h2>
      ${recommendations()}
    </div>
  </div>
  <div class="panel pad" style="margin-top:14px">
    <h2 style="margin-bottom:10px">🩹 Tasks to Redo</h2>
    ${missedTasks().length?missedTasks().slice(0,12).map(t=>`<div class="panel" style="display:flex;gap:10px;align-items:center;padding:10px 12px;margin-bottom:8px">
        <span class="tag ${attempt(t.id).outcome}">${OUT_LABEL[attempt(t.id).outcome]}</span>
        <div style="flex:1;min-width:0"><b style="font-size:13.5px">${esc(t.title)}</b><div class="small muted">${CAT_META[t.cat].n} · ${esc(t.diff)}</div></div>
        <button class="btn sm" onclick="openTaskFromStats('${t.id}')">Open</button></div>`).join(""):`<p class="muted small">Nothing flagged. Great work — or you haven't attempted tasks yet.</p>`}
  </div>
  <div class="panel pad" style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;justify-content:space-between;align-items:center">
    <div><b>Data</b><p class="muted small" style="margin:2px 0 0">Your attempts and exams are saved in this browser and shared with the Progress Tracker.</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn sm" onclick="exportRev()">Export</button>
      <button class="btn sm danger" onclick="resetRev()">Reset</button>
    </div>
  </div>`;
}
function sparkline(values,labels){const max=Math.max(...values,100);
  return `<div style="display:flex;align-items:flex-end;gap:5px;height:90px">${values.map((v,i)=>`<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center" title="${esc(labels[i])}: ${v}%"><div style="width:100%;background:linear-gradient(180deg,var(--teal),var(--blue));border-radius:4px 4px 0 0;height:${Math.max(4,v/max*100)}%"></div></div>`).join("")}</div>`;}
function recommendations(){
  const recs=[];const weak=weakCategories(2);
  weak.forEach(w=>{if(w.m<PASS_MARK)recs.push(`Prioritise <b>${CAT_META[w.cat].n}</b> — current mastery is only ${w.m}%. Redo its Hard tasks before attempting Expert ones.`);});
  const todo=TASKS.length-attemptedCount();if(todo>0)recs.push(`You still have <b>${todo}</b> un-attempted tasks. Aim for full coverage before exam day.`);
  const sm=skillMistakes();if(sm.length)recs.push(`Your most-missed concept is <b>${esc(sm[0].sk)}</b> — review it in the Progress Tracker curriculum, then redo related tasks.`);
  if(S.exams.length){const last=S.exams[S.exams.length-1];if(!last.pass)recs.push(`Your last mock scored ${last.pct}% (pass is ${PASS_MARK}%). Take another after revising your two weakest topics.`);
    else recs.push(`Last mock passed at ${last.pct}%. Raise the difficulty filter to <b>Expert</b> for your next exam.`);}
  if(!recs.length)recs.push("Attempt some tasks and run a mock exam to unlock tailored recommendations.");
  return `<ul style="margin:0;padding-left:18px">${recs.map(r=>`<li style="margin:6px 0">${r}</li>`).join("")}</ul>`;
}
function openTaskFromStats(id){switchTab("browse");filters={q:"",cat:"all",diff:"all",status:"all"};openSet.add(id);renderBrowse();
  setTimeout(()=>{const c=document.querySelector(`.task[data-id="${id}"]`);if(c)c.scrollIntoView({behavior:"smooth",block:"center"});},80);}
function exportRev(){const blob=new Blob([JSON.stringify(S,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="exam-lab-backup-"+todayStr()+".json";a.click();toast("Backup downloaded");}
function resetRev(){if(confirm("Reset all attempts and mock exams? This cannot be undone."))
  {localStorage.removeItem(LS);S=blank();save();applyTheme();switchTab("browse");renderBrowse();toast("Progress reset");}}

/* ================== TABS / INIT ================== */
function switchTab(tab){
  $$("#tabs .tab").forEach(t=>t.classList.toggle("active",t.dataset.tab===tab));
  $$(".view").forEach(v=>v.classList.remove("active"));
  $("#view-"+tab).classList.add("active");
  if(tab==="browse")renderBrowse();
  if(tab==="exam")renderExamConfig();
  if(tab==="stats")renderStats();
}
function init(){
  applyTheme();updateBankChip();
  $("#tabs").addEventListener("click",e=>{const t=e.target.closest(".tab");if(t){
    if(examState.active&&t.dataset.tab!=="exam"){if(!confirm("Leave the exam in progress? It will not be saved."))return;
      clearInterval(examState.iv);examState.active=false;document.body.classList.remove("in-exam");}
    switchTab(t.dataset.tab);}});
  $("#themeToggle").addEventListener("click",toggleTheme);
  $("#examPrev").addEventListener("click",()=>gotoExam(examState.idx-1));
  $("#examNext").addEventListener("click",()=>gotoExam(examState.idx+1));
  $("#examFinish").addEventListener("click",()=>{if(confirm("Finish and grade the exam now?"))finishExam(false);});
  renderBrowse();
}
init();
