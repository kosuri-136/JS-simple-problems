let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let arr = [[1,2,3],];
let sum = 0;
b = arr.push((readLine().split(" ")));
for (let i = 0; i < arr.length; i++) {
    sum += b[i];
}
console.log(sum);


