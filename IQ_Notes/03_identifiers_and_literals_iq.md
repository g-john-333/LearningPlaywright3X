# Identifiers and Literals

A beginner's guide to two building blocks of every JavaScript statement:
the **name** you give a value (**identifier**) and the **actual value** written in code (**literal**).

## Big Picture

```
        let  price  =  99.5 ;
             ^^^^^      ^^^^
          identifier   literal
          (the name)   (the value)

   Think of a labelled box:
   ┌───────────────┐
   │  price        │  ◀── identifier = the label on the box
   │   ┌────────┐  │
   │   │ 99.5   │  │  ◀── literal = the actual value inside
   │   └────────┘  │
   └───────────────┘
```

An **identifier** is the *name* used to refer to something (a variable, function, or property).
A **literal** is a *fixed value written directly* in the code — it *is* the data.

---

## 1. Identifier vs Literal at a Glance

| Aspect        | Identifier                              | Literal                                  |
| ------------- | --------------------------------------- | ---------------------------------------- |
| **What it is**| A *name* / label                        | A *fixed value* written in code          |
| **Refers to** | Something (variable, function, property)| Nothing — it *is* the value              |
| **Example**   | `age`, `greet`, `userName`              | `25`, `"hello"`, `true`, `[1, 2, 3]`     |
| **Changes?**  | Can point to different values over time | Always the same value where written      |
| **You choose it?** | Yes — you name it                  | It's the literal data you type           |

**In one line:** the identifier is *what you call it*; the literal is *what it is*.

---

## 2. Identifiers

An **identifier** is the name you give a variable, function, class, or property.

```js
let age = 25;             // "age" is the identifier
function greet() {}       // "greet" is the identifier
const userName = "John";  // "userName" is the identifier
```

### Rules for identifiers

| Rule                                              | ✅ Valid            | ❌ Invalid          |
| ------------------------------------------------- | ------------------- | ------------------- |
| Start with a letter, `_`, or `$` (not a digit)    | `_count`, `$price`  | `2fast`             |
| Digits allowed *after* the first character        | `user1`, `item_2`   | `1user`             |
| **Case-sensitive** (`name` ≠ `Name` ≠ `NAME`)     | three different names | —                 |
| No reserved keywords (`let`, `if`, `return`…)     | `total`             | `let`, `class`      |
| No spaces or symbols like `-`, `+`, `@`           | `firstName`         | `my-var`, `my var`  |

```js
let $price = 10;    // valid
let _count = 5;     // valid
let firstName = ""; // valid (camelCase — common JS convention)

let 2fast = 1;      // ❌ starts with a digit
let my-var = 1;     // ❌ hyphen not allowed
```

---

## 3. Literals

A **literal** is a fixed value written directly in your code — not computed, not referenced.

```js
let age = 25;   // 25 is a literal (the identifier is "age")
```

### Common types of literals

| Type              | Example                          |
| ----------------- | -------------------------------- |
| Number literal    | `42`, `3.14`, `0xFF`             |
| String literal    | `"hello"`, `'world'`             |
| Boolean literal   | `true`, `false`                  |
| Null literal      | `null`                           |
| Array literal     | `[1, 2, 3]`                      |
| Object literal    | `{ name: "John", age: 25 }`      |
| Template literal  | `` `Hello ${name}` ``            |
| RegExp literal    | `/ab+c/`                         |

```js
const nums = [1, 2, 3];                  // array literal
const person = { name: "John" };         // object literal
const greeting = `Hi, ${person.name}`;   // template literal
```

---

## 4. Step-by-Step Walkthrough

Take one simple line and break it down:

```js
const userName = "John";
```

| Piece        | Kind          | Why                                                        |
| ------------ | ------------- | ---------------------------------------------------------- |
| `const`      | keyword       | Tells JS to declare a constant                             |
| `userName`   | **identifier**| The name we chose to refer to the value                    |
| `=`          | operator      | Assigns the value on the right to the name on the left     |
| `"John"`     | **literal**   | The actual string value, written directly                  |

Now a slightly bigger example:

```js
const person = { name: "John", age: 25 };
//    ^^^^^^     ^^^^  ^^^^^^   ^^^  ^^
//    identifier |     literal  |    literal
//               property       property
//               name (identifier)
```

- `person`, `name`, `age` → **identifiers** (names)
- `"John"`, `25`, and the whole `{ ... }` → **literals** (values)

---

## One-Line Summary

An **identifier** is the *name* you give something (`price`); a **literal** is the *actual value*
written straight into the code (`99.5`) — name vs value.
