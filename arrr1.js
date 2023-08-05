let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let arr =[];
let n = parseInt(readLine())
for(i=0;i<n;i++){
    arr.push(parseInt(readLine()));
}
console.log(arr);