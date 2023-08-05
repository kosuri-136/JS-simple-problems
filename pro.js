let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//basic type without using conditions
let n = readLine().split("");//2,3,4
let p = parseInt(n[0]*n[1]*n[2]);//2*3*4 = 24
let a = parseInt(n[0])+parseInt(n[1])+parseInt(n[2]);//2+3+4=9
let d = p-a;//(24-9 =15)
console.log(d);