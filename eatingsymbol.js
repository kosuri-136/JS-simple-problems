let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}


function aftereating(S){
    let integerinrakeshmind =0;
for(i=0;i<S.length;i++){
    if(S[i]==="+"){
        integerinrakeshmind++;
    }
    else if(S[i]==="-"){
        integerinrakeshmind--;
    }
}
    return integerinrakeshmind;
}

let symbol = readLine();
// console.log(symbol)
let result = aftereating(symbol)
console.log(result)