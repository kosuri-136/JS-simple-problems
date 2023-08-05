let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());

let sum =0;
let number = 9;
 
for(let i=1;i<=n;i++){
    sum = sum +number;
    number = number * 10 +9;
}
console.log(sum);