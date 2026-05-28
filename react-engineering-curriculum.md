# React Engineering Curriculum
### From JS Proficient to Production-Grade Engineer

---

> **A note on the prompt you submitted:** It was good. Structure was clear, intent was serious. I removed a few things: the self-reward instruction (irrelevant to output quality), the redundant "do not oversimplify" repeats, and the vague "use diagrams when useful" placeholder. I also added explicit checkpointing rules, a "why React exists" framing at the start of Stage 1 that most curricula skip entirely, and tightened the stage format so it stays lean when depth isn't needed yet and expands when it is. The curriculum order is preserved. One addition: a Stage 0 (Environment & Tooling) before React Foundations, because skipping it creates bad habits on day one.

---

## Curriculum Roadmap

| Stage | Title | Key Unlock |
|-------|-------|------------|
| 0 | Environment & Tooling | Vite, npm, project structure, VS Code config |
| 1 | React Foundations | Why React exists, JSX, the render cycle |
| 2 | Components & Props | Component thinking, data flow, prop contracts |
| 3 | State & Events | useState, event handling, re-render mechanics |
| 4 | Conditional Rendering | Logical operators, ternaries, guard clauses |
| 5 | Lists & Dynamic UI | map(), keys, derived state |
| 6 | Forms & Controlled Inputs | Controlled vs uncontrolled, validation patterns |
| 7 | Core Hooks | useRef, useCallback, useMemo, custom hooks |
| 8 | useEffect Deep Dive | Side effects, cleanup, dependency array mechanics |
| 9 | Component Architecture | Composition, lifting state, prop drilling problems |
| 10 | Styling Systems | CSS Modules, Tailwind, styled-components tradeoffs |
| 11 | API Fetching | fetch, axios, loading/error/success state pattern |
| 12 | Async Patterns | Promises, async/await, race conditions, AbortController |
| 13 | React Router | Client-side routing, nested routes, protected routes |
| 14 | Advanced Hooks | useReducer, useId, useDeferredValue, useTransition |
| 15 | Context API | Global state without libraries, when NOT to use it |
| 16 | State Management | Zustand (primary), Redux Toolkit (awareness) |
| 17 | Performance Optimization | Profiler, memoization, lazy loading, code splitting |
| 18 | Authentication | JWT, session patterns, protecting routes, token refresh |
| 19 | TypeScript with React | Types, interfaces, generics, typed hooks |
| 20 | Testing | Vitest, React Testing Library, what to test vs skip |
| 21 | Advanced Patterns | Compound components, render props, HOCs, portals |
| 22 | Next.js | App Router, SSR, SSG, RSC, API routes |
| 23 | Full Production Projects | 2 capstone builds with full engineering constraints |
| 24 | Deployment & Professional Workflow | CI/CD, Vercel, env vars, PR workflow, code review |

**Checkpoint rule:** You do not advance stages by reading. You advance by completing the exercises, passing the interview questions verbally (write answers, then compare), and building the mini project without referencing the stage material. If you can't do that, you haven't learned it.

---

---

# Stage 0 - Environment & Tooling

## Objective

Before writing a single line of React, you need a professional-grade development environment and a real understanding of what the toolchain is doing. Most beginners skip this and spend weeks confused by errors that are actually tooling problems, not React problems.

This stage covers: Vite, npm, project structure, ES Modules, and VS Code configuration.

---

## Core Concepts

- What npm is and what it actually does
- The difference between `dependencies` and `devDependencies`
- What a bundler does and why you need one
- What Vite is and why it replaced Create React App
- How `package.json` and `package-lock.json` relate
- The `node_modules` directory
- ES Module syntax (`import`/`export`)
- VS Code extensions for React development
- Folder structure conventions

---

## Deep Explanations

### What npm Actually Does

npm is a package registry and a CLI tool. When you run `npm install react`, two things happen:

1. npm downloads the `react` package (and its dependencies) from the registry into `node_modules/`
2. It records the exact installed version in `package-lock.json`

`package.json` describes *what you want*. `package-lock.json` describes *what you actually have*. Never edit `package-lock.json` manually. Always commit it.

`dependencies` are packages your app needs to run in production. `devDependencies` are packages only needed during development (linters, bundlers, test runners). Vite goes in `devDependencies`. React goes in `dependencies`.

### Why You Need a Bundler

Browsers cannot natively resolve bare module imports like `import React from 'react'`. They don't know where `react` lives on your filesystem. A bundler (Vite, Webpack, esbuild) resolves these imports, transforms JSX into valid JavaScript, and packages everything into files the browser can actually load.

Vite does this differently from older bundlers. During development, it serves files using native ES Modules and only transforms what the browser requests. This is why Vite's dev server starts in under a second regardless of project size. For production builds, Vite uses Rollup internally to produce optimized, minified bundles.

Create React App is deprecated as of 2023. Do not use it. Every tutorial or StackOverflow answer that references `create-react-app` is outdated.

### Scaffold a Vite + React Project

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

This gives you a running React app at `localhost:5173`.

Examine what was generated before touching anything:

```
my-app/
├── node_modules/        # Installed packages - never edit, never commit
├── public/              # Static assets served as-is (favicon, etc.)
├── src/
│   ├── assets/          # Images, fonts used in components
│   ├── App.jsx          # Root component
│   ├── App.css          # App-level styles
│   ├── main.jsx         # Entry point - mounts React into the DOM
│   └── index.css        # Global styles
├── index.html           # The single HTML file. React mounts here.
├── package.json
├── package-lock.json
└── vite.config.js
```

Open `main.jsx`. This is the most important file to understand first:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

What this does, line by line:

1. Imports `StrictMode` - a development-only wrapper that activates additional warnings and intentionally double-invokes certain functions to expose side effect bugs
2. Imports `createRoot` from `react-dom/client` - the React 18 API for mounting
3. Finds the `<div id="root">` in `index.html`
4. Mounts the `App` component into it

React does not *replace* your HTML file. It *takes over* a single DOM node and manages everything inside it. The rest of the page (head, meta tags, etc.) remains standard HTML.

### ES Module Syntax

You already know this from JavaScript, but clarifying a few points:

```js
// Named export - you must use the exact name
export const add = (a, b) => a + b;
import { add } from './math.js';

// Default export - you can name it anything on import
export default function App() {}
import App from './App.jsx';        // works
import MyApp from './App.jsx';      // also works, same thing

// You can mix both in one file, but default exports should be
// reserved for the primary thing a module exports
```

In React, every component file will have one default export (the component itself) and occasionally named exports for related utilities or types.

### VS Code Setup

Install these extensions. Not optional:

- **ESLint** - catches errors before runtime
- **Prettier** - auto-formats on save (set `editor.formatOnSave: true`)
- **ES7+ React/Redux/React-Native snippets** - shortcut: `rafce` generates a component
- **Auto Rename Tag** - renames matching JSX tags simultaneously
- **GitLens** - inline git blame

Create a `.prettierrc` in your project root:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

Create a `.eslintrc.cjs` (Vite generates this, but verify):

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
}
```

The `react-hooks/recommended` ruleset will catch broken `useEffect` dependency arrays and other hook misuse automatically. This saves hours of debugging.

---

## Professional Folder Structure

The Vite default is fine for learning, but production projects use a feature-based or domain-based structure. You will learn to build toward this from day one:

```
src/
├── components/          # Shared, reusable components
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   └── index.js     # Re-exports Button for cleaner imports
├── features/            # Feature-specific components + logic
│   └── auth/
│       ├── LoginForm.jsx
│       └── useAuth.js
├── hooks/               # Custom hooks used across features
├── pages/               # Route-level components
├── services/            # API calls
├── utils/               # Pure utility functions
├── context/             # React context definitions
└── App.jsx
```

You won't need all of this in Stage 0. But you will structure every project you build this way from Stage 3 onward. Starting with a flat structure and "reorganizing later" is a real-world mistake that costs days.

---

## Common Mistakes

**Running React without a bundler.** Some tutorials still show `<script src="react.js">` CDN imports. This is only valid for demos. Never use it for real work.

**Editing `node_modules`.** These files get overwritten on the next `npm install`. All changes are lost.

**Committing `node_modules`** to git. Add `node_modules/` to `.gitignore` immediately.

**Using `npm install --save-dev react`**. React belongs in `dependencies`, not `devDependencies`. It runs in production.

**Ignoring Prettier/ESLint errors.** These tools exist because humans are inconsistent. Respect them from day one or you will build habits that cause code review rejections.

---

## Best Practices

- Always run `npm install` after cloning a repo - never commit `node_modules`
- Use `npm run dev` for development, `npm run build` for production output
- `npm run preview` serves the production build locally - use it before deploying
- Keep `package.json` scripts clean and documented
- Pin major versions when stability matters: `"react": "^18.0.0"` (minor patches OK, major versions not auto-updated)

---

## Exercises

**Exercise 1:** Scaffold a fresh Vite + React project. Delete everything inside `src/`. Recreate `main.jsx` from memory. Get the dev server running with a blank white page and no console errors.

**Exercise 2:** Add a `.prettierrc` and `.gitignore`. Confirm `node_modules/` is excluded. Initialize a git repo and make your first commit.

**Exercise 3:** Open `package.json`. Identify which packages are dependencies vs devDependencies. Explain in writing why `vite` is a devDependency but `react` is not.

**Exercise 4:** In `main.jsx`, temporarily remove `StrictMode`. Reload. Add it back. Research what StrictMode actually does in React 18 specifically (double-invocation behavior). Write a 3-sentence summary.

---

## Interview Questions

1. What does a bundler do, and why can't a browser handle bare module imports natively?
2. What is the difference between `package.json` and `package-lock.json`?
3. Why was Create React App deprecated? What replaced it and why?
4. What does `StrictMode` do in React 18? Is it a production feature?
5. You clone a repo and run `npm run dev`. You get `Module not found` errors. What is the first command you run and why?

---

## Mastery Checklist

Before moving to Stage 1, you should be able to:

- [ ] Scaffold a Vite + React project from scratch without looking it up
- [ ] Explain what every file in the default Vite output does
- [ ] Explain the difference between dependencies and devDependencies with examples
- [ ] Explain what Vite does differently from Webpack at a high level
- [ ] Recite what `main.jsx` does line by line
- [ ] Have ESLint and Prettier configured and working on save
- [ ] Know what StrictMode does in React 18

---

---

# Stage 1 - React Foundations

## Objective

Before you write components, you need to understand *why React exists* and *how it works mechanically*. Developers who skip this spend months confused about why their UI does or doesn't update. This stage builds the mental model that everything else depends on.

Topics: the DOM problem React solves, the Virtual DOM, reconciliation, JSX compilation, the render cycle, and what "reactive" actually means.

---

## Core Concepts

- The problem with imperative DOM manipulation at scale
- What the Virtual DOM is and what it is not
- Reconciliation and the diffing algorithm (conceptual)
- What JSX is and what it compiles to
- `React.createElement` - the underlying call
- The render cycle: when does React re-render?
- What "declarative UI" means vs imperative
- Functional components as pure functions of state

---

## Deep Explanations

### The Problem React Solves

Before React, building interactive UIs meant writing code like this:

```js
// Imperative: you describe HOW to change the UI
const button = document.getElementById('likeBtn');
const count = document.getElementById('count');
let likes = 0;

button.addEventListener('click', () => {
  likes++;
  count.textContent = likes;
  if (likes > 10) {
    button.classList.add('popular');
    button.textContent = 'Trending!';
  }
});
```

This works for a button. It does not work for a dashboard with 50 interconnected pieces of state. The problem: **your code describes mutations to the DOM, and mutations accumulate into states that are hard to reason about.** When something breaks, you have to trace every mutation that could have led to the current state.

React's answer: **describe what the UI should look like given the current state, and let React handle the mutations.**

```jsx
// Declarative: you describe WHAT the UI should look like
function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      className={likes > 10 ? 'popular' : ''}
      onClick={() => setLikes(likes + 1)}
    >
      {likes > 10 ? 'Trending!' : `Likes: ${likes}`}
    </button>
  );
}
```

When `likes` changes, you don't touch the DOM. You update state, and React figures out what the DOM should look like now, then makes the minimum required changes.

This is what "declarative" means in practice: you declare the output, not the steps.

### The Virtual DOM

The Virtual DOM is not magic. It is a JavaScript object tree that mirrors the structure of the real DOM.

When your component returns JSX, React builds a Virtual DOM tree from it. When state changes, React builds a *new* Virtual DOM tree. React then *diffs* the two trees (the previous and the new) to find the minimum set of real DOM operations needed to bring the actual DOM in sync.

**What the Virtual DOM is not:** It is not faster than the real DOM in every case. Directly manipulating a single DOM node is faster than going through the Virtual DOM. The advantage is at scale and with complex state - React's diffing is more efficient than hand-written mutation code for large UIs.

**Reconciliation** is the process of comparing the old Virtual DOM tree with the new one and applying the differences. React's reconciler makes assumptions to make this O(n) instead of O(n^3):

1. Elements of different types produce different trees (React won't try to reuse them)
2. Keys let React identify which list items changed, were added, or were removed

You will feel the consequences of both rules before this curriculum is done.

### JSX Compilation

JSX is not HTML. It is syntactic sugar that compiles to JavaScript function calls.

This JSX:

```jsx
const element = <h1 className="title">Hello, World</h1>;
```

Compiles to this (React 17+ with the new JSX transform):

```js
import { jsx as _jsx } from 'react/jsx-runtime';
const element = _jsx('h1', { className: 'title', children: 'Hello, World' });
```

Before React 17, it compiled to `React.createElement('h1', { className: 'title' }, 'Hello, World')`, which is why old codebases have `import React from 'react'` at the top of every file even when React isn't referenced directly. With the new JSX transform (default in Vite), you no longer need that import.

Every JSX expression returns a **React element** - a plain JavaScript object describing what should be rendered. React elements are not DOM nodes. They are descriptions.

```js
// What a React element looks like internally
{
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello, World'
  },
  key: null,
  ref: null
}
```

**Implication:** Since JSX compiles to function calls, you can only return one root element from a component. `return <h1/><p/>` is a syntax error because you can't return two values from a function call. Use a wrapper element or a Fragment (`<>...</>`) to group multiple elements without adding a DOM node.

### The Render Cycle

A React component is a function. React calls that function to get back a description of the UI (JSX). This is called **rendering**.

React renders a component when:

1. The component is first mounted (appears in the tree for the first time)
2. Its state changes (via a `setState` call)
3. Its parent re-renders (and passes new props, or even the same props - by default)
4. A context value it subscribes to changes

**Rendering is not the same as DOM updates.** React can render (call your function) and then decide the output is identical to the previous render, resulting in zero DOM changes. This distinction matters for performance optimization later.

**What happens during a render:**

1. React calls your component function
2. Your function runs top to bottom
3. It returns JSX (which is the new Virtual DOM description)
4. React diffs this against the previous Virtual DOM
5. React commits only the changed parts to the real DOM

**StrictMode double-renders:** In development with StrictMode, React intentionally calls your component function twice per render. This is to surface side effects that don't survive multiple calls. If your component behaves differently on the second call, you have a bug. This does not happen in production.

### Your First Component

```jsx
// src/App.jsx

function App() {
  return (
    <div>
      <h1>Hello, React</h1>
      <p>This is a React component.</p>
    </div>
  );
}

export default App;
```

Rules visible here:

- Component names start with a capital letter (React uses this to distinguish between HTML elements and components)
- A component must return a single root element
- JSX uses `className` instead of `class` (because `class` is a reserved word in JavaScript)
- Self-closing tags require the slash: `<img />` not `<img>`

### JSX Expressions

Any valid JavaScript expression can be embedded in JSX with `{}`:

```jsx
function Greeting() {
  const name = 'Alex';
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';

  return (
    <div>
      <h1>Good {timeOfDay}, {name}!</h1>
      <p>2 + 2 = {2 + 2}</p>
      <p>Array: {[1, 2, 3].join(', ')}</p>
    </div>
  );
}
```

**Expressions only** - you cannot put statements inside `{}`. No `if`, no `for`, no `let`. If you need conditional logic, compute it before the return or use a ternary inside JSX.

---

## Mental Models

**Think of a component as a function that maps state to UI.** Given the same input (props + state), it always returns the same output (JSX). This is what "pure" means in the React context. If your component produces different output for the same input, something is wrong.

**The Virtual DOM is a staging area.** React builds the new UI description in JavaScript (cheap), diffs it against the previous one (cheap), and then applies only the delta to the real DOM (expensive). The expensive operation happens as rarely as possible.

**JSX is JavaScript.** Every time you feel unsure about JSX syntax, ask yourself: "what would this compile to?" If the compiled version doesn't make sense as JavaScript, the JSX is wrong.

---

## Common Mistakes

**Mutating the DOM directly in a React app.**

```jsx
// WRONG - bypasses React's control entirely
document.getElementById('title').textContent = 'New Title';

// Correct - let React handle it
const [title, setTitle] = useState('Old Title');
return <h1>{title}</h1>;
```

**Returning multiple root elements.**

```jsx
// WRONG - syntax error
return (
  <h1>Title</h1>
  <p>Paragraph</p>
);

// Correct - use Fragment
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```

**Using lowercase for component names.**

```jsx
// WRONG - React treats this as an HTML element, not a component
function myButton() { return <button>Click</button>; }
return <myButton />;   // renders nothing useful

// Correct
function MyButton() { return <button>Click</button>; }
return <MyButton />;
```

**Treating JSX as HTML.** JSX is closer to JavaScript than HTML. Attributes use camelCase (`onClick`, `onChange`, `htmlFor`, `className`). Inline styles are objects, not strings: `style={{ color: 'red' }}` not `style="color: red"`.

---

## Best Practices

- One component per file, filename matches component name
- `PascalCase` for component names, `camelCase` for variables and functions
- Use Fragments instead of unnecessary wrapper `<div>`s - every extra DOM node costs
- Keep components short. If a component return statement is hard to read in one screen, it needs to be broken up
- Compute derived values before the return statement, not inside JSX

---

## Exercises

**Exercise 1:** Write a component called `Profile` that renders your name, a job title, and a short bio. No state, no props. Just JSX structure. Use semantic HTML elements (`<article>`, `<h1>`, `<p>`).

**Exercise 2:** Write a component called `MathFacts` that displays 5 mathematical computations using JSX expressions. All computation must happen inside `{}`, not hardcoded strings.

**Exercise 3:** Write a component called `TimeGreeting` that renders a greeting based on the current hour (morning/afternoon/evening). The logic must live in a variable computed before the return, not inside JSX.

**Exercise 4:** Write a component with a fragment as the root. It should render an `<h2>` and an unordered list with 3 items. Inspect the DOM in browser devtools and confirm no wrapper element was added.

**Exercise 5 (harder):** Open your browser devtools console and type:

```js
React.createElement('div', { className: 'box' }, 'Hello')
```

Examine the object it returns. Map every property to its meaning. Then write the equivalent JSX.

---

## Mini Project - Static Profile Card

Build a `ProfileCard` component (no state, no interactivity yet).

**Requirements:**

- Avatar (use a placeholder image from `https://i.pravatar.cc/150`)
- Name
- Role/title
- Location
- Short bio (2 sentences)
- A list of 3 skills
- Styled to look like an actual card (you can use inline styles or a CSS file for now)

**Constraints:**

- No copy-paste from tutorials
- Semantic HTML only (no `<div>` soup)
- File must be its own component: `src/components/ProfileCard/ProfileCard.jsx`

---

## Stretch Challenges

1. Create a `BusinessCard` component that accepts no props but renders two different profiles side-by-side using CSS flexbox. The data must be hardcoded inside the component.

2. Find the compiled output of your JSX. Run `npm run build` and inspect the output in `dist/assets/`. Can you identify your component's output in the minified code?

3. Research React Fiber. Write a 5-sentence explanation of what it is and why it was introduced (replacing the old Stack reconciler). You will not fully understand it yet - that is fine.

---

## Interview Questions

1. What problem does React's Virtual DOM solve? When is it NOT more performant than direct DOM manipulation?
2. What does JSX compile to? Write the `React.createElement` equivalent for `<Button variant="primary">Click me</Button>`.
3. Why must React component names start with a capital letter?
4. What is the difference between rendering and committing in React's internal process?
5. Why can't you return two sibling elements from a component without a wrapper? What is a Fragment and when do you use it over a `<div>`?
6. What does "declarative UI" mean? Give a concrete before/after example.
7. What does StrictMode do, and does it affect production builds?

---

## Debugging Practice

Find and fix all bugs in the following component. There are 5 distinct problems.

```jsx
function userCard() {
  const fullName = "Jordan Lee"
  const skills = ["JavaScript", "CSS", "React"]

  return (
    <div class="card">
      <h2>{fullName}<h2>
      <p>Skills: {skills}</p>
      <img src="https://i.pravatar.cc/100">
      <p style="margin-top: 10px">Senior Developer</p>
    </div>
  )
}

export default UserCard
```

Write out each bug and the fix before running the code.

---

## Mastery Checklist

Before moving to Stage 2, you should be able to answer yes to every item:

- [ ] I can explain why React exists without using the phrase "makes it easier"
- [ ] I can explain what the Virtual DOM is and what it is not
- [ ] I can explain what JSX compiles to and write the equivalent `createElement` call
- [ ] I can explain when React re-renders a component (all 4 triggers)
- [ ] I can explain the difference between rendering and DOM updates
- [ ] I understand why component names must be capitalized
- [ ] I can use Fragments correctly
- [ ] I can embed JavaScript expressions in JSX correctly
- [ ] I have built the ProfileCard mini project without copying

---

## Next Stage Preview

Stage 2 covers **Components & Props** - how to break UIs into reusable pieces, how data flows from parent to child, how to define prop contracts, and how to avoid the most common prop-related anti-patterns. The ProfileCard you just built will become the foundation of a more complex component tree.

---

*End of Stage 0 and Stage 1. Complete the mastery checklists and mini projects before requesting Stage 2.*
