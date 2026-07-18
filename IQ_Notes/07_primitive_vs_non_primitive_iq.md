# Primitive vs Non-Primitive Data Types

Every value in JavaScript is either a **primitive** (a simple, single, immutable value)
or a **non-primitive / reference type** (an object that can hold many values and grow).

## Big Picture

```
                        JAVASCRIPT VALUES
                              │
            ┌─────────────────┴──────────────────┐
            ▼                                    ▼
       PRIMITIVES (7)                    NON-PRIMITIVES (objects)
   string   number   boolean            object   { }
   null     undefined                   array    [ ]
   symbol   bigint                      function () {}
            │                                    │
     stored BY VALUE                      stored BY REFERENCE
     (the box holds the value)            (the box holds an ADDRESS
                                           pointing to the value)
```

---

## Comparison Table

| Aspect                | Primitive                              | Non-Primitive (Reference)                  |
| --------------------- | -------------------------------------- | ------------------------------------------ |
| **What it holds**     | One single value                       | A collection of values / behaviour         |
| **Types**             | string, number, boolean, null, undefined, symbol, bigint | object `{}`, array `[]`, function |
| **Mutable?**          | ❌ Immutable (can't change in place)   | ✅ Mutable (contents can change)           |
| **Stored / copied**   | **By value** (a real copy)             | **By reference** (copies the address)      |
| **Compared by**       | Value → `5 === 5` is `true`            | Reference → `{} === {}` is `false`         |
| **Memory**            | Stack (fixed size)                     | Heap (dynamic size)                        |
| **`typeof` result**   | Its own name (`"string"`, …)           | `"object"` (functions say `"function"`)    |

### The 7 primitives at a glance

| Type          | Example              | `typeof` result |
| ------------- | -------------------- | --------------- |
| **string**    | `"John"`             | `"string"`      |
| **number**    | `25`, `3.14`         | `"number"`      |
| **boolean**   | `true`, `false`      | `"boolean"`     |
| **undefined** | `let x;`             | `"undefined"`   |
| **null**      | `let x = null;`      | `"object"` ⚠️ (famous JS bug) |
| **bigint**    | `123n`               | `"bigint"`      |
| **symbol**    | `Symbol("id")`       | `"symbol"`      |

---

## 1. Copy by VALUE (primitives)

Each variable gets its **own independent copy**.

```js
let a = 10;
let b = a;      // b gets a COPY of the value 10

b = 99;         // changing b …
console.log(a); // 10  ← a is untouched ✅
console.log(b); // 99
```

## 2. Copy by REFERENCE (non-primitives)

Both variables point to the **same object in memory**.

```js
let user1 = { name: "John" };
let user2 = user1;        // user2 gets the ADDRESS, not a copy!

user2.name = "Amy";       // changing through user2 …
console.log(user1.name);  // "Amy"  ← user1 changed too! 😱
```

```
   user1 ──┐
           ├──▶  { name: "Amy" }     ← ONE object, TWO labels
   user2 ──┘
```

## 3. Comparison behaves differently

```js
// Primitives → compared by VALUE
console.log("hi" === "hi");        // true
console.log(10 === 10);            // true

// Non-primitives → compared by REFERENCE (address)
console.log({} === {});            // false — two different objects!
console.log([1, 2] === [1, 2]);    // false — different addresses

const obj = { x: 1 };
console.log(obj === obj);          // true — same address
```

## 4. Immutability of primitives

Primitive values themselves **cannot be modified** — operations always create a *new* value.

```js
let name = "john";
name.toUpperCase();     // returns a NEW string "JOHN"
console.log(name);      // "john" — original untouched

name = name.toUpperCase(); // re-assign to keep the new value
console.log(name);         // "JOHN"
```

Objects and arrays, however, **can be changed in place**:

```js
const arr = [1, 2];
arr.push(3);            // ✅ same array, mutated in place → [1, 2, 3]
```

---

## Step-by-Step Walkthrough

```js
// PRIMITIVES — independent copies
let score1 = 50;
let score2 = score1;    // 1. real copy
score2 = 100;           // 2. only score2 changes
console.log(score1);    //    50 ✅

// NON-PRIMITIVES — shared reference
const team1 = ["John", "Amy"];
const team2 = team1;    // 3. same array, second label
team2.push("Bob");      // 4. mutate through team2
console.log(team1);     //    ["John", "Amy", "Bob"] 😱 both changed

// To get a REAL copy of an object/array:
const team3 = [...team1];  // 5. spread makes a NEW array
team3.push("Zoe");
console.log(team1.length); //    3 — original safe ✅
```

| Step | What happens                                                     |
| ---- | ---------------------------------------------------------------- |
| 1–2  | Primitives copy the **value** — the two variables are independent |
| 3–4  | Objects copy the **reference** — both names mutate the same array |
| 5    | The spread operator `[...]` creates a genuinely new copy          |

---

## One-Line Summary

**Primitives** (string, number, boolean, null, undefined, symbol, bigint) are single
immutable values **copied by value**; **non-primitives** (objects, arrays, functions)
are mutable collections **copied by reference** — so two variables can point to the
same object and change it together.
