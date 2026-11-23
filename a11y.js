(function(){
var d=document.documentElement,k='a11y',mq=matchMedia('(prefers-color-scheme: dark)');
function def(){return{theme:'auto',size:'auto',contrast:matchMedia('(prefers-contrast: more)').matches,motion:matchMedia('(prefers-reduced-motion: reduce)').matches,marks:false}}
function get(){var s={};try{s=JSON.parse(localStorage.getItem(k))||{}}catch(e){}var o=Object.assign(def(),s);if(o.size!=='auto'){var n=+o.size;o.size=n===0?1:n===1?1.125:n===2?1.25:Math.min(1.5,Math.max(.875,n||1))}return o}
function apply(){
var p=get(),dark=p.theme==='dark'||(p.theme==='auto'&&mq.matches);
d.dataset.mode=dark?'dark':'light';
var fs='';
if(p.size==='auto'&&window.CSS&&CSS.supports('font','-apple-system-body')){
var s=document.createElement('span');s.style.font='-apple-system-body';d.appendChild(s);
var px=parseFloat(getComputedStyle(s).fontSize);d.removeChild(s);
if(px)fs=(16*Math.min(1.5,Math.max(.94,px/17)))+'px';
}else if(p.size!=='auto')fs=(16*p.size)+'px';
d.style.fontSize=fs;
p.contrast?d.dataset.contrast='high':delete d.dataset.contrast;
p.motion?d.dataset.motion='reduce':delete d.dataset.motion;
p.marks?d.dataset.marks='1':delete d.dataset.marks;
var m=document.querySelector('meta[name=theme-color]');
if(m)m.content=p.contrast?(dark?'#000000':'#ffffff'):(dark?'#0f1a14':'#fbfdfb');
}
var tm;
function save(p){try{localStorage.setItem(k,JSON.stringify(p))}catch(e){}apply()}
function set(o){var p=Object.assign(get(),o);save(p);if(A11Y.sync){clearTimeout(tm);tm=setTimeout(function(){A11Y.sync&&A11Y.sync(get())},600)}}
function load(o){save(Object.assign(get(),o))}
function stored(){try{return localStorage.getItem(k)}catch(e){return null}}
function reset(){try{localStorage.removeItem(k)}catch(e){}apply()}
mq.addEventListener&&mq.addEventListener('change',apply);
window.A11Y={get:get,set:set,load:load,reset:reset,stored:stored,sync:null};
document.addEventListener('visibilitychange',function(){if(!document.hidden)apply()});
apply();
})();
