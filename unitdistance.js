let fs = require("fs");								
let data = fs.readFileSync(0, 'utf-8');								
let idx = 0;								
data = data.split('\n');								
								
function readLine() {								
idx++;								
return data[idx - 1].trim();								
}		


function unitdist(string1, string2){
    const x = string1.length;
    const y = string2.length;

    const editdist = Array.from({length: x+1},()=> Array(y+1).fill(0));


    for(let i=0;i<=x;i++){
        editdist[i][0]=i;
    }
    for(let j=0;j<=y;j++){
        editdist[j][0]=j;
    }
    for(let i=1;i<=x;i++){
        for(let j=1;j<=y;j++){
            if(string1[i-1]===string2[j-1]){
                editdist[i][j]=editdist[i-1][j-1];
            }
            else{
                editdist[i][j]= 1 + Math.min(editdist[i-1][j], editdist[i][j-1], editdist[i-1][j-1]);
            }
        }
    }

    return editdist[x][y]
}


function isedit(string1,string2){
    const realdistance = unitdist(string1,string2);
    return realdistance === 1;
}


let t = parseInt(readLine());
let finaloutput ="";
for(let i=1;i<=t;i++){
    let string=readLine().split(" ")
    let string1 = string[0];
    let string2 = string[1];
    // console.log([string1,string2])
    const output = isedit(string1,string2);
    if(  finaloutput = (finaloutput +output)){
        console.log("true")

    }
  
  
  
}
  else{
        console.log("False")
    }
// console.log(finaloutput)

