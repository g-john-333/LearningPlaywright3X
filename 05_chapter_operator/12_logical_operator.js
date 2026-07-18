// EXERCISE: LOGICAL OPERATORS
// -------------------------------------------------------------
// GOAL: Predict each output BEFORE running the file.
// Write your guess in your head (or as a comment), THEN run:
//     node 05_chapter_operator/12_logical_operator.js
// Compare with the ANSWERS at the bottom. No peeking first! 👀
// =============================================================


// ---------- PART A: AND (&&) — BOTH must be true ----------
console.log("----- PART A -----");

let age = 25;
let hasTicket = true;

console.log(age >= 18 && hasTicket);   // Q1: true
console.log(age >= 18 && false);       // Q2: false
console.log(true && true && true);     // Q3: true
console.log(true && true && false);    // Q4: false


// ---------- PART B: OR (||) — at least ONE must be true ----------
console.log("----- PART B -----");

let isAdmin = false;
let isOwner = true;

console.log(isAdmin || isOwner);       // Q5: true
console.log(false || false);           // Q6: false
console.log(false || false || true);   // Q7: true


// ---------- PART C: NOT (!) — flips the boolean ----------
console.log("----- PART C -----");

let isLoggedIn = false;

console.log(!isLoggedIn);              // Q8: true
console.log(!true);                    // Q9: false
console.log(!!"hello");                // Q10: true (double NOT = convert to boolean!)
console.log(!!0);                      // Q11: false


// ---------- PART D: Short-circuit — the secret superpower ----------
console.log("----- PART D -----");

// && returns the FIRST falsy value (or the last one if all truthy)
// || returns the FIRST truthy value (or the last one if all falsy)
// They return the actual VALUE, not just true/false!

console.log("John" && "Amy");          // Q12: "Amy"  (both truthy → last one)
console.log(0 && "Amy");               // Q13: 0  (first falsy wins)
console.log("" || "Guest");            // Q14: "Guest"  (classic default value trick)
console.log("John" || "Guest");        // Q15: "John"  (first truthy wins)

// ?? (nullish coalescing) — default ONLY for null/undefined
let retries = 0;
console.log(retries || 3);             // Q16: 3  (⚠️ 0 is falsy!)
console.log(retries ?? 3);             // Q17: 0  (0 is NOT null → kept ✅)


// ---------- PART E: Your turn (TODO) ----------
// 1. A theme park ride: you may enter if  height >= 120  AND  age >= 10.
//    Create variables and log the result of the check.
// 2. A discount applies if  isStudent  OR  isSenior. Try both false → false.
// 3. Use || to give  let username = "";  a default of "Guest".
// 4. BONUS: why would  ??  be better than  ||  if a valid username
//    could be the string "0"? Write your answer as a comment.

// --- write your code below this line ---
console.log("----- PART E -----");
let height = 130;
let age1 = 8;

console.log(height >= 120 && age1 >= 10); // true

// =============================================================
// ============  ANSWERS (scroll down to check)  ===============
// =============================================================
//
// Q1:  true    → both sides truthy
// Q2:  false   → one false kills &&
// Q3:  true
// Q4:  false
// Q5:  true    → one true is enough for ||
// Q6:  false
// Q7:  true
// Q8:  true    → NOT flips false → true
// Q9:  false
// Q10: true    → !! converts any value to its boolean ("hello" is truthy)
// Q11: false   → 0 is falsy
// Q12: "Amy"   → && returns the LAST value when all are truthy
// Q13: 0       → && stops at the first falsy value and returns IT
// Q14: "Guest" → "" is falsy, so || moves on to the next value
// Q15: "John"  → first truthy value wins immediately
// Q16: 3       → ⚠️ bug! 0 is falsy so || replaced a VALID 0
// Q17: 0       → ?? only replaces null/undefined → 0 survives ✅
//
// KEY TAKEAWAY:
//   &&  → ALL must be truthy  (returns first falsy, or last value)
//   ||  → ANY must be truthy  (returns first truthy — great for defaults)
//   !   → flips;  !! converts to a real boolean
//   ??  → safer default: only kicks in for null/undefined, keeps 0 and ""
