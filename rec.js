let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function sumOfFirstN(n, i = 1, pSum = 0)
 {
  if (n === 1) 
  {
    console.log(i, pSum + 1);
    return pSum + 1;
    
  } 
  else 
  {
    pSum = pSum + i;
    console.log(i, pSum);
    return sumOfFirstN(n - 1, i + 1, pSum);
  }
}

let n = parseInt(readLine());
sumOfFirstN(n);