const A={
en:{signup:'Create account',noAcct:"Don't have an account? Sign up",haveAcct:'Already have an account? Sign in',signout:'Sign out',confirm:'Check your email to confirm your account, then sign in.',err:'Something went wrong. Check your details and try again.',notReady:'Accounts are not set up yet.',signedAs:'Signed in as',empty:'No meetings yet.',loading:'Loading…',related:'Related articles',seeImg:'See images',remember:'Remember me'},
es:{signup:'Crear cuenta',noAcct:'¿No tienes cuenta? Regístrate',haveAcct:'¿Ya tienes cuenta? Inicia sesión',signout:'Cerrar sesión',confirm:'Revisa tu correo para confirmar tu cuenta y luego inicia sesión.',err:'Algo salió mal. Revisa tus datos e inténtalo de nuevo.',notReady:'Las cuentas aún no están configuradas.',signedAs:'Sesión iniciada como',empty:'Aún no hay reuniones.',loading:'Cargando…',related:'Artículos relacionados',seeImg:'Ver imágenes',remember:'Recordarme'},
hi:{signup:'खाता बनाएँ',noAcct:'खाता नहीं है? साइन अप करें',haveAcct:'पहले से खाता है? साइन इन करें',signout:'साइन आउट',confirm:'अपना खाता पक्का करने के लिए ईमेल देखें, फिर साइन इन करें।',err:'कुछ गड़बड़ हो गई। अपनी जानकारी जाँचकर फिर कोशिश करें।',notReady:'खाते अभी सेट नहीं हैं।',signedAs:'साइन इन किया हुआ:',empty:'अभी कोई बैठक नहीं।',loading:'लोड हो रहा है…',related:'संबंधित लेख',seeImg:'चित्र देखें',remember:'मुझे याद रखें'},
tl:{signup:'Gumawa ng account',noAcct:'Wala pang account? Mag-sign up',haveAcct:'May account na? Mag-sign in',signout:'Mag-sign out',confirm:'Tingnan ang iyong email para kumpirmahin ang account, saka mag-sign in.',err:'Nagkaproblema. Suriin ang iyong detalye at subukan muli.',notReady:'Hindi pa naka-set up ang mga account.',signedAs:'Naka-sign in bilang',empty:'Wala pang pulong.',loading:'Naglo-load…',related:'Mga kaugnay na artikulo',seeImg:'Tingnan ang mga larawan',remember:'Tandaan ako'},
ko:{signup:'계정 만들기',noAcct:'계정이 없나요? 가입하기',haveAcct:'이미 계정이 있나요? 로그인',signout:'로그아웃',confirm:'이메일을 확인해 계정을 인증한 후 로그인하세요.',err:'문제가 발생했습니다. 정보를 확인하고 다시 시도하세요.',notReady:'계정 기능이 아직 설정되지 않았습니다.',signedAs:'로그인 계정:',empty:'아직 회의가 없습니다.',loading:'불러오는 중…',related:'관련 글',seeImg:'사진 보기',remember:'로그인 상태 유지'},
zh:{signup:'创建账户',noAcct:'没有账户？注册',haveAcct:'已有账户？登录',signout:'退出登录',confirm:'请查收邮件确认账户，然后登录。',err:'出错了。请检查信息后重试。',notReady:'账户功能尚未设置。',signedAs:'当前登录：',empty:'暂无会议。',loading:'加载中…',related:'相关文章',seeImg:'查看图片',remember:'记住我'}
};

Object.assign(A.en,{access:"Accessibility",aTheme:"Theme",aAuto:"System",aLight:"Light",aDark:"Dark",aSize:"Text size",aContrast:"High contrast",aMotion:"Reduce motion",aMarks:"Mark selected items with underlines and checks, not color alone",aReset:"Reset to defaults",aMore:"More settings",aDevSize:"Match device text size",aHint:"Need larger text or higher contrast?",aAdjust:"Adjust",aNo:"No thanks"});
Object.assign(A.es,{access:"Accesibilidad",aTheme:"Tema",aAuto:"Sistema",aLight:"Claro",aDark:"Oscuro",aSize:"Tamaño del texto",aContrast:"Alto contraste",aMotion:"Reducir movimiento",aMarks:"Marcar lo seleccionado con subrayados y marcas, no solo con color",aReset:"Restablecer",aMore:"Más ajustes",aDevSize:"Usar el tamaño de texto del dispositivo",aHint:"¿Necesitas texto más grande o más contraste?",aAdjust:"Ajustar",aNo:"No, gracias"});
Object.assign(A.hi,{access:"सुलभता",aTheme:"थीम",aAuto:"सिस्टम",aLight:"हल्का",aDark:"गहरा",aSize:"टेक्स्ट का आकार",aContrast:"उच्च कंट्रास्ट",aMotion:"एनिमेशन कम करें",aMarks:"चुने हुए आइटम को केवल रंग से नहीं, रेखांकन और निशान से दिखाएँ",aReset:"डिफ़ॉल्ट पर लौटें",aMore:"और सेटिंग्स",aDevSize:"डिवाइस के टेक्स्ट आकार का उपयोग करें",aHint:"बड़ा टेक्स्ट या ज़्यादा कंट्रास्ट चाहिए?",aAdjust:"बदलें",aNo:"नहीं, धन्यवाद"});
Object.assign(A.tl,{access:"Accessibility",aTheme:"Tema",aAuto:"Sistema",aLight:"Maliwanag",aDark:"Madilim",aSize:"Laki ng teksto",aContrast:"Mataas na contrast",aMotion:"Bawasan ang galaw",aMarks:"Markahan ang napili ng underline at tsek, hindi kulay lang",aReset:"I-reset",aMore:"Higit pang setting",aDevSize:"Gamitin ang laki ng teksto ng device",aHint:"Kailangan ng mas malaking teksto o mas mataas na contrast?",aAdjust:"I-adjust",aNo:"Hindi, salamat"});
Object.assign(A.ko,{access:"접근성",aTheme:"테마",aAuto:"시스템",aLight:"라이트",aDark:"다크",aSize:"글자 크기",aContrast:"고대비",aMotion:"움직임 줄이기",aMarks:"선택 항목을 색상만이 아니라 밑줄과 체크로 표시",aReset:"기본값으로 되돌리기",aMore:"설정 더 보기",aDevSize:"기기 글자 크기 따르기",aHint:"더 큰 글자나 높은 대비가 필요하신가요?",aAdjust:"조정",aNo:"괜찮아요"});
Object.assign(A.zh,{access:"无障碍",aTheme:"主题",aAuto:"跟随系统",aLight:"浅色",aDark:"深色",aSize:"文字大小",aContrast:"高对比度",aMotion:"减少动画",aMarks:"用下划线和对勾标记所选项，而不只靠颜色",aReset:"恢复默认",aMore:"更多设置",aDevSize:"跟随设备文字大小",aHint:"需要更大的文字或更高的对比度吗？",aAdjust:"调整",aNo:"不用了"});

Object.assign(A.en,{maxC:"Up to {n} characters",badLogin:"Incorrect email or password.",needConfirm:"Confirm your email first. Check your inbox for the link.",exists:"An account with this email already exists. Sign in instead.",weakPw:"Password must be at least 6 characters.",rate:"Too many attempts. Wait a minute and try again.",badEmail:"Enter a valid email address.",pwHint:"At least 6 characters"});
Object.assign(A.es,{maxC:"Máximo {n} caracteres",badLogin:"Correo o contraseña incorrectos.",needConfirm:"Primero confirma tu correo. Revisa tu bandeja de entrada.",exists:"Ya existe una cuenta con este correo. Inicia sesión.",weakPw:"La contraseña debe tener al menos 6 caracteres.",rate:"Demasiados intentos. Espera un minuto e inténtalo de nuevo.",badEmail:"Introduce un correo válido.",pwHint:"Al menos 6 caracteres"});
Object.assign(A.hi,{maxC:"अधिकतम {n} अक्षर",badLogin:"ईमेल या पासवर्ड गलत है।",needConfirm:"पहले अपना ईमेल पक्का करें। इनबॉक्स में लिंक देखें।",exists:"इस ईमेल से खाता पहले से है। साइन इन करें।",weakPw:"पासवर्ड कम से कम 6 अक्षर का होना चाहिए।",rate:"बहुत ज़्यादा कोशिशें। एक मिनट रुककर फिर कोशिश करें।",badEmail:"सही ईमेल पता डालें।",pwHint:"कम से कम 6 अक्षर"});
Object.assign(A.tl,{maxC:"Hanggang {n} character",badLogin:"Mali ang email o password.",needConfirm:"Kumpirmahin muna ang iyong email. Tingnan ang inbox para sa link.",exists:"May account na gamit ang email na ito. Mag-sign in na lang.",weakPw:"Dapat ay hindi bababa sa 6 na character ang password.",rate:"Masyadong maraming subok. Maghintay ng isang minuto.",badEmail:"Maglagay ng wastong email address.",pwHint:"Hindi bababa sa 6 na character"});
Object.assign(A.ko,{maxC:"최대 {n}자",badLogin:"이메일 또는 비밀번호가 올바르지 않습니다.",needConfirm:"먼저 이메일을 인증하세요. 받은편지함에서 링크를 확인하세요.",exists:"이 이메일로 이미 계정이 있습니다. 로그인하세요.",weakPw:"비밀번호는 6자 이상이어야 합니다.",rate:"시도가 너무 많습니다. 잠시 후 다시 시도하세요.",badEmail:"올바른 이메일 주소를 입력하세요.",pwHint:"6자 이상"});
Object.assign(A.zh,{maxC:"最多 {n} 个字符",badLogin:"邮箱或密码不正确。",needConfirm:"请先确认邮箱。查看收件箱中的链接。",exists:"该邮箱已有账户，请直接登录。",weakPw:"密码至少需要 6 个字符。",rate:"尝试次数过多，请稍等一分钟再试。",badEmail:"请输入有效的邮箱地址。",pwHint:"至少 6 个字符"});

Object.assign(A.en,{tagsF:"Tags (up to 5)",tagPh:"e.g. bike lane",tagHint:"Press Enter or comma to add. Up to {n} tags.",tagMax:"You can add up to 5 tags.",userSub:"User submitted",readArt:"Read article",rmTag:"Remove tag {x}"});
Object.assign(A.es,{tagsF:"Etiquetas (hasta 5)",tagPh:"p. ej. ciclovía",tagHint:"Pulsa Intro o coma para añadir. Hasta {n} etiquetas.",tagMax:"Puedes añadir hasta 5 etiquetas.",userSub:"Enviado por un usuario",readArt:"Leer artículo",rmTag:"Quitar etiqueta {x}"});
Object.assign(A.hi,{tagsF:"टैग (अधिकतम 5)",tagPh:"जैसे बाइक लेन",tagHint:"जोड़ने के लिए Enter या कॉमा दबाएँ। अधिकतम {n} टैग।",tagMax:"आप अधिकतम 5 टैग जोड़ सकते हैं।",userSub:"उपयोगकर्ता द्वारा भेजा गया",readArt:"लेख पढ़ें",rmTag:"टैग {x} हटाएँ"});
Object.assign(A.tl,{tagsF:"Mga tag (hanggang 5)",tagPh:"hal. bike lane",tagHint:"Pindutin ang Enter o kuwit para magdagdag. Hanggang {n} tag.",tagMax:"Hanggang 5 tag lang ang maaari.",userSub:"Isinumite ng user",readArt:"Basahin ang artikulo",rmTag:"Alisin ang tag na {x}"});
Object.assign(A.ko,{tagsF:"태그 (최대 5개)",tagPh:"예: 자전거 도로",tagHint:"Enter 또는 쉼표를 눌러 추가하세요. 최대 {n}개.",tagMax:"태그는 최대 5개까지 추가할 수 있습니다.",userSub:"사용자 제출",readArt:"글 읽기",rmTag:"태그 {x} 삭제"});
Object.assign(A.zh,{tagsF:"标签（最多 5 个）",tagPh:"例如：自行车道",tagHint:"按回车或逗号添加。最多 {n} 个标签。",tagMax:"最多只能添加 5 个标签。",userSub:"用户投稿",readArt:"阅读文章",rmTag:"删除标签 {x}"});

Object.assign(A.en,{relF:"Related articles (optional, up to 3)",relNone:"No articles in this topic yet.",relHint:"Pick the articles that explain what the photo shows.",relT:"Related articles"});
Object.assign(A.es,{relF:"Artículos relacionados (opcional, hasta 3)",relNone:"Aún no hay artículos en este tema.",relHint:"Elige los artículos que explican lo que muestra la foto.",relT:"Artículos relacionados"});
Object.assign(A.hi,{relF:"संबंधित लेख (वैकल्पिक, अधिकतम 3)",relNone:"इस विषय में अभी कोई लेख नहीं है।",relHint:"वे लेख चुनें जो फ़ोटो में दिख रही चीज़ समझाते हैं।",relT:"संबंधित लेख"});
Object.assign(A.tl,{relF:"Mga kaugnay na artikulo (opsyonal, hanggang 3)",relNone:"Wala pang artikulo sa paksang ito.",relHint:"Piliin ang mga artikulong nagpapaliwanag sa nasa larawan.",relT:"Mga kaugnay na artikulo"});
Object.assign(A.ko,{relF:"관련 글 (선택, 최대 3개)",relNone:"이 주제에는 아직 글이 없습니다.",relHint:"사진 속 내용을 설명하는 글을 선택하세요.",relT:"관련 글"});
Object.assign(A.zh,{relF:"相关文章（可选，最多 3 篇）",relNone:"此主题暂无文章。",relHint:"请选择能解释照片内容的文章。",relT:"相关文章"});

Object.assign(A.en,{relPh:"Type to search articles",relMax:"You can pick up to 3 articles."});
Object.assign(A.es,{relPh:"Escribe para buscar artículos",relMax:"Puedes elegir hasta 3 artículos."});
Object.assign(A.hi,{relPh:"लेख खोजने के लिए टाइप करें",relMax:"आप अधिकतम 3 लेख चुन सकते हैं।"});
Object.assign(A.tl,{relPh:"Mag-type para maghanap ng artikulo",relMax:"Hanggang 3 artikulo lang ang maaari."});
Object.assign(A.ko,{relPh:"글을 검색하려면 입력하세요",relMax:"글은 최대 3개까지 선택할 수 있습니다."});
Object.assign(A.zh,{relPh:"输入以搜索文章",relMax:"最多可选择 3 篇文章。"});

Object.assign(A.en,{loadErr:"Could not load meetings. Check your connection and try again.",retry:"Try again"});
Object.assign(A.es,{loadErr:"No se pudieron cargar las reuniones. Revisa tu conexión e inténtalo de nuevo.",retry:"Reintentar"});
Object.assign(A.hi,{loadErr:"बैठकें लोड नहीं हो सकीं। अपना कनेक्शन जाँचें और फिर कोशिश करें।",retry:"फिर कोशिश करें"});
Object.assign(A.tl,{loadErr:"Hindi ma-load ang mga pulong. Suriin ang koneksyon at subukan muli.",retry:"Subukan muli"});
Object.assign(A.ko,{loadErr:"회의를 불러오지 못했습니다. 연결을 확인하고 다시 시도하세요.",retry:"다시 시도"});
Object.assign(A.zh,{loadErr:"无法加载会议。请检查网络连接后重试。",retry:"重试"});

Object.assign(A.en,{tagged:"Photos tagged “{x}”",noTagged:"No photos with this tag yet.",tagsL:"Tags",photosOf:"Photos of this"});
Object.assign(A.es,{tagged:"Fotos con la etiqueta “{x}”",noTagged:"Aún no hay fotos con esta etiqueta.",tagsL:"Etiquetas",photosOf:"Fotos de esto"});
Object.assign(A.hi,{tagged:"“{x}” टैग वाली तस्वीरें",noTagged:"इस टैग वाली अभी कोई तस्वीर नहीं है।",tagsL:"टैग",photosOf:"इसकी तस्वीरें"});
Object.assign(A.tl,{tagged:"Mga larawang may tag na “{x}”",noTagged:"Wala pang larawang may ganitong tag.",tagsL:"Mga tag",photosOf:"Mga larawan nito"});
Object.assign(A.ko,{tagged:"“{x}” 태그가 있는 사진",noTagged:"이 태그가 있는 사진이 아직 없습니다.",tagsL:"태그",photosOf:"관련 사진"});
Object.assign(A.zh,{tagged:"带有“{x}”标签的照片",noTagged:"还没有带此标签的照片。",tagsL:"标签",photosOf:"相关照片"});

Object.assign(A.en,{fmt:'Use a JPG, PNG, WebP or GIF image.'});
Object.assign(A.es,{fmt:'Usa una imagen JPG, PNG, WebP o GIF.'});
Object.assign(A.hi,{fmt:'JPG, PNG, WebP या GIF इमेज चुनें।'});
Object.assign(A.tl,{fmt:'Gumamit ng JPG, PNG, WebP o GIF na larawan.'});
Object.assign(A.ko,{fmt:'JPG, PNG, WebP 또는 GIF 이미지를 사용하세요.'});
Object.assign(A.zh,{fmt:'请使用 JPG、PNG、WebP 或 GIF 图片。'});
Object.assign(A.en,{aCvd:'Colorblind-friendly topic colors'});
Object.assign(A.es,{aCvd:'Colores de temas aptos para daltonismo'});
Object.assign(A.hi,{aCvd:'रंग-दृष्टि दोष के अनुकूल विषय रंग'});
Object.assign(A.tl,{aCvd:'Mga kulay ng paksa na angkop sa colorblind'});
Object.assign(A.ko,{aCvd:'색각 이상에 맞춘 주제 색상'});
Object.assign(A.zh,{aCvd:'适合色盲的主题颜色'});
const LANGS=[['en','🇺🇸','English'],['es','🇪🇸','Español'],['zh','🇨🇳','中文'],['tl','🇵🇭','Tagalog'],['ko','🇰🇷','한국어'],['hi','🇮🇳','हिन्दी']];

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
links:[{meeting_id:'m1',article_id:'complete-streets'},{meeting_id:'m1',article_id:'road-diet'},{meeting_id:'m2',article_id:'load-rating'},{meeting_id:'m3',article_id:'headway'},{meeting_id:'m4',article_id:'zoning'},{meeting_id:'m4',article_id:'variance'}]
};

const ICON={council:'bank',photos:'camera',wiki:'book-open'};
const PICON={account:'user',contribute:'upload-simple',admin:'shield-check',access:'eye',about:'info',faq:'question'};
const SECTIONS=['council','photos','wiki'];
const PAGES=['account','contribute','admin','access','about','faq'];
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
const card=(i,t,s,b,full,href,src,cls,attr)=>{
const hl=cls&&cls.includes('h3')?'h3':cls&&cls.includes('res')?'h2':'h3';
const inner=`<div class="thumb">${src?pic(src,500,'',' loading="lazy"'):ic(i)}</div><div class="txt"><${hl}>${esc(t)}</${hl}>${s?`<small>${esc(s)}</small>`:''}${b?`<p${full?' class="full"':''}>${esc(b)}</p>`:''}</div>`;
const c='card'+(cls?' '+cls:'');
const cc=CATS.find(x=>x.i===i);
const dc=cc?` data-c="${cc.id}"`:'';
return href?`<a class="${c}"${dc} href="${href}">${inner}</a>`:`<article class="${c}"${dc}${attr||''}>${inner}</article>`;
};
const TL={es:'es',hi:'hi',tl:'tl',ko:'ko',zh:'zh-CN'};
let TC={};
try{TC=JSON.parse(localStorage.getItem('tc')||'{}')}catch(e){}
const TX=s=>lang==='en'?s:(TC[lang+'|'+s]||s);
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
const[m,l]=await Promise.all([
sb.from('meetings').select('*').order('meeting_date',{ascending:false}),
sb.from('meeting_articles').select('*')
]);
if(m.error||l.error)return{meetings:[],links:[],err:true};
store={meetings:m.data||[],links:l.data||[]};
return store;
}

let PUB=[];
async function loadWiki(){
if(!sb)return;
const{data,error}=await sb.from('wiki_articles').select('*').order('title');
if(!error&&data)WIKI=data.map(r=>({id:r.id,cat:r.cat,title:r.title,short:r.short,body:r.body,img:r.img_src?{src:r.img_src,credit:r.img_credit||'',alt:r.img_alt||''}:null}));
let ph;
for(const cols of ['title,caption,cat,photo_path,tags,related','title,caption,cat,photo_path,tags','title,caption,cat,photo_path']){
ph=await sb.from('submissions').select(cols).eq('status','approved').order('created_at',{ascending:false});
if(!ph.error)break;
}
const rows=ph.data||[];
const su=rows.length?await sb.storage.from('submissions').createSignedUrls(rows.map(r=>r.photo_path),3600):{data:[]};
const urls=new Map((su.data||[]).map(u=>[u.path,u.signedUrl]));
PUB=rows.filter(r=>urls.get(r.photo_path)).map(r=>({cat:r.cat||'all',t:r.title,b:r.caption||'',tags:r.tags||[],rel:r.related||[],s:urls.get(r.photo_path)}));
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
size:()=>`<h2 class="ax" id="${pre}size">${t.aSize}</h2><div class="sl"><span class="sm" aria-hidden="true">A</span><div class="rg"><input type="range" min="0.875" max="1.5" step="0.125" value="${p.size==='auto'?parseFloat(getComputedStyle(document.documentElement).fontSize)/16:p.size}" aria-labelledby="${pre}size" aria-valuetext="${Math.round((p.size==='auto'?parseFloat(getComputedStyle(document.documentElement).fontSize)/16:p.size)*100)}%"><div class="tk" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div></div><span class="lg" aria-hidden="true">A</span></div><label class="check"><input type="checkbox" data-k="sizeAuto"${p.size==='auto'?' checked':''}>${t.aDevSize}</label>`,
contrast:()=>chk('contrast',t.aContrast),
motion:()=>chk('motion',t.aMotion),
marks:()=>chk('marks',t.aMarks),
cvd:()=>chk('cvd',t.aCvd)
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
if(k==='sizeAuto'){const r=el.querySelector('input[type=range]'),c=A11Y.get();if(e.target.checked){A11Y.set({size:'auto',man:c.size==='auto'?c.man:c.size});r.value=parseFloat(getComputedStyle(document.documentElement).fontSize)/16}else{const v=+c.man||1;A11Y.set({size:v});r.value=v}r.setAttribute('aria-valuetext',Math.round(r.value*100)+'%')}
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
if(sb)A11Y.sync=p=>{if(user)sb.from('user_prefs').upsert({id:user.id,a11y:p}).then(()=>{},()=>{})};

const axHint=$('axHint');
let hintOn=true;
try{hintOn=!localStorage.getItem('axSeen')&&!A11Y.stored()}catch(e){}
function hideHint(){
hintOn=false;
axHint.hidden=true;
try{localStorage.setItem('axSeen','1')}catch(e){}
}
function renderHint(){
const t=T();
axHint.hidden=!hintOn||page==='access';
$('axHintTxt').textContent=t.aHint;
$('axHintGo').textContent=t.aAdjust;
$('axHintNo').textContent=t.aNo;
axHint.setAttribute('aria-label',t.access);
}
$('axHintGo').addEventListener('click',e=>{e.stopPropagation();hideHint();setAx(true)});
$('axHintNo').addEventListener('click',hideHint);

const relOf=ids=>(ids||[]).map(id=>WIKI.find(w=>w.id===id)).filter(Boolean).map(w=>({id:w.id,title:TX(w.title)}));
const mkCom=p=>({t:TX(p.t),b:p.b?TX(p.b):'',s:p.s,user:true,tags:p.tags,cat:p.cat,rel:relOf(p.rel)});
const tile=(i,n)=>`<button class="shot" type="button" data-i="${n}">${pic(i.s,500,'',' loading="lazy"')}<span class="cap">${esc(i.t)}</span></button>`;
const bindGal=(el,list)=>el.addEventListener('click',e=>{const b=e.target.closest('.shot[data-i]');if(b)showPhoto(list[+b.dataset.i])});
const tagCounts=cat=>{const m=new Map();PUB.filter(p=>!cat||cat==='all'||p.cat===cat).forEach(p=>p.tags.forEach(x=>m.set(x,(m.get(x)||0)+1)));return m};
const byT=(a,b)=>a.t.localeCompare(b.t,lang,{sensitivity:'base',numeric:true});
function showPhoto(o){
let d=$('lb');
if(!d){
d=document.createElement('dialog');
d.id='lb';
document.body.appendChild(d);
d.addEventListener('click',e=>{if(e.target===d)d.close()});
}
const t=T();
d.setAttribute('aria-label',o.t);
d.innerHTML=`<button class="btn icon lbx" type="button" aria-label="${t.close}">${ic('x')}</button><div class="lbimg">${o.s?pic(o.s,1280,o.t):''}</div><div class="lbtx"><h2>${esc(o.t)}</h2>${o.user?`<p class="badge">${ic('user')}${esc(t.userSub)}</p>`:''}${o.b?`<p>${esc(o.b)}</p>`:''}${(o.cat&&o.cat!=='all')||(o.tags&&o.tags.length)?`<div class="tags">${o.cat&&o.cat!=='all'?`<a class="tag" href="#search-${o.cat}">${esc(nameOf(o.cat))}</a>`:''}${(o.tags||[]).map(x=>o.plain?`<span class="tag">${esc(x)}</span>`:`<a class="tag" href="#tag/${encodeURIComponent(x)}">${esc(x)}</a>`).join('')}</div>`:''}${o.rel&&o.rel.length?`<h3>${esc(t.relT)}</h3><div class="tags">${o.rel.map(x=>`<a class="tag" href="#wiki/${esc(x.id)}">${ic('book-open')}${esc(x.title)}</a>`).join('')}</div>`:''}${o.meta?`<ul class="meta">${o.meta.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${o.h?`<a class="btn" href="${o.h}">${ic('book-open')}${esc(t.readArt)}</a>`:''}</div>`;
d.querySelector('.lbx').addEventListener('click',()=>d.close());
d.showModal();
}

// Decorative skyline banner (parallax) and light scroll reveals for the main page.
const calm=()=>matchMedia('(prefers-reduced-motion:reduce)').matches||document.documentElement.dataset.motion==='reduce';
// Fade-and-rise items in as they scroll into view. Items already on screen are left alone.
function reveal(list){
if(calm()||!('IntersectionObserver' in window))return;
const io=new IntersectionObserver(es=>es.filter(e=>e.isIntersecting).forEach((e,j)=>{
const c=e.target;io.unobserve(c);
c.style.setProperty('--d',Math.min(j,5)*60+'ms');c.classList.add('in');
c.addEventListener('transitionend',()=>{c.classList.remove('rv','in');c.style.removeProperty('--d')},{once:true});
}),{rootMargin:'0px 0px -8% 0px'});
list.forEach(c=>{
if(c.getBoundingClientRect().top<innerHeight)return;
c.classList.add('rv');io.observe(c);
});
}

const views={
async council(){
const t=T(),tok=tokn;
app.innerHTML=`<h1>${t.recent}</h1><div class="none">${t.loading}</div>`;
const d=await getData();
if(tok!==tokn)return;
if(d.err){app.innerHTML=`<h1>${t.recent}</h1><div class="none" role="alert"><p>${t.loadErr}</p><button class="btn" id="rt" type="button">${ic('arrow-clockwise')}${t.retry}</button></div>`;$('rt').addEventListener('click',()=>views.council());return}
const arts=Object.fromEntries(WIKI.map(w=>[w.id,w]));
await prep([...d.meetings.flatMap(m=>[m.title,m.body,m.outcome]),...WIKI.flatMap(w=>[w.title,w.short])]);
if(tok!==tokn)return;
app.innerHTML=`<h1>${t.recent}</h1>`+(d.meetings.length?d.meetings.map(m=>{
const rel=d.links.filter(l=>l.meeting_id===m.id).map(l=>arts[l.article_id]).filter(Boolean);
return `<section><h2 class="date">${fmt(m.meeting_date)}</h2>`+card('bank',TX(m.title),m.outcome?TX(m.outcome):'',TX(m.body),true,null,null,'lead')+(rel.length?`<h3 class="rel">${t.related}</h3>`+rel.map(a=>card(iconOf(a.cat),TX(a.title),nameOf(a.cat),TX(a.short),false,'#wiki/'+a.id,null,'sm')).join(''):'')+`</section>`;
}).join(''):`<div class="none"><p>${t.empty}</p><p>${t.emptyHint}</p><a class="btn" href="#wiki">${ic('book-open')}${t.wiki}</a></div>`);
reveal(app.querySelectorAll('section .card,section .rel'));
},
async photos(){
const t=T(),tok=tokn;
await prep([...PUB.flatMap(p=>[p.t,p.b]),...WIKI.filter(w=>w.img).flatMap(w=>[w.title,w.short])]);
if(tok!==tokn)return;
const com=PUB.map(mkCom);
const wk=WIKI.filter(w=>w.img).map(w=>({t:TX(w.title),b:TX(w.short),s:w.img.src,tags:[],cat:w.cat,h:'#wiki/'+w.id}));
const all=[...com,...wk].sort(byT);
app.innerHTML=`<div class="th"><h1>${t.bank}</h1><a class="btn icon" href="#contribute" aria-label="${esc(t.contribute)}" title="${esc(t.contribute)}">${ic('upload-simple')}</a></div><a class="searchbar" href="#search-all">${ic('magnifying-glass')}<span>${t.ph}</span></a><div class="chips">`+['all',...CATS.map(c=>c.id)].map(id=>`<a class="chip" href="#search-${id}">${nameOf(id)}</a>`).join('')+`</div>`+(all.length?`<div class="gal" id="gal">${all.map(tile).join('')}</div>`:`<div class="none"><p>${t.firstPhoto}</p><a class="btn" href="#contribute">${ic('upload-simple')}${t.contribute}</a></div>`);
const g=$('gal');
if(g)bindGal(g,all);
if(g)reveal(g.querySelectorAll('.shot'));
},
async wiki(){
const t=T(),tok=tokn;
await prep(WIKI.flatMap(w=>[w.title,w.short]));
if(tok!==tokn)return;
app.innerHTML=`<h1>${t.guide}</h1><a class="searchbar" href="#search-all">${ic('magnifying-glass')}<span>${t.ph}</span></a><div class="chips">`+CATS.map(c=>`<button class="chip" type="button" data-j="${c.id}">${nameOf(c.id)}</button>`).join('')+`</div>`+CATS.map(c=>
`<section id="cat-${c.id}" data-c="${c.id}"><div class="sh"><h2>${nameOf(c.id)}</h2><a class="more" href="#search-${c.id}">${t.more}</a></div><div class="row">`+
WIKI.filter(w=>w.cat===c.id).map(w=>card(c.i,TX(w.title),'',TX(w.short),false,'#wiki/'+w.id,w.img?.src,'media')).join('')+`</div></section>`).join('');
app.querySelector('.chips').addEventListener('click',e=>{
const b=e.target.closest('button');
if(b)$('cat-'+b.dataset.j).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
});
}
};

async function wikiArticle(id){
const t=T(),tok=tokn,w=WIKI.find(x=>x.id===id);
if(!w){app.innerHTML=`<div class="none"><p>${t.none}</p><a class="btn" href="#wiki">${ic('book-open')}${t.wiki}</a></div>`;return}
const img=w.img;
const rel=WIKI.filter(x=>x.cat===w.cat&&x.id!==w.id);
const ph=PUB.filter(p=>(p.rel||[]).includes(w.id)).map(mkCom).sort(byT);
await prep([w.title,w.short,...w.body,...rel.flatMap(x=>[x.title,x.short]),...PUB.flatMap(p=>[p.t,p.b])]);
if(tok!==tokn)return;
app.innerHTML=`<article class="wiki-article">`+(img?`<figure class="hero">${pic(img.src,960,img.alt||TX(w.title))}<figcaption>${esc(img.credit)}</figcaption></figure>`:'')+`<a class="cat" data-c="${w.cat}" href="#search-${w.cat}">${ic(iconOf(w.cat))}<span>${nameOf(w.cat)}</span>${ic('caret-right')}</a><h1>${esc(TX(w.title))}</h1><p class="lede">${esc(TX(w.short))}</p><div class="actions"><a class="btn" href="#search-${w.cat}">${ic('images')}${t.seeImg}</a><button class="btn" id="shr" type="button">${ic('share-network')}${t.share}</button></div>`+w.body.map(p=>`<p>${esc(TX(p))}</p>`).join('')+(rel.length?`<h2 class="rel">${t.related}</h2>`+rel.map(x=>card(iconOf(x.cat),TX(x.title),'',TX(x.short),false,'#wiki/'+x.id,x.img?.src,'res h3')).join(''):'')+`</article>`;
if(ph.length){
const ar=app.querySelector('article');
ar.insertAdjacentHTML('beforeend',`<h2 class="rel">${t.photosOf}</h2><div class="gal" id="ag">${ph.map(tile).join('')}</div>`);
bindGal($('ag'),ph);
}
$('shr').addEventListener('click',async()=>{
const u=location.href;
if(navigator.share){try{await navigator.share({title:TX(w.title),url:u})}catch(e){}return}
try{await navigator.clipboard.writeText(u);$('shr').firstChild.className='ph ph-check';$('shr').lastChild.textContent=t.copied}catch(e){}
});
}

const pages={
access(){
const t=T();
app.innerHTML=`<div class="page" id="ax"><h1>${t.access}</h1>`+axHtml(['theme','size','contrast','cvd','motion','marks'],'p-')+`<button id="axr" type="button" class="btn ghost">${t.aReset}</button></div>`;
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
app.innerHTML=`<div class="page"><h1>${t.contribute}</h1><p>${t.contribBody}</p><form id="f"><label class="field">${t.photoF}<input type="file" accept="image/*" required><small class="hint">${t.photoHint}</small></label><label class="field">${t.topicF}<select id="pc">${CATS.map(c=>`<option value="${c.id}">${nameOf(c.id)}</option>`).join('')}</select></label><input type="text" id="hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px"><label class="field">${t.titleF}<input type="text" id="ptitle" required maxlength="120" aria-describedby="ptc" placeholder="${esc(t.titleEx)}"><small class="hint" id="ptc"></small></label><label class="field">${t.capF}<input type="text" id="pcap" maxlength="300" aria-describedby="pcc" placeholder="${esc(t.capEx)}"><small class="hint" id="pcc"></small></label><div class="field"><label for="ptag">${t.tagsF}</label><input type="text" id="ptag" maxlength="24" autocomplete="off" enterkeyhint="done" aria-describedby="ptg" placeholder="${esc(t.tagPh)}"><div id="ptl" class="tags"></div><div id="pts" class="sug"></div><small class="hint" id="ptg"></small></div><fieldset class="field rels"><legend>${t.relF}</legend><input type="text" id="prs" role="combobox" aria-expanded="false" aria-controls="prr" aria-autocomplete="list" autocomplete="off" placeholder="${esc(t.relPh)}"><div id="prc" class="tags"></div><div id="prr" class="sug" role="listbox"></div><small class="hint" id="prh">${t.relHint}</small></fieldset><button class="btn solid" type="submit">${t.submit}</button><div class="ok" id="ok" role="status"></div></form></div>`;
const counter=(i,o,n)=>{const u=()=>{const l=i.value.length;o.textContent=t.maxC.replace('{n}',n)+' · '+l+'/'+n;o.classList.toggle('warn',l>=n)};i.addEventListener('input',u);u()};
counter($('ptitle'),$('ptc'),120);
counter($('pcap'),$('pcc'),300);
let tags=[],rel=new Set();
const rl=()=>{
const q=$('prs').value.trim().toLowerCase();
$('prc').innerHTML=[...rel].map(id=>{const w=WIKI.find(x=>x.id===id);return w?`<button type="button" class="tag rm" data-id="${esc(id)}" aria-label="${esc(t.rmTag.replace('{x}',TX(w.title)))}">${esc(TX(w.title))}${ic('x')}</button>`:''}).join('');
const full=rel.size>=3;
let l=full||!q?[]:WIKI.filter(w=>!rel.has(w.id)&&(TX(w.title)+' '+TX(w.short)).toLowerCase().includes(q)).slice(0,6);
$('prr').innerHTML=l.map(w=>`<button type="button" role="option" class="opt" data-id="${esc(w.id)}"><b>${esc(TX(w.title))}</b><small>${esc(nameOf(w.cat))}</small></button>`).join('')+(!full&&q&&!l.length?`<p class="hint">${t.relNone}</p>`:'');
$('prs').setAttribute('aria-expanded',l.length?'true':'false');
$('prs').disabled=full;
$('prh').textContent=full?t.relMax:t.relHint;
};
$('prs').addEventListener('input',rl);
$('prs').addEventListener('focus',rl);
$('prr').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b&&rel.size<3){rel.add(b.dataset.id);$('prs').value='';rl();$('prs').focus()}});
$('prc').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b){rel.delete(b.dataset.id);rl()}});
$('pc').addEventListener('change',rl);
rl();
const tl=()=>{
$('ptl').innerHTML=tags.map((x,n)=>`<button type="button" class="tag rm" data-n="${n}" aria-label="${esc(t.rmTag.replace('{x}',x))}">${esc(x)}${ic('x')}</button>`).join('');
$('ptg').textContent=t.tagHint.replace('{n}',5)+' · '+tags.length+'/5';
};
const addTag=raw=>{
const v=raw.trim().toLowerCase().replace(/\s+/g,' ').slice(0,24);
if(!v||tags.includes(v))return;
if(tags.length>=5){$('ptg').textContent=t.tagMax;$('ptg').classList.add('warn');return}
tags.push(v);$('ptg').classList.remove('warn');tl();
};
const ts=()=>{
const q=$('ptag').value.trim().toLowerCase();
const l=[...tagCounts()].filter(([x])=>!tags.includes(x)&&(!q||x.includes(q))).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,6);
$('pts').innerHTML=tags.length>=5?'':l.map(([x])=>`<button type="button" class="opt" data-t="${esc(x)}"><b>${esc(x)}</b></button>`).join('');
};
$('pts').addEventListener('pointerdown',e=>e.preventDefault());
$('pts').addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(b){addTag(b.dataset.t);$('ptag').value='';ts()}});
$('ptag').addEventListener('input',ts);
$('ptag').addEventListener('focus',ts);
$('ptag').addEventListener('blur',()=>setTimeout(()=>{const p=$('pts');if(p)p.innerHTML=''},150));
tl();
$('ptag').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===','){e.preventDefault();addTag($('ptag').value);$('ptag').value=''}});
$('ptag').addEventListener('input',e=>{const v=e.target.value;if(v.includes(',')){v.split(',').forEach(addTag);e.target.value=''}});
$('ptag').addEventListener('blur',e=>{addTag(e.target.value);e.target.value=''});
$('ptl').addEventListener('click',e=>{const b=e.target.closest('[data-n]');if(b){tags.splice(+b.dataset.n,1);$('ptg').classList.remove('warn');tl()}});
const bad=file=>!file||!['image/jpeg','image/png','image/webp','image/gif'].includes(file.type)||file.size>5242880;
const why=file=>file&&file.size>5242880?t.big:t.fmt;
const sub=$('f').querySelector('button[type=submit]');
let busy=false;
$('f').querySelector('input[type=file]').addEventListener('change',e=>{
const file=e.target.files[0];
if(file&&bad(file)){e.target.value='';$('ok').textContent=why(file)}else $('ok').textContent='';
});
$('f').addEventListener('submit',async e=>{
e.preventDefault();
const f=e.target,ok=$('ok');
if(busy)return;
if(!sb){ok.textContent=t.notReady;return}
if(!navigator.onLine){ok.textContent=t.offline;return}
const file=f.querySelector('input[type=file]').files[0];
if($('hp').value){f.reset();ok.textContent=t.thanks;return}
if(bad(file)){ok.textContent=why(file);return}
busy=true;sub.disabled=true;ok.textContent=t.loading;
try{
addTag($('ptag').value);$('ptag').value='';
const title=$('ptitle').value.trim(),caption=$('pcap').value.trim();
const path=crypto.randomUUID()+'-'+file.name.replace(/[^\w.-]/g,'_');
const up=await sb.storage.from('submissions').upload(path,file);
if(up.error){const m=up.error.message||'';ok.textContent=(/mime|type/i.test(m)?t.fmt:/size|exceed/i.test(m)?t.big:t.err)+' ['+m+']';return}
const r=await sb.from('submissions').insert({title,caption:caption||null,cat:$('pc').value,photo_path:path,...(tags.length?{tags}:{}),...(rel.size?{related:[...rel]}:{})});
if(r.error){await sb.storage.from('submissions').remove([path]);ok.textContent=r.error.code==='42501'?t.limit:t.err;return}
ok.textContent=t.thanks;
f.reset();tags=[];rel=new Set();tl();rl();
}catch(x){ok.textContent=t.err}
finally{busy=false;sub.disabled=false}
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
app.innerHTML=`<div class="page"><h1>${up?t.signup:t.signin}</h1><form id="f"><label class="field">${t.email}<input type="email" autocomplete="email" required></label><label class="field">${t.pass}<input type="password" autocomplete="${up?'new-password':'current-password'}" minlength="6" required${up?' aria-describedby="pwh"':''}>${up?`<small class="hint" id="pwh">${t.pwHint}</small>`:''}</label><label class="check"><input type="checkbox" id="rm" checked>${t.remember}</label><button class="btn solid" type="submit">${up?t.signup:t.signin}</button><div class="ok" id="ok" role="status"></div></form><button id="sw" class="btn ghost" type="button">${up?t.haveAcct:t.noAcct}</button></div>`;
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
if(r.error){
const c=r.error.code||'',m=(r.error.message||'').toLowerCase();
ok.textContent=c==='invalid_credentials'||m.includes('invalid login')?t.badLogin:c==='email_not_confirmed'||m.includes('not confirmed')?t.needConfirm:c==='user_already_exists'||m.includes('already registered')?t.exists:c==='weak_password'||m.includes('password')?t.weakPw:c==='over_request_rate_limit'||c==='over_email_send_rate_limit'||r.error.status===429?t.rate:c==='validation_failed'||m.includes('email')?t.badEmail:t.err;
return;
}
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
<nav class="chips" id="atabs" role="tablist"><button class="chip on" data-p="m" type="button" role="tab" aria-selected="true">Meetings</button><button class="chip" data-p="w" type="button" role="tab" aria-selected="false">Wiki</button><button class="chip" data-p="s" type="button" role="tab" aria-selected="false">Submissions</button></nav>
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
<label class="field">Tags (comma-separated, max 5)<input type="text" id="stg"></label>
<button class="btn solid" type="submit">Save submission</button>
<button id="sx" class="btn ghost" type="button">Cancel edit</button></form>
<label class="check"><input type="checkbox" id="srev">Show reviewed</label><input type="search" class="flt" data-for="sl" placeholder="Filter" aria-label="Filter"><div id="sl"></div></section></div>`;
let D={meetings:[],links:[]};
let S=[];
const resetM=()=>{$('mf').reset();$('mid').value='';$('mx').hidden=true};
const resetW=()=>{$('wf').reset();$('wkey').value='';$('wx').hidden=true};
const fail=r=>{$('aerr').textContent=r&&r.error?'Failed: '+r.error.message:'';return !!(r&&r.error)};
const drawS=()=>{
const v=S.filter(s=>$('srev').checked||s.status==='pending');
$('sl').innerHTML=v.map(s=>`<div class="arow"><div><b>${esc(s.title)}</b><small>${s.status}${s.caption?' · '+esc(s.caption):''}</small></div><button class="btn icon" data-sv="${s.id}" aria-label="View photo">${ic('image')}</button><button class="btn icon" data-se="${s.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-sa="${s.id}" aria-label="Approve">${ic('check')}</button><button class="btn icon" data-sr="${s.id}" aria-label="Reject">${ic('x')}</button><button class="btn icon" data-sd="${s.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('')||`<small>${$('srev').checked?'No submissions.':'No pending submissions.'}</small>`;
};
const draw=async()=>{
D=await getData(true);
if(tok!==tokn)return;
const{data:subs}=await sb.from('submissions').select('*').order('created_at',{ascending:false});
S=subs||[];
$('wl').innerHTML=WIKI.map(w=>`<div class="arow"><div><b>${esc(w.title)}</b><small>${esc(w.id)}</small></div><button class="btn icon" data-we="${w.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-wd="${w.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('');
drawS();
$('mrel').innerHTML=WIKI.map(a=>`<label class="check"><input type="checkbox" value="${esc(a.id)}"> ${esc(a.title)} <small>${nameOf(a.cat)}</small></label>`).join('')||'<small>No articles yet.</small>';
$('ml').innerHTML=D.meetings.map(m=>`<div class="arow"><div><b>${esc(m.title)}</b><small>${m.meeting_date}${m.outcome?' · '+esc(m.outcome):''}</small></div><button class="btn icon" data-me="${m.id}" aria-label="Edit">${ic('pencil-simple')}</button><button class="btn icon" data-md="${m.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('');
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
}else if(b.dataset.wd&&confirm('Delete this wiki article? It will be removed from any meetings it is attached to.')){
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
if(fail(await sb.from('submissions').update({cat:$('sc').value,title:$('st').value.trim(),caption:$('sp').value.trim()||null,tags:[...new Set($('stg').value.split(',').map(x=>x.trim().toLowerCase().slice(0,24)).filter(Boolean))].slice(0,5)}).eq('id',$('sid').value)))return;
$('sf').hidden=true;
await draw();
});
$('sx').addEventListener('click',()=>{$('sf').hidden=true});
$('srev').addEventListener('change',drawS);
$('sl').addEventListener('click',async e=>{
let b=e.target.closest('button');
if(!b){const r=e.target.closest('.arow');b=r&&r.querySelector('[data-sv]');if(!b)return}
const id=b.dataset.sv||b.dataset.se||b.dataset.sa||b.dataset.sr||b.dataset.sd;
const s=S.find(x=>x.id===id);
if(!s)return;
if(b.dataset.sv){
const{data}=await sb.storage.from('submissions').createSignedUrl(s.photo_path,300);
showPhoto({t:s.title,b:s.caption||'',s:data?data.signedUrl:'',cat:s.cat,plain:true,tags:s.tags||[],rel:relOf(s.related),meta:['Status: '+s.status,'Topic: '+(s.cat&&CATS.some(c=>c.id===s.cat)?L.en.cats[CATS.findIndex(c=>c.id===s.cat)]:'All'),'Submitted: '+new Date(s.created_at).toLocaleString()]});
}else if(b.dataset.se){
$('sid').value=s.id;$('sc').value=s.cat||CATS[0].id;$('st').value=s.title;$('sp').value=s.caption||'';$('stg').value=(s.tags||[]).join(', ');
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
await draw();
}
};

async function tagView(name){
const t=T(),tok=tokn;
await prep(PUB.flatMap(p=>[p.t,p.b]));
if(tok!==tokn)return;
const list=PUB.filter(p=>p.tags.includes(name)).map(mkCom).sort(byT);
app.innerHTML=`<h1>${esc(t.tagged.replace('{x}',name))}</h1>`+(list.length?`<div class="gal" id="gal">${list.map(tile).join('')}</div>`:`<div class="none"><p>${t.noTagged}</p><a class="btn" href="#photos">${ic('camera')}${t.photos}</a></div>`);
const g=$('gal');
if(g)bindGal(g,list);
}

async function search(cat){
const t=T(),tok=tokn;
await prep([...PUB.flatMap(p=>[p.t,p.b]),...PHOTOS.map(p=>p[1]),...WIKI.flatMap(w=>[w.title,w.short])]);
if(tok!==tokn)return;
app.innerHTML=`<h1>${nameOf(cat)}</h1><input id="q" type="search" aria-label="${t.ph}" placeholder="${t.ph}" autocomplete="off"><div class="chips">`+
['all',...CATS.map(c=>c.id)].map(id=>`<a class="chip ${id===cat?'on':''}" href="#search-${id}">${nameOf(id)}</a>`).join('')+`</div><div id="tg" class="chips"></div><div id="res"></div>`;
const q=$('q');
const res=$('res');
const items=[
...PUB.map(p=>({cat:p.cat,t:TX(p.t),k:t.photo,b:p.b?TX(p.b):'',h:null,s:p.s,user:true,tags:p.tags,rel:relOf(p.rel)})),
...PHOTOS.map(p=>({cat:p[0],t:TX(p[1]),k:t.photo,b:'',h:null})),
...WIKI.map(w=>({cat:w.cat,t:TX(w.title),k:t.article,b:TX(w.short),h:'#wiki/'+w.id,s:w.img?.src}))
].sort(byT);
const drawTags=s=>{
const l=[...tagCounts(cat)].filter(([x])=>!s||x.includes(s)).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,8);
$('tg').innerHTML=l.length?`<span class="lbl">${t.tagsL}</span>`+l.map(([x,n])=>`<a class="chip" href="#tag/${encodeURIComponent(x)}">${esc(x)} <small>${n}</small></a>`).join(''):'';
};
const draw=()=>{
const s=q.value.trim().toLowerCase();
drawTags(s);
const out=items.filter(i=>(cat==='all'||i.cat===cat)&&(!s||(i.t+' '+i.b+' '+(i.tags||[]).join(' ')).toLowerCase().includes(s)));
res.innerHTML=out.length?out.map(i=>card(iconOf(i.cat),i.t,i.k,i.b,false,i.h,i.s,'res',i.user?` role="button" tabindex="0" data-k="${items.indexOf(i)}"`:'')).join(''):`<div class="none"><p>${t.none}</p><p>${t.noneHint}</p></div>`;
};
q.addEventListener('input',draw);
const open=e=>{const c=e.target.closest('[data-k]');if(c)showPhoto(items[+c.dataset.k])};
res.addEventListener('click',open);
res.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const c=e.target.closest('[data-k]');if(c){e.preventDefault();open(e)}}});
draw();
}

function nav(){
tabs.setAttribute('aria-label',T().menu);
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
app.inert=open;tabs.inert=open;
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

async function route(){
const n=++tokn;
const lbd=$('lb');if(lbd&&lbd.open)lbd.close();
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
}else if(h.startsWith('tag/')){
let nm='';try{nm=decodeURIComponent(h.slice(4))}catch(e){}
back.hidden=false;brand.hidden=true;
back.href='#'+cur;
back.textContent=T().back;
tagView(nm);
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
document.title=(h.startsWith('wiki/')?(WIKI.find(x=>x.id===h.slice(5))||{}).title:h.startsWith('search-')?nameOf(h.slice(7)==='all'||CATS.some(x=>x.id===h.slice(7))?h.slice(7):'all'):(T()[PAGES.includes(h)||SECTIONS.includes(h)?h:'council']||'Admin'))+' · Our Streets Wiki';
if(h.startsWith('tag/')){try{document.title=decodeURIComponent(h.slice(4))}catch(e){}}
if(h==='wiki'||h==='photos'||h.startsWith('search-')||h.startsWith('tag/'))app.dataset.wide='1';else delete app.dataset.wide;
nav();
renderDrawer();
renderLang();
setAx(false);
renderHint();
$('footLink').textContent=T().access;
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
document.addEventListener('click',e=>{if(!langMenu.hidden&&!e.target.closest('#langWrap'))setLang(false);if(!axMenu.hidden&&!e.target.closest('#axWrap'))setAx(false)});
document.addEventListener('keydown',e=>{
if(e.key!=='Escape')return;
if(!axMenu.hidden){setAx(false);axBtn.focus()}
else if(!langMenu.hidden){setLang(false);langBtn.focus()}
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
