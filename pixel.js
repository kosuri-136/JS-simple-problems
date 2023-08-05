let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());//10
let arr=[];
let brr=[];
let count=0;
for(i=0;i<n;i++)//i=1
{
    arr.push(parseInt(readLine()));//7
}
console.log(arr);
let x=parseInt(readLine());
for(j=0;j<x;j++)
{
    brr.push(parseInt(readLine()));
}
for (var i = 0; i <= n - m; i++) {
    var match = true;
    for (var j = 0; j < m; j++) {
        if (image[i + j] !== icon[j]) {
            match = false;
            break;
        }
    }
    if (match) {
        count++;
    }
}
alert(count);