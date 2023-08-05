let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let sale = true;
sale = false;
if(sale)
{
    console.log("TIME TO BUY");
} 
else 
{
    console.log("time to wait");
}