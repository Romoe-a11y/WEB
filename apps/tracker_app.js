"use strict";
/* CURRICULUM: Module > Chapter > Concept */
const CURRICULUM = [
 {id:"m1",name:"Web Foundations",icon:"1",color:"var(--blue)",src:"Part I slides",
  desc:"How computing, the Internet and the Web came to be — and how the web actually works.",
  chapters:[
   {id:"m1c1",name:"Computing & Internet History",type:"Theory · Lecture",concepts:[
     {id:"c_history",n:"History of computing",d:"Abacus to transistor to microprocessor to GUI",tags:["theory"]},
     {id:"c_internet",n:"Birth of the Internet",d:"ARPANET, packet switching, TCP/IP, DNS, fibre",tags:["theory"]},
     {id:"c_webgen",n:"Web 1.0 / 2.0 / 3.0",d:"Read-only to read-write/social to semantic web",tags:["theory"]},
   ]},
   {id:"m1c2",name:"How the Web Works",type:"Theory · Lecture",concepts:[
     {id:"c_webparts",n:"Components of the Web",d:"Hyperlinks, pages, browsers, servers, URLs, HTTP",tags:["theory"]},
     {id:"c_frontback",n:"Front-end vs Back-end",d:"Client UI vs server logic, databases, languages",tags:["theory"]},
     {id:"c_fullstack",n:"Full-stack & frameworks",d:"Full-stack role; React/Vue/Angular; Express/Rails",tags:["theory"]},
   ]}
  ]},
 {id:"m2",name:"HTML Structure & Semantics",icon:"2",color:"var(--coral)",src:"TD1 · TD2",
  desc:"Build valid, well-structured, semantic and accessible HTML documents.",
  chapters:[
   {id:"m2c1",name:"Document Structure",type:"TD 1",concepts:[
     {id:"c_doctype",n:"DOCTYPE & HTML5",d:"The DOCTYPE declaration and why it must be first",tags:["coding"]},
     {id:"c_skeleton",n:"html / head / body",d:"Root element, metadata head, visible body",tags:["coding"]},
     {id:"c_metatitle",n:"title, meta & charset",d:"Tab title, UTF-8 charset, viewport, description",tags:["coding"]},
     {id:"c_nesting",n:"Nesting & well-formedness",d:"Proper open/close order, case, validity",tags:["coding","problem"]},
     {id:"c_tagselem",n:"Tags vs elements vs empty",d:"Start/content/end tags; void elements",tags:["theory"]},
   ]},
   {id:"m2c2",name:"Content Elements",type:"TD 2",concepts:[
     {id:"c_headings",n:"Heading hierarchy h1-h6",d:"Outline, single h1, logical ranking",tags:["coding","problem"]},
     {id:"c_textflow",n:"Paragraphs, br, hr",d:"Block text, line breaks vs separators",tags:["coding"]},
     {id:"c_lists",n:"Lists ul / ol / li (nested)",d:"Ordered, unordered, nested lists",tags:["coding"]},
     {id:"c_links",n:"Hyperlinks",d:"href, relative vs absolute, target, fragment",tags:["coding","problem"]},
     {id:"c_images",n:"Images & alt text",d:"src, meaningful alt, decorative images",tags:["coding","a11y"]},
   ]},
   {id:"m2c3",name:"Tables & Structured Data",type:"TD 2",concepts:[
     {id:"c_tables",n:"Table structure",d:"table / tr / th / td and thead/tbody/tfoot",tags:["coding"]},
     {id:"c_spans",n:"colspan & rowspan",d:"Merging cells without breaking the grid",tags:["coding","problem"]},
     {id:"c_tablea11y",n:"Accessible tables",d:"caption, scope, headers; data not layout",tags:["a11y"]},
   ]},
   {id:"m2c4",name:"Semantic HTML & SEO",type:"Expert extension",concepts:[
     {id:"c_semantic",n:"Semantic landmarks",d:"header, nav, main, section, article, aside, footer",tags:["coding","theory"]},
     {id:"c_outline",n:"Document outline",d:"Sectioning content and meaningful structure",tags:["problem"]},
     {id:"c_seo",n:"SEO foundations",d:"Title/meta description, headings, markup, alt",tags:["theory"]},
     {id:"c_multimedia",n:"Multimedia & embeds",d:"audio, video, figure/figcaption, iframe",tags:["coding"]},
   ]}
  ]},
 {id:"m3",name:"CSS Foundations",icon:"3",color:"var(--teal)",src:"TD3 · TD4",
  desc:"Style HTML with the cascade, selectors, colour, typography and specificity.",
  chapters:[
   {id:"m3c1",name:"Syntax & Application",type:"TD 3",concepts:[
     {id:"c_csssyntax",n:"CSS rule anatomy",d:"Selector { property: value } declarations",tags:["coding"]},
     {id:"c_cssmethods",n:"Inline / internal / external",d:"Three ways to apply CSS and when",tags:["theory","problem"]},
     {id:"c_selbasic",n:"Basic selectors",d:"Type, class, id, grouping, descendant",tags:["coding"]},
   ]},
   {id:"m3c2",name:"Visual Properties",type:"TD 3",concepts:[
     {id:"c_color",n:"Colour systems",d:"Named, hex, rgb/rgba, hsl; contrast",tags:["coding"]},
     {id:"c_bg",n:"Backgrounds",d:"background-color, image, gradient, position",tags:["coding"]},
     {id:"c_typography",n:"Typography",d:"font-family stacks, size units, weight, line-height",tags:["coding"]},
     {id:"c_textprops",n:"Text properties",d:"text-align, decoration, transform, spacing",tags:["coding"]},
   ]},
   {id:"m3c3",name:"Cascade, Specificity & Selectors",type:"TD 4 · Expert",concepts:[
     {id:"c_specificity",n:"Specificity",d:"inline > id > class > element; calculating winners",tags:["theory","problem"]},
     {id:"c_cascade",n:"Cascade & inheritance",d:"Source order, !important, inheritance",tags:["theory","problem"]},
     {id:"c_classid",n:"Classes vs IDs",d:"Reusable classes vs unique ids; naming",tags:["coding"]},
     {id:"c_advsel",n:"Advanced selectors",d:"Attribute, pseudo-class, pseudo-element, combinators",tags:["coding","problem"]},
     {id:"c_cssvars",n:"CSS custom properties",d:"--vars, var(), theming and reuse",tags:["coding"]},
   ]}
  ]},
 {id:"m4",name:"Box Model & Layout",icon:"4",color:"var(--amber)",src:"TD4 · Expert",
  desc:"Master the box model, positioning, stacking and page architecture.",
  chapters:[
   {id:"m4c1",name:"The Box Model",type:"TD 4",concepts:[
     {id:"c_boxmodel",n:"Box model",d:"content + padding + border + margin; size math",tags:["theory","problem"]},
     {id:"c_spacing",n:"Padding & margin",d:"Shorthand, margin collapse, auto centring",tags:["coding"]},
     {id:"c_boxsizing",n:"box-sizing",d:"content-box vs border-box",tags:["theory","problem"]},
     {id:"c_borders",n:"Borders & radius",d:"border styles, border-radius, outline",tags:["coding"]},
   ]},
   {id:"m4c2",name:"Positioning & Flow",type:"Expert extension",concepts:[
     {id:"c_display",n:"Display types",d:"block, inline, inline-block, none",tags:["theory","coding"]},
     {id:"c_position",n:"Positioning schemes",d:"static, relative, absolute, fixed, sticky",tags:["coding","problem"]},
     {id:"c_floatclear",n:"Float & clear",d:"Legacy floats, clearfix, modern alternatives",tags:["coding"]},
     {id:"c_zindex",n:"Stacking & z-index",d:"Stacking contexts and overlap control",tags:["problem"]},
   ]},
   {id:"m4c3",name:"Page Architecture",type:"TD 4 · Session 6",concepts:[
     {id:"c_zones",n:"Layout zones",d:"header / main / sidebar / footer composition",tags:["coding"]},
     {id:"c_nav",n:"Navigation systems",d:"Nav bars, menus, active states, breadcrumbs",tags:["coding","problem"]},
     {id:"c_components",n:"Component thinking",d:"Cards, buttons, badges as reusable blocks",tags:["problem"]},
   ]}
  ]},
 {id:"m5",name:"Modern Layout — Flexbox & Grid",icon:"5",color:"var(--green)",src:"Session 6 · Expert",
  desc:"Lay out interfaces with one and two-dimensional modern CSS.",
  chapters:[
   {id:"m5c1",name:"Flexbox",type:"Expert extension",concepts:[
     {id:"c_flexbox",n:"Flex container",d:"display:flex, direction, wrap, flow",tags:["coding"]},
     {id:"c_flexalign",n:"Flex alignment",d:"justify-content, align-items, align-content, gap",tags:["coding","problem"]},
     {id:"c_flexitems",n:"Flex items",d:"grow, shrink, basis, order, align-self",tags:["coding","problem"]},
     {id:"c_flexpat",n:"Flex patterns",d:"Nav bars, card rows, holy-grail, centring",tags:["problem"]},
   ]},
   {id:"m5c2",name:"CSS Grid",type:"Expert extension",concepts:[
     {id:"c_grid",n:"Grid container",d:"display:grid, template-columns/rows, gap",tags:["coding"]},
     {id:"c_gridtracks",n:"Tracks, fr & functions",d:"fr unit, repeat(), minmax(), auto-fill/fit",tags:["coding","problem"]},
     {id:"c_gridplace",n:"Item placement",d:"grid-column/row, lines, named areas",tags:["coding","problem"]},
     {id:"c_gridpat",n:"Grid patterns",d:"Dashboards, galleries, responsive auto grids",tags:["problem"]},
   ]}
  ]},
 {id:"m6",name:"Responsive & Adaptive Design",icon:"6",color:"var(--purple)",src:"Session 6 · Expert",
  desc:"Make interfaces work beautifully on every screen size.",
  chapters:[
   {id:"m6c1",name:"Responsive Foundations",type:"Expert extension",concepts:[
     {id:"c_viewport",n:"Viewport meta",d:"width=device-width, initial-scale and why",tags:["coding"]},
     {id:"c_mobilefirst",n:"Mobile-first strategy",d:"Base styles for small screens, enhance up",tags:["theory","problem"]},
     {id:"c_fluid",n:"Fluid units",d:"%, vw/vh, rem/em, clamp(), min(), max()",tags:["coding","problem"]},
     {id:"c_media",n:"Media queries",d:"min/max-width, features, ranges, logic",tags:["coding","problem"]},
     {id:"c_breakpoints",n:"Breakpoint strategy",d:"Content-driven breakpoints, device tiers",tags:["problem"]},
   ]},
   {id:"m6c2",name:"Responsive Components",type:"Expert extension",concepts:[
     {id:"c_respimg",n:"Responsive images",d:"max-width, srcset, sizes, picture",tags:["coding","problem"]},
     {id:"c_respnav",n:"Responsive navigation",d:"Hamburger menus, collapsing nav, off-canvas",tags:["coding","problem"]},
     {id:"c_resptype",n:"Responsive typography",d:"Fluid type scales and readable lines",tags:["coding"]},
     {id:"c_respgridflex",n:"Responsive layout systems",d:"Auto-fit grids & wrapping flex",tags:["problem"]},
   ]}
  ]},
 {id:"m7",name:"Forms, Accessibility & Motion",icon:"7",color:"var(--pink)",src:"Project · Expert",
  desc:"Robust forms, inclusive interfaces and tasteful motion.",
  chapters:[
   {id:"m7c1",name:"Forms",type:"Project Sessions 3-4 · Expert",concepts:[
     {id:"c_formstruct",n:"Form structure",d:"form, action, method, button types",tags:["coding"]},
     {id:"c_inputs",n:"Input types",d:"text, email, password, number, date, select",tags:["coding"]},
     {id:"c_validation",n:"Form validation",d:"required, pattern, min/max, constraints",tags:["coding","problem"]},
     {id:"c_labels",n:"Labels & fieldset",d:"label for, fieldset/legend, grouping",tags:["a11y","coding"]},
     {id:"c_formux",n:"Form UX",d:"Error messaging, focus order, defaults",tags:["problem"]},
   ]},
   {id:"m7c2",name:"Accessibility",type:"Expert extension",concepts:[
     {id:"c_a11ysem",n:"Accessible semantics",d:"Native elements first; landmarks, headings",tags:["a11y","theory"]},
     {id:"c_aria",n:"ARIA roles & states",d:"When to use ARIA, roles, labels, live regions",tags:["a11y","problem"]},
     {id:"c_keyboard",n:"Keyboard navigation",d:"Focus management, tab order, skip links",tags:["a11y","problem"]},
     {id:"c_contrast",n:"Colour & contrast",d:"WCAG ratios, not relying on colour alone",tags:["a11y"]},
   ]},
   {id:"m7c3",name:"Transitions & Animations",type:"Expert extension",concepts:[
     {id:"c_transitions",n:"Transitions",d:"property, duration, timing-function, delay",tags:["coding"]},
     {id:"c_keyframes",n:"@keyframes animations",d:"keyframes, animation shorthand, iteration",tags:["coding","problem"]},
     {id:"c_transforms",n:"Transforms",d:"translate, scale, rotate, skew; origin",tags:["coding"]},
     {id:"c_motionux",n:"Motion & UX",d:"Purposeful motion, performance, reduced-motion",tags:["problem","a11y"]},
   ]}
  ]},
 {id:"m8",name:"Project — AI Exam Planner",icon:"P",color:"var(--teal)",src:"Project Sessions 1-8",
  desc:"The 8-week capstone: a PHP/MySQL CRUD app with AI revision planning.",
  chapters:[
   {id:"m8c1",name:"Foundation",type:"Sessions 1-2",concepts:[
     {id:"p_env",n:"Environment & localhost",d:"WAMP/XAMPP, Apache+MySQL, project folder",tags:["project"]},
     {id:"p_db",n:"Database design",d:"phpMyAdmin, users/modules tables, PK/FK",tags:["project","problem"]},
   ]},
   {id:"m8c2",name:"Authentication",type:"Session 3",concepts:[
     {id:"p_auth",n:"Registration & login",d:"password_hash/verify, sessions, logout, guards",tags:["project","problem"]},
   ]},
   {id:"m8c3",name:"CRUD",type:"Sessions 4-5",concepts:[
     {id:"p_cr",n:"Create & Read modules",d:"Insert via prepared statements, list per-user",tags:["project"]},
     {id:"p_ud",n:"Update & Delete",d:"Pre-filled edit, UPDATE, delete confirm, ownership",tags:["project","problem"]},
   ]},
   {id:"m8c4",name:"Polish & Intelligence",type:"Sessions 6-8",concepts:[
     {id:"p_dash",n:"Dashboard, styling & UX",d:"Summaries, nav, Flexbox/Grid, responsive",tags:["project"]},
     {id:"p_ai",n:"AI revision plan",d:"Build prompt from module data, call API, render plan",tags:["project","problem"]},
     {id:"p_test",n:"Testing, debugging & demo",d:"Full checklist, fix bugs, clean code, rehearse",tags:["project"]},
   ]}
  ]}
];
const CONCEPTS=[];const CONCEPT_BY_ID={};const MODULE_OF={};
CURRICULUM.forEach(m=>m.chapters.forEach(ch=>ch.concepts.forEach(c=>{
  c._module=m;c._chapter=ch;CONCEPTS.push(c);CONCEPT_BY_ID[c.id]=c;MODULE_OF[c.id]=m.id;})));
const TOTAL_CONCEPTS=CONCEPTS.length;
const DIMS=[{k:"t",label:"Theory"},{k:"c",label:"Coding"},{k:"p",label:"Problem"},{k:"e",label:"Exam"}];
const STATUS=[
 {key:"not",label:"Not Started",min:0,cls:"ms-0",color:"var(--ms0)"},
 {key:"learning",label:"Learning",min:0.5,cls:"ms-1",color:"var(--ms1)"},
 {key:"practicing",label:"Practicing",min:1.8,cls:"ms-2",color:"var(--ms2)"},
 {key:"revision",label:"Needs Revision",min:0,cls:"ms-3",color:"var(--ms3)"},
 {key:"mastered",label:"Mastered",min:3.2,cls:"ms-4",color:"var(--ms4)"},
 {key:"expert",label:"Expert",min:4.6,cls:"ms-5",color:"var(--ms5)"}
];
const SKILLS=[
 {id:"sk_html",n:"HTML",cs:["c_skeleton","c_headings","c_lists","c_links","c_images"]},
 {id:"sk_semantic",n:"Semantic HTML",cs:["c_semantic","c_outline","c_tagselem"]},
 {id:"sk_css",n:"CSS",cs:["c_csssyntax","c_color","c_typography","c_textprops","c_selbasic"]},
 {id:"sk_responsive",n:"Responsive Design",cs:["c_viewport","c_mobilefirst","c_fluid","c_media","c_breakpoints"]},
 {id:"sk_flexbox",n:"Flexbox",cs:["c_flexbox","c_flexalign","c_flexitems","c_flexpat"]},
 {id:"sk_grid",n:"Grid",cs:["c_grid","c_gridtracks","c_gridplace","c_gridpat"]},
 {id:"sk_forms",n:"Forms",cs:["c_formstruct","c_inputs","c_validation","c_labels","c_formux"]},
 {id:"sk_a11y",n:"Accessibility",cs:["c_a11ysem","c_aria","c_keyboard","c_contrast","c_images","c_tablea11y"]},
 {id:"sk_anim",n:"Animations",cs:["c_keyframes","c_motionux"]},
 {id:"sk_trans",n:"Transitions",cs:["c_transitions","c_transforms"]},
 {id:"sk_position",n:"Positioning",cs:["c_position","c_zindex","c_floatclear","c_display"]},
 {id:"sk_layout",n:"Layout Systems",cs:["c_zones","c_flexbox","c_grid","c_boxmodel","c_boxsizing"]},
 {id:"sk_nav",n:"Navigation Systems",cs:["c_nav","c_respnav","c_links"]},
 {id:"sk_components",n:"Components",cs:["c_components","c_flexpat","c_gridpat"]},
 {id:"sk_landing",n:"Landing Pages",cs:["c_zones","c_flexpat","c_typography","c_respgridflex","c_bg"]},
 {id:"sk_portfolio",n:"Portfolio Pages",cs:["c_semantic","c_gridpat","c_resptype","c_images"]},
 {id:"sk_debug",n:"Debugging",cs:["c_nesting","c_specificity","c_cascade","c_boxmodel","c_validation"]},
 {id:"sk_arch",n:"Project Architecture",cs:["c_cssmethods","c_classid","c_cssvars","c_components","p_test"]}
];
const ACHIEVEMENTS=[
 {id:"a_first",icon:"🌱",n:"First Steps",d:"Rate your first concept",test:s=>ratedCount()>=1},
 {id:"a_ten",icon:"📚",n:"Getting Serious",d:"Rate 10 concepts",test:s=>ratedCount()>=10},
 {id:"a_html",icon:"🧱",n:"HTML Builder",d:"Module 'HTML Structure' ≥ 70%",test:s=>modulePct("m2")>=70},
 {id:"a_css",icon:"🎨",n:"Stylist",d:"Module 'CSS Foundations' ≥ 70%",test:s=>modulePct("m3")>=70},
 {id:"a_resp",icon:"📱",n:"Responsive Pro",d:"Module 'Responsive Design' ≥ 70%",test:s=>modulePct("m6")>=70},
 {id:"a_a11y",icon:"♿",n:"Inclusive Dev",d:"Accessibility skill ≥ 70%",test:s=>skillScore("sk_a11y").confidence>=70},
 {id:"a_streak3",icon:"🔥",n:"On a Roll",d:"3-day study streak",test:s=>computeStreak()>=3},
 {id:"a_streak7",icon:"⚡",n:"Unstoppable",d:"7-day study streak",test:s=>computeStreak()>=7},
 {id:"a_10h",icon:"⏱️",n:"Deep Worker",d:"Log 10 study hours",test:s=>totalStudyMin()>=600},
 {id:"a_mock",icon:"📝",n:"Mock Veteran",d:"Record 3 mock tests",test:s=>(s.mocks||[]).length>=3},
 {id:"a_exam80",icon:"🎯",n:"Exam Ready",d:"Exam readiness ≥ 80%",test:s=>examReadiness()>=80},
 {id:"a_master25",icon:"🏅",n:"Quarter Master",d:"Master 25 concepts",test:s=>masteredCount()>=25},
 {id:"a_expert",icon:"👑",n:"Expert Tier",d:"Reach Expert on 5 concepts",test:s=>expertCount()>=5},
 {id:"a_project",icon:"🚀",n:"Shipped It",d:"Project track ≥ 80%",test:s=>modulePct("m8")>=80},
 {id:"a_complete",icon:"🌟",n:"Full Mastery",d:"Overall completion 100%",test:s=>overallPct()>=100}
];
const LS_KEY="wdmastery_v2";
const todayStr=()=>new Date().toISOString().slice(0,10);
function blankState(){return{v:2,createdAt:todayStr(),concepts:{},statusOverride:{},
 goals:{daily:[],weekly:[],monthly:[]},sessions:[],mocks:[],planner:[],activity:[],prefs:{theme:"light"}};}
let S=loadState();
function loadState(){try{const raw=localStorage.getItem(LS_KEY);if(!raw)return blankState();
  const o=JSON.parse(raw);return Object.assign(blankState(),o);}catch(e){return blankState();}}
function save(){try{localStorage.setItem(LS_KEY,JSON.stringify(S));}catch(e){toast("Storage full — export a backup");}}
function cstate(id){if(!S.concepts[id])S.concepts[id]={t:0,c:0,p:0,e:0,reviewedAt:null,timeMin:0,flag:false};return S.concepts[id];}
function markActivity(){const d=todayStr();if(!S.activity.includes(d))S.activity.push(d);}
function importedExam(){try{const raw=localStorage.getItem("wdrevision_v2_summary");return raw?JSON.parse(raw):null;}catch(e){return null;}}
/* ANALYTICS */
const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
const clampPct=n=>Math.max(0,Math.min(100,Math.round(n)));
function conceptAvg(id){const c=S.concepts[id];if(!c)return 0;return (c.t+c.c+c.p+c.e)/4;}
function conceptPct(id){return clampPct(conceptAvg(id)/5*100);}
function isRated(id){const c=S.concepts[id];return c&&(c.t||c.c||c.p||c.e);}
function ratedCount(){return CONCEPTS.filter(c=>isRated(c.id)).length;}
function statusOf(id){
  if(S.statusOverride[id])return S.statusOverride[id];
  const c=S.concepts[id];if(!c||!isRated(id))return "not";
  if(c.flag)return "revision";
  const a=conceptAvg(id);
  if(a>=4.6)return "expert";if(a>=3.2)return "mastered";if(a>=1.8)return "practicing";if(a>=0.5)return "learning";return "not";}
function statusMeta(key){return STATUS.find(s=>s.key===key)||STATUS[0];}
function masteredCount(){return CONCEPTS.filter(c=>{const s=statusOf(c.id);return s==="mastered"||s==="expert";}).length;}
function expertCount(){return CONCEPTS.filter(c=>statusOf(c.id)==="expert").length;}
function needsRevisionCount(){return CONCEPTS.filter(c=>statusOf(c.id)==="revision").length;}
function overallPct(){return clampPct(avg(CONCEPTS.map(c=>conceptPct(c.id))));}
function modulePct(mid){const m=CURRICULUM.find(x=>x.id===mid);if(!m)return 0;
  const ids=[];m.chapters.forEach(ch=>ch.concepts.forEach(c=>ids.push(c.id)));return clampPct(avg(ids.map(conceptPct)));}
function moduleDimPct(mid,dim){const m=CURRICULUM.find(x=>x.id===mid);const v=[];
  m.chapters.forEach(ch=>ch.concepts.forEach(c=>{const cs=S.concepts[c.id];v.push(cs?cs[dim]/5*100:0);}));return clampPct(avg(v));}
function dimPct(dim){return clampPct(avg(CONCEPTS.map(c=>{const cs=S.concepts[c.id];return cs?cs[dim]/5*100:0;})));}
function examReadiness(){
  const examDim=dimPct("e");const mocks=S.mocks||[];const mockAvg=mocks.length?avg(mocks.map(m=>m.score/m.total*100)):examDim;
  const imported=importedExam();const impScore=imported&&imported.bestPct!=null?imported.bestPct:null;
  const coverage=clampPct(ratedCount()/TOTAL_CONCEPTS*100);const revDebt=needsRevisionCount();
  let base=examDim*0.35+mockAvg*0.30+coverage*0.25+(impScore!=null?impScore:mockAvg)*0.10;base-=revDebt*1.2;return clampPct(base);}
function predictedExamScore(){
  const skillWeighted=dimPct("c")*0.3+dimPct("p")*0.35+dimPct("e")*0.35;
  const mocks=S.mocks||[];const trend=mocks.length>=2?(mocks[mocks.length-1].score/mocks[mocks.length-1].total*100 - mocks[0].score/mocks[0].total*100):0;
  return clampPct(skillWeighted+Math.max(-8,Math.min(8,trend*0.3)));}
function rankedModules(){return CURRICULUM.map(m=>({m,pct:modulePct(m.id)})).sort((a,b)=>a.pct-b.pct);}
function weakestConcepts(n){return CONCEPTS.filter(c=>isRated(c.id)).map(c=>({c,p:conceptPct(c.id)})).sort((a,b)=>a.p-b.p).slice(0,n);}
function strongestConcepts(n){return CONCEPTS.filter(c=>isRated(c.id)).map(c=>({c,p:conceptPct(c.id)})).sort((a,b)=>b.p-a.p).slice(0,n);}
function daysSince(dateStr){if(!dateStr)return 999;return Math.floor((Date.now()-new Date(dateStr).getTime())/86400000);}
function skillScore(skId){
  const sk=SKILLS.find(s=>s.id===skId);const ids=sk.cs.filter(id=>CONCEPT_BY_ID[id]);
  const conf=clampPct(avg(ids.map(id=>{const c=S.concepts[id];return c?c.t/5*100:0;})));
  const prac=clampPct(avg(ids.map(id=>{const c=S.concepts[id];return c?(c.c*0.6+c.p*0.4)/5*100:0;})));
  const rev=clampPct(avg(ids.map(id=>{const c=S.concepts[id];if(!c||!isRated(id))return 0;
     const recency=Math.max(0,100-daysSince(c.reviewedAt)*7);return (conceptPct(id)*0.5+recency*0.5);})));
  const exam=clampPct(avg(ids.map(id=>{const c=S.concepts[id];return c?c.e/5*100:0;})));
  return {confidence:conf,practice:prac,revision:rev,exam:exam,overall:clampPct((conf+prac+rev+exam)/4)};}
function totalStudyMin(){return (S.sessions||[]).reduce((a,s)=>a+(+s.min||0),0);}
function studyMinByModule(){const map={};CURRICULUM.forEach(m=>map[m.id]=0);
  (S.sessions||[]).forEach(s=>{if(map[s.topic]!=null)map[s.topic]+=(+s.min||0);});return map;}
function studyMinByDay(){const map={};(S.sessions||[]).forEach(s=>{map[s.date]=(map[s.date]||0)+(+s.min||0);});return map;}
function computeStreak(){
  const days=new Set([...(S.activity||[]),...(S.sessions||[]).map(s=>s.date)]);
  if(days.size===0)return 0;let streak=0;let d=new Date();
  const has=x=>days.has(x.toISOString().slice(0,10));
  if(!has(d)){d.setDate(d.getDate()-1);if(!has(d))return 0;}
  while(has(d)){streak++;d.setDate(d.getDate()-1);}return streak;}
function longestStreak(){
  const days=[...new Set([...(S.activity||[]),...(S.sessions||[]).map(s=>s.date)])].sort();
  let best=0,cur=0,prev=null;
  days.forEach(ds=>{const d=new Date(ds);if(prev&&(d-prev)===86400000)cur++;else cur=1;best=Math.max(best,cur);prev=d;});return best;}
function revisionQueue(){
  return CONCEPTS.filter(c=>isRated(c.id)||statusOf(c.id)==="revision").map(c=>{
    const cs=S.concepts[c.id];const pct=conceptPct(c.id);const days=daysSince(cs&&cs.reviewedAt);
    let score=0;score+=(100-pct)*0.6;if(statusOf(c.id)==="revision")score+=40;score+=Math.min(40,days*1.5);if(cs)score+=(5-cs.e)*4;
    let prio=score>=80?"crit":score>=55?"high":score>=30?"med":"low";
    return {c,pct,days,score:Math.round(score),prio};}).sort((a,b)=>b.score-a.score);}
const PRIO_LABEL={crit:"Critical",high:"High",med:"Medium",low:"Low"};

/* UI HELPERS */
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
let toastT;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),2600);}
function ring(pct,label,color){color=color||"var(--teal)";return `<div class="ring" style="--p:${pct};--c:${color}"><div class="rc"><b>${pct}<span style="font-size:14px">%</span></b><span>${esc(label)}</span></div></div>`;}
function bar(pct,color){const c=color?`background:${color}`:"";return `<div class="bar"><i style="width:${pct}%;${c}"></i></div>`;}
function barRow(name,pct,color){return `<div class="barrow"><span class="nm">${esc(name)}</span><div style="flex:2;min-width:80px">${bar(pct,color)}</div><span class="pct">${pct}%</span></div>`;}
function spark(values,labels){
  if(!values.length||values.every(v=>v===0))return `<div class="spark empty">No data yet — log study sessions or mock tests to see your trend.</div>`;
  const max=Math.max(...values,1);
  return `<div class="spark">${values.map((v,i)=>`<i style="height:${Math.max(4,v/max*100)}%" title="${labels?esc(labels[i]):''}: ${v}"></i>`).join("")}</div>`;}
function miniRate(id,dim){const c=S.concepts[id];const val=c?c[dim]:0;
  let cells="";for(let v=1;v<=5;v++)cells+=`<i class="${v<=val?"on":""}" data-cid="${id}" data-dim="${dim}" data-v="${v}" title="${val} / 5"></i>`;
  return `<div class="mini-rate">${cells}</div>`;}
function masteryControls(id){return `<div class="mastery-grid">${DIMS.map(d=>`<div class="mm"><label>${d.label}</label>${miniRate(id,d.k)}</div>`).join("")}</div>`;}
const VIEWS={
 dashboard:{title:"Dashboard",sub:"Your live learning command center",render:renderDashboard},
 analytics:{title:"Analytics",sub:"Deep insight into mastery, momentum and gaps",render:renderAnalytics},
 curriculum:{title:"Curriculum Roadmap",sub:"Module → Chapter → Concept → 4-way mastery",render:renderCurriculum},
 skills:{title:"Skill Matrix",sub:"18 practical skills · confidence · practice · revision · exam",render:renderSkills},
 revision:{title:"Revision Engine",sub:"Auto-prioritised queue built from your weak & stale topics",render:renderRevision},
 productivity:{title:"Productivity",sub:"Goals · study timer · session planner · focus mode",render:renderProductivity},
 exam:{title:"Exam Prep Center",sub:"Mock tests · readiness · weak concepts · predicted score",render:renderExam},
 achievements:{title:"Achievements",sub:"Badges and milestones you unlock as you grow",render:renderAchievements},
 data:{title:"Data & Backup",sub:"Export, import and restore your full progress",render:renderData}
};
let currentView="dashboard";
function setView(v){
  if(!VIEWS[v])v="dashboard";currentView=v;
  $$("#nav a[data-view]").forEach(a=>a.classList.toggle("active",a.dataset.view===v));
  $("#viewTitle").textContent=VIEWS[v].title;$("#viewSub").textContent=VIEWS[v].sub;
  $("#views").innerHTML=`<div class="view active">${VIEWS[v].render()}</div>`;
  document.body.classList.remove("nav-open");
  if(v==="productivity")mountTimer();
  window.scrollTo({top:0,behavior:"auto"});}
function refresh(){setView(currentView);refreshChips();}
function refreshChips(){$("#streakVal").textContent=computeStreak();}
function renderDashboard(){
  const ov=overallPct(),exam=examReadiness();
  const streak=computeStreak(),hrs=(totalStudyMin()/60);
  const weak=weakestConcepts(5),queue=revisionQueue().slice(0,5);
  const ranked=rankedModules();
  const days=lastNDays(14);const byDay=studyMinByDay();const trend=days.map(d=>byDay[d]||0);
  const statusCounts=countStatuses();
  return `
  <div class="focus-banner focus-keep">🧘 Focus mode is on — distractions dimmed. <button class="btn sm" onclick="toggleFocus()">Exit focus</button></div>
  <div class="card-grid cols-4">
    ${statCard("Overall Completion",ov+"%","var(--teal)",`${ratedCount()}/${TOTAL_CONCEPTS} concepts touched`,iconBolt)}
    ${statCard("Exam Readiness",exam+"%",exam>=70?"var(--green)":exam>=40?"var(--amber)":"var(--coral)",readinessWord(exam),iconTarget)}
    ${statCard("Study Streak",streak+(streak===1?" day":" days"),"var(--coral)",`Longest: ${longestStreak()} days · 🔥`,iconFlame)}
    ${statCard("Total Study Time",hrs.toFixed(1)+" h","var(--blue)",`${masteredCount()} concepts mastered`,iconClock)}
  </div>
  <div class="card-grid cols-3" style="margin-top:14px">
    <div class="panel pad" style="grid-column:span 1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px">
      ${ring(ov,"Overall","var(--teal)")}
      <div class="legend" style="justify-content:center">
        <span><i class="ms-dot ms-4"></i>Mastered ${statusCounts.mastered+statusCounts.expert}</span>
        <span><i class="ms-dot ms-2"></i>In progress ${statusCounts.learning+statusCounts.practicing}</span>
        <span><i class="ms-dot ms-3"></i>Revise ${statusCounts.revision}</span>
      </div>
    </div>
    <div class="panel pad" style="grid-column:span 2">
      <div class="section-head" style="margin:0 0 8px"><div><h2>Module Progress</h2><p>Average across the four mastery dimensions</p></div></div>
      ${ranked.slice().sort((a,b)=>CURRICULUM.indexOf(a.m)-CURRICULUM.indexOf(b.m)).map(r=>barRow(r.m.name,r.pct,r.m.color)).join("")}
    </div>
  </div>
  <div class="card-grid cols-2" style="margin-top:14px">
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>🔻 Priority Revision</h2><p>Top items from the revision engine</p></div>
        <button class="btn sm" onclick="setView('revision')">Open engine</button></div>
      ${queue.length?queue.map(q=>`<div class="row"><span class="pill ${q.prio}">${PRIO_LABEL[q.prio]}</span>
        <div class="rl"><b>${esc(q.c.n)}</b><small>${esc(q.c._module.name)} · ${q.pct}% · ${q.days>900?"never reviewed":q.days+"d ago"}</small></div>
        <button class="btn sm" onclick="setView('curriculum');openModule('${q.c._module.id}')">Review</button></div>`).join(""):emptyHint("Rate some concepts to populate your revision queue.")}
    </div>
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>📈 14-Day Momentum</h2><p>Minutes studied per day</p></div>
        <button class="btn sm" onclick="openLogStudy()">+ Log</button></div>
      ${spark(trend,days)}
      <div class="divider"></div>
      <div class="section-head" style="margin:0 0 8px"><div><h2 style="font-size:14px">Weakest concepts</h2></div></div>
      ${weak.length?weak.map(w=>barRow(w.c.n,w.p,"var(--coral)")).join(""):emptyHint("No ratings yet.")}
    </div>
  </div>
  <div class="panel pad" style="margin-top:14px">
    <div class="section-head" style="margin:0 0 10px"><div><h2>🎯 Today's Plan</h2><p>Quick goals — set bigger ones in Productivity</p></div>
      <button class="btn sm" onclick="setView('productivity')">Manage goals</button></div>
    ${renderGoalList("daily",true)}
  </div>`;}
function statCard(lbl,val,color,delta,icon){
  return `<div class="panel stat"><div class="ic" style="background:${softOf(color)};color:${color}">${icon}</div>
    <div class="lbl">${esc(lbl)}</div><div class="val" style="color:${color}">${val}</div>
    <div class="delta muted">${esc(delta)}</div></div>`;}
function softOf(c){const map={"var(--teal)":"var(--soft-teal)","var(--blue)":"var(--soft-blue)","var(--coral)":"var(--soft-coral)","var(--amber)":"var(--soft-amber)","var(--green)":"var(--soft-green)","var(--purple)":"var(--soft-purple)","var(--pink)":"var(--soft-pink)"};return map[c]||"var(--panel2)";}
function readinessWord(p){return p>=80?"Exam-ready ✓":p>=60?"Almost there":p>=35?"Building up":"Just starting";}
function emptyHint(t){return `<p class="muted small" style="padding:6px 2px">${esc(t)}</p>`;}
function lastNDays(n){const a=[];for(let i=n-1;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);a.push(d.toISOString().slice(0,10));}return a;}
function countStatuses(){const c={not:0,learning:0,practicing:0,revision:0,mastered:0,expert:0};CONCEPTS.forEach(x=>c[statusOf(x.id)]++);return c;}
const iconBolt='<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M13 2 4 14h7l-1 8 9-12h-7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
const iconTarget='<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>';
const iconFlame='<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M12 3c4 4 5 7 3 10a4 4 0 1 1-7-2c0-2 2-3 1-6 2 1 3 2 3 4 1-2 1-4-3-6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>';
const iconClock='<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
function renderAnalytics(){
  const ranked=rankedModules();const weak=weakestConcepts(8),strong=strongestConcepts(6);
  const byMod=studyMinByModule();const totMin=totalStudyMin()||1;const mocks=S.mocks||[];
  return `
  <div class="card-grid cols-4">
    ${statCard("Theory",dimPct("t")+"%","var(--blue)","Conceptual understanding",iconBolt)}
    ${statCard("Coding",dimPct("c")+"%","var(--teal)","Hands-on implementation",iconBolt)}
    ${statCard("Problem-Solving",dimPct("p")+"%","var(--amber)","Applying under new contexts",iconBolt)}
    ${statCard("Exam Readiness (dim)",dimPct("e")+"%","var(--purple)","Recall under test conditions",iconTarget)}
  </div>
  <div class="card-grid cols-2" style="margin-top:14px">
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>Per-Module Completion</h2><p>Sorted weakest → strongest</p></div></div>
      ${ranked.map(r=>barRow(r.m.name,r.pct,r.pct<40?"var(--coral)":r.pct<70?"var(--amber)":"var(--green)")).join("")}
    </div>
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>Mastery Dimensions by Module</h2><p>Where each module is strong or thin</p></div></div>
      <div class="scroll-x"><table class="grid"><thead><tr><th>Module</th><th>Theory</th><th>Code</th><th>Problem</th><th>Exam</th></tr></thead><tbody>
      ${CURRICULUM.map(m=>`<tr><td><b>${esc(m.name)}</b></td>
        <td>${miniBadge(moduleDimPct(m.id,"t"))}</td><td>${miniBadge(moduleDimPct(m.id,"c"))}</td>
        <td>${miniBadge(moduleDimPct(m.id,"p"))}</td><td>${miniBadge(moduleDimPct(m.id,"e"))}</td></tr>`).join("")}
      </tbody></table></div>
    </div>
  </div>
  <div class="card-grid cols-3" style="margin-top:14px">
    <div class="panel pad"><div class="section-head" style="margin:0 0 10px"><div><h2>💪 Strongest</h2></div></div>
      ${strong.length?strong.map(s=>barRow(s.c.n,s.p,"var(--green)")).join(""):emptyHint("Rate concepts to see strengths.")}</div>
    <div class="panel pad"><div class="section-head" style="margin:0 0 10px"><div><h2>🩹 Weakest</h2></div></div>
      ${weak.length?weak.map(s=>barRow(s.c.n,s.p,"var(--coral)")).join(""):emptyHint("Rate concepts to see gaps.")}</div>
    <div class="panel pad"><div class="section-head" style="margin:0 0 10px"><div><h2>⏱️ Time per Module</h2></div></div>
      ${Object.keys(byMod).some(k=>byMod[k]>0)?CURRICULUM.filter(m=>byMod[m.id]>0).map(m=>barRow(m.name,clampPct(byMod[m.id]/totMin*100),m.color)).join(""):emptyHint("Log study sessions to track time.")}
      <div class="divider"></div><p class="muted small">Total logged: <b>${(totalStudyMin()/60).toFixed(1)} h</b></p></div>
  </div>
  <div class="panel pad" style="margin-top:14px">
    <div class="section-head" style="margin:0 0 10px"><div><h2>📊 Mock Test Improvement Curve</h2><p>Scores recorded in the Exam Prep Center</p></div>
      <button class="btn sm" onclick="setView('exam')">Add a mock</button></div>
    ${spark(mocks.map(m=>clampPct(m.score/m.total*100)),mocks.map(m=>m.date))}
    ${mocks.length?`<p class="muted small" style="margin-top:8px">Average: <b>${clampPct(avg(mocks.map(m=>m.score/m.total*100)))}%</b> · Predicted final exam: <b>${predictedExamScore()}%</b></p>`:""}
  </div>`;}
function miniBadge(p){const c=p<40?"crit":p<70?"high":"low";return `<span class="pill ${c}">${p}%</span>`;}
/* CURRICULUM VIEW */
let openModules=new Set();
function openModule(id){openModules.add(id);setView('curriculum');setTimeout(()=>{const el=document.getElementById('mod-'+id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});},60);}
function renderCurriculum(){
  return `
  <div class="panel pad" style="margin-bottom:14px;display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:space-between">
    <div class="legend">
      ${STATUS.filter(s=>s.key!=="revision").map(s=>`<span><i class="ms-dot ${s.cls}"></i>${s.label}</span>`).join("")}
      <span><i class="ms-dot ms-3"></i>Needs Revision (flag)</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn sm" onclick="expandAll(true)">Expand all</button>
      <button class="btn sm" onclick="expandAll(false)">Collapse all</button>
    </div>
  </div>
  ${CURRICULUM.map(m=>{
    const pct=modulePct(m.id);const open=openModules.has(m.id);
    const nC=m.chapters.reduce((a,ch)=>a+ch.concepts.length,0);
    return `<div class="module ${open?"open":""}" id="mod-${m.id}">
      <div class="module-head" onclick="toggleModule('${m.id}')">
        <div class="module-ic" style="background:${m.color}">${m.icon}</div>
        <div class="mt"><b>${esc(m.name)}</b><small>${esc(m.src)} · ${nC} concepts · ${esc(m.desc)}</small></div>
        <div class="mpct">${bar(pct,m.color)}<small class="muted" style="font-size:11px">${pct}% complete</small></div>
        <svg class="caret" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="module-body">
        ${m.chapters.map(ch=>`<div class="chapter">
          <h4>${esc(ch.name)} <span class="ct">${esc(ch.type)}</span></h4>
          ${ch.concepts.map(c=>{const st=statusMeta(statusOf(c.id));const flagged=statusOf(c.id)==="revision";
            return `<div class="concept">
              <span class="ms-dot ${st.cls}" title="${st.label}"></span>
              <div class="cn"><b>${esc(c.n)}</b> <span class="pill" style="background:${softOf(st.color)};color:${st.color};font-size:9.5px">${st.label}</span><small>${esc(c.d)}</small></div>
              ${masteryControls(c.id)}
              <button class="btn sm ${flagged?"primary":""}" title="Flag for revision" onclick="toggleFlag('${c.id}')">${flagged?"★ Flagged":"☆ Revise"}</button>
            </div>`;}).join("")}
        </div>`).join("")}
      </div>
    </div>`;}).join("")}`;}
function toggleModule(id){if(openModules.has(id))openModules.delete(id);else openModules.add(id);
  const el=document.getElementById('mod-'+id);if(el)el.classList.toggle("open");}
function expandAll(on){if(on)CURRICULUM.forEach(m=>openModules.add(m.id));else openModules.clear();setView('curriculum');}
function toggleFlag(id){const c=cstate(id);c.flag=!c.flag;markActivity();save();
  toast(c.flag?"Flagged for revision":"Revision flag cleared");setView('curriculum');refreshChips();}
function setMastery(id,dim,v){const c=cstate(id);c[dim]=(c[dim]===v)?v-1:v;c.reviewedAt=todayStr();markActivity();save();
  checkAchievements();setView(currentView);refreshChips();}
/* SKILL MATRIX */
function renderSkills(){
  const scored=SKILLS.map(s=>({s,sc:skillScore(s.id)}));
  const ov=clampPct(avg(scored.map(x=>x.sc.overall)));
  return `
  <div class="card-grid cols-3" style="margin-bottom:14px">
    <div class="panel pad" style="display:flex;align-items:center;gap:16px">
      ${ring(ov,"Skills","var(--teal)")}
      <div><b style="font-size:15px">18 practical skills</b><p class="muted small" style="margin:4px 0 0">Each score is derived live from your concept mastery, review recency and exam results. Strengthen a skill by rating its underlying concepts in the Curriculum.</p></div>
    </div>
    <div class="panel pad cols-2" style="grid-column:span 2">
      <div class="section-head" style="margin:0 0 8px"><div><h2>Legend</h2></div></div>
      <div class="legend" style="font-size:12.5px">
        <span><i class="ms-dot" style="background:var(--blue)"></i><b>Confidence</b> — theory grasp</span>
        <span><i class="ms-dot" style="background:var(--teal)"></i><b>Practice</b> — coding + problem-solving</span>
        <span><i class="ms-dot" style="background:var(--amber)"></i><b>Revision</b> — mastery × recency</span>
        <span><i class="ms-dot" style="background:var(--purple)"></i><b>Exam</b> — test readiness</span>
      </div>
      <div class="divider"></div>
      <p class="muted small">Strongest skill: <b>${esc(scored.slice().sort((a,b)=>b.sc.overall-a.sc.overall)[0].s.n)}</b> · Most in need of work: <b>${esc(scored.slice().sort((a,b)=>a.sc.overall-b.sc.overall)[0].s.n)}</b></p>
    </div>
  </div>
  <div class="card-grid cols-3">
    ${scored.map(({s,sc})=>`<div class="panel pad">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
        <b style="font-size:14px">${esc(s.n)}</b><span class="pill ${sc.overall<40?"crit":sc.overall<70?"high":"low"}">${sc.overall}%</span>
      </div>
      ${barRow("Confidence",sc.confidence,"var(--blue)")}
      ${barRow("Practice",sc.practice,"var(--teal)")}
      ${barRow("Revision",sc.revision,"var(--amber)")}
      ${barRow("Exam",sc.exam,"var(--purple)")}
    </div>`).join("")}
  </div>`;}
/* REVISION ENGINE */
function renderRevision(){
  const q=revisionQueue();const counts={crit:0,high:0,med:0,low:0};q.forEach(x=>counts[x.prio]++);
  return `
  <div class="card-grid cols-4" style="margin-bottom:14px">
    ${["crit","high","med","low"].map(p=>`<div class="panel stat"><div class="lbl">${PRIO_LABEL[p]} priority</div><div class="val" style="color:${p==="crit"?"var(--coral)":p==="high"?"var(--amber)":p==="med"?"var(--blue)":"var(--green)"}">${counts[p]}</div><div class="delta muted">items in queue</div></div>`).join("")}
  </div>
  <div class="panel pad">
    <div class="section-head" style="margin:0 0 10px">
      <div><h2>🔁 Smart Revision Queue</h2><p>Ranked by weakness × staleness × exam weight × revision flags. Review the top items first.</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="revFilter" onchange="setView('revision')" style="width:auto">
          <option value="all">All priorities</option><option value="crit">Critical only</option>
          <option value="high">High+</option><option value="flagged">Flagged only</option>
        </select>
      </div>
    </div>
    ${q.length?filteredQueue(q).map(x=>`<div class="row">
        <span class="pill ${x.prio}">${PRIO_LABEL[x.prio]}</span>
        <div class="rl"><b>${esc(x.c.n)}</b><small>${esc(x.c._module.name)} → ${esc(x.c._chapter.name)} · mastery ${x.pct}% · ${x.days>900?"never reviewed":"reviewed "+x.days+"d ago"} · urgency ${x.score}</small></div>
        <button class="btn sm" onclick="markReviewedNow('${x.c.id}')">✓ Reviewed</button>
        <button class="btn sm" onclick="openModule('${x.c._module.id}')">Open</button>
      </div>`).join(""):emptyHint("Nothing queued yet. Rate concepts in the Curriculum and flag any that feel shaky — they'll appear here automatically.")}
  </div>
  <div class="panel pad" style="margin-top:14px">
    <div class="section-head" style="margin:0 0 8px"><div><h2>How priority is computed</h2></div></div>
    <p class="muted small">Each concept earns urgency points from four signals: <b>(1)</b> low mastery — weaker concepts score higher; <b>(2)</b> an explicit revision flag adds a large boost; <b>(3)</b> staleness — the longer since you last reviewed it, the higher it climbs; <b>(4)</b> weak exam-dimension readiness. Points map to Critical / High / Medium / Low bands so you always know what to study next.</p>
  </div>`;}
function filteredQueue(q){const f=(document.getElementById("revFilter")||{}).value||"all";
  if(f==="crit")return q.filter(x=>x.prio==="crit");
  if(f==="high")return q.filter(x=>x.prio==="crit"||x.prio==="high");
  if(f==="flagged")return q.filter(x=>statusOf(x.c.id)==="revision");
  return q;}
function markReviewedNow(id){const c=cstate(id);c.reviewedAt=todayStr();c.flag=false;markActivity();save();toast("Marked reviewed today ✓");setView('revision');refreshChips();}
/* PRODUCTIVITY */
function renderGoalList(type,compact){
  const list=S.goals[type]||[];const done=list.filter(g=>g.done).length;
  return `<div>
    ${list.length?`<p class="muted small" style="margin:0 0 6px">${done}/${list.length} done</p>`:""}
    ${list.map(g=>`<div class="goal ${g.done?"done":""}">
      <input type="checkbox" ${g.done?"checked":""} onchange="toggleGoal('${type}','${g.id}')">
      <span class="gt">${esc(g.text)}</span>
      <button class="btn sm ghost danger" onclick="delGoal('${type}','${g.id}')" aria-label="Delete">✕</button>
    </div>`).join("")||emptyHint("No "+type+" goals yet — add one below.")}
    <div style="display:flex;gap:8px;margin-top:10px">
      <input type="text" id="goalInput-${type}" placeholder="Add a ${type} goal…" onkeydown="if(event.key==='Enter')addGoal('${type}')">
      <button class="btn primary sm" onclick="addGoal('${type}')">Add</button>
    </div></div>`;}
function addGoal(type){const inp=document.getElementById("goalInput-"+type);if(!inp)return;const t=inp.value.trim();if(!t)return;
  S.goals[type].push({id:"g"+Date.now()+Math.random().toString(36).slice(2,5),text:t,done:false});markActivity();save();setView(currentView);refreshChips();}
function toggleGoal(type,id){const g=S.goals[type].find(x=>x.id===id);if(g){g.done=!g.done;markActivity();save();checkAchievements();setView(currentView);refreshChips();}}
function delGoal(type,id){S.goals[type]=S.goals[type].filter(x=>x.id!==id);save();setView(currentView);}
function renderProductivity(){
  return `
  <div class="card-grid cols-2">
    <div class="panel pad focus-keep">
      <div class="section-head" style="margin:0 0 6px"><div><h2>⏲️ Study Timer</h2><p>Pomodoro-style focus sessions — logged to your study time</p></div></div>
      <div class="timer-wrap">
        <div class="timer-mode" id="tMode">Focus session</div>
        <div class="timer-time" id="tTime">25:00</div>
        <div class="timer-controls">
          <button class="btn primary" id="tStart" onclick="timerStart()">Start</button>
          <button class="btn" id="tPause" onclick="timerPause()">Pause</button>
          <button class="btn" onclick="timerReset()">Reset</button>
        </div>
        <div style="display:flex;gap:6px;justify-content:center;margin-top:12px;flex-wrap:wrap">
          ${[15,25,50].map(m=>`<button class="btn sm" onclick="timerSet(${m},'focus')">${m}m focus</button>`).join("")}
          ${[5,10].map(m=>`<button class="btn sm" onclick="timerSet(${m},'break')">${m}m break</button>`).join("")}
        </div>
        <div class="divider"></div>
        <div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap">
          <label class="fl" style="margin:0">Attribute time to</label>
          <select id="timerModule" style="width:auto">${CURRICULUM.map(m=>`<option value="${m.id}">${esc(m.name)}</option>`).join("")}</select>
          <button class="btn sm" onclick="logTimerSession()">Log elapsed</button>
        </div>
      </div>
      <div class="divider"></div>
      <button class="btn ${document.body.classList.contains('focus-dim')?'primary':''}" style="width:100%" onclick="toggleFocus()">🧘 Toggle Focus Mode</button>
    </div>
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>🎯 Daily Goals</h2></div></div>
      ${renderGoalList("daily")}
    </div>
  </div>
  <div class="card-grid cols-2" style="margin-top:14px">
    <div class="panel pad"><div class="section-head" style="margin:0 0 10px"><div><h2>📅 Weekly Goals</h2></div></div>${renderGoalList("weekly")}</div>
    <div class="panel pad"><div class="section-head" style="margin:0 0 10px"><div><h2>🗓️ Monthly Goals</h2></div></div>${renderGoalList("monthly")}</div>
  </div>
  <div class="panel pad" style="margin-top:14px">
    <div class="section-head" style="margin:0 0 10px"><div><h2>🧭 Session Planner & Revision Scheduler</h2><p>Schedule a concept to study on a date — overdue items are highlighted</p></div></div>
    <div class="card-grid" style="grid-template-columns:1fr 2fr auto;gap:8px;align-items:end">
      <div><label class="fl">Date</label><input type="date" id="planDate" value="${todayStr()}"></div>
      <div><label class="fl">Concept</label><select id="planConcept">${CONCEPTS.map(c=>`<option value="${c.id}">${esc(c._module.name)} — ${esc(c.n)}</option>`).join("")}</select></div>
      <button class="btn primary" onclick="addPlan()">Schedule</button>
    </div>
    <div class="divider"></div>
    ${renderPlanner()}
  </div>`;}
function renderPlanner(){
  const list=(S.planner||[]).slice().sort((a,b)=>a.date.localeCompare(b.date));
  if(!list.length)return emptyHint("Nothing scheduled. Plan your week above, or auto-fill from the revision queue.")+
    `<button class="btn sm" style="margin-top:8px" onclick="autoPlan()">⚡ Auto-schedule top 5 revision items</button>`;
  return list.map(p=>{const c=CONCEPT_BY_ID[p.conceptId];const overdue=!p.done&&p.date<todayStr();
    return `<div class="row" style="${overdue?'border-color:var(--coral)':''}">
      <input type="checkbox" ${p.done?"checked":""} onchange="togglePlan('${p.id}')" style="width:18px;height:18px;accent-color:var(--teal)">
      <div class="rl"><b style="${p.done?'text-decoration:line-through;color:var(--muted)':''}">${c?esc(c.n):"(removed)"}</b>
      <small>${esc(p.date)}${overdue?' · <span style="color:var(--coral);font-weight:800">OVERDUE</span>':''}${c?' · '+esc(c._module.name):''}</small></div>
      <button class="btn sm ghost danger" onclick="delPlan('${p.id}')">✕</button>
    </div>`;}).join("")+`<button class="btn sm" style="margin-top:8px" onclick="autoPlan()">⚡ Auto-add top revision items</button>`;}
function addPlan(){const d=document.getElementById("planDate").value;const c=document.getElementById("planConcept").value;if(!d)return;
  S.planner.push({id:"p"+Date.now(),date:d,conceptId:c,done:false});markActivity();save();setView('productivity');refreshChips();}
function togglePlan(id){const p=S.planner.find(x=>x.id===id);if(p){p.done=!p.done;if(p.done){const c=cstate(p.conceptId);c.reviewedAt=todayStr();}markActivity();save();setView('productivity');refreshChips();}}
function delPlan(id){S.planner=S.planner.filter(x=>x.id!==id);save();setView('productivity');}
function autoPlan(){const q=revisionQueue().slice(0,5);let added=0;q.forEach((x,i)=>{
  if(!S.planner.some(p=>p.conceptId===x.c.id&&!p.done)){const d=new Date();d.setDate(d.getDate()+i);
    S.planner.push({id:"p"+Date.now()+i,date:d.toISOString().slice(0,10),conceptId:x.c.id,done:false});added++;}});
  save();toast(added?`Scheduled ${added} revision item(s)`:"Top items already scheduled");setView('productivity');}
let timerState={sec:1500,total:1500,mode:"focus",running:false,iv:null,elapsed:0};
function fmt(s){const m=Math.floor(s/60),x=s%60;return `${String(m).padStart(2,"0")}:${String(x).padStart(2,"0")}`;}
function mountTimer(){timerPaint();}
function timerPaint(){const t=document.getElementById("tTime");if(t)t.textContent=fmt(timerState.sec);
  const md=document.getElementById("tMode");if(md)md.textContent=timerState.mode==="focus"?"Focus session":"Break";}
function timerSet(min,mode){timerPause();timerState.sec=min*60;timerState.total=min*60;timerState.mode=mode;timerState.elapsed=0;timerPaint();}
function timerStart(){if(timerState.running)return;timerState.running=true;markActivity();
  timerState.iv=setInterval(()=>{if(timerState.sec>0){timerState.sec--;timerState.elapsed++;timerPaint();}
    else{timerPause();toast(timerState.mode==="focus"?"🎉 Focus session complete! Log your time below.":"Break over — back to it!");
      if(timerState.mode==="focus")logTimerSession();}},1000);}
function timerPause(){timerState.running=false;if(timerState.iv){clearInterval(timerState.iv);timerState.iv=null;}}
function timerReset(){timerPause();timerState.sec=timerState.total;timerState.elapsed=0;timerPaint();}
function logTimerSession(){const min=Math.round(timerState.elapsed/60);if(min<1){toast("Run the timer for at least a minute first");return;}
  const mod=(document.getElementById("timerModule")||{}).value||CURRICULUM[0].id;
  S.sessions.push({date:todayStr(),topic:mod,min});timerState.elapsed=0;markActivity();save();
  toast(`Logged ${min} min to ${CURRICULUM.find(m=>m.id===mod).name}`);refreshChips();}
function toggleFocus(){document.body.classList.toggle("focus-dim");toast(document.body.classList.contains("focus-dim")?"Focus mode on":"Focus mode off");}
/* EXAM PREP CENTER */
function renderExam(){
  const mocks=S.mocks||[];const ready=examReadiness();const pred=predictedExamScore();
  const imp=importedExam();const weak=weakestConcepts(6);
  const mockAvg=mocks.length?clampPct(avg(mocks.map(m=>m.score/m.total*100))):0;
  return `
  <div class="card-grid cols-4">
    ${statCard("Exam Readiness",ready+"%",ready>=70?"var(--green)":ready>=40?"var(--amber)":"var(--coral)",readinessWord(ready),iconTarget)}
    ${statCard("Predicted Final Score",pred+"%","var(--purple)","Weighted skill projection",iconBolt)}
    ${statCard("Mock Tests Taken",mocks.length,"var(--blue)",`Average ${mockAvg}%`,iconClock)}
    ${statCard("Revision Debt",needsRevisionCount(),needsRevisionCount()?"var(--coral)":"var(--green)","concepts flagged / weak",iconFlame)}
  </div>
  ${imp?`<div class="panel pad" style="margin-top:14px;border-color:var(--teal)">
    <div class="section-head" style="margin:0"><div><h2>🔗 Linked from Revision Test</h2>
    <p>Best score ${imp.bestPct}% · ${imp.attempts||0} attempt(s) recorded in the Revision Test app${imp.weak&&imp.weak.length?" · weak areas: "+imp.weak.map(esc).join(", "):""}.</p></div>
    <a class="btn sm" href="web_development_revision_test.html">Open test →</a></div></div>`:""}
  <div class="card-grid cols-2" style="margin-top:14px">
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>➕ Record a Mock Test</h2><p>Log results from the Revision Test or a paper exam</p></div></div>
      <div class="card-grid" style="grid-template-columns:1fr 1fr;gap:10px">
        <div><label class="fl">Date</label><input type="date" id="mkDate" value="${todayStr()}"></div>
        <div><label class="fl">Topic / focus</label><input type="text" id="mkTopic" placeholder="e.g. CSS Layout"></div>
        <div><label class="fl">Your score</label><input type="number" id="mkScore" min="0" value="0"></div>
        <div><label class="fl">Out of</label><input type="number" id="mkTotal" min="1" value="20"></div>
      </div>
      <button class="btn primary" style="margin-top:10px;width:100%" onclick="addMock()">Save mock test</button>
    </div>
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>📈 Improvement Curve</h2></div></div>
      ${spark(mocks.map(m=>clampPct(m.score/m.total*100)),mocks.map(m=>m.date))}
      <div class="divider"></div>
      <div class="scroll-x"><table class="grid"><thead><tr><th>Date</th><th>Topic</th><th>Score</th><th>%</th><th></th></tr></thead><tbody>
      ${mocks.length?mocks.slice().reverse().map(m=>`<tr><td>${esc(m.date)}</td><td>${esc(m.topic||"—")}</td><td>${m.score}/${m.total}</td><td>${clampPct(m.score/m.total*100)}%</td><td><button class="btn sm ghost danger" onclick="delMock('${m.id}')">✕</button></td></tr>`).join(""):`<tr><td colspan="5" class="muted small">No mock tests recorded yet.</td></tr>`}
      </tbody></table></div>
    </div>
  </div>
  <div class="card-grid cols-2" style="margin-top:14px">
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>🩹 Weak Concepts to Drill</h2></div></div>
      ${weak.length?weak.map(w=>`<div class="row"><div class="rl"><b>${esc(w.c.n)}</b><small>${esc(w.c._module.name)}</small></div><span class="pill ${w.p<40?"crit":"high"}">${w.p}%</span><button class="btn sm" onclick="openModule('${w.c._module.id}')">Study</button></div>`).join(""):emptyHint("Rate concepts to surface weak areas.")}
    </div>
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>🧠 Readiness Breakdown</h2></div></div>
      ${barRow("Theory recall",dimPct("t"),"var(--blue)")}
      ${barRow("Coding fluency",dimPct("c"),"var(--teal)")}
      ${barRow("Problem solving",dimPct("p"),"var(--amber)")}
      ${barRow("Exam-condition recall",dimPct("e"),"var(--purple)")}
      ${barRow("Curriculum coverage",clampPct(ratedCount()/TOTAL_CONCEPTS*100),"var(--green)")}
      <div class="divider"></div>
      <p class="muted small">Readiness blends exam-dimension mastery (35%), mock-test average (30%), coverage (25%) and linked test results (10%), minus a penalty for each concept still flagged for revision.</p>
    </div>
  </div>`;}
function addMock(){const date=document.getElementById("mkDate").value||todayStr();
  const topic=document.getElementById("mkTopic").value.trim();
  const score=+document.getElementById("mkScore").value;const total=+document.getElementById("mkTotal").value;
  if(!total||total<1){toast("Set a valid 'out of' value");return;}
  S.mocks.push({id:"mk"+Date.now(),date,topic,score:Math.max(0,score),total});markActivity();save();checkAchievements();
  toast("Mock test saved");setView('exam');refreshChips();}
function delMock(id){S.mocks=S.mocks.filter(m=>m.id!==id);save();setView('exam');}
/* ACHIEVEMENTS */
function renderAchievements(){
  const unlocked=ACHIEVEMENTS.filter(a=>a.test(S)).length;
  const milestones=[
    {p:25,n:"Foundations",done:overallPct()>=25},{p:50,n:"Halfway",done:overallPct()>=50},
    {p:75,n:"Advanced",done:overallPct()>=75},{p:100,n:"Mastery",done:overallPct()>=100}];
  return `
  <div class="panel pad" style="margin-bottom:14px;display:flex;gap:16px;align-items:center;flex-wrap:wrap">
    ${ring(clampPct(unlocked/ACHIEVEMENTS.length*100),"Unlocked","var(--amber)")}
    <div style="flex:1;min-width:220px">
      <b style="font-size:15px">${unlocked} / ${ACHIEVEMENTS.length} badges earned</b>
      <p class="muted small" style="margin:6px 0 10px">Completion milestones</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        ${milestones.map(m=>`<div class="chip" style="${m.done?'background:var(--soft-green);color:var(--green);border-color:var(--green)':''}">${m.done?"✓":"○"} ${m.p}% · ${esc(m.n)}</div>`).join("")}
      </div>
    </div>
  </div>
  <div class="card-grid cols-3">
    ${ACHIEVEMENTS.map(a=>{const got=a.test(S);return `<div class="ach ${got?"":"locked"}">
      <div class="ab">${a.icon}</div><div><b>${esc(a.n)}</b><small>${esc(a.d)}</small>${got?'<small style="color:var(--green);font-weight:800">✓ Unlocked</small>':''}</div></div>`;}).join("")}
  </div>`;}
let prevUnlocked=new Set();
function checkAchievements(){
  ACHIEVEMENTS.forEach(a=>{if(a.test(S)&&!prevUnlocked.has(a.id)){prevUnlocked.add(a.id);toast(`🏆 Achievement unlocked: ${a.n}`);}});}
/* DATA & BACKUP */
function renderData(){
  let size="—";try{size=(JSON.stringify(S).length/1024).toFixed(1)+" KB";}catch(e){}
  return `
  <div class="card-grid cols-3">
    ${statCard("Concepts tracked",ratedCount()+"/"+TOTAL_CONCEPTS,"var(--teal)","across 8 modules",iconBolt)}
    ${statCard("Data size",size,"var(--blue)","stored locally in your browser",iconClock)}
    ${statCard("Tracking since",esc(S.createdAt||todayStr()),"var(--purple)","first day of use",iconFlame)}
  </div>
  <div class="card-grid cols-2" style="margin-top:14px">
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>⬇️ Export / Backup</h2><p>Download a JSON snapshot of all your progress</p></div></div>
      <button class="btn primary" style="width:100%;margin-bottom:8px" onclick="exportData()">Export progress (.json)</button>
      <button class="btn" style="width:100%" onclick="copyData()">Copy backup to clipboard</button>
      <div class="divider"></div>
      <p class="muted small">Your data lives only in this browser (localStorage). Export regularly so you never lose progress when clearing browser data or switching devices.</p>
    </div>
    <div class="panel pad">
      <div class="section-head" style="margin:0 0 10px"><div><h2>⬆️ Import / Restore</h2><p>Load a previously exported snapshot</p></div></div>
      <input type="file" id="importFile" accept="application/json" style="margin-bottom:8px">
      <button class="btn" style="width:100%;margin-bottom:8px" onclick="importData()">Restore from file</button>
      <label class="fl">…or paste backup JSON</label>
      <textarea id="importText" placeholder='{"v":2,...}'></textarea>
      <button class="btn" style="width:100%;margin-top:8px" onclick="importPaste()">Restore from text</button>
    </div>
  </div>
  <div class="panel pad" style="margin-top:14px">
    <div class="section-head" style="margin:0 0 10px"><div><h2 style="color:var(--coral)">⚠ Danger Zone</h2><p>Irreversible — export a backup first</p></div></div>
    <button class="btn danger" onclick="resetData()">Reset all progress</button>
  </div>`;}
function exportData(){const blob=new Blob([JSON.stringify(S,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="web-dev-mastery-backup-"+todayStr()+".json";a.click();toast("Backup downloaded");}
function copyData(){navigator.clipboard.writeText(JSON.stringify(S)).then(()=>toast("Backup copied to clipboard")).catch(()=>toast("Copy failed — use Export instead"));}
function applyImport(obj){if(!obj||typeof obj!=="object"||!("concepts"in obj)){toast("That doesn't look like a valid backup");return;}
  S=Object.assign(blankState(),obj);save();applyTheme();toast("Progress restored ✓");refresh();}
function importData(){const f=document.getElementById("importFile").files[0];if(!f){toast("Choose a file first");return;}
  const r=new FileReader();r.onload=e=>{try{applyImport(JSON.parse(e.target.result));}catch(err){toast("Invalid JSON file");}};r.readAsText(f);}
function importPaste(){const t=document.getElementById("importText").value.trim();if(!t){toast("Paste your backup JSON");return;}
  try{applyImport(JSON.parse(t));}catch(e){toast("Invalid JSON");}}
function resetData(){if(confirm("Reset ALL progress? This cannot be undone. Export a backup first."))
  {localStorage.removeItem(LS_KEY);S=blankState();prevUnlocked=new Set();save();toast("All progress reset");refresh();}}
/* THEME */
function applyTheme(){const t=(S.prefs&&S.prefs.theme)||"light";document.documentElement.setAttribute("data-theme",t);
  const ic=document.getElementById("themeIc");
  ic.innerHTML=t==="dark"
    ?'<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
    :'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>';}
function toggleTheme(){S.prefs.theme=((S.prefs&&S.prefs.theme)==="dark")?"light":"dark";save();applyTheme();}
/* LOG STUDY MODAL */
function openLogStudy(){
  let m=document.getElementById("logModal");
  if(!m){m=document.createElement("div");m.id="logModal";
    m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:300;display:grid;place-items:center;padding:18px";
    m.addEventListener("click",e=>{if(e.target===m)m.remove();});
    document.body.appendChild(m);}
  m.innerHTML=`<div class="panel pad" style="width:min(420px,100%);box-shadow:var(--shadow)">
    <div class="section-head" style="margin:0 0 12px"><div><h2>Log a study session</h2><p>Adds to your streak, heatmap and time tracking</p></div></div>
    <label class="fl">Date</label><input type="date" id="lsDate" value="${todayStr()}">
    <label class="fl" style="margin-top:10px">Module</label>
    <select id="lsModule">${CURRICULUM.map(x=>`<option value="${x.id}">${esc(x.name)}</option>`).join("")}</select>
    <label class="fl" style="margin-top:10px">Minutes studied</label><input type="number" id="lsMin" min="1" value="30">
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="btn" style="flex:1" onclick="document.getElementById('logModal').remove()">Cancel</button>
      <button class="btn primary" style="flex:1" onclick="saveLogStudy()">Save</button>
    </div></div>`;}
function saveLogStudy(){const date=document.getElementById("lsDate").value||todayStr();
  const topic=document.getElementById("lsModule").value;const min=+document.getElementById("lsMin").value;
  if(!min||min<1){toast("Enter minutes studied");return;}
  S.sessions.push({date,topic,min});markActivity();save();checkAchievements();
  const m=document.getElementById("logModal");if(m)m.remove();
  toast(`Logged ${min} min`);refresh();}
/* EVENTS + INIT */
function bindEvents(){
  document.getElementById("nav").addEventListener("click",e=>{const a=e.target.closest("a[data-view]");if(a){e.preventDefault();setView(a.dataset.view);}});
  document.getElementById("themeToggle").addEventListener("click",toggleTheme);
  document.getElementById("menuToggle").addEventListener("click",()=>document.body.classList.toggle("nav-open"));
  document.getElementById("scrim").addEventListener("click",()=>document.body.classList.remove("nav-open"));
  document.getElementById("logStudyBtn").addEventListener("click",openLogStudy);
  document.getElementById("views").addEventListener("click",e=>{const i=e.target.closest(".mini-rate i");
    if(i){setMastery(i.dataset.cid,i.dataset.dim,+i.dataset.v);}});
  document.addEventListener("keydown",e=>{if(e.target.matches("input,textarea,select"))return;
    const map={"1":"dashboard","2":"analytics","3":"curriculum","4":"skills","5":"revision","6":"productivity","7":"exam","8":"achievements"};
    if(map[e.key])setView(map[e.key]);
    if(e.key==="t"||e.key==="T")toggleTheme();
    if(e.key==="f"||e.key==="F")toggleFocus();});}
function init(){
  applyTheme();
  ACHIEVEMENTS.forEach(a=>{if(a.test(S))prevUnlocked.add(a.id);});
  bindEvents();
  setView("dashboard");refreshChips();}
init();
