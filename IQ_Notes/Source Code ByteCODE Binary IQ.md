# Source Code vs Bytecode vs Binary Code

Using the example file: `01_hello_world.js`

```js
console.log("Hello The Testing Academy!");
```

## The Big Picture

Your code goes through layers of translation before the computer can actually run it:

```
Source Code  →  Bytecode  →  Binary (Machine) Code
 (you write)    (engine)       (CPU runs)
  human            portable        hardware
  readable         intermediate    specific
```

## Comparison Table

| Aspect          | Source Code                                  | Bytecode                                              | Binary Code (Machine Code)                        |
| --------------- | -------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------- |
| **What it is**  | Human-written instructions                   | Intermediate, compact instructions for a VM/engine   | Raw 0s and 1s the CPU executes directly           |
| **Readable by** | Humans (developers)                          | The runtime engine (e.g. V8), not really humans      | The CPU / hardware only                           |
| **Language**    | JavaScript (`.js`), Python, Java, etc.       | Engine-specific opcodes (V8 bytecode, JVM bytecode)  | CPU instruction set (x86-64, ARM64)               |
| **Portable?**   | Yes — text runs anywhere with an interpreter | Yes — same bytecode runs on any matching engine      | No — tied to a specific CPU architecture & OS     |
| **Who makes it**| You, the programmer                          | The interpreter/compiler (V8 for JS)                 | JIT compiler or an assembler, at the lowest level |
| **Speed**       | Slowest (must be translated)                 | Faster (pre-parsed, still interpreted/JIT-ed)        | Fastest (runs natively on hardware)               |
| **Our example** | `console.log("Hello The Testing Academy!");` | V8 opcodes like `LdaConstant`, `CallProperty`, etc.  | CPU instructions like `mov`, `call`, `syscall`    |
| **Stored as**   | A `.js` text file you can open and edit      | In-memory (or cached) by the engine                  | In-memory machine instructions the OS loads       |

## Walking Through `01_hello_world.js`

1. **Source Code** — What you wrote and can read:
   ```js
   console.log("Hello The Testing Academy!");
   ```
   Plain text. You edit it, save it, and share it. The CPU has no idea what this means yet.

2. **Bytecode** — When you run `node 01_hello_world.js`, Node's **V8 engine** parses your
   JavaScript and compiles it into **bytecode** — a compact set of instructions for V8's
   virtual machine. Conceptually it looks like a list of low-level operations:
   ```
   LdaGlobal        [console]
   LdaNamedProperty [log]
   LdaConstant      ["Hello The Testing Academy!"]
   CallProperty     ...
   Return
   ```
   This is portable across any machine running V8, but a human wouldn't normally write it.

3. **Binary / Machine Code** — For hot code, V8's **JIT compiler** turns that bytecode into
   actual **machine code** — pure binary that your specific CPU (x86-64, Apple Silicon ARM64,
   etc.) executes directly:
   ```
   01001000 10001001 ...
   ```
   (In assembly terms: `mov`, `call`, `syscall` instructions.) This is the fastest form and
   is what finally prints `Hello The Testing Academy!` to your terminal.

## One-Line Summary

- **Source Code** = what **you** understand.
- **Bytecode** = what the **engine (V8)** understands.
- **Binary Code** = what the **CPU** understands.

JavaScript is not "compiled to a binary" ahead of time like C — instead V8 turns your source
into bytecode and then JIT-compiles the hot parts into machine code as the program runs.
