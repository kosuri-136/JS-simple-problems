let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());//5
//extreme values min and max no. product should be output
let arr=[];
for(let i=0;i<n;i++)
{
    arr.push(parseInt(readLine()));
}
let min =arr[0];
for(let j=0;j<arr.length;j++)
{
    if(arr[j]<min)
    {
        min=arr[j];
    }
}
let max= arr[0];
for(let k=0;k<arr.length;k++)
{
    if(arr[k]>max)
    {
        max=arr[k];
    }

}
let product=max*min;
console.log(product);