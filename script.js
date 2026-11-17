const L={
en:{council:'Council',photos:'Photos',wiki:'Wiki',seeAll:'See all {c}',ph:'Search photos and articles',back:'← Back',recent:'Recent council meetings',bank:'Photo bank',guide:'Wiki guide',more:'See all',none:'No results',photo:'Photo',article:'Article',cats:['Roads','Bridges','Structures','Transit','Parks','Zoning','All']},
es:{council:'Concejo',photos:'Fotos',wiki:'Wiki',seeAll:'Ver todo: {c}',ph:'Buscar fotos y artículos',back:'← Atrás',recent:'Reuniones recientes del concejo',bank:'Banco de fotos',guide:'Guía wiki',more:'Ver todo',none:'Sin resultados',photo:'Foto',article:'Artículo',cats:['Calles','Puentes','Estructuras','Transporte','Parques','Zonificación','Todo']},
hi:{council:'परिषद',photos:'तस्वीरें',wiki:'विकी',seeAll:'सभी {c} देखें',ph:'तस्वीरें और लेख खोजें',back:'← वापस',recent:'हाल की परिषद बैठकें',bank:'फोटो बैंक',guide:'विकी गाइड',more:'सभी देखें',none:'कोई परिणाम नहीं',photo:'तस्वीर',article:'लेख',cats:['सड़कें','पुल','इमारतें','परिवहन','पार्क','ज़ोनिंग','सभी']},
tl:{council:'Konseho',photos:'Larawan',wiki:'Wiki',seeAll:'Tingnan lahat: {c}',ph:'Maghanap ng larawan at artikulo',back:'← Bumalik',recent:'Mga kamakailang pulong ng konseho',bank:'Photo bank',guide:'Gabay sa wiki',more:'Tingnan lahat',none:'Walang resulta',photo:'Larawan',article:'Artikulo',cats:['Kalsada','Tulay','Istruktura','Transit','Parke','Zoning','Lahat']},
ko:{council:'의회',photos:'사진',wiki:'위키',seeAll:'{c} 모두 보기',ph:'사진 및 글 검색',back:'← 뒤로',recent:'최근 의회 회의',bank:'사진 은행',guide:'위키 안내',more:'모두 보기',none:'결과 없음',photo:'사진',article:'글',cats:['도로','교량','건축물','대중교통','공원','용도지역','전체']},
zh:{council:'议会',photos:'图片',wiki:'百科',seeAll:'查看全部{c}',ph:'搜索图片和文章',back:'← 返回',recent:'近期议会会议',bank:'图片库',guide:'百科指南',more:'查看全部',none:'无结果',photo:'图片',article:'文章',cats:['道路','桥梁','建筑','公交','公园','分区','全部']}
};

const CATS=[{id:'roads',e:'🛣️'},{id:'bridges',e:'🌉'},{id:'structures',e:'🏢'},{id:'transit',e:'🚌'},{id:'parks',e:'🌳'},{id:'zoning',e:'🗺️'}];

const COUNCIL=[
['Protected bike lanes approved for Main Street','Nov 12','The council voted 5 to 2 to add protected bike lanes along Main Street, with construction expected to start next spring pending a final budget review.','🚲'],
['Bridge repair schedule released','Nov 5','Public works shared a timeline for repairing the Canal Street bridge, including detour maps and expected closure windows for nearby residents.','🌉'],
['New bus shelters coming to Eastside','Oct 29','Twelve new shelters with seating and lighting were funded. Residents can suggest stop locations at the next open session.','🚏'],
['Zoning change hearing for Oak Avenue','Oct 22','A hearing was held on allowing small apartment buildings near Oak Avenue. Public comment stays open for two more weeks.','🏘️']
];

const PHOTOS=[
['roads','Protected bike lane'],['roads','Roundabout'],['roads','Speed table'],
['bridges','Pedestrian footbridge'],['bridges','Bascule bridge'],
['structures','Mixed-use building'],['structures','Parking garage'],
['transit','Bus rapid transit stop'],['transit','Light rail platform'],
['parks','Pocket park'],['parks','Community garden'],
['zoning','Duplex row'],['zoning','Setback diagram']
];

const WIKI=[
['roads','Complete streets','Streets designed to be safe for walking, biking, transit, and driving.'],
['roads','Curb extension','A sidewalk bump-out that shortens crossing distance and slows turning cars.'],
['roads','Road diet','Reducing lanes to make room for bikes, parking, or wider sidewalks.'],
['bridges','Footbridge','A bridge meant only for people walking or biking, often over roads or rail.'],
['bridges','Load rating','The maximum weight a bridge is rated to safely carry.'],
['structures','Mixed-use','A building with homes, shops, or offices together under one roof.'],
['structures','Setback','The required distance between a building and the property line.'],
['transit','Bus rapid transit','Buses with dedicated lanes and platforms that behave more like a train.'],
['transit','Headway','The time between two buses or trains on the same route.'],
['parks','Pocket park','A very small public park built on a leftover or vacant lot.'],
['parks','Green infrastructure','Plants and soil used to soak up stormwater and cool neighborhoods.'],
['zoning','Zoning','Local rules that say what can be built where, and how big.'],
['zoning','Variance','Special permission to break a zoning rule for one property.']
];

const ICON={council:'🏛️',photos:'📷',wiki:'📖'};
const SECTIONS=['council','photos','wiki'];
const app=document.getElementById('app');
const pill=document.getElementById('pill');
const back=document.getElementById('back');
const sel=document.getElementById('lang');

let lang='en';
let cur='council';
try{lang=localStorage.getItem('lang')||'en'}catch(e){}
if(!L[lang])lang='en';

const T=()=>L[lang];
const eOf=id=>id==='all'?'🖼️':CATS.find(c=>c.id===id).e;
const nameOf=id=>T().cats[id==='all'?6:CATS.findIndex(c=>c.id===id)];
const card=(e,t,s,b)=>`<article class="card"><div class="thumb">${e}</div><div class="txt"><h3>${t}</h3>${s?`<small>${s}</small>`:''}${b?`<p>${b}</p>`:''}</div></article>`;

const views={
council(){
app.innerHTML=`<h1>${T().recent}</h1>`+COUNCIL.map(a=>card(a[3],a[0],a[1],a[2])).join('');
},
photos(){
const t=T();
app.innerHTML=`<h1>${t.bank}</h1><div class="grid">`+['all',...CATS.map(c=>c.id)].map(id=>
`<a class="tile" href="#search-${id}"><span class="big">${eOf(id)}</span><span class="lab">${t.seeAll.replace('{c}',nameOf(id))}</span></a>`).join('')+`</div>`;
},
wiki(){
const t=T();
app.innerHTML=`<h1>${t.guide}</h1>`+CATS.map(c=>
`<section><div class="sh"><h2>${nameOf(c.id)}</h2><a class="more" href="#search-${c.id}">${t.more}</a></div><div class="row">`+
WIKI.filter(w=>w[0]===c.id).map(w=>card(c.e,w[1],'',w[2])).join('')+`</div></section>`).join('');
}
};

function search(cat){
const t=T();
app.innerHTML=`<h1>${nameOf(cat)}</h1><input id="q" type="search" placeholder="${t.ph}" autocomplete="off"><div class="chips">`+
['all',...CATS.map(c=>c.id)].map(id=>`<a class="chip ${id===cat?'on':''}" href="#search-${id}">${nameOf(id)}</a>`).join('')+`</div><div id="res"></div>`;
const q=document.getElementById('q');
const res=document.getElementById('res');
const items=[
...PHOTOS.map(p=>({cat:p[0],t:p[1],k:t.photo,b:''})),
...WIKI.map(w=>({cat:w[0],t:w[1],k:t.article,b:w[2]}))
];
const draw=()=>{
const s=q.value.trim().toLowerCase();
const out=items.filter(i=>(cat==='all'||i.cat===cat)&&(!s||(i.t+' '+i.b).toLowerCase().includes(s)));
res.innerHTML=out.length?out.map(i=>card(eOf(i.cat),i.t,i.k,i.b)).join(''):`<div class="none">${t.none}</div>`;
};
q.addEventListener('input',draw);
draw();
}

function nav(){
pill.innerHTML=SECTIONS.filter(s=>s!==cur).map((s,i)=>
`<a class="h${i}" href="#${s}"><span>${ICON[s]}</span><span>${T()[s]}</span></a>`).join('');
}

function route(){
let h=location.hash.slice(1)||'council';
if(h.startsWith('search-')){
let c=h.slice(7);
if(c!=='all'&&!CATS.some(x=>x.id===c))c='all';
back.hidden=false;
back.href='#'+cur;
back.textContent=T().back;
search(c);
}else{
if(!SECTIONS.includes(h))h='council';
cur=h;
back.hidden=true;
views[h]();
}
nav();
document.documentElement.lang=lang;
window.scrollTo(0,0);
}

sel.value=lang;
sel.addEventListener('change',()=>{
lang=sel.value;
try{localStorage.setItem('lang',lang)}catch(e){}
route();
});
addEventListener('hashchange',route);
route();
