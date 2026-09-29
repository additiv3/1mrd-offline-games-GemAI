const fs = require('fs');
let js = fs.readFileSync('assets/index-ONzyNlzA.js', 'utf8');

const oeDef = "function VersionBar_1mrd(){let[e,t]=(0,l.useState)(()=>{let d=new Date();return d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit',second:'2-digit'})});(0,l.useEffect)(()=>{let iv=setInterval(()=>{let d=new Date();t(d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit',second:'2-digit'}))},1000);return()=>clearInterval(iv)},[]);let now=new Date();let dateStr=now.toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit',year:'numeric'});return(0,C.jsxs)('div',{className:'flex items-center justify-between px-1 py-1.5 mb-1 text-[10px] font-bold text-ink-muted uppercase tracking-wide border-b border-line/30',children:[(0,C.jsx)('span',{className:'text-pop-violet font-black tracking-widest',children:'v1.8.6.3'}),(0,C.jsx)('span',{className:'text-ink-muted/70',children:dateStr}),(0,C.jsx)('span',{className:'font-mono text-ink-muted tabular-nums',children:e})]})}"
js = js.replace('var ve=1e9;function ye({games:e', 'var ve=1e9;' + oeDef.replace(/'/g, '`') + 'function ye({games:e');
js = js.replace('(0,C.jsx)(Oe,{})', '(0,C.jsx)(VersionBar_1mrd,{})');

const pattern2 = /\(0,C\.jsx\)\(`div`,{className:`h-full flex flex-col overflow-hidden`,children:\(0,C\.jsxs\)\(`div`,{className:`mx-auto flex w-full max-w-xl flex-col flex-1 min-h-0 gap-0 px-3 sm:px-4 pt-safe`,children:\[\(0,C\.jsx\)\(VersionBar_1mrd,\{\}\),\(0,C\.jsxs\)\(`header`,{className:`flex items-center justify-between gap-2`.*?\)\}\)\}\)\}\)/s;

const match = js.match(pattern2);
console.log(match ? "Matched: " + match[0].substring(0, 150) : "No match for pattern2");
