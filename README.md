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
└── IQ_Notes/                   # Concept explainer notes (Markdown)
    ├── 00_vs_code_shortcuts.md
    ├── 01_javascript_introduction_iq.md
    ├── 02_source_code_bytecode_binary_iq.md
    ├── 03_identifiers_and_literals_iq.md
    ├── 04_null_vs_undefined_iq.md
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
