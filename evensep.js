let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
//Write a function with name evenOddSeparator
// This evenOddSeparator function should take a list of integers and return a list
// you can start from here	
function evenOddSeparator(numbers) {
    let odd = [];
    let even = [];
  
    for (let i = 0; i < numbers.length; i++) 
    {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      } else {
        odd.push(numbers[i]);
      }
    }
  
    return [...odd,...even]
  }
  



/// Do not change anything below this line
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  }
  
}

let numbers =readLine().split(" ");
ConvertToNumber(numbers);
let separated = evenOddSeparator(numbers);
for(num of separated){
  console.log(num);
}