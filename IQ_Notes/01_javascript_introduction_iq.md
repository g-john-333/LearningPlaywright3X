# JavaScript Introduction

A beginner's map of **what JavaScript is**, **where it came from**, **why testers use it**,
and **how to set it up**.

## Big Picture

```
   JavaScript = the language that makes the web interactive
   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
   │  Browsers    │   │   Servers    │   │  Test Tools  │
   │  (Chrome…)   │   │  (Node.js)   │   │ (Playwright) │
   └──────────────┘   └──────────────┘   └──────────────┘
        one language, running almost everywhere
```

JavaScript started as a small scripting language for web pages in 1995. Today it runs in
browsers, on servers (via Node.js), and powers modern test automation tools like Playwright.

---

## 1. JavaScript Introduction

| Aspect            | Detail                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| **What it is**    | A high-level, interpreted programming language                        |
| **Main job**      | Make web pages interactive (clicks, forms, animations, live data)     |
| **Runs where**    | Every browser + servers (Node.js) + tools, mobile, desktop            |
| **Typing**        | Dynamically typed (no need to declare `int`, `string`, etc.)          |
| **Style**         | Supports procedural, object-oriented, and functional programming      |
| **Standard name** | **ECMAScript** (the official spec JS follows)                         |

**In one line:** JavaScript is the language browsers understand natively — no plugin needed.

---

## 2. History of JS

| Year      | Milestone                                                                 |
| --------- | ------------------------------------------------------------------------- |
| **1995**  | Created by **Brendan Eich** at Netscape in ~10 days (called "Mocha")       |
| **1995**  | Renamed **LiveScript**, then **JavaScript** (marketing tie-in to Java)     |
| **1997**  | Standardized as **ECMAScript (ES1)** so all browsers behave the same       |
| **2009**  | **Node.js** launched — JS could now run on servers, outside the browser    |
| **2015**  | **ES6 (ES2015)** — huge update: `let`/`const`, arrow functions, classes, promises |
| **Now**   | Yearly releases (ES2016, ES2017…); most popular language for web + testing |

> ⚠️ **Common confusion:** JavaScript and Java are **not** related — the name was a
> marketing decision. They are completely different languages.

---

## 3. Role in Testing

JavaScript (with Node.js) is a top choice for **test automation**. Here's why:

| Reason                     | What it means for a tester                                         |
| -------------------------- | ------------------------------------------------------------------ |
| **Same language as the app** | Web apps are built in JS — testing in JS keeps skills aligned    |
| **Great tooling**          | **Playwright**, Cypress, Jest, Mocha are all JS-based              |
| **Fast & async-friendly**  | Web actions (clicks, network) are async — JS handles this natively |
| **Huge ecosystem**         | `npm` gives thousands of ready-made libraries                      |
| **Cross-browser**          | Playwright drives Chrome, Firefox, and WebKit with one JS API      |

**Example — a Playwright test is just JavaScript:**
```js
const { test, expect } = require('@playwright/test');

test('page has correct title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
```
You write plain JS, and Playwright automates a real browser to verify the app.

---

## 4. Development Setup

Everything you need to start writing and running JavaScript for testing:

| Step | Tool                | Why you need it                                        | Command / Check              |
| ---- | ------------------- | ------------------------------------------------------ | ---------------------------- |
| 1    | **Node.js**         | Runs JS outside the browser (needed for Playwright)    | `node -v`                    |
| 2    | **npm**             | Package manager (comes with Node) to install libraries | `npm -v`                     |
| 3    | **Code editor**     | VS Code — write, run, and debug code                   | Download from code.visualstudio.com |
| 4    | **Playwright**      | The test automation framework                          | `npm init playwright@latest` |
| 5    | **Run a file**      | Execute your JS                                        | `node 01_hello_world.js`     |

**Quick start flow:**
```
1. Install Node.js  ──▶  2. Open VS Code  ──▶  3. Create a .js file
        │                                              │
        └──────────▶  4. Run: node yourfile.js  ◀──────┘
```

Example from this course (`chapter_01_Basics/01_hello_world.js`):
```js
console.log("Hello The Testing Academy!");
```
Run it with `node 01_hello_world.js` and it prints the message to your terminal — proof your
setup works. ✅

---

## One-Line Summary

**JavaScript** is the language of the web (born 1995, standardized as ECMAScript); with
**Node.js** it also runs your **Playwright tests** — so install Node + VS Code, and you're
ready to automate.
