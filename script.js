const A={
en:{signup:'Create account',noAcct:"Don't have an account? Sign up",haveAcct:'Already have an account? Sign in',signout:'Sign out',confirm:'Check your email to confirm your account, then sign in.',err:'Something went wrong. Check your details and try again.',notReady:'Accounts are not set up yet.',signedAs:'Signed in as',empty:'No meetings yet.',loading:'Loading…',related:'Related articles',seeImg:'See images',remember:'Remember me'},
es:{signup:'Crear cuenta',noAcct:'¿No tienes cuenta? Regístrate',haveAcct:'¿Ya tienes cuenta? Inicia sesión',signout:'Cerrar sesión',confirm:'Revisa tu correo para confirmar tu cuenta y luego inicia sesión.',err:'Algo salió mal. Revisa tus datos e inténtalo de nuevo.',notReady:'Las cuentas aún no están configuradas.',signedAs:'Sesión iniciada como',empty:'Aún no hay reuniones.',loading:'Cargando…',related:'Artículos relacionados',seeImg:'Ver imágenes',remember:'Recordarme'},
hi:{signup:'खाता बनाएँ',noAcct:'खाता नहीं है? साइन अप करें',haveAcct:'पहले से खाता है? साइन इन करें',signout:'साइन आउट',confirm:'अपना खाता पक्का करने के लिए ईमेल देखें, फिर साइन इन करें।',err:'कुछ गड़बड़ हो गई। अपनी जानकारी जाँचकर फिर कोशिश करें।',notReady:'खाते अभी सेट नहीं हैं।',signedAs:'साइन इन किया हुआ:',empty:'अभी कोई बैठक नहीं।',loading:'लोड हो रहा है…',related:'संबंधित लेख',seeImg:'चित्र देखें',remember:'मुझे याद रखें'},
tl:{signup:'Gumawa ng account',noAcct:'Wala pang account? Mag-sign up',haveAcct:'May account na? Mag-sign in',signout:'Mag-sign out',confirm:'Tingnan ang iyong email para kumpirmahin ang account, saka mag-sign in.',err:'Nagkaproblema. Suriin ang iyong detalye at subukan muli.',notReady:'Hindi pa naka-set up ang mga account.',signedAs:'Naka-sign in bilang',empty:'Wala pang pulong.',loading:'Naglo-load…',related:'Mga kaugnay na artikulo',seeImg:'Tingnan ang mga larawan',remember:'Tandaan ako'},
ko:{signup:'계정 만들기',noAcct:'계정이 없나요? 가입하기',haveAcct:'이미 계정이 있나요? 로그인',signout:'로그아웃',confirm:'이메일을 확인해 계정을 인증한 후 로그인하세요.',err:'문제가 발생했습니다. 정보를 확인하고 다시 시도하세요.',notReady:'계정 기능이 아직 설정되지 않았습니다.',signedAs:'로그인 계정:',empty:'아직 회의가 없습니다.',loading:'불러오는 중…',related:'관련 글',seeImg:'사진 보기',remember:'로그인 상태 유지'},
zh:{signup:'创建账户',noAcct:'没有账户？注册',haveAcct:'已有账户？登录',signout:'退出登录',confirm:'请查收邮件确认账户，然后登录。',err:'出错了。请检查信息后重试。',notReady:'账户功能尚未设置。',signedAs:'当前登录：',empty:'暂无会议。',loading:'加载中…',related:'相关文章',seeImg:'查看图片',remember:'记住我'}
};

const LANGS=[['en','🇺🇸','English'],['es','🇪🇸','Español'],['hi','🇮🇳','हिन्दी'],['tl','🇵🇭','Tagalog'],['ko','🇰🇷','한국어'],['zh','🇨🇳','中文']];

const CATS=[{id:'roads',i:'road-horizon'},{id:'bridges',i:'bridge'},{id:'structures',i:'buildings'},{id:'transit',i:'bus'},{id:'parks',i:'tree'},{id:'zoning',i:'map-trifold'}];

const SEED_WIKI=[
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
'Variances are usually decided case by case, and neighbors often get a chance to comment.']}
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

let WIKI=SEED_WIKI.map(w=>({...w,img:IMG[w.id]||null}));

Object.assign(A.en,{skip:'Skip to content',offline:'You appear to be offline. Try again when connected.',limit:'Too many submissions are waiting for review. Please try again later.'});
Object.assign(A.es,{skip:'Saltar al contenido',offline:'Parece que no tienes conexión. Inténtalo de nuevo cuando te conectes.',limit:'Hay demasiados envíos en espera de revisión. Inténtalo más tarde.'});
Object.assign(A.hi,{skip:'सामग्री पर जाएँ',offline:'आप ऑफ़लाइन लगते हैं। कनेक्ट होने पर फिर कोशिश करें।',limit:'समीक्षा के लिए बहुत सारे योगदान लंबित हैं। कृपया बाद में कोशिश करें।'});
Object.assign(A.tl,{skip:'Lumaktaw sa nilalaman',offline:'Mukhang offline ka. Subukan muli kapag nakakonekta.',limit:'Masyadong maraming nakabinbing ambag. Subukan muli mamaya.'});
Object.assign(A.ko,{skip:'본문으로 건너뛰기',offline:'오프라인 상태인 것 같습니다. 연결된 후 다시 시도하세요.',limit:'검토 대기 중인 제출이 너무 많습니다. 나중에 다시 시도하세요.'});
Object.assign(A.zh,{skip:'跳到内容',offline:'你似乎已离线。联网后请重试。',limit:'待审核的投稿过多，请稍后再试。'});
Object.assign(A.en,{community:'Community photos',fromWiki:'From the wiki'});
Object.assign(A.es,{community:'Fotos de la comunidad',fromWiki:'De la wiki'});
Object.assign(A.hi,{community:'समुदाय की तस्वीरें',fromWiki:'विकी से'});
Object.assign(A.tl,{community:'Mga larawan ng komunidad',fromWiki:'Mula sa wiki'});
Object.assign(A.ko,{community:'커뮤니티 사진',fromWiki:'위키에서'});
Object.assign(A.zh,{community:'社区图片',fromWiki:'来自百科'});
Object.assign(A.en,{photoHint:'Image up to 5 MB. Photos are reviewed before they appear.',titleEx:'Example: Main Street bike lane',capEx:'Where was it taken? What stands out?',emptyHint:'Meeting summaries show up here once they are posted. In the meantime, learn the terms in the Wiki.',noneHint:'Try a different word or switch to All.',firstPhoto:'No photos yet. Be the first to share one.'});
Object.assign(A.es,{photoHint:'Imagen de hasta 5 MB. Las fotos se revisan antes de publicarse.',titleEx:'Ejemplo: Ciclovía de Main Street',capEx:'¿Dónde se tomó? ¿Qué destaca?',emptyHint:'Los resúmenes de las reuniones aparecerán aquí cuando se publiquen. Mientras tanto, aprende los términos en la Wiki.',noneHint:'Prueba con otra palabra o elige Todo.',firstPhoto:'Aún no hay fotos. Sé el primero en compartir una.'});
Object.assign(A.hi,{photoHint:'अधिकतम 5 MB की तस्वीर। प्रकाशित होने से पहले तस्वीरों की समीक्षा की जाती है।',titleEx:'उदाहरण: मेन स्ट्रीट की बाइक लेन',capEx:'कहाँ ली गई? क्या खास है?',emptyHint:'बैठकों के सारांश पोस्ट होने पर यहाँ दिखेंगे। तब तक विकी में शब्द सीखें।',noneHint:'दूसरा शब्द आज़माएँ या "सभी" चुनें।',firstPhoto:'अभी कोई तस्वीर नहीं। पहली तस्वीर आप साझा करें।'});
Object.assign(A.tl,{photoHint:'Larawang hanggang 5 MB. Sinusuri ang mga larawan bago lumabas.',titleEx:'Halimbawa: Bike lane sa Main Street',capEx:'Saan kinunan? Ano ang kapansin-pansin?',emptyHint:'Lalabas dito ang mga buod ng pulong kapag nai-post na. Samantala, alamin ang mga termino sa Wiki.',noneHint:'Subukan ang ibang salita o piliin ang Lahat.',firstPhoto:'Wala pang larawan. Ikaw ang unang magbahagi.'});
Object.assign(A.ko,{photoHint:'5MB 이하의 이미지. 사진은 검토 후 게시됩니다.',titleEx:'예: 메인 스트리트 자전거 도로',capEx:'어디에서 찍었나요? 눈에 띄는 점은?',emptyHint:'회의 요약은 게시되면 여기에 표시됩니다. 그동안 위키에서 용어를 알아보세요.',noneHint:'다른 단어를 입력하거나 전체를 선택해 보세요.',firstPhoto:'아직 사진이 없습니다. 첫 사진을 공유해 주세요.'});
Object.assign(A.zh,{photoHint:'图片不超过 5 MB。照片审核后才会显示。',titleEx:'例如：主街自行车道',capEx:'在哪里拍的？有什么特别之处？',emptyHint:'会议摘要发布后会显示在这里。在此期间，可以在百科中了解相关术语。',noneHint:'换个词试试，或选择“全部”。',firstPhoto:'还没有图片。来分享第一张吧。'});
Object.assign(A.en,{share:'Share',copied:'Link copied',topicF:'Topic',big:'Photo must be an image under 5 MB.'});
Object.assign(A.es,{share:'Compartir',copied:'Enlace copiado',topicF:'Tema',big:'La foto debe ser una imagen de menos de 5 MB.'});
Object.assign(A.hi,{share:'साझा करें',copied:'लिंक कॉपी हो गया',topicF:'विषय',big:'फ़ोटो 5 MB से छोटी इमेज होनी चाहिए।'});
Object.assign(A.tl,{share:'Ibahagi',copied:'Nakopya ang link',topicF:'Paksa',big:'Dapat larawan na wala pang 5 MB.'});
Object.assign(A.ko,{share:'공유',copied:'링크 복사됨',topicF:'주제',big:'5MB 미만의 이미지여야 합니다.'});
Object.assign(A.zh,{share:'分享',copied:'链接已复制',topicF:'主题',big:'照片必须是小于 5 MB 的图片。'});
const PHOTOS=[
['roads','Protected bike lane'],['roads','Roundabout'],['roads','Speed table'],
['bridges','Pedestrian footbridge'],['bridges','Bascule bridge'],
['structures','Mixed-use building'],['structures','Parking garage'],
['transit','Bus rapid transit stop'],['transit','Light rail platform'],
['parks','Pocket park'],['parks','Community garden'],
['zoning','Duplex row'],['zoning','Setback diagram']
];

const SAMPLE={
meetings:[
{id:'m1',meeting_date:'2026-11-12',outcome:'Approved 5–2',title:'Protected bike lanes approved for Main Street',body:'The council voted 5 to 2 to add protected bike lanes along Main Street. Construction is expected to start next spring, pending a final budget review.'},
{id:'m2',meeting_date:'2026-11-05',outcome:'Scheduled',title:'Canal Street bridge repairs scheduled',body:'Public works shared a repair timeline for the Canal Street bridge, including detour maps and closure windows for nearby residents.'},
{id:'m3',meeting_date:'2026-10-29',outcome:'Funded',title:'Eastside bus shelters funded',body:'Twelve new bus shelters with seating and lighting were funded. Residents can suggest stop locations at the next open session.'},
{id:'m4',meeting_date:'2026-10-22',outcome:'Open for comment',title:'Oak Avenue zoning hearing',body:'A hearing was held on allowing small apartment buildings near Oak Avenue. Public comment stays open for two more weeks.'}
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
const PICON={account:'user',contribute:'upload-simple',admin:'shield-check',about:'info',faq:'question'};
const SECTIONS=['council','photos','wiki'];
const PAGES=['account','contribute','admin','about','faq'];
const $=id=>document.getElementById(id);
const app=$('app'),tabs=$('tabs'),back=$('back'),brand=$('brand'),drawer=$('drawer'),scrim=$('scrim'),menuBtn=$('menuBtn'),langBtn=$('langBtn'),langMenu=$('langMenu'),flag=$('flag');

const pick=()=>{try{return localStorage.getItem('remember')==='0'?sessionStorage:localStorage}catch(e){return sessionStorage}};
const sbStore={getItem:k=>pick().getItem(k),setItem:(k,v)=>pick().setItem(k,v),removeItem:k=>{try{localStorage.removeItem(k);sessionStorage.removeItem(k)}catch(e){}}};
const sb=window.supabase&&window.SB&&SB.url&&SB.key?supabase.createClient(SB.url,SB.key,{auth:{storage:sbStore}}):null;

let lang='en';
let cur='council';
let page='';
let user=null;
let isAdmin=false;
let ready=!sb;
let store=null;
let authMode='in';
let tokn=0;
let first=true;
app.tabIndex=-1;
try{lang=localStorage.getItem('lang')||'en'}catch(e){}
if(!L[lang])lang='en';

const T=()=>({...L[lang],...A[lang]});
const ic=n=>`<i class="ph ph-${n}"></i>`;
const iconOf=id=>id==='all'?'images':CATS.find(c=>c.id===id).i;
const nameOf=id=>L[lang].cats[id==='all'?6:CATS.findIndex(c=>c.id===id)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const thumbUrl=(u,w)=>{
const m=String(u).match(/^https:\/\/(?:thumb|upload)\.wikimedia\.org\/wikipedia\/commons\/(?:thumb\/)?([0-9a-f]\/[0-9a-f]{2}\/[^/]+\.(?:jpe?g|png))(?:\/\d+px-[^/]+)?$/i);
return m?`https://upload.wikimedia.org/wikipedia/commons/thumb/${m[1]}/${w}px-${m[1].split('/')[2]}`:u;
};
const pic=(u,w,alt,extra)=>`<img src="${esc(thumbUrl(u,w))}" data-o="${esc(u)}" onload="this.classList.add('in')" onerror="this.onerror=null;this.src=this.dataset.o" alt="${esc(alt)}"${extra||''}>`;
const card=(i,t,s,b,full,href,src,cls)=>{
const inner=`<div class="thumb">${src?pic(src,500,'',' loading="lazy"'):ic(i)}</div><div class="txt"><h3>${esc(t)}</h3>${s?`<small>${esc(s)}</small>`:''}${b?`<p${full?' class="full"':''}>${esc(b)}</p>`:''}</div>`;
const c='card'+(cls?' '+cls:'');
const cc=CATS.find(x=>x.i===i);
const dc=cc?` data-c="${cc.id}"`:'';
return href?`<a class="${c}"${dc} href="${href}">${inner}</a>`:`<article class="${c}"${dc}>${inner}</article>`;
};
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

let PUB=[];
async function loadWiki(){
if(!sb)return;
const{data,error}=await sb.from('wiki_articles').select('*').order('title');
if(!error&&data)WIKI=data.map(r=>({id:r.id,cat:r.cat,title:r.title,short:r.short,body:r.body,img:r.img_src?{src:r.img_src,credit:r.img_credit||'',alt:r.img_alt||''}:null}));
const ph=await sb.from('submissions').select('title,caption,cat,photo_path').eq('status','approved').order('created_at',{ascending:false});
const rows=ph.data||[];
const su=rows.length?await sb.storage.from('submissions').createSignedUrls(rows.map(r=>r.photo_path),3600):{data:[]};
const urls=new Map((su.data||[]).map(u=>[u.path,u.signedUrl]));
PUB=rows.filter(r=>urls.get(r.photo_path)).map(r=>({cat:r.cat||'all',t:r.title,b:r.caption||'',s:urls.get(r.photo_path)}));
}

async function loadUser(s){
user=s?s.user:null;
isAdmin=false;
if(user){
const{data}=await sb.from('profiles').select('is_admin').eq('id',user.id).maybeSingle();
isAdmin=!!(data&&data.is_admin);
}
}

const views={
async council(){
const t=T(),tok=tokn;
app.innerHTML=`<h1>${t.recent}</h1><div class="none">${t.loading}</div>`;
const d=await getData();
if(tok!==tokn)return;
const arts=Object.fromEntries(d.articles.map(a=>[a.id,a]));
app.innerHTML=`<h1>${t.recent}</h1>`+(d.meetings.length?d.meetings.map(m=>{
const rel=d.links.filter(l=>l.meeting_id===m.id).map(l=>arts[l.article_id]).filter(Boolean);
return `<section><h2 class="date">${fmt(m.meeting_date)}</h2>`+card('bank',m.title,m.outcome||'',m.body,true,null,null,'lead')+(rel.length?`<h3 class="rel">${t.related}</h3>`+rel.map(a=>card(iconOf(a.cat),a.title,nameOf(a.cat),a.body,true,null,null,'sm')).join(''):'')+`</section>`;
}).join(''):`<div class="none"><p>${t.empty}</p><p>${t.emptyHint}</p><a class="btn" href="#wiki">${ic('book-open')}${t.wiki}</a></div>`);
},
photos(){
const t=T();
const tile=i=>{
const f=`${pic(i.s,500,i.t,' loading="lazy"')}<figcaption>${esc(i.t)}</figcaption>`;
return i.h?`<a class="shot" href="${i.h}">${f}</a>`:`<figure class="shot">${f}</figure>`;
};
const com=PUB.map(p=>({t:p.t,s:p.s,h:null}));
const wk=WIKI.filter(w=>w.img).map(w=>({t:w.title,s:w.img.src,h:'#wiki/'+w.id}));
app.innerHTML=`<h1>${t.bank}</h1><div class="actions"><a class="btn" href="#contribute">${ic('upload-simple')}${t.contribute}</a></div><div class="chips">`+['all',...CATS.map(c=>c.id)].map(id=>`<a class="chip" href="#search-${id}">${nameOf(id)}</a>`).join('')+`</div><h2 class="sec">${t.community}</h2>`+(com.length?`<div class="gal">${com.map(tile).join('')}</div>`:`<div class="none"><p>${t.firstPhoto}</p></div>`)+(wk.length?`<h2 class="sec">${t.fromWiki}</h2><div class="gal">${wk.map(tile).join('')}</div>`:'');
},
wiki(){
const t=T();
app.innerHTML=`<h1>${t.guide}</h1><a class="searchbar" href="#search-all">${ic('magnifying-glass')}<span>${t.ph}</span></a><div class="chips">`+CATS.map(c=>`<button class="chip" type="button" data-j="${c.id}">${nameOf(c.id)}</button>`).join('')+`</div>`+CATS.map(c=>
`<section id="cat-${c.id}" data-c="${c.id}"><div class="sh"><h2>${nameOf(c.id)}</h2><a class="more" href="#search-${c.id}">${t.more}</a></div><div class="row">`+
WIKI.filter(w=>w.cat===c.id).map(w=>card(c.i,w.title,'',w.short,false,'#wiki/'+w.id,w.img?.src,'media')).join('')+`</div></section>`).join('');
app.querySelector('.chips').addEventListener('click',e=>{
const b=e.target.closest('button');
if(b)$('cat-'+b.dataset.j).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
});
}
};

function wikiArticle(id){
const t=T(),w=WIKI.find(x=>x.id===id);
if(!w){app.innerHTML=`<div class="none">${t.none}</div>`;return}
const img=w.img;
const rel=WIKI.filter(x=>x.cat===w.cat&&x.id!==w.id);
app.innerHTML=`<article class="wiki-article">`+(img?`<figure class="hero">${pic(img.src,960,img.alt||w.title)}<figcaption>${esc(img.credit)}</figcaption></figure>`:'')+`<div class="cat" data-c="${w.cat}">${ic(iconOf(w.cat))}<span>${nameOf(w.cat)}</span></div><h1>${esc(w.title)}</h1><p class="lede">${esc(w.short)}</p><div class="actions"><a class="btn" href="#search-${w.cat}">${ic('images')}${t.seeImg}</a><button class="btn" id="shr" type="button">${ic('share-network')}${t.share}</button></div>`+w.body.map(p=>`<p>${esc(p)}</p>`).join('')+(rel.length?`<h3 class="rel">${t.related}</h3>`+rel.map(x=>card(iconOf(x.cat),x.title,'',x.short,false,'#wiki/'+x.id,x.img?.src,'media')).join(''):'')+`</article>`;
$('shr').addEventListener('click',async()=>{
const u=location.href;
if(navigator.share){try{await navigator.share({title:w.title,url:u})}catch(e){}return}
try{await navigator.clipboard.writeText(u);$('shr').firstChild.className='ph ph-check';$('shr').lastChild.textContent=t.copied}catch(e){}
});
}

const pages={
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
app.innerHTML=`<div class="page"><h1>${t.contribute}</h1><p>${t.contribBody}</p><form id="f"><label class="field">${t.photoF}<input type="file" accept="image/*" required><small class="hint">${t.photoHint}</small></label><label class="field">${t.topicF}<select id="pc">${CATS.map(c=>`<option value="${c.id}">${nameOf(c.id)}</option>`).join('')}</select></label><input type="text" id="hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px"><label class="field">${t.titleF}<input type="text" required placeholder="${esc(t.titleEx)}"></label><label class="field">${t.capF}<input type="text" placeholder="${esc(t.capEx)}"></label><button class="btn solid" type="submit">${t.submit}</button><div class="ok" id="ok" role="status"></div></form></div>`;
$('f').addEventListener('submit',async e=>{
e.preventDefault();
const f=e.target,ok=$('ok');
if(!sb){ok.textContent=t.notReady;return}
if(!navigator.onLine){ok.textContent=t.offline;return}
const file=f.querySelector('input[type=file]').files[0];
if($('hp').value){f.reset();ok.textContent=t.thanks;return}
if(!file.type.startsWith('image/')||file.size>5242880){ok.textContent=t.big;return}
const[title,caption]=[...f.querySelectorAll('input[type=text]:not(#hp)')].map(i=>i.value.trim());
const path=crypto.randomUUID()+'-'+file.name.replace(/[^\w.-]/g,'_');
const up=await sb.storage.from('submissions').upload(path,file);
if(up.error){ok.textContent=/size|exceed|mime|type/i.test(up.error.message||'')?t.big:t.err;return}
const r=await sb.from('submissions').insert({title,caption:caption||null,cat:$('pc').value,photo_path:path});
if(r.error){ok.textContent=r.error.code==='42501'?t.limit:t.err;return}
ok.textContent=t.thanks;
f.reset();
});
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
app.innerHTML=`<div class="page"><h1>${up?t.signup:t.signin}</h1><form id="f"><label class="field">${t.email}<input type="email" autocomplete="email" required></label><label class="field">${t.pass}<input type="password" autocomplete="${up?'new-password':'current-password'}" minlength="6" required></label><label class="check"><input type="checkbox" id="rm" checked>${t.remember}</label><button class="btn solid" type="submit">${up?t.signup:t.signin}</button><div class="ok" id="ok" role="status"></div></form><button id="sw" class="btn ghost" type="button">${up?t.haveAcct:t.noAcct}</button></div>`;
$('sw').addEventListener('click',()=>{authMode=up?'in':'up';pages.account()});
$('f').addEventListener('submit',async e=>{
e.preventDefault();
const[em,pw]=[...e.target.querySelectorAll('input')].map(i=>i.value);
const ok=$('ok');
ok.textContent='';
const rm=$('rm').checked;
try{
const other=rm?sessionStorage:localStorage;
Object.keys(other).filter(k=>k.startsWith('sb-')&&k.endsWith('-auth-token')).forEach(k=>other.removeItem(k));
localStorage.setItem('remember',rm?'1':'0');
}catch(x){}
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
<div class="ok" id="aerr" role="alert"></div>
<nav class="chips" id="atabs" role="tablist"><button class="chip on" data-p="m" type="button" role="tab" aria-selected="true">Meetings</button><button class="chip" data-p="a" type="button" role="tab" aria-selected="false">Articles</button><button class="chip" data-p="w" type="button" role="tab" aria-selected="false">Wiki</button><button class="chip" data-p="s" type="button" role="tab" aria-selected="false">Submissions</button></nav>
<section data-pane="m">
<h2 class="sec">Council meeting</h2>
<form id="mf"><input type="hidden" id="mid">
<label class="field">Meeting date<input type="date" id="md" required></label>
<label class="field">Title<input type="text" id="mt" required></label>
<label class="field">Outcome (optional, shown on the meeting card)<input type="text" id="mo" maxlength="40"></label>
<label class="field">Summary<textarea id="mb" rows="5" required></textarea></label>
<fieldset class="checks"><legend>Related articles</legend><div id="mrel"></div></fieldset>
<button class="btn solid" type="submit">Save meeting</button>
<button id="mx" class="btn ghost" type="button" hidden>Cancel edit</button>
<div class="ok" id="mok" role="status"></div></form>
<input type="search" class="flt" data-for="ml" placeholder="Filter" aria-label="Filter"><div id="ml"></div></section>
<section data-pane="a" hidden>
<h2 class="sec">Articles</h2>
<form id="af"><input type="hidden" id="aid">
<label class="field">Topic<select id="ac">${topics}</select></label>
<label class="field">Title<input type="text" id="at" required></label>
<label class="field">Text<textarea id="ab" rows="6" required></textarea></label>
<button class="btn solid" type="submit">Save article</button>
<button id="ax" class="btn ghost" type="button" hidden>Cancel edit</button>
<div class="ok" id="aok" role="status"></div></form>
<input type="search" class="flt" data-for="al" placeholder="Filter" aria-label="Filter"><div id="al"></div></section>
<section data-pane="w" hidden>
<h2 class="sec">Wiki article</h2>
<form id="wf"><input type="hidden" id="wkey">
<label class="field">ID (used in the URL)<input type="text" id="wid" required></label>
<label class="field">Topic<select id="wc">${topics}</select></label>
<label class="field">Title<input type="text" id="wt" required></label>
<label class="field">Short summary<input type="text" id="ws" required></label>
<label class="field">Body (blank line between paragraphs)<textarea id="wbd" rows="8" required></textarea></label>
<label class="field">Image URL<input type="url" id="wimg"></label>
<label class="field">Image credit<input type="text" id="wcr"></label>
<label class="field">Image alt text (describes the photo for screen readers)<input type="text" id="wal"></label>
<button class="btn solid" type="submit">Save wiki article</button>
<button id="wx" class="btn ghost" type="button" hidden>Cancel edit</button>
<div class="ok" id="wok" role="status"></div></form>
<input type="search" class="flt" data-for="wl" placeholder="Filter" aria-label="Filter"><div id="wl"></div></section>
<section data-pane="s" hidden>
<h2 class="sec">Photo submissions</h2>
<form id="sf" hidden><input type="hidden" id="sid">
<label class="field">Topic<select id="sc">${topics}</select></label>
<label class="field">Title<input type="text" id="st" required></label>
<label class="field">Caption<input type="text" id="sp"></label>
<button class="btn solid" type="submit">Save submission</button>
<button id="sx" class="btn ghost" type="button">Cancel edit</button></form>
<input type="search" class="flt" data-for="sl" placeholder="Filter" aria-label="Filter"><div id="sl"></div></section></div>`;
let D={meetings:[],articles:[],links:[]};
let S=[];
const resetM=()=>{$('mf').reset();$('mid').value='';$('mx').hidden=true};
const resetA=()=>{$('af').reset();$('aid').value='';$('ax').hidden=true};
const resetW=()=>{$('wf').reset();$('wkey').value='';$('wx').hidden=true};
const fail=r=>{$('aerr').textContent=r&&r.error?'Failed: '+r.error.message:'';return !!(r&&r.error)};
const draw=async()=>{
D=await getData(true);
if(tok!==tokn)return;
const{data:subs}=await sb.from('submissions').select('*').order('created_at',{ascending:false});
S=subs||[];
$('wl').innerHTML=WIKI.map(w=>`<div class="arow"><div><b>${esc(w.title)}</b><small>${esc(w.id)}</small></div><button class="btn icon" data-we="${w.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-wd="${w.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('');
$('sl').innerHTML=S.map(s=>`<div class="arow"><div><b>${esc(s.title)}</b><small>${s.status}${s.caption?' · '+esc(s.caption):''}</small></div><button class="btn icon" data-sv="${s.id}" aria-label="View photo">${ic('image')}</button><button class="btn icon" data-se="${s.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-sa="${s.id}" aria-label="Approve">${ic('check')}</button><button class="btn icon" data-sr="${s.id}" aria-label="Reject">${ic('x')}</button><button class="btn icon" data-sd="${s.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('')||'<small>No submissions.</small>';
$('mrel').innerHTML=D.articles.map(a=>`<label class="check"><input type="checkbox" value="${a.id}"> ${esc(a.title)}</label>`).join('')||'<small>No articles yet.</small>';
$('ml').innerHTML=D.meetings.map(m=>`<div class="arow"><div><b>${esc(m.title)}</b><small>${m.meeting_date}${m.outcome?' · '+esc(m.outcome):''}</small></div><button class="btn icon" data-me="${m.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-md="${m.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('');
$('al').innerHTML=D.articles.map(a=>`<div class="arow"><div><b>${esc(a.title)}</b><small>${nameOf(a.cat)}</small></div><button class="btn icon" data-ae="${a.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-ad="${a.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('');
};
$('mf').addEventListener('submit',async e=>{
e.preventDefault();
const id=$('mid').value;
const p={meeting_date:$('md').value,title:$('mt').value.trim(),body:$('mb').value.trim()};
const o=$('mo').value.trim();
if(o||(id&&(D.meetings.find(x=>x.id===id)||{}).outcome))p.outcome=o||null;
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
$('mid').value=m.id;$('md').value=m.meeting_date;$('mt').value=m.title;$('mo').value=m.outcome||'';$('mb').value=m.body;
$('mrel').querySelectorAll('input').forEach(i=>i.checked=on.has(i.value));
$('mx').hidden=false;$('mok').textContent='';
window.scrollTo(0,0);
}else if(b.dataset.md&&confirm('Delete this meeting?')){
if(fail(await sb.from('meetings').delete().eq('id',b.dataset.md)))return;
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
if(fail(await sb.from('articles').delete().eq('id',b.dataset.ad)))return;
await draw();
}
});
$('wf').addEventListener('submit',async e=>{
e.preventDefault();
const key=$('wkey').value;
const p={id:$('wid').value.trim(),cat:$('wc').value,title:$('wt').value.trim(),short:$('ws').value.trim(),body:$('wbd').value.split(/\n\s*\n/).map(s=>s.trim()).filter(Boolean),img_src:$('wimg').value.trim()||null,img_credit:$('wcr').value.trim()||null,img_alt:$('wal').value.trim()||null};
const r=key?await sb.from('wiki_articles').update(p).eq('id',key):await sb.from('wiki_articles').insert(p);
if(r.error){$('wok').textContent='Could not save: '+r.error.message;return}
resetW();
$('wok').textContent='Saved.';
wikiReady=loadWiki();
await wikiReady;
await draw();
});
$('wl').addEventListener('click',async e=>{
const b=e.target.closest('button');
if(!b)return;
if(b.dataset.we){
const w=WIKI.find(x=>x.id===b.dataset.we);
$('wkey').value=w.id;$('wid').value=w.id;$('wc').value=w.cat;$('wt').value=w.title;$('ws').value=w.short;$('wbd').value=w.body.join('\n\n');$('wimg').value=w.img?.src||'';$('wcr').value=w.img?.credit||'';$('wal').value=w.img?.alt||'';
$('wx').hidden=false;$('wok').textContent='';
window.scrollTo(0,0);
}else if(b.dataset.wd&&confirm('Delete this wiki article?')){
if(fail(await sb.from('wiki_articles').delete().eq('id',b.dataset.wd)))return;
wikiReady=loadWiki();
await wikiReady;
await draw();
}
});
$('wx').addEventListener('click',()=>{resetW();$('wok').textContent=''});
$('atabs').addEventListener('click',e=>{
const b=e.target.closest('button');
if(!b)return;
document.querySelectorAll('#atabs button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b)});
document.querySelectorAll('[data-pane]').forEach(x=>x.hidden=x.dataset.pane!==b.dataset.p);
});
$('sf').addEventListener('submit',async e=>{
e.preventDefault();
if(fail(await sb.from('submissions').update({cat:$('sc').value,title:$('st').value.trim(),caption:$('sp').value.trim()||null}).eq('id',$('sid').value)))return;
$('sf').hidden=true;
await draw();
});
$('sx').addEventListener('click',()=>{$('sf').hidden=true});
$('sl').addEventListener('click',async e=>{
const b=e.target.closest('button');
if(!b)return;
const id=b.dataset.sv||b.dataset.se||b.dataset.sa||b.dataset.sr||b.dataset.sd;
const s=S.find(x=>x.id===id);
if(!s)return;
if(b.dataset.sv){
const{data}=await sb.storage.from('submissions').createSignedUrl(s.photo_path,300);
if(data)window.open(data.signedUrl,'_blank');
}else if(b.dataset.se){
$('sid').value=s.id;$('sc').value=s.cat||CATS[0].id;$('st').value=s.title;$('sp').value=s.caption||'';
$('sf').hidden=false;window.scrollTo(0,0);
}else if(b.dataset.sa||b.dataset.sr){
if(fail(await sb.from('submissions').update({status:b.dataset.sa?'approved':'rejected'}).eq('id',s.id)))return;
if(b.dataset.sa){wikiReady=loadWiki();await wikiReady}
await draw();
}else if(b.dataset.sd&&confirm('Delete this submission and its photo?')){
await sb.storage.from('submissions').remove([s.photo_path]);
if(fail(await sb.from('submissions').delete().eq('id',s.id)))return;
await draw();
}
});
document.querySelectorAll('.flt').forEach(i=>i.addEventListener('input',()=>{
const q=i.value.toLowerCase();
$(i.dataset.for).querySelectorAll('.arow').forEach(r=>r.hidden=!r.textContent.toLowerCase().includes(q));
}));
$('mx').addEventListener('click',()=>{resetM();$('mok').textContent=''});
$('ax').addEventListener('click',()=>{resetA();$('aok').textContent=''});
await draw();
}
};

function search(cat){
const t=T();
app.innerHTML=`<h1>${nameOf(cat)}</h1><input id="q" type="search" aria-label="${t.ph}" placeholder="${t.ph}" autocomplete="off"><div class="chips">`+
['all',...CATS.map(c=>c.id)].map(id=>`<a class="chip ${id===cat?'on':''}" href="#search-${id}">${nameOf(id)}</a>`).join('')+`</div><div id="res"></div>`;
const q=$('q');
const res=$('res');
const items=[
...PUB.map(p=>({cat:p.cat,t:p.t,k:t.photo,b:p.b,h:null,s:p.s})),
...PHOTOS.map(p=>({cat:p[0],t:p[1],k:t.photo,b:'',h:null})),
...WIKI.map(w=>({cat:w.cat,t:w.title,k:t.article,b:w.short,h:'#wiki/'+w.id,s:w.img?.src}))
];
const draw=()=>{
const s=q.value.trim().toLowerCase();
const out=items.filter(i=>(cat==='all'||i.cat===cat)&&(!s||(i.t+' '+i.b).toLowerCase().includes(s)));
res.innerHTML=out.length?out.map(i=>card(iconOf(i.cat),i.t,i.k,i.b,false,i.h,i.s,i.h?'media':'')).join(''):`<div class="none"><p>${t.none}</p><p>${t.noneHint}</p></div>`;
};
q.addEventListener('input',draw);
draw();
}

function nav(){
tabs.setAttribute('aria-label',T().menu);
tabs.innerHTML=SECTIONS.map(s=>
`<a href="#${s}"${s===cur?' aria-current="page"':''}>${ic(ICON[s])}<span>${T()[s]}</span></a>`).join('');
}

function renderDrawer(){
const t=T();
const items=['account','contribute',...(isAdmin?['admin']:[]),'|','about','faq'];
drawer.innerHTML=`<div class="dh"><b>${t.menu}</b><button id="closeBtn" class="btn icon" aria-label="${t.close}">${ic('x')}</button></div>`+
items.map(p=>p==='|'?'<hr>':`<a class="item" href="#${p}"${page===p?' aria-current="page"':''}>${ic(PICON[p])}${p==='admin'?'Admin':t[p]}</a>`).join('');
$('closeBtn').addEventListener('click',()=>setDrawer(false));
menuBtn.setAttribute('aria-label',t.menu);
drawer.setAttribute('aria-label',t.menu);
}

function setDrawer(open){
drawer.classList.toggle('open',open);
scrim.classList.toggle('open',open);
app.inert=open;tabs.inert=open;
menuBtn.setAttribute('aria-expanded',open);
if(open){setLang(false);$('closeBtn').focus()}else if(drawer.contains(document.activeElement))menuBtn.focus();
}

function setLang(open){
langMenu.hidden=!open;
langBtn.setAttribute('aria-expanded',open);
}

function renderLang(){
const cl=LANGS.find(l=>l[0]===lang);
flag.textContent=cl[1];
langBtn.setAttribute('aria-label',cl[2]);
langMenu.innerHTML=LANGS.map(l=>`<li><button data-l="${l[0]}"${l[0]===lang?' aria-current="true"':''}><span class="f">${l[1]}</span>${l[2]}${l[0]===lang?`<span class="ck">${ic('check')}</span>`:''}</button></li>`).join('');
}

async function route(){
const n=++tokn;
if(!app.innerHTML)app.innerHTML=`<div class="none">${T().loading}</div>`;
const slow=await Promise.race([wikiReady.then(()=>0),new Promise(r=>setTimeout(()=>r(1),4000))]);
if(slow)wikiReady.then(()=>route());
if(n!==tokn)return;
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
document.title=(h.startsWith('wiki/')?(WIKI.find(x=>x.id===h.slice(5))||{}).title:h.startsWith('search-')?nameOf(h.slice(7)==='all'||CATS.some(x=>x.id===h.slice(7))?h.slice(7):'all'):T()[PAGES.includes(h)||SECTIONS.includes(h)?h:'council'])+' · Our Streets Wiki';
if(h==='wiki'||h==='photos'||h.startsWith('search-'))app.dataset.wide='1';else delete app.dataset.wide;
nav();
renderDrawer();
renderLang();
setDrawer(false);
setLang(false);
document.documentElement.lang=lang;
window.scrollTo(0,0);
if(!first)app.focus({preventScroll:true});
first=false;
}

$('skip').textContent=T().skip;
$('skip').addEventListener('click',()=>app.focus());
menuBtn.addEventListener('click',()=>setDrawer(!drawer.classList.contains('open')));
scrim.addEventListener('click',()=>setDrawer(false));
drawer.addEventListener('click',e=>{if(e.target.closest('a.item'))setDrawer(false)});
langBtn.addEventListener('click',e=>{e.stopPropagation();setLang(langMenu.hidden)});
langMenu.addEventListener('click',e=>{
const b=e.target.closest('button');
if(!b)return;
lang=b.dataset.l;
$('skip').textContent=T().skip;
try{localStorage.setItem('lang',lang)}catch(x){}
route();
langBtn.focus();
});
document.addEventListener('click',e=>{if(!langMenu.hidden&&!e.target.closest('#langWrap'))setLang(false)});
document.addEventListener('keydown',e=>{
if(e.key!=='Escape')return;
if(!langMenu.hidden){setLang(false);langBtn.focus()}
else if(drawer.classList.contains('open'))setDrawer(false);
});
addEventListener('hashchange',route);
let wikiReady=loadWiki();

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
