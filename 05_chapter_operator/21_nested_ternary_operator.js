// Nested Ternary Operator: a ternary inside another ternary
// condition1 ? value1 : condition2 ? value2 : value3

let marks = 75;

let grade = marks >= 90 ? "A" : marks >= 70 ? "B" : marks >= 50 ? "C" : "Fail";
console.log(grade);
