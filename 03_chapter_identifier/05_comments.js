// COMMENTS IN JAVASCRIPT
// Comments are notes for humans — the JS engine IGNORES them completely.
// They do NOT run, and have zero effect on the program's output.

// -------------------------------------------------------------
// 1. SINGLE-LINE COMMENT  →  starts with //
//    Everything after // on that line is ignored.
// -------------------------------------------------------------
let price = 100; // this part after // is a comment
console.log(price); // 100

// -------------------------------------------------------------
// 2. MULTI-LINE (BLOCK) COMMENT  →  wrapped in /* ... */
//    Good for longer notes spanning several lines.
// -------------------------------------------------------------
/*
  This is a block comment.
  It can span multiple lines.
  Useful for explaining a whole section.
*/
let total = price * 2;
console.log(total); // 200

// -------------------------------------------------------------
// 3. INLINE COMMENT  →  a // note at the END of a line of code
//    Explains that one specific line.
// -------------------------------------------------------------
let discount = 0.1; // 10% discount as a decimal

// -------------------------------------------------------------
// 4. COMMENTING OUT CODE  →  disable code without deleting it
//    Handy for testing / debugging.
// -------------------------------------------------------------
// console.log("This line will NOT run");
console.log("This line WILL run");

// You can also disable a block:
/*
console.log("skipped 1");
console.log("skipped 2");
*/

// -------------------------------------------------------------
// 5. GOOD vs BAD comments
// -------------------------------------------------------------

// ❌ BAD: states the obvious (the code already says this)
let x = 5; // set x to 5

// ✅ GOOD: explains WHY, or clarifies intent
let retryLimit = 5; // stop after 5 attempts to avoid endless loops

// -------------------------------------------------------------
// 6. DOC COMMENT (JSDoc style)  →  /** ... */ above a function
//    Describes what a function does, its params, and return.
//    Editors like VS Code read these for auto-hints.
// -------------------------------------------------------------
/**
 * Adds two numbers together.
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number} the sum of a and b
 */
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// -------------------------------------------------------------
// QUICK REFERENCE
// -------------------------------------------------------------
// //  ...            → single-line comment
// /*  ...  */        → multi-line / block comment
// /** ...  */        → JSDoc documentation comment (above functions)
// Tip: comment WHY, not WHAT. Good code shows the "what" by itself.
