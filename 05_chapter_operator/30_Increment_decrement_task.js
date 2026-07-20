/*
 Question: Predict the output of each console.log below WITHOUT running the code,
 then run the file to verify. Covers pre/post increment (++), pre/post decrement (--),
 and how they combine with the ternary operator.
*/
let a = 100;
console.log(a++ + ++a +a++ + ++a);
console.log(a);

let b = 37;
console.log(--b + b--);
console.log(b);

let c = 5; 
let d = c-- - --c; 
console.log(d, c);

let i = 1; 
let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);