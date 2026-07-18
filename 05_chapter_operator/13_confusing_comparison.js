// EXERCISE: CONFUSING COMPARISONS 🤯
// -------------------------------------------------------------
// GOAL: These are the WEIRD ones interviewers love.
// Predict each output BEFORE running the file, THEN run:
//     node 05_chapter_operator/13_confusing_comparison.js
// Compare with the ANSWERS at the bottom. No peeking first! 👀
// =============================================================


// ---------- PART A: null and undefined weirdness ----------
console.log("----- PART A -----");

console.log(null == undefined);   // Q1: true  (special couple!)
console.log(null === undefined);  // Q2: false
console.log(null == 0);           // Q3: false  (surprising!)
console.log(null >= 0);           // Q4: true  (even MORE surprising!)
console.log(undefined == 0);      // Q5: false  (undefined is only loosely equal to null)


// ---------- PART B: NaN — equal to NOTHING ----------
console.log("----- PART B -----");

console.log(NaN == NaN);          // Q6: false  (the only value not equal to itself!)
console.log(NaN === NaN);         // Q7: false
console.log(Number.isNaN(NaN));   // Q8: true  (the CORRECT way to check)


// ---------- PART C: The + join trap ----------
console.log("----- PART C -----");

console.log("5" + 3);             // Q9:  53  (+ joins if either side is a string)
console.log("5" - 3);             // Q10: 2  (- always does math)
console.log("5" * "2");           // Q11: 10
console.log(1 + true);            // Q12: 2  (true becomes 1)
console.log("" + 0);              // Q13: "0"


// ---------- PART D: Empty things being weird ----------
console.log("----- PART D -----");

console.log("" == 0);             // Q14: true  ("" coerces to 0)
console.log(" " == 0);            // Q15: true  (a SPACE also coerces to 0!)
console.log([] == 0);             // Q16: true  (empty array → "" → 0 😱)
console.log([] == false);         // Q17: true
console.log({} == {});            // Q18: false  (objects compare by ADDRESS)


// ---------- PART E: The classic trick questions ----------
console.log("----- PART E -----");

console.log(0.1 + 0.2);           // Q19: 0.30000000000000004  (floating point surprise)
console.log(0.1 + 0.2 === 0.3);   // Q20: false
console.log("2" < "12");          // Q21: false  (string comparison = text order)
console.log(true + true);         // Q22: 2  (booleans become numbers)


// ---------- PART F: Your turn (TODO) ----------
// 1. Fix the 0.1 + 0.2 problem: log  (0.1 + 0.2).toFixed(1)  — what type
//    does toFixed return? Check with typeof.
// 2. Write a check that safely detects NaN in  let result = "abc" * 2;
// 3. Prove that === would have saved you in Q14–Q17: re-test each
//    with === and log the results.

// --- write your code below this line ---
console.log("----- PART F -----");
let fixedResult = (0.1 + 0.2).toFixed(1);
console.log(fixedResult); // Logs "0.3"
console.log(typeof fixedResult); // Logs "string"

let result = "abc" * 2;
if (Number.isNaN(result)) {
    console.log("result is NaN");
} else {
    console.log("result is not NaN");
}

console.log("" === 0); // false
console.log(" " === 0); // false
console.log([] === 0); // false
console.log([] === false); // false
console.log({} === {}); // false

// =============================================================
// ============  ANSWERS (scroll down to check)  ===============
// =============================================================
//
// Q1:  true    → special rule: null and undefined equal EACH OTHER (loose)
// Q2:  false   → but they are different types
// Q3:  false   → null == only matches undefined, NOT 0
// Q4:  true    → 😱 relational operators CONVERT null to 0, so 0 >= 0
// Q5:  false   → undefined only loosely equals null, nothing else
// Q6:  false   → NaN is the ONLY JS value not equal to itself
// Q7:  false
// Q8:  true    → Number.isNaN() is the reliable check
// Q9:  "53"    → + with a string JOINS
// Q10: 2       → - forces both sides to numbers
// Q11: 10      → * forces numbers too
// Q12: 2       → true coerces to 1
// Q13: "0"     → number joined onto a string
// Q14: true    → "" converts to 0
// Q15: true    → whitespace-only strings also convert to 0
// Q16: true    → [] → "" → 0. Yes, really.
// Q17: true    → [] → "" → 0, false → 0
// Q18: false   → two different objects in memory
// Q19: 0.30000000000000004  → binary floating-point rounding
// Q20: false   → because of Q19!
// Q21: false   → strings compare char-by-char: first chars "2"(50) vs
//                "1"(49) → "2" comes AFTER "1", so "2" is GREATER.
//                With real numbers 2 < 12 is true. Strings ≠ numbers!
// Q22: 2       → true + true → 1 + 1
//
// KEY TAKEAWAY:
//   Coercion causes every one of these surprises. Defend yourself:
//   1. Always use ===  and  !==
//   2. Check NaN with Number.isNaN()
//   3. Never compare numbers as strings
//   4. Never trust  0.1 + 0.2 === 0.3  (use toFixed / rounding)
