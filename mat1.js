let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}  


//condtion if((a[i][j]%2)!==0)
//then the value should be sumedup

let len = readLine().split(" ");
let n = parseInt(len[0]);
let k = parseInt(len[1]);
let arr=readLine().split(" ");
let brr=[];
let count =0;
for(let i=0;i<arr.length;i++)
{
    brr.push(parseInt(arr[i]));
}
for(let j=0;j<brr.length;j++)
{
    if(brr[j]==k)
    {
        count++;
    }

}
console.log(count);