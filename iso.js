let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let str1= "ABCA";
let str2= "XYZX";
x = str1.split();
y = str2.split();


for(let i=0;i<str1;i++)
{
    if(x[i]===y[i])
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}
console.log(str1);