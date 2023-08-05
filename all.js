let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//PROBLEM 1 READLINE
let a = parseInt(readLine());// for integer values we use parseInt
let b = parseFloat(readLine());//for decimal values we use parseFloat
//console.log(a,b);// console function is used to print the output value
//console.log(typeof(a,b)); // typeof is used to know which type of character , no. ,etc
//operators + - * / % - modulus gives us the value of remainder where as divided by gives quotient
//let c=a+b;
//console.log(c);

//PROBLEM TYPE 2 - IF CONDITIONS (THESE ARE USED TO CHECK WHEATHER TH STATEMENTS ARE TRUE OR FALSE)
    console.log(a==b);
    let d=10;
    let v="10";
    console.log(d==v);

// PROBLEM TYPE 3 -





