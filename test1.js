let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a = parseInt(readLine());
let b = parseInt(readLine());
let c = a+b;
let d = a-b;
let e = a*b;
console.log(c);
console.log(d);
console.log(e);