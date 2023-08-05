// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');
// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }
// digits = [9];
// for(let i=digits.length-1;i>=0;i--)//1-1==0>=0/true(//4-1=3 true)(3-1=2>0 true)
// {
//     if(digits[i]!=9)//0!=0-false(//1!=9)(//2!=9-true)
//     {
//         digits[i]=digits[i]+1;//1=1+1=2(4,3,2,2)//(digits[2]=3--3=3+1=4)
//         //console.log(digits);//(1,2,4)
//         break;
//     }
//     if(i==0)//0=0
//     {
//         digits.unshift(1);//
//     }
// }
// console.log(digits);

let x = 2;
let y =[];
let z = 3;
y.unshift(x);//2
y.unshift(z);//3
console.log(y);//3,2
y.push(x);//3,2,2
y.push(z);//3,2,2,3
console.log(y);