let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let length = parseInt(readLine());
let odd = 0;
let even = 0;
for(i=1;i<=length;i++)
{
    let x= parseInt(readLine());
    if((x%2!==0)?odd++:even++)
    {
        
    }

}

console.log(odd);
console.log(even);

