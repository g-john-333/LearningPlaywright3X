// EXERCISE: ASSIGNMENT OPERATORS
// -------------------------------------------------------------
// GOAL: Predict each output BEFORE running the file.
// Write your guess in your head (or as a comment), THEN run:
//     node 05_chapter_operator/10_assignment_operator.js
// Compare with the ANSWERS at the bottom. No peeking first! 👀
// =============================================================


// ---------- PART A: The basic assignment (=) ----------
console.log("----- PART A -----");

let score = 10;          // '=' stores the value 10 in 'score'
console.log(score);      // Q1: ?

score = 20;              // re-assign: the old 10 is replaced
console.log(score);      // Q2: ?


// ---------- PART B: Compound assignment (shortcuts) ----------
console.log("----- PART B -----");

let points = 100;

points += 50;            // same as: points = points + 50
console.log(points);     // Q3: ?

points -= 30;            // same as: points = points - 30
console.log(points);     // Q4: ?

points *= 2;             // same as: points = points * 2
console.log(points);     // Q5: ?

points /= 4;             // same as: points = points / 4
console.log(points);     // Q6: ?

points %= 4;             // same as: points = points % 4 (remainder)
console.log(points);     // Q7: ?

points **= 3;            // same as: points = points ** 3 (power)
console.log(points);     // Q8: ?


// ---------- PART C: += with strings (watch out!) ----------
console.log("----- PART C -----");

let message = "Hello";
message += " World";     // += also JOINS strings
console.log(message);    // Q9: ?

let total = "5";
total += 3;              // string += number → ???
console.log(total);      // Q10: ?
console.log(typeof total); // Q11: ?


// ---------- PART D: Increment / Decrement ----------
console.log("----- PART D -----");

let count = 5;
count++;                 // add 1
console.log(count);      // Q12: ?
count--;                 // subtract 1
console.log(count);      // Q13: ?

// prefix vs postfix — the interview classic:
let x = 5;
console.log(x++);        // Q14: ?  (returns FIRST, then adds)
console.log(x);          // Q15: ?
console.log(++x);        // Q16: ?  (adds FIRST, then returns)


// ---------- PART E: Your turn (TODO) ----------
// 1. Create a variable 'wallet' with value 500.
// 2. You earn 250  → use +=
// 3. You spend 100 → use -=
// 4. Bank doubles your money → use *=
// 5. Log the final amount. (Expected: 1300)

// --- write your code below this line ---
let wallet = 500;
wallet += 250;
wallet -= 100;
wallet *= 2;

console.log(wallet); // Expected: 1300


// =============================================================
// ============  ANSWERS (scroll down to check)  ===============
// =============================================================
//
// Q1:  10
// Q2:  20    → '=' replaces the old value
// Q3:  150   → 100 + 50
// Q4:  120   → 150 - 30
// Q5:  240   → 120 * 2
// Q6:  60    → 240 / 4
// Q7:  0     → 60 % 4 = remainder 0 (60 divides evenly by 4)
// Q8:  0     → 0 ** 3 = 0
// Q9:  "Hello World"  → += joins strings too
// Q10: "53"  → number 3 was coerced to "3", then JOINED (not added!)
// Q11: "string"
// Q12: 6
// Q13: 5
// Q14: 5     → postfix x++ returns the OLD value first
// Q15: 6     → ...but x did get incremented
// Q16: 7     → prefix ++x increments FIRST, then returns
//
// KEY TAKEAWAY:
//   '=' stores, compound operators (+= -= *= /= %= **=) are shortcuts
//   for "take my value, apply the math, store it back".
//   ⚠️ += with a string JOINS text instead of adding numbers.
