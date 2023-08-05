let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let no1 = parseInt(readLine());
let length = parseInt(readLine());
let count = 0;
for(i=1;i<=length;i++)
{
    let no2 = parseInt(readLine());
    if(no1 === no2)
    {
        count++;
    }
}
console.log(count);