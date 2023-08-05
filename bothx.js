let fs = require("fs");								
let data = fs.readFileSync(0, 'utf-8');								
let idx = 0;								
data = data.split('\n');								
								
function readLine() {								
idx++;								
return data[idx - 1].trim();								
}	




// function bothx(string1 , string2 ,x) {
//     let map1 = new Map();
//     for(let i=0;i<string1.length;i++){
//         let char = string1[i].toLowerCase();
//         let count = map1.get(char) ?? 0;
//         map1.set(char,count+1);
//     }
//     let map2 = new Map();
//     for(let i=0;i<string2.length;i++){
//         let char = string2[i].toLowerCase();
//         let count = map1.get(char) ?? 0;
//         map2.set(char,count+1);
//     }

//     let result = [];
//     for(let char in map1){
//         let count1 = map1.get(char);
//         let count2 = map2.get(char);
//         if(count1===x && count2===x){
//             result.push(char);
//         }
//     }
//     return result;
//     console.log(result.join())
// }


// let result = bothx(string1,string2,x);
// console.log(result.join())

// // console.log(string1, string2 ,x)



function findchar(string1, string2 ,x){
    const charcount1 = new Map();
    const charcount2 = new Map();
    function countcharacters (string , charcount){
        for(const char of string.toLowerCase()){
            charcount.set(char, (charcount.get(char) || 0) + 1);
        }
    }
    countcharacters(string1 ,charcount1);
    countcharacters(string2 ,charcount2);
    const charx = new Set();
    for(const[char,count] of charcount1.entries()){
        if(count===x && charcount2.get(char)==x){
            charx.add(char);
        }
    }
    return Array.from(charx).sort();
}

function main(){
let t = parseInt(readLine());
// let string = readLine().split(" ");
// let string1 = string[0];
// let string2 = string[1];
// let x = parseInt(string[2]);

for(let i=0;i<t;i++){
    let [string1,string2,x]=readLine().split(" ");

    const result = findchar(string1, string2 ,parseInt(x));
    console.log(result.join(" "));
}

}
main()