const A={
en:{signup:'Create account',noAcct:"Don't have an account? Sign up",haveAcct:'Already have an account? Sign in',signout:'Sign out',confirm:'Check your email to confirm your account, then sign in.',err:'Something went wrong. Check your details and try again.',notReady:'Accounts are not set up yet.',signedAs:'Signed in as',empty:'No meetings yet.',loading:'Loading…',related:'Related articles',seeImg:'See images'},
es:{signup:'Crear cuenta',noAcct:'¿No tienes cuenta? Regístrate',haveAcct:'¿Ya tienes cuenta? Inicia sesión',signout:'Cerrar sesión',confirm:'Revisa tu correo para confirmar tu cuenta y luego inicia sesión.',err:'Algo salió mal. Revisa tus datos e inténtalo de nuevo.',notReady:'Las cuentas aún no están configuradas.',signedAs:'Sesión iniciada como',empty:'Aún no hay reuniones.',loading:'Cargando…',related:'Artículos relacionados',seeImg:'Ver imágenes'},
hi:{signup:'खाता बनाएँ',noAcct:'खाता नहीं है? साइन अप करें',haveAcct:'पहले से खाता है? साइन इन करें',signout:'साइन आउट',confirm:'अपना खाता पक्का करने के लिए ईमेल देखें, फिर साइन इन करें।',err:'कुछ गड़बड़ हो गई। अपनी जानकारी जाँचकर फिर कोशिश करें।',notReady:'खाते अभी सेट नहीं हैं।',signedAs:'साइन इन किया हुआ:',empty:'अभी कोई बैठक नहीं।',loading:'लोड हो रहा है…',related:'संबंधित लेख',seeImg:'चित्र देखें'},
tl:{signup:'Gumawa ng account',noAcct:'Wala pang account? Mag-sign up',haveAcct:'May account na? Mag-sign in',signout:'Mag-sign out',confirm:'Tingnan ang iyong email para kumpirmahin ang account, saka mag-sign in.',err:'Nagkaproblema. Suriin ang iyong detalye at subukan muli.',notReady:'Hindi pa naka-set up ang mga account.',signedAs:'Naka-sign in bilang',empty:'Wala pang pulong.',loading:'Naglo-load…',related:'Mga kaugnay na artikulo',seeImg:'Tingnan ang mga larawan'},
ko:{signup:'계정 만들기',noAcct:'계정이 없나요? 가입하기',haveAcct:'이미 계정이 있나요? 로그인',signout:'로그아웃',confirm:'이메일을 확인해 계정을 인증한 후 로그인하세요.',err:'문제가 발생했습니다. 정보를 확인하고 다시 시도하세요.',notReady:'계정 기능이 아직 설정되지 않았습니다.',signedAs:'로그인 계정:',empty:'아직 회의가 없습니다.',loading:'불러오는 중…',related:'관련 글',seeImg:'사진 보기'},
zh:{signup:'创建账户',noAcct:'没有账户？注册',haveAcct:'已有账户？登录',signout:'退出登录',confirm:'请查收邮件确认账户，然后登录。',err:'出错了。请检查信息后重试。',notReady:'账户功能尚未设置。',signedAs:'当前登录：',empty:'暂无会议。',loading:'加载中…',related:'相关文章',seeImg:'查看图片'}
};

Object.assign(A,{en:Object.assign(A.en,{access:"Accessibility",aTheme:"Theme",aAuto:"System",aLight:"Light",aDark:"Dark",aSize:"Text size",aN:"Normal",aL:"Large",aXL:"Larger",aContrast:"High contrast",aMotion:"Reduce motion",aMarks:"Mark selected items with underlines and checks, not color alone",aReset:"Reset to defaults"}),es:Object.assign(A.es,{access:"Accesibilidad",aTheme:"Tema",aAuto:"Sistema",aLight:"Claro",aDark:"Oscuro",aSize:"Tamaño del texto",aN:"Normal",aL:"Grande",aXL:"Más grande",aContrast:"Alto contraste",aMotion:"Reducir movimiento",aMarks:"Marcar lo seleccionado con subrayados y marcas, no solo con color",aReset:"Restablecer"}),hi:Object.assign(A.hi,{access:"सुलभता",aTheme:"थीम",aAuto:"सिस्टम",aLight:"हल्का",aDark:"गहरा",aSize:"टेक्स्ट का आकार",aN:"सामान्य",aL:"बड़ा",aXL:"और बड़ा",aContrast:"उच्च कंट्रास्ट",aMotion:"एनिमेशन कम करें",aMarks:"चुने हुए आइटम को केवल रंग से नहीं, रेखांकन और निशान से दिखाएँ",aReset:"डिफ़ॉल्ट पर लौटें"}),tl:Object.assign(A.tl,{access:"Accessibility",aTheme:"Tema",aAuto:"Sistema",aLight:"Maliwanag",aDark:"Madilim",aSize:"Laki ng teksto",aN:"Normal",aL:"Malaki",aXL:"Mas malaki",aContrast:"Mataas na contrast",aMotion:"Bawasan ang galaw",aMarks:"Markahan ang napili ng underline at tsek, hindi kulay lang",aReset:"I-reset"}),ko:Object.assign(A.ko,{access:"접근성",aTheme:"테마",aAuto:"시스템",aLight:"라이트",aDark:"다크",aSize:"글자 크기",aN:"보통",aL:"크게",aXL:"더 크게",aContrast:"고대비",aMotion:"움직임 줄이기",aMarks:"선택 항목을 색상만이 아니라 밑줄과 체크로 표시",aReset:"기본값으로 되돌리기"}),zh:Object.assign(A.zh,{access:"无障碍",aTheme:"主题",aAuto:"跟随系统",aLight:"浅色",aDark:"深色",aSize:"文字大小",aN:"标准",aL:"大",aXL:"更大",aContrast:"高对比度",aMotion:"减少动画",aMarks:"用下划线和对勾标记所选项，而不只靠颜色",aReset:"恢复默认"})});

Object.assign(A,{en:Object.assign(A.en,{aMore:"More settings",aSkip:"Skip to content"}),es:Object.assign(A.es,{aMore:"Más ajustes",aSkip:"Saltar al contenido"}),hi:Object.assign(A.hi,{aMore:"और सेटिंग्स",aSkip:"सामग्री पर जाएँ"}),tl:Object.assign(A.tl,{aMore:"Higit pang setting",aSkip:"Lumaktaw sa nilalaman"}),ko:Object.assign(A.ko,{aMore:"설정 더 보기",aSkip:"본문으로 건너뛰기"}),zh:Object.assign(A.zh,{aMore:"更多设置",aSkip:"跳到内容"})});

Object.assign(A,{en:Object.assign(A.en,{aDevSize:"Match device text size"}),es:Object.assign(A.es,{aDevSize:"Usar el tamaño de texto del dispositivo"}),hi:Object.assign(A.hi,{aDevSize:"डिवाइस के टेक्स्ट आकार का उपयोग करें"}),tl:Object.assign(A.tl,{aDevSize:"Gamitin ang laki ng teksto ng device"}),ko:Object.assign(A.ko,{aDevSize:"기기 글자 크기 따르기"}),zh:Object.assign(A.zh,{aDevSize:"跟随设备文字大小"})});

const LANGS=[['en','🇺🇸','English'],['es','🇪🇸','Español'],['hi','🇮🇳','हिन्दी'],['tl','🇵🇭','Tagalog'],['ko','🇰🇷','한국어'],['zh','🇨🇳','中文']];

const CATS=[{id:'roads',i:'road-horizon'},{id:'bridges',i:'bridge'},{id:'structures',i:'buildings'},{id:'transit',i:'bus'},{id:'parks',i:'tree'},{id:'zoning',i:'map-trifold'}];

const WIKI=[
{id:'complete-streets',cat:'roads',title:'Complete streets',short:'Streets designed to be safe for walking, biking, transit, and driving.',body:[
'A complete street is designed for everyone who uses it, not only people in cars. Depending on the location and traffic, the design can include sidewalks, bike lanes, crosswalks, bus stops, and curb ramps.',
'Many cities adopt complete streets policies so that road projects consider these users from the start. When a repaving or redesign is proposed, this framework is often behind changes such as protected bike lanes or narrower crossings.']},
{id:'curb-extension',cat:'roads',title:'Curb extension',short:'A sidewalk bump-out that shortens crossing distance and slows turning cars.',body:[
'A curb extension, also called a bump-out, extends the sidewalk into the parking lane at an intersection or midblock crossing. Pedestrians cross a shorter distance, and drivers have to make slower, tighter turns.',
'Extensions can also make room for benches, plantings, or bus stops, and they keep parked cars farther from the corner so drivers can see people waiting to cross.']},
{id:'road-diet',cat:'roads',title:'Road diet',short:'Reducing lanes to make room for bikes, parking, or wider sidewalks.',body:[
'A road diet reduces the number of travel lanes on a street, usually to make room for bike lanes, parking, turn lanes, or wider sidewalks. Many road diets keep the overall street width and simply re-stripe it.',
'Supporters point to fewer crashes and calmer traffic. Concerns about congestion on busy routes are common, so these changes are often measured before and after they are made.']},
{id:'footbridge',cat:'bridges',title:'Footbridge',short:'A bridge meant only for people walking or biking, often over roads or rail.',body:[
'A footbridge is built for pedestrians and cyclists, not cars. Footbridges often cross highways, railways, rivers, or creeks where a full road bridge would cost too much.',
'They can reconnect neighborhoods that a busy road or rail line divides. Their ramps or stairs must meet accessibility rules.']},
{id:'load-rating',cat:'bridges',title:'Load rating',short:'The maximum weight a bridge is rated to safely carry.',body:[
'A load rating is the maximum weight a bridge is engineered and inspected to carry safely. Engineers calculate it from the bridge\'s design, materials, and condition.',
'When a rating drops, a bridge may be posted with weight limits and heavy vehicles may need a detour. This is why repair schedules and detour maps often come with bridge projects.']},
{id:'mixed-use',cat:'structures',title:'Mixed-use',short:'A building with homes, shops, or offices together under one roof.',body:[
'A mixed-use building combines different functions in one structure. The most common version has shops or offices on the ground floor and homes above.',
'Mixed-use buildings let people walk to daily errands and keep street fronts active. Zoning rules decide where they are allowed and how large they can be.']},
{id:'setback',cat:'structures',title:'Setback',short:'The required distance between a building and the property line.',body:[
'A setback is the minimum distance a building must keep from a property line, street, or other edge of a lot. Setbacks leave room for sidewalks, landscaping, parking, light, and fire access.',
'Front, side, and rear setbacks are usually set separately, and the numbers change by zone. Planners often review them when a project asks for a variance.']},
{id:'bus-rapid-transit',cat:'transit',title:'Bus rapid transit',short:'Buses with dedicated lanes and platforms that behave more like a train.',body:[
'Bus rapid transit (BRT) runs buses in dedicated lanes, often from platforms that allow level boarding and fare payment before the bus arrives. Because buses avoid traffic and stop less often, service can feel closer to a train than a regular bus route.',
'BRT usually costs less to build than rail and can be added to existing streets.']},
{id:'headway',cat:'transit',title:'Headway',short:'The time between two buses or trains on the same route.',body:[
'Headway is the time between one bus or train and the next on the same route. A 10-minute headway means a vehicle arrives every 10 minutes.',
'Short headways make a route easier to use, because riders don\'t need to check a schedule. Planners use headway to compare service quality across routes.']},
{id:'pocket-park',cat:'parks',title:'Pocket park',short:'A very small public park built on a leftover or vacant lot.',body:[
'A pocket park is a very small public open space, often built on a vacant or leftover lot. It may have benches, planting beds, a few trees, or a play feature.',
'Pocket parks can be quick and inexpensive to create. They give neighborhoods shade and a place to rest where no larger park is nearby.']},
{id:'green-infrastructure',cat:'parks',title:'Green infrastructure',short:'Plants and soil used to soak up stormwater and cool neighborhoods.',body:[
'Green infrastructure uses plants, soil, and other natural features to manage stormwater and cool neighborhoods. Examples include rain gardens, bioswales, green roofs, and street trees.',
'Instead of sending rainwater straight into storm drains, these features let it soak into the ground, which can reduce flooding and heat in dense areas.']},
{id:'zoning',cat:'zoning',title:'Zoning',short:'Local rules that say what can be built where, and how big.',body:[
'Zoning is the set of local rules that controls what can be built on each piece of land and how large it can be. A zoning map divides the city into districts, such as residential, commercial, or industrial.',
'Each district has its own rules for uses, height, lot size, and parking. Changes to zoning are usually decided by the city council after a public hearing.']},
{id:'variance',cat:'zoning',title:'Variance',short:'Special permission to break a zoning rule for one property.',body:[
'A variance is permission to break a specific zoning rule for one property. Owners ask for one when a rule would create a real hardship for their lot, such as an unusual shape or a building that needs to sit closer to the street.',
'Variances are usually decided case by case, and neighbors often get a chance to comment.']},
{id:'roundabout',cat:'roads',title:'Roundabout',short:'A circular intersection where traffic flows one way and yields on entry.',body:[
'A roundabout is a circular intersection where drivers travel counterclockwise around a central island and yield to traffic already in the circle. There are no stop signs or traffic lights inside it.',
'Because cars must slow down to enter and all turns are gentle, roundabouts tend to have fewer serious crashes than signalized intersections. They can need more space, so planners weigh the available land and the number of people walking and biking.']},
{id:'speed-table',cat:'roads',title:'Speed table',short:'A long, flat-topped bump that slows cars without a hard jolt.',body:[
'A speed table is a raised section of road with a flat top, wide enough for a car\'s wheels to rest on it at once. It is longer and gentler than a speed bump, so drivers slow down without a sharp jolt.',
'Speed tables are often placed at crosswalks or on residential streets. They are usually marked with paint and can be built to allow buses and emergency vehicles to pass comfortably.']},
{id:'bascule-bridge',cat:'bridges',title:'Bascule bridge',short:'A drawbridge with a deck that lifts upward to let boats pass.',body:[
'A bascule bridge is a movable bridge, often called a drawbridge, with a deck that pivots upward on a hinge. When the deck is raised, boats can pass through the channel below.',
'Many use a counterweight to balance the deck so it takes less power to lift. Bridge openings follow set schedules or signals, which is why road projects near them often include timing and traffic plans.']},
{id:'parking-garage',cat:'structures',title:'Parking garage',short:'A multi-level building used to store cars in less space.',body:[
'A parking garage stacks parking spaces on several levels so that more cars fit on a small piece of land. Some are stand-alone buildings, and others sit under or beside homes and shops.',
'Cities often set parking requirements in their zoning rules. Garages can also be designed with shops on the ground floor, so the street stays lively instead of lined with blank walls.']},
{id:'light-rail',cat:'transit',title:'Light rail',short:'Electric trains that run on city streets or dedicated tracks, stopping at platforms.',body:[
'Light rail uses electric trains that run on tracks, either in their own lanes on city streets or on separate paths. Riders board from platforms at stations, and trains usually run more often than regional rail.',
'Light rail carries more people than a bus and costs less to build than a subway. Planners look at how close stations are to homes, jobs, and bus connections.']},
{id:'community-garden',cat:'parks',title:'Community garden',short:'A shared plot of land where neighbors grow plants and food.',body:[
'A community garden is a piece of land that neighbors manage together. Members may each have their own bed or share the work and the harvest.',
'Gardens can turn an empty lot into a gathering place and give people fresh produce. Cities often lease land for them, and zoning rules decide where they are allowed.']}
];

const IMG={
'complete-streets':{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Protected_bike_lane_on_William_Street_near_Flinders_Street%2C_Melbourne.jpg/1280px-Protected_bike_lane_on_William_Street_near_Flinders_Street%2C_Melbourne.jpg',credit:'Philip Mallis, CC BY-SA 2.0, via Wikimedia Commons'},
'curb-extension':{src:'https://upload.wikimedia.org/wikipedia/commons/2/2e/Curb_extensions_at_midblock_crosswalk.jpg',credit:'Richard Drdul, CC BY-SA 2.0, via Wikimedia Commons'},
'road-diet':{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Pop-up_protected_bike_lane_and_protected_intersection.jpg/1280px-Pop-up_protected_bike_lane_and_protected_intersection.jpg',credit:'nickfalbo, CC BY-SA 2.0, via Wikimedia Commons'},
'footbridge':{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/University_of_North_Texas_September_2015_40_%28pedestrian_bridge%29.jpg/1280px-University_of_North_Texas_September_2015_40_%28pedestrian_bridge%29.jpg',credit:'Michael Barera, CC BY-SA 4.0, via Wikimedia Commons'},
'load-rating':{src:'https://upload.wikimedia.org/wikipedia/commons/2/2f/GWR_bridge_weight_limit_sign_-_geograph.org.uk_-_6843191.jpg',credit:'Mr Red, CC BY-SA 2.0, via Wikimedia Commons'},
'mixed-use':{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Rex26_Apartments_and_Aldi_-_Lyndale_Avenue%2C_Minneapolis_%2848979957807%29.jpg/1280px-Rex26_Apartments_and_Aldi_-_Lyndale_Avenue%2C_Minneapolis_%2848979957807%29.jpg',credit:'Tony Webster, CC BY-SA 2.0, via Wikimedia Commons'},
'bus-rapid-transit':{src:'https://upload.wikimedia.org/wikipedia/commons/4/4a/Van_Ness_Bus_Rapid_Transit_01.jpg',credit:'Mattsjc, CC BY-SA 4.0, via Wikimedia Commons'},
'headway':{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Bishopsgate_Threadneedle_Street_bus_stop_in_the_City_of_London_England.jpg/1280px-Bishopsgate_Threadneedle_Street_bus_stop_in_the_City_of_London_England.jpg',credit:'Acabashi, CC BY-SA 4.0, via Wikimedia Commons'},
'pocket-park':{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Pocket_park_in_Hollywood_2.jpg/1280px-Pocket_park_in_Hollywood_2.jpg',credit:'Downtowngal, CC BY-SA 3.0, via Wikimedia Commons'},
'green-infrastructure':{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Morning_after_a_rain_event_in_a_Southern_California_rain_garden_01.jpg/1280px-Morning_after_a_rain_event_in_a_Southern_California_rain_garden_01.jpg',credit:'Jengod, CC BY-SA 4.0, via Wikimedia Commons'},
'zoning':{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Guilford_County_W-S_protection_study_-_zoning_map_LOC_2007629478.jpg/1280px-Guilford_County_W-S_protection_study_-_zoning_map_LOC_2007629478.jpg',credit:'U.S. Soil Conservation Service / Library of Congress, public domain'}
};

const PHOTOS=[
['roads','Protected bike lane','complete-streets'],['roads','Roundabout','roundabout'],['roads','Speed table','speed-table'],
['bridges','Pedestrian footbridge','footbridge'],['bridges','Bascule bridge','bascule-bridge'],
['structures','Mixed-use building','mixed-use'],['structures','Parking garage','parking-garage'],
['transit','Bus rapid transit stop','bus-rapid-transit'],['transit','Light rail platform','light-rail'],
['parks','Pocket park','pocket-park'],['parks','Community garden','community-garden'],
['zoning','Duplex row','zoning'],['zoning','Setback diagram','setback']
];

const SAMPLE={
meetings:[
{id:'m1',meeting_date:'2026-11-12',title:'Protected bike lanes approved for Main Street',body:'The council voted 5 to 2 to add protected bike lanes along Main Street. Construction is expected to start next spring, pending a final budget review.'},
{id:'m2',meeting_date:'2026-11-05',title:'Canal Street bridge repairs scheduled',body:'Public works shared a repair timeline for the Canal Street bridge, including detour maps and closure windows for nearby residents.'},
{id:'m3',meeting_date:'2026-10-29',title:'Eastside bus shelters funded',body:'Twelve new bus shelters with seating and lighting were funded. Residents can suggest stop locations at the next open session.'},
{id:'m4',meeting_date:'2026-10-22',title:'Oak Avenue zoning hearing',body:'A hearing was held on allowing small apartment buildings near Oak Avenue. Public comment stays open for two more weeks.'}
],
articles:[
{id:'a1',cat:'roads',title:'Protected bike lanes on Main Street',body:'Protected bike lanes use posts, planters, or curbs to separate cyclists from traffic.'},
{id:'a2',cat:'roads',title:'Roundabout or stop lights at Elm Street',body:'Members compared a roundabout with new stop lights at the Elm Street intersection.'},
{id:'a3',cat:'bridges',title:'Canal Street bridge closure windows',body:'Expected closure windows and detour routes for the bridge repairs.'},
{id:'a4',cat:'transit',title:'New bus shelters for Eastside stops',body:'Twelve shelters with seating and lighting. Residents can suggest stop locations.'},
{id:'a5',cat:'zoning',title:'Small apartments near Oak Avenue',body:'Public comment on allowing small apartment buildings is open for two more weeks.'}
],
links:[{meeting_id:'m1',article_id:'a1'},{meeting_id:'m1',article_id:'a2'},{meeting_id:'m2',article_id:'a3'},{meeting_id:'m3',article_id:'a4'},{meeting_id:'m4',article_id:'a5'}]
};

const ICON={council:'bank',photos:'camera',wiki:'book-open'};
const PICON={account:'user',contribute:'upload-simple',admin:'shield-check',access:'eye',about:'info',faq:'question'};
const SECTIONS=['council','photos','wiki'];
const PAGES=['account','contribute','admin','access','about','faq'];
const $=id=>document.getElementById(id);
const app=$('app'),tabs=$('tabs'),back=$('back'),brand=$('brand'),drawer=$('drawer'),scrim=$('scrim'),menuBtn=$('menuBtn'),langBtn=$('langBtn'),langMenu=$('langMenu'),flag=$('flag');

const sb=window.supabase&&window.SB&&SB.url&&SB.key?supabase.createClient(SB.url,SB.key):null;

let lang='en';
let cur='council';
let page='';
let user=null;
let isAdmin=false;
let ready=!sb;
let store=null;
let authMode='in';
let tokn=0;
try{lang=localStorage.getItem('lang')||'en'}catch(e){}
if(!L[lang])lang='en';

const T=()=>({...L[lang],...A[lang]});
const ic=n=>`<i class="ph ph-${n}"></i>`;
const iconOf=id=>id==='all'?'images':CATS.find(c=>c.id===id).i;
const nameOf=id=>L[lang].cats[id==='all'?6:CATS.findIndex(c=>c.id===id)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const card=(i,t,s,b,full,href,src)=>{
const inner=`<div class="thumb">${src?`<img src="${src}" alt="" loading="lazy">`:ic(i)}</div><div class="txt"><h3>${t}</h3>${s?`<small>${s}</small>`:''}${b?`<p${full?' class="full"':''}>${b}</p>`:''}</div>`;
return href?`<a class="card" href="${href}">${inner}</a>`:`<article class="card">${inner}</article>`;
};

const TL={es:'es',hi:'hi',tl:'tl',ko:'ko',zh:'zh-CN'};
let TC={};
try{TC=JSON.parse(localStorage.getItem('tc')||'{}')}catch(e){}
const TX=s=>lang==='en'?s:(TC[lang+'|'+s]||s);
const X=s=>esc(TX(s));
async function trOne(l,s){
const k=l+'|'+s;
if(TC[k])return;
const parts=[];
let cur='';
for(const x of s.split(/(?<=[.!?。！？])\s+/)){
if(cur&&(cur+' '+x).length>900){parts.push(cur);cur=x}else cur=cur?cur+' '+x:x;
}
if(cur)parts.push(cur);
try{
const out=await Promise.all(parts.map(async q=>{
const r=await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl='+TL[l]+'&dt=t&q='+encodeURIComponent(q));
const d=await r.json();
return d[0].map(x=>x[0]).join('');
}));
const t=out.join(' ').trim();
if(t)TC[k]=t;
}catch(e){}
}
async function prep(list){
if(lang==='en')return;
const l=lang;
const todo=[...new Set(list.filter(s=>s&&!TC[l+'|'+s]))];
if(!todo.length)return;
app.innerHTML=`<div class="none">${T().loading}</div>`;
let i=0;
const worker=async()=>{while(i<todo.length)await trOne(l,todo[i++])};
await Promise.race([Promise.all(Array.from({length:6},worker)),new Promise(r=>setTimeout(r,6000))]);
try{
let s=JSON.stringify(TC);
if(s.length>900000){TC={};s='{}'}
localStorage.setItem('tc',s);
}catch(e){}
}
const fmt=d=>{const[y,m,x]=d.split('-').map(Number);return new Intl.DateTimeFormat(lang,{year:'numeric',month:'long',day:'numeric'}).format(new Date(y,m-1,x))};

async function getData(force){
if(!sb)return SAMPLE;
if(store&&!force)return store;
const[m,a,l]=await Promise.all([
sb.from('meetings').select('*').order('meeting_date',{ascending:false}),
sb.from('articles').select('*').order('title'),
sb.from('meeting_articles').select('*')
]);
store={meetings:m.data||[],articles:a.data||[],links:l.data||[]};
return store;
}

async function loadUser(s){
user=s?s.user:null;
isAdmin=false;
if(user){
const{data}=await sb.from('profiles').select('is_admin').eq('id',user.id).maybeSingle();
isAdmin=!!(data&&data.is_admin);
try{
const r=await sb.from('user_prefs').select('a11y').eq('id',user.id).maybeSingle();
if(r.data&&r.data.a11y&&Object.keys(r.data.a11y).length)A11Y.load(r.data.a11y);
else if(A11Y.stored())A11Y.sync(A11Y.get());
}catch(e){}
}
}

function axHtml(keys,pre){
const t=T(),p=A11Y.get();
const seg=(k,lab,o)=>`<h2 class="ax" id="${pre}${k}">${lab}</h2><div class="seg" role="group" aria-labelledby="${pre}${k}">`+o.map(([v,l])=>`<button type="button" data-k="${k}" data-v="${v}" aria-pressed="${String(p[k])===String(v)}">${l}</button>`).join('')+`</div>`;
const chk=(k,l)=>`<label class="check"><input type="checkbox" data-k="${k}"${p[k]?' checked':''}>${l}</label>`;
const parts={
theme:()=>seg('theme',t.aTheme,[['auto',t.aAuto],['light',t.aLight],['dark',t.aDark]]),
size:()=>`<h2 class="ax" id="${pre}size">${t.aSize}</h2><div class="sl"><span class="sm" aria-hidden="true">A</span><input type="range" min="0.875" max="1.5" step="0.125" value="${p.size==='auto'?parseFloat(getComputedStyle(document.documentElement).fontSize)/16:p.size}" aria-labelledby="${pre}size" aria-valuetext="${Math.round((p.size==='auto'?parseFloat(getComputedStyle(document.documentElement).fontSize)/16:p.size)*100)}%"><span class="lg" aria-hidden="true">A</span></div><label class="check"><input type="checkbox" data-k="sizeAuto"${p.size==='auto'?' checked':''}>${t.aDevSize}</label>`,
contrast:()=>chk('contrast',t.aContrast),
motion:()=>chk('motion',t.aMotion),
marks:()=>chk('marks',t.aMarks)
};
return keys.map(k=>parts[k]()).join('');
}
function axBind(el){
el.addEventListener('click',e=>{
const b=e.target.closest('button[data-k]');
if(!b)return;
const v=b.dataset.v;
A11Y.set({[b.dataset.k]:v});
b.parentNode.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));
});
el.addEventListener('input',e=>{
const r=e.target;
if(r.type!=='range')return;
A11Y.set({size:+r.value});
r.setAttribute('aria-valuetext',Math.round(r.value*100)+'%');
const cb=el.querySelector('[data-k=sizeAuto]');
if(cb)cb.checked=false;
});
el.addEventListener('change',e=>{
const k=e.target.dataset.k;
if(!k)return;
if(k==='sizeAuto'){const r=el.querySelector('input[type=range]');A11Y.set({size:e.target.checked?'auto':+r.value});if(e.target.checked)r.value=parseFloat(getComputedStyle(document.documentElement).fontSize)/16}
else A11Y.set({[k]:e.target.checked});
});
}
const axBtn=$('axBtn'),axMenu=$('axMenu');
function setAx(open){
if(open){
const t=T();
axMenu.innerHTML=`<h2 class="ax first">${t.access}</h2>`+axHtml(['theme','size','contrast'],'q-')+`<a class="btn ghost" href="#access">${t.aMore}</a>`;
}
axMenu.hidden=!open;
axBtn.setAttribute('aria-expanded',open);
axBtn.setAttribute('aria-label',T().access);
axMenu.setAttribute('aria-label',T().access);
if(open){setLang(false);axMenu.querySelector('button').focus()}
}
axBind(axMenu);
axBtn.addEventListener('click',e=>{e.stopPropagation();setAx(axMenu.hidden)});
axMenu.addEventListener('click',e=>{if(e.target.closest('a'))setAx(false)});
$('skip').addEventListener('click',()=>{app.tabIndex=-1;app.focus()});
if(sb)A11Y.sync=p=>{if(user)sb.from('user_prefs').upsert({id:user.id,a11y:p}).then(()=>{},()=>{})};

const views={
async council(){
const t=T(),tok=tokn;
app.innerHTML=`<h1>${t.recent}</h1><div class="none">${t.loading}</div>`;
const d=await getData();
if(tok!==tokn)return;
const arts=Object.fromEntries(d.articles.map(a=>[a.id,a]));
await prep([...d.meetings.flatMap(m=>[m.title,m.body]),...d.articles.flatMap(a=>[a.title,a.body])]);
if(tok!==tokn)return;
app.innerHTML=`<h1>${t.recent}</h1>`+(d.meetings.length?d.meetings.map(m=>{
const rel=d.links.filter(l=>l.meeting_id===m.id).map(l=>arts[l.article_id]).filter(Boolean);
return `<section><h2 class="date">${fmt(m.meeting_date)}</h2>`+card('bank',X(m.title),'',X(m.body),true)+(rel.length?`<h3 class="rel">${t.related}</h3>`+rel.map(a=>card(iconOf(a.cat),X(a.title),'',X(a.body),true)).join(''):'')+`</section>`;
}).join(''):`<div class="none">${t.empty}</div>`);
},
photos(){
const t=T();
app.innerHTML=`<h1>${t.bank}</h1><div class="grid">`+['all',...CATS.map(c=>c.id)].map(id=>
`<a class="tile" href="#search-${id}">${ic(iconOf(id))}<span class="lab">${nameOf(id)}</span></a>`).join('')+`</div>`;
},
async wiki(){
const t=T(),tok=tokn;
await prep(WIKI.flatMap(w=>[w.title,w.short]));
if(tok!==tokn)return;
app.innerHTML=`<h1>${t.guide}</h1>`+CATS.map(c=>
`<section><div class="sh"><h2>${nameOf(c.id)}</h2><a class="more" href="#search-${c.id}">${t.more}</a></div><div class="row">`+
WIKI.filter(w=>w.cat===c.id).map(w=>card(c.i,X(w.title),'',X(w.short),false,'#wiki/'+w.id,IMG[w.id]?.src)).join('')+`</div></section>`).join('');
}
};

async function wikiArticle(id){
const t=T(),tok=tokn,w=WIKI.find(x=>x.id===id);
if(!w){app.innerHTML=`<div class="none">${t.none}</div>`;return}
const img=IMG[w.id];
const rel=WIKI.filter(x=>x.cat===w.cat&&x.id!==w.id);
await prep([w.title,w.short,...w.body,...rel.flatMap(x=>[x.title,x.short])]);
if(tok!==tokn)return;
app.innerHTML=`<article class="wiki-article">`+(img?`<figure class="hero"><img src="${img.src}" alt="${X(w.title)}"><figcaption>${img.credit}</figcaption></figure>`:'')+`<div class="cat">${ic(iconOf(w.cat))}<span>${nameOf(w.cat)}</span></div><h1>${X(w.title)}</h1><p class="lede">${X(w.short)}</p><a class="btn" href="#search-${w.cat}">${ic('images')}${t.seeImg}</a>`+w.body.map(p=>`<p>${X(p)}</p>`).join('')+(rel.length?`<h3 class="rel">${t.related}</h3>`+rel.map(x=>card(iconOf(x.cat),X(x.title),'',X(x.short),false,'#wiki/'+x.id,IMG[x.id]?.src)).join(''):'')+`</article>`;
}

const pages={
access(){
const t=T();
app.innerHTML=`<div class="page" id="ax"><h1>${t.access}</h1>`+axHtml(['theme','size','contrast','motion','marks'],'p-')+`<button id="axr" type="button" class="btn ghost">${t.aReset}</button></div>`;
axBind($('ax'));
$('axr').addEventListener('click',()=>{A11Y.reset();pages.access();if(A11Y.sync)A11Y.sync(A11Y.get())});
},
about(){
const t=T();
app.innerHTML=`<div class="page"><h1>${t.about}</h1><p>${t.aboutBody}</p></div>`;
},
faq(){
const t=T();
app.innerHTML=`<div class="page"><h1>${t.faq}</h1>`+[1,2,3].map(n=>`<details><summary>${t['q'+n]}</summary><p>${t['a'+n]}</p></details>`).join('')+`</div>`;
},
contribute(){
const t=T();
app.innerHTML=`<div class="page"><h1>${t.contribute}</h1><p>${t.contribBody}</p><form id="f"><label class="field">${t.photoF}<input type="file" accept="image/*" required></label><label class="field">${t.titleF}<input type="text" required></label><label class="field">${t.capF}<input type="text"></label><button class="btn solid" type="submit">${t.submit}</button><div class="ok" id="ok" role="status"></div></form></div>`;
$('f').addEventListener('submit',e=>{e.preventDefault();$('ok').textContent=t.thanks;e.target.reset()});
},
account(){
const t=T();
if(!sb){app.innerHTML=`<div class="page"><h1>${t.account}</h1><div class="none">${t.notReady}</div></div>`;return}
if(!ready){app.innerHTML=`<div class="page"><h1>${t.account}</h1><div class="none">${t.loading}</div></div>`;return}
if(user){
app.innerHTML=`<div class="page"><h1>${t.account}</h1><p>${t.signedAs}<br><b>${esc(user.email)}</b></p><button id="out" class="btn solid">${ic('sign-out')}${t.signout}</button></div>`;
$('out').addEventListener('click',()=>sb.auth.signOut());
return;
}
const up=authMode==='up';
app.innerHTML=`<div class="page"><h1>${up?t.signup:t.signin}</h1><form id="f"><label class="field">${t.email}<input type="email" autocomplete="email" required></label><label class="field">${t.pass}<input type="password" autocomplete="${up?'new-password':'current-password'}" minlength="6" required></label><button class="btn solid" type="submit">${up?t.signup:t.signin}</button><div class="ok" id="ok" role="status"></div></form><button id="sw" class="btn ghost" type="button">${up?t.haveAcct:t.noAcct}</button></div>`;
$('sw').addEventListener('click',()=>{authMode=up?'in':'up';pages.account()});
$('f').addEventListener('submit',async e=>{
e.preventDefault();
const[em,pw]=[...e.target.querySelectorAll('input')].map(i=>i.value);
const ok=$('ok');
ok.textContent='';
const r=up?await sb.auth.signUp({email:em,password:pw}):await sb.auth.signInWithPassword({email:em,password:pw});
if(r.error){ok.textContent=t.err;return}
if(up&&!r.data.session){ok.textContent=t.confirm;authMode='in'}
});
},
async admin(){
const t=T();
if(!sb||!ready){app.innerHTML=`<div class="page"><h1>Admin</h1><div class="none">${!sb?t.notReady:t.loading}</div></div>`;return}
if(!isAdmin){app.innerHTML=`<div class="page"><h1>Admin</h1><div class="none">Admins only.</div></div>`;return}
const tok=tokn;
const topics=CATS.map((c,i)=>`<option value="${c.id}">${L.en.cats[i]}</option>`).join('');
app.innerHTML=`<div class="page"><h1>Admin</h1>
<h2 class="sec">Council meeting</h2>
<form id="mf"><input type="hidden" id="mid">
<label class="field">Meeting date<input type="date" id="md" required></label>
<label class="field">Title<input type="text" id="mt" required></label>
<label class="field">Summary<textarea id="mb" rows="5" required></textarea></label>
<fieldset class="checks"><legend>Related articles</legend><div id="mrel"></div></fieldset>
<button class="btn solid" type="submit">Save meeting</button>
<button id="mx" class="btn ghost" type="button" hidden>Cancel edit</button>
<div class="ok" id="mok" role="status"></div></form>
<div id="ml"></div>
<h2 class="sec">Articles</h2>
<form id="af"><input type="hidden" id="aid">
<label class="field">Topic<select id="ac">${topics}</select></label>
<label class="field">Title<input type="text" id="at" required></label>
<label class="field">Text<textarea id="ab" rows="6" required></textarea></label>
<button class="btn solid" type="submit">Save article</button>
<button id="ax" class="btn ghost" type="button" hidden>Cancel edit</button>
<div class="ok" id="aok" role="status"></div></form>
<div id="al"></div></div>`;
let D={meetings:[],articles:[],links:[]};
const resetM=()=>{$('mf').reset();$('mid').value='';$('mx').hidden=true};
const resetA=()=>{$('af').reset();$('aid').value='';$('ax').hidden=true};
const draw=async()=>{
D=await getData(true);
if(tok!==tokn)return;
$('mrel').innerHTML=D.articles.map(a=>`<label class="check"><input type="checkbox" value="${a.id}"> ${esc(a.title)}</label>`).join('')||'<small>No articles yet.</small>';
$('ml').innerHTML=D.meetings.map(m=>`<div class="arow"><div><b>${esc(m.title)}</b><small>${m.meeting_date}</small></div><button class="btn icon" data-me="${m.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-md="${m.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('');
$('al').innerHTML=D.articles.map(a=>`<div class="arow"><div><b>${esc(a.title)}</b><small>${nameOf(a.cat)}</small></div><button class="btn icon" data-ae="${a.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-ad="${a.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('');
};
$('mf').addEventListener('submit',async e=>{
e.preventDefault();
const id=$('mid').value;
const p={meeting_date:$('md').value,title:$('mt').value.trim(),body:$('mb').value.trim()};
const r=id?await sb.from('meetings').update(p).eq('id',id).select().single():await sb.from('meetings').insert(p).select().single();
if(r.error){$('mok').textContent='Could not save: '+r.error.message;return}
const picked=[...$('mrel').querySelectorAll('input:checked')].map(i=>({meeting_id:r.data.id,article_id:i.value}));
await sb.from('meeting_articles').delete().eq('meeting_id',r.data.id);
if(picked.length)await sb.from('meeting_articles').insert(picked);
resetM();
$('mok').textContent='Saved.';
await draw();
});
$('ml').addEventListener('click',async e=>{
const b=e.target.closest('button');
if(!b)return;
if(b.dataset.me){
const m=D.meetings.find(x=>x.id===b.dataset.me);
const on=new Set(D.links.filter(l=>l.meeting_id===m.id).map(l=>l.article_id));
$('mid').value=m.id;$('md').value=m.meeting_date;$('mt').value=m.title;$('mb').value=m.body;
$('mrel').querySelectorAll('input').forEach(i=>i.checked=on.has(i.value));
$('mx').hidden=false;$('mok').textContent='';
window.scrollTo(0,0);
}else if(b.dataset.md&&confirm('Delete this meeting?')){
await sb.from('meetings').delete().eq('id',b.dataset.md);
await draw();
}
});
$('af').addEventListener('submit',async e=>{
e.preventDefault();
const id=$('aid').value;
const p={cat:$('ac').value,title:$('at').value.trim(),body:$('ab').value.trim()};
const r=id?await sb.from('articles').update(p).eq('id',id):await sb.from('articles').insert(p);
if(r.error){$('aok').textContent='Could not save: '+r.error.message;return}
resetA();
$('aok').textContent='Saved.';
await draw();
});
$('al').addEventListener('click',async e=>{
const b=e.target.closest('button');
if(!b)return;
if(b.dataset.ae){
const a=D.articles.find(x=>x.id===b.dataset.ae);
$('aid').value=a.id;$('ac').value=a.cat;$('at').value=a.title;$('ab').value=a.body;
$('ax').hidden=false;$('aok').textContent='';
window.scrollTo(0,0);
}else if(b.dataset.ad&&confirm('Delete this article? It will be removed from any meetings it is attached to.')){
await sb.from('articles').delete().eq('id',b.dataset.ad);
await draw();
}
});
$('mx').addEventListener('click',()=>{resetM();$('mok').textContent=''});
$('ax').addEventListener('click',()=>{resetA();$('aok').textContent=''});
await draw();
}
};

async function search(cat){
const t=T(),tok=tokn;
await prep([...PHOTOS.map(p=>p[1]),...WIKI.flatMap(w=>[w.title,w.short])]);
if(tok!==tokn)return;
app.innerHTML=`<h1>${nameOf(cat)}</h1><input id="q" type="search" placeholder="${t.ph}" autocomplete="off"><div class="chips">`+
['all',...CATS.map(c=>c.id)].map(id=>`<a class="chip ${id===cat?'on':''}" href="#search-${id}">${nameOf(id)}</a>`).join('')+`</div><div id="res"></div>`;
const q=$('q');
const res=$('res');
const items=[
...PHOTOS.map(p=>({cat:p[0],t:TX(p[1]),k:t.photo,b:'',h:'#wiki/'+p[2],s:IMG[p[2]]?.src})),
...WIKI.map(w=>({cat:w.cat,t:TX(w.title),k:t.article,b:TX(w.short),h:'#wiki/'+w.id,s:IMG[w.id]?.src}))
];
const draw=()=>{
const s=q.value.trim().toLowerCase();
const out=items.filter(i=>(cat==='all'||i.cat===cat)&&(!s||(i.t+' '+i.b).toLowerCase().includes(s)));
res.innerHTML=out.length?out.map(i=>card(iconOf(i.cat),esc(i.t),i.k,esc(i.b),false,i.h,i.s)).join(''):`<div class="none">${t.none}</div>`;
};
q.addEventListener('input',draw);
draw();
}

function nav(){
tabs.innerHTML=SECTIONS.map(s=>
`<a href="#${s}"${s===cur?' aria-current="page"':''}>${ic(ICON[s])}<span>${T()[s]}</span></a>`).join('');
}

function renderDrawer(){
const t=T();
const items=['account','contribute',...(isAdmin?['admin']:[]),'|','access','about','faq'];
drawer.innerHTML=`<div class="dh"><b>${t.menu}</b><button id="closeBtn" class="btn icon" aria-label="${t.close}">${ic('x')}</button></div>`+
items.map(p=>p==='|'?'<hr>':`<a class="item" href="#${p}"${page===p?' aria-current="page"':''}>${ic(PICON[p])}${p==='admin'?'Admin':t[p]}</a>`).join('');
$('closeBtn').addEventListener('click',()=>setDrawer(false));
menuBtn.setAttribute('aria-label',t.menu);
drawer.setAttribute('aria-label',t.menu);
}

function setDrawer(open){
drawer.classList.toggle('open',open);
scrim.classList.toggle('open',open);
menuBtn.setAttribute('aria-expanded',open);
if(open){setLang(false);$('closeBtn').focus()}else if(drawer.contains(document.activeElement))menuBtn.focus();
}

function setLang(open){
if(open&&!axMenu.hidden)setAx(false);
langMenu.hidden=!open;
langBtn.setAttribute('aria-expanded',open);
}

function renderLang(){
const cl=LANGS.find(l=>l[0]===lang);
flag.textContent=cl[1];
langBtn.setAttribute('aria-label',cl[2]);
langMenu.innerHTML=LANGS.map(l=>`<li><button data-l="${l[0]}"${l[0]===lang?' aria-current="true"':''}><span class="f">${l[1]}</span>${l[2]}${l[0]===lang?`<span class="ck">${ic('check')}</span>`:''}</button></li>`).join('');
}

function route(){
tokn++;
let h=location.hash.slice(1)||'council';
page='';
if(h.startsWith('search-')){
let c=h.slice(7);
if(c!=='all'&&!CATS.some(x=>x.id===c))c='all';
back.hidden=false;brand.hidden=true;
back.href='#'+cur;
back.textContent=T().back;
search(c);
}else if(h.startsWith('wiki/')){
cur='wiki';
back.hidden=false;brand.hidden=true;
back.href='#wiki';
back.textContent=T().back;
wikiArticle(h.slice(5));
}else if(PAGES.includes(h)){
page=h;
back.hidden=false;brand.hidden=true;
back.href='#'+cur;
back.textContent=T().back;
pages[h]();
}else{
if(!SECTIONS.includes(h))h='council';
cur=h;
back.hidden=true;brand.hidden=false;
views[h]();
}
nav();
renderDrawer();
renderLang();
setAx(false);
$('skip').textContent=T().aSkip;
$('footLink').textContent=T().access;
setDrawer(false);
setLang(false);
document.documentElement.lang=lang;
window.scrollTo(0,0);
}

menuBtn.addEventListener('click',()=>setDrawer(!drawer.classList.contains('open')));
scrim.addEventListener('click',()=>setDrawer(false));
drawer.addEventListener('click',e=>{if(e.target.closest('a.item'))setDrawer(false)});
langBtn.addEventListener('click',e=>{e.stopPropagation();setLang(langMenu.hidden)});
langMenu.addEventListener('click',e=>{
const b=e.target.closest('button');
if(!b)return;
lang=b.dataset.l;
try{localStorage.setItem('lang',lang)}catch(x){}
route();
langBtn.focus();
});
document.addEventListener('click',e=>{if(!langMenu.hidden&&!e.target.closest('#langWrap'))setLang(false);if(!axMenu.hidden&&!e.target.closest('#axWrap'))setAx(false)});
document.addEventListener('keydown',e=>{
if(e.key!=='Escape')return;
if(!axMenu.hidden){setAx(false);axBtn.focus()}
else if(!langMenu.hidden){setLang(false);langBtn.focus()}
else if(drawer.classList.contains('open'))setDrawer(false);
});
addEventListener('hashchange',route);

if(sb)sb.auth.onAuthStateChange((_e,s)=>{
setTimeout(async()=>{
const nid=s?s.user.id:null;
if(ready&&nid===(user?user.id:null))return;
await loadUser(s);
store=null;
ready=true;
route();
},0);
});

route();
