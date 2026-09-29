const fs = require('fs');
let js = fs.readFileSync('assets/index-ONzyNlzA.js', 'utf8');
const pattern2 = /\(0,C\.jsx\)\(`div`,{className:`h-full flex flex-col overflow-hidden`,children:\(0,C\.jsxs\)\(`div`,{className:`mx-auto flex w-full max-w-xl flex-col flex-1 min-h-0 gap-0 px-3 sm:px-4 pt-safe`,children:\[\(0,C\.jsxs\)\(`header`,{className:`flex items-center justify-between gap-2`.*?\)\}\)\}\)\}\)/s;
const match = js.match(pattern2);
console.log(match ? "Matched " + match[0].substring(0, 100) : "No match for pattern2");
