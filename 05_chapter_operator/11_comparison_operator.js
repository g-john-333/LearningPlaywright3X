// EXERCISE: COMPARISON OPERATORS
// -------------------------------------------------------------
// GOAL: Predict each output BEFORE running the file.
// Write your guess in your head (or as a comment), THEN run:
//     node 05_chapter_operator/11_comparison_operator.js
// Compare with the ANSWERS at the bottom. No peeking first! 👀
// =============================================================


// ---------- PART A: Greater / Less than ----------
console.log("----- PART A -----");

console.log(7 > 3);      // Q1: ?
console.log(7 < 3);      // Q2: ?
console.log(5 >= 5);     // Q3: ?  (greater OR equal)
console.log(4 <= 3);     // Q4: ?


// ---------- PART B: Loose (==) vs Strict (===) equality ----------
console.log("----- PART B -----");

// '=='  loose  → converts types first, THEN compares (risky!)
// '===' strict → compares value AND type, no conversion (safe ✅)

console.log(5 == "5");    // Q5: ?
console.log(5 === "5");   // Q6: ?
console.log(0 == false);  // Q7: ?
console.log(0 === false); // Q8: ?


// ---------- PART C: Not-equal (!= vs !==) ----------
console.log("----- PART C -----");

console.log(5 != "5");    // Q9:  ?  (loose: coerces first)
console.log(5 !== "5");   // Q10: ?  (strict: type matters)
console.log(10 != 20);    // Q11: ?


// ---------- PART D: Comparing strings ----------
console.log("----- PART D -----");

// Strings compare letter-by-letter using alphabet/Unicode order
console.log("apple" < "banana");  // Q12: ?  ('a' comes before 'b')
console.log("a" < "B");           // Q13: ?  (⚠️ capitals come FIRST in Unicode)
console.log("2" < "12");          // Q14: ?  (⚠️ string compare, not numbers!)
console.log(2 < 12);              // Q15: ?  (real number compare)


// ---------- PART E: Your turn (TODO) ----------
// 1. Create  let passingScore = 35;  and  let myScore = 40;
//    Log whether you passed:  myScore >= passingScore
// 2. Create  let pin = "1234";  and  let enteredPin = 1234;
//    Compare them with == and with === and log both.
//    Which one should a REAL login system use? Add a comment.

// --- write your code below this line ---
console.log("----- PART E -----");

let passingScore = 35;
let myScore = 40;
console.log(myScore >= passingScore); // true

let pin = "1234";
let enteredPin = 1234;
console.log(pin == enteredPin);  // true (loose equality)
console.log(pin === enteredPin); // false (strict equality)
// A REAL login system should use === to avoid type coercion and ensure security.


// =============================================================
// ============  ANSWERS (scroll down to check)  ===============
// =============================================================
//
// Q1:  true
// Q2:  false
// Q3:  true   → >= includes "equal"
// Q4:  false
// Q5:  true   → loose: "5" converted to 5 first
// Q6:  false  → strict: number vs string = different types
// Q7:  true   → loose: false converted to 0
// Q8:  false  → strict: number vs boolean
// Q9:  false  → loose says they're "equal", so NOT-equal is false
// Q10: true   → strict sees different types → they ARE not-equal
// Q11: true
// Q12: true   → 'a' < 'b' alphabetically
// Q13: false  → Unicode: 'B' is 66, 'a' is 97 → "a" is NOT less than "B"
// Q14: false  → STRINGS compare char-by-char: "2" vs "1" → "2" is bigger!
// Q15: true   → numbers compare normally
//
// KEY TAKEAWAY:
//   Always use === and !== — they never convert types behind your back.
//   ⚠️ Comparing number-strings ("2" < "12") uses TEXT order, not math.
