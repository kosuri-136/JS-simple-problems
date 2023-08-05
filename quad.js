let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let input = parseInt(readLine().split(" "));
let x = parseInt(input[0]);
console.log(x);
