let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}




// function mergesort(arr){
//     if(arr.length<=1){
//         return [arr, 0];
//     }


// const mid = Math.floor(arr.length /2);
// const [left,countleft]=mergesort(arr.slice(0,mid));
// const [right,countright]=mergesort(arr.slice(mid));
// const merged =[];
// let countpairs = countleft + countright;
// let i=0;
// let j=0;


// while(i<left.length && j<right.length){
//     if(left[i] <= right[j]){
//         merged.push(left[i]);
//         i++;
//     }
//     else{
//         merged.push(right[j]);
//         countpairs += left.length - i;
//         j++;
//     }
// }
//     return [merged.concat(left.slice(i)).concat(right.slice(j)), countpairs];

// }

// function countsorted(arr){
//     const [sortedArr , countpairs]= mergesort(arr);
//     return countpairs;
// }

// let n = parseInt(readLine());
// let arr = readLine().split(" ").map(Number);
// // console.log(arr);

// const finaloutput = countsorted(arr);
// console.log(finaloutput)



function mergesort(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<=arr[j]){
                count++;
            }
        }
    }
    return count;
}


let n = parseInt(readLine());
let arr = readLine().split(" ");
// console.log(arr);
let zrr=[]
for(let i=0;i<arr.length;i++){
    zrr.push(parseInt(arr[i]));
}
const final = mergesort(zrr)
console.log(final)