// EXERCISE: DATA TYPES — EXPLAINING
// -------------------------------------------------------------
// GOAL: Predict each output BEFORE running the file.
// Write your guess in your head (or as a comment), THEN run:
//     node 05_chapter_operator/09_data_types_explaining.js
// Compare with the ANSWERS at the bottom. No peeking first! 👀
// =============================================================


// ---------- PART A: The 7 primitives + typeof ----------
console.log("----- PART A -----");

let userName = "John";
let age = 25;
let isActive = true;
let city;                      // declared, never assigned
let selected = null;
let bigNumber = 123n;

console.log(typeof userName);  // Q1: ?
console.log(typeof age);       // Q2: ?
console.log(typeof isActive);  // Q3: ?
console.log(typeof city);      // Q4: ?
console.log(typeof selected);  // Q5: ?  (careful — famous bug!)
console.log(typeof bigNumber); // Q6: ?


// ---------- PART B: Non-primitives (reference types) ----------
console.log("----- PART B -----");

let user = { name: "John" };
let scores = [10, 20, 30];
function greet() {}

console.log(typeof user);      // Q7: ?
console.log(typeof scores);    // Q8: ?  (arrays are secretly...?)
console.log(typeof greet);     // Q9: ?

// The REAL way to detect an array:
console.log(Array.isArray(scores));  // Q10: ?


// ---------- PART C: Copy by VALUE vs copy by REFERENCE ----------
console.log("----- PART C -----");

// Primitives → independent copies
let a = 10;
let b = a;
b = 99;
console.log(a);                // Q11: ?

// Objects → shared reference (same object, two labels!)
let team1 = ["John", "Amy"];
let team2 = team1;
team2.push("Bob");
console.log(team1);            // Q12: ?

// Comparing objects compares the ADDRESS, not the contents
console.log([1, 2] === [1, 2]); // Q13: ?
console.log("hi" === "hi");     // Q14: ?


// ---------- PART D: Your turn (TODO) ----------
// 1. Create one variable of EACH primitive type and log its typeof.
// 2. Create an object 'browser' with a property name: "chromium".
//    Copy it into a second variable, change the copy's name to "firefox",
//    then log BOTH — notice they changed together!
// 3. BONUS: make a REAL copy using  {...browser}  and prove the
//    original stays safe.

// --- write your code below this line ---
let x = "Hello"; // string
let y = 42;
let z = true; // boolean
let w;
let v = null;
let u = 123n; // bigint
let g = Symbol("sym"); // symbol

console.log(typeof x); // string
console.log(typeof y); // number
console.log(typeof z); // boolean
console.log(typeof w); // undefined
console.log(typeof v); // object (historical bug)
console.log(typeof u); // bigint
console.log(typeof g); // symbol

let browser = { name: "chromium" };
let browserCopy = browser;
browserCopy.name = "firefox";
console.log(browser); // { name: "firefox" }
console.log(browserCopy); // { name: "firefox" }

let realCopy = { ...browser };
realCopy.name = "safari";
console.log(browser); // { name: "firefox" }
console.log(realCopy); // { name: "safari" }


// =============================================================
// ============  ANSWERS (scroll down to check)  ===============
// =============================================================
//
// Q1:  "string"
// Q2:  "number"
// Q3:  "boolean"
// Q4:  "undefined"  → declared but not assigned
// Q5:  "object"     → ⚠️ historical JS bug; check null with  value === null
// Q6:  "bigint"
// Q7:  "object"
// Q8:  "object"     → arrays ARE objects under the hood
// Q9:  "function"   → the one non-primitive with its own typeof
// Q10: true         → Array.isArray() is the correct array check
// Q11: 10           → primitives copy the VALUE; 'a' is untouched
// Q12: ["John", "Amy", "Bob"] → objects copy the REFERENCE; both
//                               labels point to the SAME array
// Q13: false        → two different objects in memory (different address)
// Q14: true         → primitives are compared by VALUE
//
// KEY TAKEAWAY:
//   Primitives (string, number, boolean, null, undefined, symbol, bigint)
//     → copied by VALUE, compared by VALUE, immutable.
//   Non-primitives (object, array, function)
//     → copied by REFERENCE, compared by ADDRESS, mutable.
