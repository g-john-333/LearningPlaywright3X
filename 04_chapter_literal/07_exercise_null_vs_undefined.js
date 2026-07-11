// EXERCISE: NULL vs UNDEFINED
// -------------------------------------------------------------
// GOAL: Predict each output BEFORE running the file.
// Write your guess in your head (or as a comment), THEN run:
//     node 04_chapter_literal/07_exercise_null_vs_undefined.js
// Compare with the ANSWERS at the bottom. No peeking first! 👀
// =============================================================


// ---------- PART A: Where does 'undefined' come from? ----------
console.log("----- PART A -----");

let a;                       // declared, never assigned
console.log(a);              // Q1: ?

let user = { name: "John" };
console.log(user.age);       // Q2: ? (property doesn't exist)

function greet(personName) {
  console.log(personName);   // Q3: ? (no argument passed)
}
greet();

function doNothing() {}
console.log(doNothing());    // Q4: ? (function returns nothing)


// ---------- PART B: 'null' is set on purpose ----------
console.log("----- PART B -----");

let selectedUser = null;
console.log(selectedUser);   // Q5: ?


// ---------- PART C: Comparing them ----------
console.log("----- PART C -----");

console.log(null == undefined);   // Q6: ?  (loose equality)
console.log(null === undefined);  // Q7: ?  (strict equality)
console.log(typeof undefined);    // Q8: ?
console.log(typeof null);         // Q9: ?  (careful — famous bug!)


// ---------- PART D: Your turn (TODO) ----------
// 1. Declare a variable 'score' with NO value. Log it — should print undefined.
// 2. Declare a variable 'winner' and set it to null on purpose. Log it.
// 3. Write an if-check that prints "empty" when a value is null OR undefined.
//    HINT: value == null  matches BOTH.

// --- write your code below this line ---
let score;
console.log(score); // should print undefined

let winner = null;
console.log(winner); // should print null

if (score == null) {
  console.log("empty");
}

if (winner == null) {
  console.log("empty");
}

// =============================================================
// ============  ANSWERS (scroll down to check)  ===============
// =============================================================
//
// Q1: undefined   → declared but not assigned
// Q2: undefined   → property 'age' does not exist on the object
// Q3: undefined   → argument was not passed
// Q4: undefined   → function has no 'return', so returns undefined
// Q5: null        → you assigned it on purpose
// Q6: true        → loose '==' treats null and undefined as equal
// Q7: false       → strict '===' checks type too, so they differ
// Q8: "undefined" → the type of undefined
// Q9: "object"    → ⚠️ historical JS bug; to check use  value === null
//
// KEY TAKEAWAY:
//   undefined = JS didn't give it a value (automatic)
//   null      = YOU set it to empty (intentional)
//   value == null  →  true for BOTH (handy "is it empty?" check)
