const fs = require('fs');
let js = fs.readFileSync('assets/index-ONzyNlzA.js', 'utf8');
const match = js.match(/flex-col overflow-hidden.*?pt-safe/s);
console.log(match ? "Matched: " + match[0] : "No match");
