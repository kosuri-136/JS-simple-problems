let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a = parseInt(readLine().split());
for(i=4;i<=0;i--)
{
    console.log(a);
}


