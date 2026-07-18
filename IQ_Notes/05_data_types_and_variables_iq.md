# Data Types & Variables

A beginner's guide to **how JavaScript stores values** — the **primitive data types**,
the three ways to declare variables (**`let` / `const` / `var`**), and how JS silently
converts types (**type coercion**).

## Big Picture

```
     VARIABLE = a named box that holds a VALUE
     ┌──────────────────────────────────────────┐
     │  let  score  =  10                        │
     │       ^^^^^     ^^                         │
     │       name      value (a Number)          │
     └──────────────────────────────────────────┘

     Every value has a TYPE:
       Primitives ──▶ string, number, boolean, null, undefined, symbol, bigint
       Objects    ──▶ object, array, function  (hold collections/behaviour)
```

- A **variable** is a named container for a value.
- A **data type** describes *what kind* of value it is.
- **Coercion** is JavaScript automatically changing one type into another.

---

## 1. The 7 Primitive Data Types

A **primitive** is a simple, single value — not an object, and **immutable** (can't be changed in place).

| Type          | Example                | `typeof` result | Notes                               |
| ------------- | ---------------------- | --------------- | ----------------------------------- |
| **string**    | `"John"`, `'hi'`       | `"string"`      | Text                                |
| **number**    | `25`, `3.14`, `-1`     | `"number"`      | All numbers (int + decimal)         |
| **boolean**   | `true`, `false`        | `"boolean"`     | Yes/no, on/off                      |
| **undefined** | `let x;`               | `"undefined"`   | Declared but no value assigned      |
| **null**      | `let x = null;`        | `"object"` ⚠️   | Intentional "empty" (famous bug)    |
| **bigint**    | `9007199254740991n`    | `"bigint"`      | Very large integers (note the `n`)  |
| **symbol**    | `Symbol("id")`         | `"symbol"`      | Unique identifiers (advanced)       |

> Everything that is **not** a primitive is an **object** — including arrays `[]`,
> objects `{}`, and functions.

```js
let name = "John";       // string
let age = 25;            // number
let isActive = true;     // boolean
let city;                // undefined
let selected = null;     // null

console.log(typeof name, typeof age, typeof isActive); // string number boolean
```

---

## 2. Declaring Variables — `let` / `const` / `var`

Three keywords declare variables. **Modern JS uses `let` and `const`; avoid `var`.**

| Feature              | `var`                     | `let`                  | `const`                |
| -------------------- | ------------------------- | ---------------------- | ---------------------- |
| **Introduced**       | Original (ES1)            | ES6 (2015)             | ES6 (2015)             |
| **Scope**            | Function-scoped           | Block-scoped `{ }`     | Block-scoped `{ }`     |
| **Re-assign?**       | ✅ yes                    | ✅ yes                 | ❌ no                  |
| **Re-declare?**      | ✅ yes (risky)            | ❌ no                  | ❌ no                  |
| **Hoisting**         | Hoisted as `undefined`    | Hoisted, but unusable before line ("TDZ") | same as `let` |
| **Use it?**          | ❌ avoid (legacy)         | ✅ when value changes  | ✅ default choice      |

```js
const PI = 3.14;    // constant — cannot be reassigned
let count = 0;      // can change later
count = count + 1;  // ✅ ok

// PI = 3.2;        // ❌ TypeError: Assignment to constant variable

let score = 10;
// let score = 20;  // ❌ SyntaxError: already declared
```

### Block scope in action

```js
{
  let a = 1;
  var b = 2;
}
// console.log(a);  // ❌ ReferenceError — 'a' only lives inside { }
console.log(b);     // 2  — 'var' leaks out of the block (why we avoid it)
```

### `const` with objects/arrays (important nuance)

`const` locks the **variable**, not the **contents**. You can still change what's *inside*.

```js
const user = { name: "John" };
user.name = "Amy";     // ✅ allowed — we changed a property, not the variable
console.log(user);     // { name: 'Amy' }

// user = { name: "Bob" }; // ❌ TypeError — can't reassign the variable itself

const nums = [1, 2];
nums.push(3);          // ✅ allowed → [1, 2, 3]
```

**Rule of thumb:** reach for `const` first; switch to `let` only when you know the value will change.

---

## 3. Type Coercion (automatic type conversion)

**Coercion** = JavaScript automatically converting a value from one type to another.
It happens most often with `+`, comparisons, and `if` conditions.

### Implicit coercion (JS does it for you)

```js
console.log("5" + 3);    // "53"   → number 3 becomes "3", then STRING join
console.log("5" - 3);    // 2      → '-' forces both to NUMBERS
console.log("5" * "2");  // 10     → both converted to numbers
console.log(1 + true);   // 2      → true becomes 1
console.log(1 + null);   // 1      → null becomes 0
```

> ⚠️ **The big gotcha:** `+` means "add" **and** "join text". If either side is a string,
> JS joins them. Every other math operator (`-`, `*`, `/`) forces numbers.

### Explicit coercion (you do it on purpose)

```js
Number("42");     // 42        string → number
String(42);       // "42"      number → string
Boolean(0);       // false     number → boolean
parseInt("10px"); // 10        reads leading number from a string
```

### `==` vs `===` (coercion's most important lesson)

| Operator | Name              | Coerces types? | Example                    |
| -------- | ----------------- | -------------- | -------------------------- |
| `==`     | loose equality    | ✅ yes         | `5 == "5"` → **`true`**    |
| `===`    | strict equality   | ❌ no          | `5 === "5"` → **`false`**  |

```js
console.log(5 == "5");    // true   → "5" coerced to 5 before comparing
console.log(5 === "5");   // false  → different types, no coercion
console.log(0 == false);  // true   → false coerced to 0
console.log(null == undefined); // true (special case)
```

> ✅ **Best practice:** always use **`===`** (strict). It avoids surprise conversions
> and makes your intent clear.

### Truthy & Falsy (coercion inside `if`)

Any value becomes a boolean in a condition. These **8** are **falsy**:

```
false   0   -0   0n   ""   null   undefined   NaN
```

Everything else is **truthy** — including `"0"`, `"false"`, `[]`, and `{}`.

```js
if ("hello") { }  // runs  — non-empty string is truthy
if (0)       { }  // skips — 0 is falsy
if ([])      { }  // runs  — an empty array is truthy!
```

---

## 4. Step-by-Step Walkthrough

```js
const firstName = "John";   // 1. const + string primitive
let age = 25;               // 2. let + number (may change)
age = age + 1;              // 3. reassign allowed → 26

const label = firstName + " is " + age;
//            string  + string  + number(26 coerced to "26")
console.log(label);         // "John is 26"

console.log(age == "26");   // true   (loose: "26" → 26)
console.log(age === "26");  // false  (strict: number ≠ string)
```

| Line | What happens                                                        |
| ---- | ------------------------------------------------------------------ |
| 1    | `const` holds a **string** that never changes                      |
| 2    | `let` holds a **number** we expect to update                       |
| 3    | Reassigning `let` is fine (would be an error with `const`)         |
| 4    | `+` with a string **coerces** `age` to `"26"` and joins the text   |
| 5    | `==` coerces → `true`; `===` keeps types → `false`                 |

---

## One-Line Summary

A **variable** (`let` = changeable, `const` = fixed, `var` = old/avoid) holds a **value**
whose **type** is either a **primitive** (string, number, boolean, null, undefined, symbol, bigint)
or an object — and **coercion** is JS auto-converting types, so prefer **`===`** to dodge surprises.
