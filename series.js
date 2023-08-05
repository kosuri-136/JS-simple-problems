let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
// we have to find n th term of the series
// formula for series 1,3,6,10,15,21...
//n(n+1)/2
let x = ((n*(n+1)))/2;
console.log(x);