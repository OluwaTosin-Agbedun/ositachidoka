import fs from 'fs';

const js = fs.readFileSync('public/assets/index-CXv5nIOP.js', 'utf8');

let idx = 0;
while (true) {
  idx = js.indexOf('Lt', idx);
  if (idx === -1) break;
  // check if it's treated as variable Lt
  const left = js[idx - 1];
  const right = js[idx + 2];
  const isVar = /[^a-zA-Z0-9_$]/.test(left) && /[^a-zA-Z0-9_$]/.test(right);
  if (isVar) {
    console.log(`\nLt match at index ${idx}:\n`, js.slice(idx - 150, idx + 150));
  }
  idx += 2;
  if (idx > 1021343) break;
}
