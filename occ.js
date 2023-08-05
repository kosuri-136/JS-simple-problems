let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let length = parseInt(readLine());
let count = 1;
let x = parseInt(readLine());
for(i=1;i<=(length-1);i++)
{
    let y = parseInt(readLine());
    ((x===y)?count++:0)
}
console.log(count);