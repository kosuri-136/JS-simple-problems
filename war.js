let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let x = readLine().split(" ");
let n = parseInt(x[0]);
let m = parseInt(x[1]);
let bomb=[]
// console.log(m);
function war(n,m){
    let empty = new Array(n).fill(0);
    for(i=0 ;i<m; i++) {
        let row = parseInt(readLine());
        let col = parseInt(readLine());
        empty[row-1]++;
        empty[col-1]++;

    }
    let soldiersalive = (n*n)-empty.reduce((sum,value)=>sum+value);
    for(i=0;i<m;i++){
        console.log(empty[i]);
    }
 
}

war(n,m)