let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
} 
let len = readLine().split(" ");
let n = parseInt(len[0]);
let m = parseInt(len[1]);
let arr=readLine().split(" ");
let brr=[];
let b=0;

for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++)
    {
        for(k=0;k<arr.length;k++)
        {
            for(l=0;l<arr.length;l++)
            {
                if((arr[i][j][k][l])%2!==0)
                {
                    b = b+(arr[i][j][k][l]);
                }
            }
            
        }
    }
}
console.log(b);