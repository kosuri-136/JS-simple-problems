let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());//5
let a = parseInt(readLine());
let sum = a;
for(i=1;i<=n-1;i++)
{
    let b = parseInt(readLine());
    if(sum>b)
    {
        console.log(sum);
        continue;
    }
    else{
        sum = b;
    }
    console.log(sum);
}