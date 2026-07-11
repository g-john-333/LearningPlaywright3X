// DIFFERENT TYPES OF LITERALS IN JAVASCRIPT
// A literal is a FIXED value written directly in the code.
// 'typeof' shows the data TYPE of each value — watch the surprises below!

// -------------------------------------------------------------
// 1. NUMBER LITERAL  → plain numbers (integers & decimals)
// -------------------------------------------------------------
let age = 25;          // integer
let price = 99.5;      // decimal (float)
let hex = 0xFF;        // hexadecimal → 255
let big = 1_000_000;   // underscores for readability → 1000000
let exp = 1.5e3;        // scientific notation → 1500

console.log(age, price, hex, big, exp);   // 25 99.5 255 1000000 1500
console.log(typeof age);             // number

// -------------------------------------------------------------
// 2. STRING LITERAL  → text in single or double quotes
// -------------------------------------------------------------
let firstName = "John";
let city = 'London';

console.log(firstName, city);        // John London
console.log(typeof firstName);       // string

// -------------------------------------------------------------
// 3. TEMPLATE LITERAL  → back-ticks ` ` with ${ } placeholders
// -------------------------------------------------------------
let greeting = `Hello, ${firstName}! You are ${age}.`;

console.log(greeting);               // Hello, John! You are 25.
console.log(typeof greeting);        // string  (template literals are strings too)

// -------------------------------------------------------------
// 4. BOOLEAN LITERAL  → only two values: true / false
// -------------------------------------------------------------
let isActive = true;
let isDeleted = false;

console.log(isActive, isDeleted);    // true false
console.log(typeof isActive);        // boolean

// -------------------------------------------------------------
// 5. NULL LITERAL  → intentional "empty / no value"
// -------------------------------------------------------------
let selectedUser = null;

console.log(selectedUser);           // null
console.log(typeof selectedUser);    // object  ⚠️ famous JS bug (not "null"!)

// -------------------------------------------------------------
// 6. ARRAY LITERAL  → a list of values inside [ ]
// -------------------------------------------------------------
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3];

console.log(colors[0]);              // red  (first item, index 0)
console.log(typeof colors);          // object  ⚠️ arrays are objects under the hood
console.log(Array.isArray(colors));  // true   ← correct way to check for an array

// -------------------------------------------------------------
// 7. OBJECT LITERAL  → key:value pairs inside { }
// -------------------------------------------------------------
let person = {
  name: "John",
  age: 25,
  isActive: true,
};

console.log(person.name);            // John  (access value by its key)
console.log(typeof person);          // object

// -------------------------------------------------------------
// 8. REGEXP LITERAL  → a pattern between / /  (for matching text)
// -------------------------------------------------------------
let pattern = /hello/i;              // 'i' = case-insensitive

console.log(pattern.test("Say HELLO")); // true
console.log(typeof pattern);            // object

// -------------------------------------------------------------
// QUICK REFERENCE  (value → typeof result)
// -------------------------------------------------------------
// 25, 99.5, 0xFF     → "number"      true / false     → "boolean"
// "John", `Hi ${x}`  → "string"      null             → "object" ⚠️
// [1, 2, 3]          → "object" ⚠️   { name: "John" } → "object"
// /hello/i           → "object"
// TIP: typeof can't tell arrays/null/objects apart — use Array.isArray()
//      and value === null for those.
