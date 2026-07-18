# Difference Between `var`, `let` and `const`

JavaScript gives you **three keywords** to declare a variable. They differ in **scope**
(where the variable lives), **re-assignment** (can the value change), and **hoisting**
(what happens before the declaration line).

## Big Picture

```
        var          →  the OLD way   (function-scoped, leaky, avoid)
        let          →  the NEW way   (block-scoped, value CAN change)
        const        →  the DEFAULT   (block-scoped, value CANNOT be reassigned)

        Rule of thumb:  const  ▶  let  ▶  (never var)
```

---

## Comparison Table

| Feature                    | `var`                          | `let`                              | `const`                            |
| -------------------------- | ------------------------------ | ---------------------------------- | ---------------------------------- |
| **Introduced**             | Original JS (ES1)              | ES6 (2015)                         | ES6 (2015)                         |
| **Scope**                  | Function-scoped                | Block-scoped `{ }`                 | Block-scoped `{ }`                 |
| **Re-assign value?**       | ✅ yes                         | ✅ yes                             | ❌ no (`TypeError`)                |
| **Re-declare same name?**  | ✅ yes (dangerous!)            | ❌ no (`SyntaxError`)              | ❌ no (`SyntaxError`)              |
| **Must initialize?**       | ❌ no                          | ❌ no                              | ✅ yes (`const x;` is an error)    |
| **Hoisting behaviour**     | Hoisted as `undefined`         | Hoisted but in **TDZ**\* — error if used early | Same as `let` (TDZ)   |
| **Attaches to `window`?**  | ✅ yes (global `var`)          | ❌ no                              | ❌ no                              |
| **Recommended?**           | ❌ avoid (legacy)              | ✅ when value will change          | ✅ default choice                  |

\* **TDZ = Temporal Dead Zone** — the variable exists but cannot be touched until its
declaration line runs.

---

## 1. Scope — the biggest difference

```js
{
  var a = 1;   // function-scoped → LEAKS out of the block
  let b = 2;   // block-scoped   → lives ONLY inside { }
  const c = 3; // block-scoped   → lives ONLY inside { }
}

console.log(a); // 1  ✅ var escaped the block (this causes bugs!)
// console.log(b); // ❌ ReferenceError: b is not defined
// console.log(c); // ❌ ReferenceError: c is not defined
```

Classic interview example — `var` in a loop:

```js
for (var i = 0; i < 3; i++) {}
console.log(i); // 3  ← 'i' is still alive after the loop! 😱

for (let j = 0; j < 3; j++) {}
// console.log(j); // ❌ ReferenceError — 'j' died with the loop ✅
```

---

## 2. Re-assignment and Re-declaration

```js
var x = 1;
var x = 2;   // ✅ allowed — silently overwrites (source of bugs)
x = 3;       // ✅ allowed

let y = 1;
// let y = 2; // ❌ SyntaxError: 'y' has already been declared
y = 3;        // ✅ re-assign is fine

const z = 1;
// const z = 2; // ❌ SyntaxError: already declared
// z = 3;       // ❌ TypeError: Assignment to constant variable
```

### `const` nuance — it locks the *variable*, not the *contents*

```js
const user = { name: "John" };
user.name = "Amy";        // ✅ allowed — changed a property, not the variable
// user = {};             // ❌ TypeError — cannot point to a NEW object

const nums = [1, 2];
nums.push(3);             // ✅ allowed → [1, 2, 3]
```

---

## 3. Hoisting

JavaScript moves declarations to the top of their scope before running the code.

```js
console.log(a); // undefined  ← var is hoisted with value 'undefined'
var a = 5;

// console.log(b); // ❌ ReferenceError — 'b' is in the Temporal Dead Zone
let b = 10;
```

`let` / `const` are also hoisted, but you **cannot use them before the declaration
line** — that gap is the **Temporal Dead Zone (TDZ)**. This fails fast and prevents bugs.

---

## Step-by-Step Walkthrough

```js
const appName = "Playwright";  // 1. never changes → const
let testCount = 0;             // 2. will change  → let

testCount = testCount + 1;     // 3. ✅ let allows re-assignment

if (true) {
  let message = "inside block";
  var leaky = "I escape!";
}

// console.log(message);       // 4. ❌ ReferenceError — let stayed in the block
console.log(leaky);            // 5. "I escape!" — var leaked out
// appName = "Cypress";        // 6. ❌ TypeError — const cannot be reassigned
```

| Line | What happens                                                       |
| ---- | ------------------------------------------------------------------ |
| 1    | `const` for a value that never changes                              |
| 2–3  | `let` for a counter we update                                       |
| 4    | `let` is block-scoped → invisible outside `{ }`                     |
| 5    | `var` is function-scoped → leaks out of the `if` block              |
| 6    | Re-assigning a `const` throws a `TypeError`                         |

---

## One-Line Summary

Use **`const` by default**, **`let` when the value must change**, and **never `var`** —
because `var` leaks out of blocks, allows silent re-declaration, and hoists as `undefined`.
