let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a =readLine().split(" ");
let time = parseInt(a[0])+parseInt(a[1]);
let H;
if(time>12)
{
H = time-12;
}
else
{
H = time;
}
console.log(time);