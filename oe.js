let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let length = parseInt(readLine());
let num1 = parseInt(readLine());
count = 1;
for (let i=1; i<length; i++)
{
let num2 = parseInt(readLine());
if (num1===num2)
    {
        count++;
    }
}
console.log(count);