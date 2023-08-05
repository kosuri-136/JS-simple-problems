let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let arr=readLine().split(" ");
for(let i=1;i<=arr.length;i++)
{
    
    arr.unshift(arr); 
    console.log(arr);
}
    
