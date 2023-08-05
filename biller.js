let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// -------- Do NOT edit anything above this line ----------

// Define your class here

let l = parseInt(readLine());
for (let i = 0; i < l; i++) {
  let n = parseInt(readLine());
    let prime = true;
    if (n <= 1) {
        prime = false;
    }
    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            prime = false;
            break;
        }
    }
    console.log(prime ? "Yes" : "No");
    //console.log(n);
}

