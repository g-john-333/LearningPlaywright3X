// An identifier is the NAME we give to a variable, function, etc.

// -------------------------------------------------------------
// RULE 1: Must start with a letter, _ (underscore), or $ (dollar)
// -------------------------------------------------------------
let name = "John";     // starts with a letter  ✅
let _count = 5;        // starts with underscore ✅
let $price = 99.5;     // starts with dollar     ✅

console.log(name, _count, $price); // John 5 99.5

// ❌ INVALID: cannot start with a digit
// let 2fast = 10;     // SyntaxError

// -------------------------------------------------------------
// RULE 2: Digits ARE allowed after the first character
// -------------------------------------------------------------
let user1 = "Amy";
let item_2 = "Pen";

console.log(user1, item_2); // Amy Pen

// -------------------------------------------------------------
// RULE 3: Identifiers are CASE-SENSITIVE (all three are different)
// -------------------------------------------------------------
let age = 25;
let Age = 30;
let AGE = 40;

console.log(age, Age, AGE); // 25 30 40

// -------------------------------------------------------------
// RULE 4: No reserved keywords (let, if, function, return, class...)
// -------------------------------------------------------------
// ❌ INVALID: 'let' is a keyword
// let let = 5;        // SyntaxError

let letValue = 5;      // ✅ ok — it only CONTAINS the word "let"
console.log(letValue); // 5

// -------------------------------------------------------------
// RULE 5: No spaces or symbols like - + @ (use camelCase instead)
// -------------------------------------------------------------
// ❌ INVALID: hyphen and space not allowed
// let my-var = 1;     // SyntaxError
// let my var = 1;     // SyntaxError

let firstName = "John"; // ✅ camelCase — common JS convention
console.log(firstName); // John