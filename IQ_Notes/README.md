# IQ Notes — Concept Explainer Prompt

Use this prompt whenever I ask a question. Follow it to produce a study note.

---

## Prompt

> I will ask you a **question about a concept** (optionally with an example file path).
>
> When I do, create a new `.md` file inside the **`IQ_Notes`** folder that explains the
> concept clearly, following these rules:
>
> 1. **Filename**: short, descriptive, based on my question, ending in `IQ.md`
>    (e.g. `Source Code ByteCODE Binary IQ.md`).
> 2. **If I give an example file**, read it and use its real contents throughout the
>    explanation.
> 3. **Structure the note like this:**
>    - A clear `#` title.
>    - A short "Big Picture" intro (1–3 sentences, or a small ASCII diagram if it helps).
>    - A **comparison / summary table** covering the key aspects.
>    - A **step-by-step walkthrough** using the example.
>    - A **one-line summary** at the end that a beginner can remember.
> 4. Keep it **simple, practical, and beginner-friendly** — explain like I'm learning it
>    for the first time.
> 5. Use tables, code blocks, and diagrams wherever they make the idea clearer.
>
> After creating the file, give me a **short recap** in the chat and tell me the saved path.

---

## Example usage

- *"Explain the difference between source code, bytecode and binary code, with this example `01_hello_world.js`"*
- *"Explain synchronous vs asynchronous JavaScript"*
- *"Explain what a Promise is with an example"*
