let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
for(let x=1;x<=n;x++)//x=1 2
{
   let j = "";
    for(let y =1;y<=x;y++)//y=1,1,2
    {
      j=j+x;//1,2
    }
    console.log(j);//1,,22 ,
}
