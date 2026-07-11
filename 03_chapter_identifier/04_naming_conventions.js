// NAMING CONVENTIONS USED IN INDUSTRY FOR IDENTIFIERS
// (All valid JS below — conventions are HABITS, not language rules.)

// -------------------------------------------------------------
// 1. camelCase  → first word lowercase, rest capitalized
//    USE: variables & functions in JavaScript (the JS standard)
// -------------------------------------------------------------
let firstName = "John";
let totalPrice = 99.5;
function getUserAge() { return 25; }

console.log(firstName, totalPrice, getUserAge()); // John 99.5 25

// -------------------------------------------------------------
// 2. PascalCase  → EVERY word capitalized (a.k.a. UpperCamelCase)
//    USE: Classes, Constructors, React components
// -------------------------------------------------------------
class UserAccount {
  constructor(userName) {
    this.userName = userName;
  }
}
const account = new UserAccount("John");
console.log(account.userName); // John

// -------------------------------------------------------------
// 3. snake_case  → all lowercase, words joined by underscores
//    USE: common in Python / databases / some APIs (rare in JS)
// -------------------------------------------------------------
let user_name = "Amy";
let total_item_count = 3;

console.log(user_name, total_item_count); // Amy 3

// -------------------------------------------------------------
// 4. SCREAMING_SNAKE_CASE  → all UPPERCASE + underscores
//    USE: constants that never change (config, magic numbers)
// -------------------------------------------------------------
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://example.com";
const PI = 3.14159;

console.log(MAX_LOGIN_ATTEMPTS, API_BASE_URL, PI);

// -------------------------------------------------------------
// 5. Hungarian notation  → prefix hints the TYPE / kind
//    USE: older code (C/C++, legacy JS) — mostly outdated today
//    b = boolean, str = string, arr = array, n = number, obj = object
// -------------------------------------------------------------
let bIsActive = true;      // boolean
let strMessage = "Hello";  // string
let arrItems = [1, 2, 3];  // array
let nCount = 10;           // number

console.log(bIsActive, strMessage, arrItems, nCount);

// -------------------------------------------------------------
// 6. kebab-case  → all lowercase, words joined by hyphens
//    ❌ NOT valid for JS identifiers (hyphen = minus sign)
//    USE: file names, CSS classes, HTML attributes, URLs
//    e.g.  user-profile.js,  .nav-bar,  data-user-id
// -------------------------------------------------------------
// let user-name = "x";   // SyntaxError — do NOT use in JS variables


// -------------------------------------------------------------
// QUICK REFERENCE
// -------------------------------------------------------------
// camelCase             firstName            → JS variables / functions
// PascalCase            UserAccount          → classes / components
// snake_case            user_name            → Python / DB columns
// SCREAMING_SNAKE_CASE  MAX_LOGIN_ATTEMPTS   → constants
// Hungarian             strMessage           → legacy (type prefix)
// kebab-case            user-profile.js      → files / CSS / HTML (not JS vars)
