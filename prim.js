let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let len = parseInt(readLine());
for (let i=0;i<len;i++)
{
    let a =parseInt(readLine());
    if(a===2)
    {
        console.log("yes");
    }
    else if(a%2!==0&&a%1===0&&a%1===0)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
}