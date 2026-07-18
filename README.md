# Learning Playwright 3X

My personal learning notes and hands-on code examples as I work through JavaScript
fundamentals on the path to **test automation with [Playwright](https://playwright.dev)**.

Every concept comes in two forms:
- **Runnable `.js` examples** — small, commented scripts you can run with Node.js.
- **IQ Notes** — beginner-friendly concept explainers (tables, diagrams, summaries).

---

## Repository Structure

```
learnplaywright3x/
├── 01_chapter_javascript/      # Intro — first program
│   └── 01_hello_world.js
├── 02_chapter_javascript/      # Variables
│   └── 02_let_concept.js
├── 03_chapter_identifier/      # Identifiers & naming
│   ├── 03_identifier_rules.js
│   ├── 04_naming_conventions.js
│   └── 05_comments.js
├── 04_chapter_literal/         # Literals & data values
│   ├── 06_literal.js
│   ├── 07_exercise_null_vs_undefined.js
│   └── 08_number_literal.js
├── 05_chapter_operator/        # Data types & operators (exercises)
│   ├── 09_data_types_explaining.js
│   ├── 10_assignment_operator.js
│   ├── 11_comparison_operator.js
│   ├── 12_logical_operator.js
│   ├── 13_confusing_comparison.js
│   ├── 14_string_operator.js
│   ├── 15_ternary_operator.js
│   ├── 16_IQ1.js … 20_IQ5.js   # Ternary operator IQ exercises
│   ├── 21_nested_ternary_operator.js
│   ├── 22_NT_IQ1.js
│   ├── 23_NT_IQ2.js            # Nested ternary IQ exercises
│   ├── 24_type_operator.js
│   ├── 25_pre_post_increment.js
│   ├── 26_increment_IQ.js
│   ├── 27_increment_part2.js
│   ├── 28_decrement.js
│   └── 29_null_coalescing.js
└── IQ_Notes/                   # Concept explainer notes (Markdown)
    ├── 00_vs_code_shortcuts.md
    ├── 01_javascript_introduction_iq.md
    ├── 02_source_code_bytecode_binary_iq.md
    ├── 03_identifiers_and_literals_iq.md
    ├── 04_null_vs_undefined_iq.md
    ├── 05_data_types_and_variables_iq.md
    ├── 06_var_let_const_iq.md
    ├── 07_primitive_vs_non_primitive_iq.md
    ├── 08_operators_iq.md
    └── README.md               # Prompt template for generating IQ notes
```

---

## Topics Covered So Far

| # | Topic | Code | IQ Note |
| - | ----- | ---- | ------- |
| 1 | JavaScript introduction & setup | `01_hello_world.js` | [intro](IQ_Notes/01_javascript_introduction_iq.md) |
| 2 | `let` and variables | `02_let_concept.js` | — |
| 3 | Identifier rules | `03_identifier_rules.js` | [identifiers & literals](IQ_Notes/03_identifiers_and_literals_iq.md) |
| 4 | Naming conventions (camel, Pascal, snake…) | `04_naming_conventions.js` | — |
| 5 | Comments | `05_comments.js` | — |
| 6 | Literals (number, string, boolean, array…) | `06_literal.js` | [identifiers & literals](IQ_Notes/03_identifiers_and_literals_iq.md) |
| 7 | Null vs undefined (exercise) | `07_exercise_null_vs_undefined.js` | [null vs undefined](IQ_Notes/04_null_vs_undefined_iq.md) |
| 8 | Number literals | `08_number_literal.js` | — |
| 9 | Data types — primitive vs non-primitive (exercise) | `09_data_types_explaining.js` | [primitive vs non-primitive](IQ_Notes/07_primitive_vs_non_primitive_iq.md) |
| 10 | Assignment operators (exercise) | `10_assignment_operator.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 11 | Comparison operators (exercise) | `11_comparison_operator.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 12 | Logical operators (exercise) | `12_logical_operator.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 13 | Confusing comparisons — coercion traps (exercise) | `13_confusing_comparison.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 14 | String operators — concatenation with `+` and `+=` | `14_string_operator.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 15 | Ternary operator | `15_ternary_operator.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 16 | Ternary operator IQ exercises (test-automation flavored) | `16_IQ1.js` … `20_IQ5.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 17 | Nested ternary operator | `21_nested_ternary_operator.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 18 | Nested ternary IQ exercises | `22_NT_IQ1.js`, `23_NT_IQ2.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 19 | `typeof` type operator | `24_type_operator.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 20 | Pre/post increment (`++x`, `x++`) | `25_pre_post_increment.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 21 | Increment IQ exercises | `26_increment_IQ.js`, `27_increment_part2.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 22 | Pre/post decrement (`--x`, `x--`) | `28_decrement.js` | [operators](IQ_Notes/08_operators_iq.md) |
| 23 | Null coalescing operator (`??`) | `29_null_coalescing.js` | [operators](IQ_Notes/08_operators_iq.md) |
| — | Data types & variables | — | [note](IQ_Notes/05_data_types_and_variables_iq.md) |
| — | `var` vs `let` vs `const` | — | [note](IQ_Notes/06_var_let_const_iq.md) |
| — | Source code vs bytecode vs binary | — | [note](IQ_Notes/02_source_code_bytecode_binary_iq.md) |
| — | VS Code shortcuts (Mac & Windows) | — | [cheat sheet](IQ_Notes/00_vs_code_shortcuts.md) |

---

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) installed.

```bash
# check Node is available
node -v

# run any example file
node 01_chapter_javascript/01_hello_world.js
node 04_chapter_literal/06_literal.js
```

Each `.js` file is self-contained — run it and read the inline comments to follow along.

---

## Naming Convention

All files and folders use **`snake_case`** with a numeric prefix for ordering:

```
NN_lowercase_words_separated_by_underscores.ext
```

Example: `04_chapter_literal/07_exercise_null_vs_undefined.js`
(`README.md` is the one intentional exception — kept uppercase by convention.)

---

## IQ Notes

The `IQ_Notes/` folder holds concept explainers written for a first-time learner —
each with a big-picture intro, comparison tables, a worked example, and a one-line summary.
See [IQ_Notes/README.md](IQ_Notes/README.md) for the prompt template used to generate them.

---

*A work-in-progress learning repo — more chapters added as I go.* 🚀
