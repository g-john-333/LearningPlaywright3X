# JavaScript Operators

An **operator** is a symbol that performs an action on values (called **operands**) —
like adding numbers, comparing values, or combining conditions.

## Big Picture

```
        5    +    3
        ▲    ▲    ▲
     operand │  operand
          OPERATOR

  Categories:
  Arithmetic  →  + - * / % **          (math)
  Assignment  →  = += -= *=            (store values)
  Comparison  →  == === != < >         (true/false answers)
  Logical     →  && || !               (combine conditions)
  String      →  +                     (join text)
  Ternary     →  ? :                   (mini if/else)
  typeof      →  typeof x              (ask the type)
```

---

## 1. Arithmetic Operators — do the math

| Operator | Name              | Example        | Result |
| -------- | ----------------- | -------------- | ------ |
| `+`      | Addition          | `5 + 3`        | `8`    |
| `-`      | Subtraction       | `5 - 3`        | `2`    |
| `*`      | Multiplication    | `5 * 3`        | `15`   |
| `/`      | Division          | `10 / 4`       | `2.5`  |
| `%`      | Modulus (remainder) | `10 % 3`     | `1`    |
| `**`     | Exponent (power)  | `2 ** 3`       | `8`    |
| `++`     | Increment (+1)    | `count++`      | adds 1 |
| `--`     | Decrement (−1)    | `count--`      | subtracts 1 |

```js
let items = 10;
console.log(items % 2);   // 0  → even number check!
items++;                  // items is now 11
console.log(items % 2);   // 1  → odd
```

> 💡 `%` is the interview favourite — `x % 2 === 0` means **even**.

### `++x` vs `x++` (prefix vs postfix)

```js
let a = 5;
console.log(a++); // 5  → returns FIRST, then increments (a is now 6)
console.log(++a); // 7  → increments FIRST, then returns
```

---

## 2. Assignment Operators — store values

| Operator | Meaning              | Example    | Same as       |
| -------- | -------------------- | ---------- | ------------- |
| `=`      | Assign               | `x = 5`    | —             |
| `+=`     | Add & assign         | `x += 3`   | `x = x + 3`   |
| `-=`     | Subtract & assign    | `x -= 3`   | `x = x - 3`   |
| `*=`     | Multiply & assign    | `x *= 3`   | `x = x * 3`   |
| `/=`     | Divide & assign      | `x /= 3`   | `x = x / 3`   |
| `%=`     | Remainder & assign   | `x %= 3`   | `x = x % 3`   |

```js
let score = 10;
score += 5;   // 15
score *= 2;   // 30
```

---

## 3. Comparison Operators — ask true/false questions

| Operator | Name                  | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Loose equal (coerces types ⚠️) | `5 == "5"`  | `true`  |
| `===`    | **Strict equal** ✅   | `5 === "5"` | `false` |
| `!=`     | Loose not-equal       | `5 != "5"`  | `false` |
| `!==`    | **Strict not-equal** ✅ | `5 !== "5"` | `true`  |
| `>`      | Greater than          | `7 > 3`     | `true`  |
| `<`      | Less than             | `7 < 3`     | `false` |
| `>=`     | Greater or equal      | `5 >= 5`    | `true`  |
| `<=`     | Less or equal         | `4 <= 3`    | `false` |

```js
console.log(5 == "5");   // true  — loose: converts "5" to 5 first
console.log(5 === "5");  // false — strict: number ≠ string
```

> ✅ **Best practice:** always use `===` and `!==` — no surprise type conversions.

---

## 4. Logical Operators — combine conditions

| Operator | Name | Returns `true` when…              | Example                    |
| -------- | ---- | --------------------------------- | -------------------------- |
| `&&`     | AND  | **both** sides are truthy         | `age > 18 && hasID`        |
| `\|\|`   | OR   | **at least one** side is truthy   | `isAdmin \|\| isOwner`     |
| `!`      | NOT  | flips the boolean                 | `!isLoggedIn`              |

```js
let age = 25, hasTicket = true;

console.log(age >= 18 && hasTicket); // true  — both conditions pass
console.log(age < 18 || hasTicket);  // true  — one side is enough
console.log(!hasTicket);             // false — flipped
```

### Short-circuit behaviour (handy trick)

```js
// && returns the FIRST falsy value (or the last value)
console.log(0 && "hello");     // 0

// || returns the FIRST truthy value → great for defaults
let username = "" || "Guest";  // "Guest"

// ?? (nullish coalescing) — default ONLY for null/undefined
let count = 0 ?? 10;           // 0   (|| would have given 10!)
```

---

## 5. String Operator — `+` joins text

```js
let first = "John";
let last = "Doe";
console.log(first + " " + last); // "John Doe"

// ⚠️ Gotcha: if EITHER side is a string, + joins instead of adds
console.log("5" + 3);   // "53"  — join!
console.log("5" - 3);   // 2     — minus always does math
```

---

## 6. Ternary Operator — a one-line if/else

```
condition  ?  valueIfTrue  :  valueIfFalse
```

```js
let age = 20;
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access);  // "Allowed"
```

---

## 7. `typeof` Operator — ask a value its type

```js
console.log(typeof "John");   // "string"
console.log(typeof 25);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);     // "object"  ⚠️ famous JS bug
console.log(typeof {});       // "object"
console.log(typeof []);       // "object"  (arrays are objects)
```

---

## Step-by-Step Walkthrough

```js
let price = 100;                       // 1. assignment (=)
price += 20;                           // 2. add & assign → 120

let isExpensive = price > 100;         // 3. comparison → true
let hasCoupon = true;

let finalCheck = isExpensive && hasCoupon;   // 4. logical AND → true

let message = finalCheck
  ? "Discount applied!"                // 5. ternary picks this branch
  : "Full price";

console.log(message);                  // "Discount applied!"
console.log(typeof price);             // 6. "number"
```

| Step | Operator used | What happens                                  |
| ---- | ------------- | --------------------------------------------- |
| 1    | `=`           | Store `100` in `price`                        |
| 2    | `+=`          | `price` becomes `120`                         |
| 3    | `>`           | `120 > 100` → `true`                          |
| 4    | `&&`          | Both truthy → `true`                          |
| 5    | `? :`         | Condition true → first value chosen           |
| 6    | `typeof`      | Reports the data type as a string             |

---

## One-Line Summary

Operators are the **verbs of JavaScript**: arithmetic (`+ - * / %`) does math,
assignment (`= +=`) stores values, comparison (`=== > <`) answers true/false
(always prefer `===`), logical (`&& || !`) combines conditions, and the ternary
(`? :`) is a one-line if/else.
