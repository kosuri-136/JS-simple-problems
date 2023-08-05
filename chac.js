let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let cc = parseInt(readLine());
let cn = parseInt(readLine());
let ic = parseInt(readLine());
let ino = parseInt(readLine());
let bill = ((cc*cn)+(ic*ino));
console.log(bill);


