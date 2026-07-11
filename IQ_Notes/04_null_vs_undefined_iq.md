# Null vs Undefined (and Similar "Empty" Values)

A beginner's guide to JavaScript's "nothing" values — **`undefined`** (JS forgot to give it a value)
vs **`null`** (you deliberately set it to empty) — plus the other look-alikes: `NaN`, `""`, and falsy values.

## Big Picture

```
   undefined  ──▶  "JS hasn't given this a value yet"   (default / automatic)
   null       ──▶  "I, the developer, set this to empty" (intentional / manual)

        let a;            // a is undefined  (declared, never assigned)
        let b = null;     // b is null       (assigned 'empty' on purpose)
```

Both mean "no real value here," but the *reason* differs: **`undefined` is the system's default;
`null` is your deliberate choice.**

---

## 1. Null vs Undefined at a Glance

| Aspect              | `undefined`                                | `null`                                   |
| ------------------- | ------------------------------------------ | ---------------------------------------- |
| **Meaning**         | Value not assigned yet (missing)           | Intentional "empty" / "no value"         |
| **Set by**          | JavaScript, automatically                  | The developer, manually                  |
| **`typeof` result** | `"undefined"`                              | `"object"` (a famous, long-standing bug) |
| **Common source**   | Uninitialized variable, missing param, missing property, function with no `return` | You explicitly write `= null` |
| **`==` (loose)**    | `null == undefined` → **`true`**           | `null == undefined` → **`true`**         |
| **`===` (strict)**  | `null === undefined` → **`false`**         | `null === undefined` → **`false`**       |

**In one line:** `undefined` = *"nobody set it"*; `null` = *"I set it to nothing."*

---

## 2. Where `undefined` Shows Up

`undefined` appears automatically whenever a value is expected but none exists.

```js
let a;
console.log(a);            // undefined  → declared but not assigned

const user = { name: "John" };
console.log(user.age);     // undefined  → property doesn't exist

function greet(name) {
  console.log(name);       // undefined  → argument not passed
}
greet();

function noReturn() {}
console.log(noReturn());   // undefined  → function returns nothing
```

---

## 3. Where `null` Shows Up

`null` is something **you** write on purpose to say "this is intentionally empty."

```js
let selectedUser = null;   // no user chosen yet — on purpose

// later, when a user is picked:
selectedUser = { name: "John" };

// reset it back to "empty":
selectedUser = null;
```

Use `null` when you want to clearly signal *"empty on purpose,"* e.g. clearing a value or
representing "not found yet."

---

## 4. Comparing Them (the tricky part)

```js
null == undefined    // true   → loose equality treats them as "both empty"
null === undefined   // false  → strict: different types, so not equal

typeof undefined     // "undefined"
typeof null          // "object"   ← historical bug, but you must remember it

Boolean(undefined)   // false  → both are "falsy"
Boolean(null)        // false
```

> ⚠️ **Common confusion:** `typeof null` returns `"object"`, **not** `"null"`. This is a
> well-known bug kept for backward compatibility. To check for `null`, compare directly:
> `value === null`.

---

## 5. Similar "Empty / Nothing" Values

These are often confused with `null`/`undefined` but mean different things:

| Value        | Type        | Meaning                                       | Falsy? |
| ------------ | ----------- | --------------------------------------------- | ------ |
| `undefined`  | `undefined` | Value never assigned                          | ✅ yes |
| `null`       | `object`*   | Intentionally empty                           | ✅ yes |
| `NaN`        | `number`    | "Not a Number" — a failed math/number result  | ✅ yes |
| `""`         | `string`    | An empty string (a real, valid string)        | ✅ yes |
| `0`          | `number`    | The number zero (a real value)                | ✅ yes |
| `false`      | `boolean`   | The boolean false                             | ✅ yes |

\* `typeof null` is `"object"` due to the historical bug.

```js
typeof NaN          // "number"  → yes, NaN is technically a number
NaN === NaN         // false     → NaN is never equal to anything, even itself!
Number.isNaN(NaN)   // true      → the correct way to check for NaN

"" === null         // false     → empty string is NOT null
"".length           // 0         → it's still a valid string
```

### Falsy values (worth memorising)

These **8** values are all treated as `false` in conditions:

```
false   0   -0   0n   ""   null   undefined   NaN
```

Everything else is **truthy** (including `"0"`, `"false"`, `[]`, and `{}`).

```js
if (undefined) { }   // skipped — falsy
if (null)      { }   // skipped — falsy
if ("")        { }   // skipped — falsy
if ([])        { }   // RUNS   — an empty array is truthy!
```

---

## 6. Quick Decision Guide

| You want to…                                | Use…              |
| ------------------------------------------- | ----------------- |
| Let JS leave a variable "not set"           | `undefined` (just declare it) |
| Say "this is empty **on purpose**"          | `null`            |
| Check "is it either null or undefined?"     | `value == null`   (loose — matches both) |
| Check "is it exactly undefined?"            | `value === undefined` |
| Check "is it exactly null?"                 | `value === null`  |
| Check for a failed number                   | `Number.isNaN(value)` |

---

## One-Line Summary

**`undefined`** = JavaScript hasn't given it a value; **`null`** = you set it to empty on purpose —
both are "falsy" and loosely equal (`==`) but not strictly equal (`===`); watch out for
`typeof null === "object"` and `NaN !== NaN`.
