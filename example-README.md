The 9 Sections of the JS file — memorize this structure:
Every project you build should follow this same order: Config → State → DOM references → Utilities → Render functions → Logic → Event listeners → Init. When your code is organised this way, you can find anything instantly, and so can anyone else reading it.
The STATE object — your biggest habit to build now:
All your app's data lives in ONE object called state. Right now in your projects you probably have variables scattered everywhere. The moment you have 3+ variables that relate to each other, put them in an object. Bugs become 10x easier to find.
The CONFIG object — never scatter magic numbers:
See how 25, 5, 15, 628 all live in one place at the top? If you want to change the default timer, you change it in ONE place. Never write if (seconds > 1500) in the middle of your code — someone reading it has no idea where 1500 came from.
CSS — the four practices shown here:
Every color and spacing value is a CSS variable in :root. The mode colors update automatically just by changing one attribute on <body> — no duplicated CSS. Every button gets its base styles from .btn, then specific overrides from .btn--primary — this is called composition and saves enormous amounts of repeated code. Transitions are on the elements themselves, not the hover state, so they animate both ways smoothly.
Semantic HTML:
<main>, <header>, <nav>, <section>, every interactive thing is a real <button>, every form control has a <label>. This is what separates a hobbyist from someone who knows what they're doing.
The render pattern:
Logic functions change state. Render functions read state and update the DOM. They never mix. This is the foundation of how every major framework (React, Vue) works — you're learning the concept right now in plain JS.
The keyboard shortcuts, the Web Audio API beep with no audio file, the SVG ring animation, the focus mode that dims everything — study each one. Every single feature has a comment above it explaining why, not just what.



# JS Projects — Learning Journal & Master Guide

> A self-taught developer's roadmap from zero to production-ready.  
> Built project by project. No shortcuts.

---

## Table of Contents

1. [How to Use This Repo](#how-to-use-this-repo)
2. [The Master Reference Project (Pomodoro)](#the-master-reference-project)
3. [Best Practices — The Non-Negotiables](#best-practices)
4. [HTML Best Practices](#html-best-practices)
5. [CSS Best Practices](#css-best-practices)
6. [JavaScript Best Practices](#javascript-best-practices)
7. [GitHub & Workflow Habits](#github--workflow-habits)
8. [Learning Instructions — How to Actually Get Better](#learning-instructions)
9. [All 110 Projects — Detailed Descriptions](#all-110-projects)

---

## How to Use This Repo

Each project lives in its own folder. Structure every folder like this:

```
project-name/
├── index.html      ← structure and content
├── style.css       ← all visual styles
├── script.js       ← all behaviour and logic
└── README.md       ← what it does, what you learned (2-4 sentences is enough)
```

**The rule:** finish a project before starting the next one. "Finished" means it works, it looks decent, and you understand every line you wrote. If AI wrote a line you don't understand — stop and figure it out before moving on.

---

## The Master Reference Project

The **Pomodoro Timer** (`pomodoro-master/index.html`) is your bible. Every time you start a new project, open it and ask:

- Did I organise my JS into sections like it does? (Config → State → DOM → Utils → Render → Logic → Events → Init)
- Are my colours in CSS variables?
- Did I use semantic HTML?
- Is my state in one object?
- Are my event listeners grouped at the bottom?

You don't need to copy it. You need to internalize *why* it's structured that way.

---

## Best Practices

These are not optional polish. They are the difference between code that works and code that is good. Build these habits now and they will compound enormously.

---

## HTML Best Practices

**Use semantic elements.** The browser gives you meaningful tags — use them.

```html
<!-- Bad -->
<div class="header">
  <div class="nav">
    <div onclick="go()">Home</div>
  </div>
</div>

<!-- Good -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
```

Tags to learn and use: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<time>`.

**Every interactive element must be a real `<button>` or `<a>`.** Never put `onclick` on a `<div>` or `<span>`. Buttons get keyboard support and accessibility for free.

**Every input needs a label.**

```html
<!-- Bad -->
<input type="text" placeholder="Enter name">

<!-- Good -->
<label for="name-input">Your Name</label>
<input type="text" id="name-input" placeholder="e.g. Ahmed">
```

**Always include these in `<head>`:**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Descriptive Page Title</title>
```

**Link CSS before `</head>`, JS before `</body>`.**  
CSS blocks rendering so it loads first. JS runs after the DOM is ready when placed at the bottom.

---

## CSS Best Practices

### 1. CSS Variables — Do This From Day One

Put every repeated value in `:root` at the top of your CSS file.

```css
:root {
    /* Colors */
    --clr-bg:       #0d0d0f;
    --clr-surface:  #16161a;
    --clr-text:     #e8e6e1;
    --clr-accent:   #c8a96e;
    --clr-danger:   #c87e7e;

    /* Typography */
    --font-body:    'Your Font', sans-serif;
    --text-sm:      0.75rem;
    --text-base:    1rem;
    --text-lg:      1.25rem;
    --text-xl:      2rem;

    /* Spacing */
    --space-xs:  4px;
    --space-sm:  8px;
    --space-md:  16px;
    --space-lg:  24px;
    --space-xl:  40px;

    /* Other */
    --radius:           8px;
    --radius-full:      9999px;
    --transition:       280ms ease;
    --shadow:           0 4px 20px rgba(0,0,0,0.3);
}
```

Then use them everywhere:
```css
.card {
    background: var(--clr-surface);
    padding: var(--space-lg);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
}
```

**Dark mode becomes trivial** when you use variables:
```css
body.dark-mode {
    --clr-bg: #0d0d0f;
    --clr-text: #e8e6e1;
}
/* Everything updates automatically. No hunting through the file. */
```

### 2. Property Order Inside Selectors

Always write CSS properties in this order — your future self will read it like a sentence:

```css
.element {
    /* 1. Layout — how it sits in the page */
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;

    /* 2. Box model — its size and spacing */
    width: 100%;
    max-width: 400px;
    padding: var(--space-md);
    margin: 0 auto;
    border: 1px solid var(--clr-border);

    /* 3. Visual — how it looks */
    background: var(--clr-surface);
    border-radius: var(--radius);
    box-shadow: var(--shadow);

    /* 4. Typography */
    font-family: var(--font-body);
    font-size: var(--text-base);
    color: var(--clr-text);

    /* 5. Transitions — always last */
    transition: var(--transition);
}
```

### 3. Use `rem` for Font Sizes, Not `px`

`px` is fixed. `rem` respects the user's browser font size preference.  
`1rem` = 16px by default. `0.75rem` = 12px. `1.5rem` = 24px.

```css
/* Bad */
font-size: 14px;

/* Good */
font-size: 0.875rem;
```

### 4. Use `transition` on the Element, Not on `:hover`

```css
/* Bad — only animates IN, not out */
.btn:hover { background: blue; transition: 0.3s; }

/* Good — animates both ways smoothly */
.btn { transition: background var(--transition); }
.btn:hover { background: blue; }
```

### 5. Reset Box Sizing

Always include this at the very top of your CSS:
```css
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```
This means padding and borders are included in an element's width — no more unexpected overflow.

### 6. CSS Class Naming — Use BEM (Block Element Modifier)

```css
/* Block */
.card {}

/* Element — part of the block */
.card__title {}
.card__body {}
.card__footer {}

/* Modifier — variation of block or element */
.card--featured {}
.card--dark {}
.card__title--large {}
```

You don't have to be strict about BEM but the idea — names that describe *what something is* rather than *what it looks like* — is gold.

---

## JavaScript Best Practices

### 1. Organise Every JS File in This Order

```
1. CONFIG     — all magic numbers and settings
2. STATE      — all data your app tracks
3. DOM        — all element references (grab once, use many times)
4. UTILITIES  — small helper functions
5. RENDER     — functions that update the DOM from state
6. LOGIC      — functions that change state
7. EVENTS     — event listeners grouped together
8. INIT       — run once on page load
```

### 2. Put All State in One Object

```js
// Bad — scattered variables
let isRunning = false;
let score = 0;
let currentQuestion = 0;
let userName = '';

// Good — one state object
const state = {
    isRunning: false,
    score: 0,
    currentQuestion: 0,
    userName: '',
};
```

When you need to debug, you just `console.log(state)` and see everything.

### 3. Put All Config in One Object

```js
// Bad — magic numbers scattered in code
if (score > 10) { ... }
setTimeout(fn, 3000);

// Good — config object at the top
const CONFIG = {
    winScore: 10,
    toastDuration: 3000,
    maxAttempts: 5,
};

if (state.score > CONFIG.winScore) { ... }
setTimeout(fn, CONFIG.toastDuration);
```

### 4. Separate Logic from Rendering

Logic functions change `state`. Render functions read `state` and update the DOM. They never mix.

```js
// Logic — changes state only
function incrementScore() {
    state.score++;
    // Does NOT touch the DOM
}

// Render — reads state, updates DOM only
function renderScore() {
    DOM.scoreDisplay.textContent = state.score;
    // Does NOT change state
}

// Event listener — calls logic then render
btn.addEventListener('click', () => {
    incrementScore();
    renderScore();
});
```

This is exactly how React works. You're learning it now.

### 5. Use `const` by Default, `let` When You Must Reassign

```js
const user = 'Ahmed';          // string, won't change → const
const scores = [1, 2, 3];     // array, contents may change, reference won't → const
let count = 0;                  // will be reassigned → let
// Never use var.
```

### 6. Grab DOM Elements Once at the Top

```js
// Bad — querying the DOM inside an event listener (runs every click)
btn.addEventListener('click', () => {
    const display = document.getElementById('display'); // slow, bad
    display.textContent = count;
});

// Good — grab once
const DOM = {
    display: document.getElementById('display'),
};

btn.addEventListener('click', () => {
    DOM.display.textContent = count; // already have reference
});
```

### 7. Write Descriptive Names

```js
// Bad
const x = 200;
function calc(a, b) { return a - b; }
let d = new Date();

// Good
const MAX_CHARACTERS = 200;
function calcRemainingChars(max, current) { return max - current; }
let currentDate = new Date();
```

### 8. Add Comments for WHY, Not What

```js
// Bad comment — obvious
count++; // increment count

// Good comment — explains reasoning
count++; // Score only increments on first correct answer, not retries

// Section headers are always welcome
// ── Event Listeners ──────────────────────────────
```

---

## GitHub & Workflow Habits

**Write meaningful commit messages.** Every commit should complete the sentence "This commit will..."

```
// Bad
git commit -m "update"
git commit -m "fix stuff"
git commit -m "asdfgh"

// Good
git commit -m "Add dark mode toggle to character counter"
git commit -m "Fix remaining characters going negative on paste"
git commit -m "Add keyboard shortcut (Space) to start/pause timer"
```

**One feature per commit.** Don't change 5 things then commit once. Commit after each meaningful piece works.

**Write a README for every project.** Even this is enough:

```markdown
# Tip Calculator

A simple tip calculator. Enter bill amount, select tip percentage, see total per person.

**What I learned:** Working with `parseFloat()`, updating multiple DOM elements from one input, 
handling edge cases (empty input, 0 people).
```

**Use branches eventually.** When you get to bigger projects, work on a `feature/dark-mode` branch, then merge into `main`. For now, just commit to main — but know this is coming.

---

## Learning Instructions

**The 10-minute rule.** When you're stuck, spend 10 minutes trying to solve it yourself first. After 10 minutes, ask AI. This builds actual problem-solving — if you ask immediately every time, you're just typing out what AI says.

**Type code, don't copy-paste.** Muscle memory is real. Typing `document.querySelector` 40 times means you'll never forget it.

**Read your old code.** Every Friday, open a project from 2 weeks ago. You'll see things you'd do differently. That gap is proof you're growing.

**Build something broken, then fix it.** Error messages are not failures — they're the actual lesson. When something breaks, read the console error fully before asking for help.

**One concept per project.** Each project on the list is designed to teach something specific. If you do project 41 (Weather App), the lesson is `fetch()` and async/await — not CSS animations. Stay focused on the concept.

**Don't switch to a framework yet.** React, Vue, Svelte — learn them after project 60. Plain JavaScript is not a stepping stone, it's the foundation. Every framework problem is easier to debug when you understand what the framework is doing under the hood.

**Keep a learning log.** After each project, write 3 lines: what it was, what you learned, what was hard. In 6 months this becomes one of your most valuable documents.

---

## All 110 Projects — Detailed Descriptions

---

### 🟢 Stage 1 — Absolute Basics (1–20)
*Core concepts: variables, functions, DOM manipulation, events, conditionals*

**1. Color Flipper**  
Click a button to randomly change the page background color. Generates a random hex code and applies it to `document.body.style.backgroundColor`.  
*Teaches: `Math.random()`, string manipulation, basic DOM styling, event listeners.*

**2. Counter App**  
Three buttons: increment, decrement, reset. A number display in the middle updates with each click.  
*Teaches: variables that change, multiple event listeners, conditional styling (red when negative).*

**3. Tip Calculator**  
Input the bill amount and number of people, select a tip percentage, output tip per person and total per person.  
*Teaches: reading input values with `.value`, `parseFloat()`, arithmetic, updating multiple DOM elements.*

**4. Character Counter**  
A textarea with a live counter showing characters typed and characters remaining. Colour changes when near the limit.  
*Teaches: `input` event, `value.length`, `maxlength` attribute, conditional class toggling.*

**5. Number Guessing Game**  
The app picks a random number 1–100. User guesses and gets "too high", "too low", or "correct!" feedback. Tracks number of attempts.  
*Teaches: `Math.floor(Math.random())`, comparisons, game state, conditional messages.*

**6. Simple Quiz App**  
5 multiple choice questions, one at a time. Show score and result message at the end.  
*Teaches: arrays of objects, tracking current index, showing/hiding elements, score accumulation.*

**7. Rock Paper Scissors**  
Player clicks their choice, computer picks randomly, winner is determined, scores update.  
*Teaches: `Math.random()` with arrays, comparison logic, keeping score across rounds.*

**8. Palindrome Checker**  
Type a word and click check — displays whether it reads the same forwards and backwards (ignoring spaces and case).  
*Teaches: `.toLowerCase()`, `.split().reverse().join()`, string comparison, regex basics.*

**9. BMI Calculator**  
Input height and weight, output BMI value and a category label (underweight, normal, overweight, obese).  
*Teaches: formula implementation, multiple conditionals, number formatting with `.toFixed()`.*

**10. Temperature Converter**  
Three inputs — Celsius, Fahrenheit, Kelvin. Editing one updates the other two instantly.  
*Teaches: formulas, bidirectional input events, `parseFloat` edge cases.*

**11. Age Calculator**  
Input a date of birth, output exact age in years, months, and days as of today.  
*Teaches: the `Date` object, date arithmetic, `new Date()`, `getFullYear()`, `getMonth()`, `getDate()`.*

**12. Word Counter**  
A textarea that counts words, characters (with and without spaces), sentences, and paragraphs in real time.  
*Teaches: `.split()` with regex, `.trim()`, `.filter(Boolean)`, multiple simultaneous counters.*

**13. Random Quote Generator**  
Displays a random quote and author from a hardcoded array. Click for a new one. Optional: "copy to clipboard" button.  
*Teaches: arrays of objects, random selection, `navigator.clipboard.writeText()`.*

**14. Simple Stopwatch**  
Start, stop, reset. Displays minutes, seconds, and milliseconds, all updating live.  
*Teaches: `setInterval`, `clearInterval`, `Date.now()`, time formatting with `padStart()`.*

**15. Dice Roller**  
Click to roll one or two dice. Display the result visually using dice face symbols or SVGs. Show total.  
*Teaches: `Math.ceil(Math.random() * 6)`, dynamic content rendering, multi-element update.*

**16. Password Generator**  
Choose length (slider), and which character sets to include (uppercase, lowercase, numbers, symbols). Click generate, click to copy.  
*Teaches: string concatenation, character sets, loops, `Math.floor(Math.random() * str.length)`.*

**17. Vowel Counter**  
Type a sentence, display a count of each vowel (a, e, i, o, u) separately, plus total vowels.  
*Teaches: regex with `/[aeiou]/gi`, `.match()`, iterating results, object counters.*

**18. Simple Alarm Clock**  
Display the current time live. Let user set an alarm time. Show an alert and play a sound when time matches.  
*Teaches: `setInterval` for clock, `Date` object, string comparison for time matching, Web Audio API basics.*

**19. Coin Flip Simulator**  
Click to flip a coin. Display result as heads/tails, track total flips and percentage of each over time.  
*Teaches: `Math.random() < 0.5`, percentage calculation, cumulative state tracking.*

**20. Mad Libs Generator**  
A form with labelled inputs (noun, verb, adjective, etc.). On submit, insert the words into a template story.  
*Teaches: multiple inputs, template literals, form submission, string interpolation.*

---

### 🟡 Stage 2 — DOM & Interaction (21–40)
*Core concepts: localStorage, CSS classes, complex events, dynamic DOM creation*

**21. To-Do List**  
Add tasks, mark complete (strikethrough), delete tasks. Everything saves to `localStorage` so it persists on refresh. Filter by all/active/completed.  
*Teaches: `localStorage.setItem/getItem`, `JSON.stringify/parse`, `createElement`, dynamic lists, event delegation.*

**22. Notes App**  
A grid of note cards. Click to create a new note, type in it, it saves automatically. Click a button to delete. All notes persist in localStorage.  
*Teaches: auto-saving with `input` event, dynamic card creation, localStorage with object arrays.*

**23. Light/Dark Mode Toggle**  
A toggle switch that switches between light and dark themes. The preference is remembered on next visit.  
*Teaches: CSS variables for theming, `localStorage` for preference, `data-theme` attribute on `<html>`.*

**24. Accordion FAQ**  
A list of questions. Clicking one expands the answer, closing any previously open one (single-open accordion).  
*Teaches: toggling classes, `max-height` CSS trick for smooth animation, sibling element manipulation.*

**25. Image Carousel / Slider**  
A set of images with prev/next buttons and dot indicators. Auto-advances every 4 seconds. Stops auto-advance on manual interaction.  
*Teaches: index tracking, circular navigation with modulo `%`, `setInterval` management.*

**26. Tabs Component**  
Click a tab to show its corresponding content panel. Active tab is highlighted. One content panel visible at a time.  
*Teaches: matching data attributes, `display: none/block`, active class management across a list.*

**27. Modal Popup**  
A button opens a modal overlay. X button or clicking outside closes it. Focus is trapped inside the modal while open.  
*Teaches: `display: flex/none`, `classList.toggle`, keyboard events (`Escape` key), accessibility (`aria-modal`).*

**28. Countdown Timer**  
Set a target date/time. Display days, hours, minutes, seconds counting down. Show a completion message when it reaches zero.  
*Teaches: `Date` subtraction, `Math.floor` for each unit, `setInterval` cleanup, edge cases.*

**29. Digital Clock**  
Live clock showing hours, minutes, seconds (12 or 24 hour). Show current date. Optional: analog clock using CSS rotation.  
*Teaches: `new Date()` in an interval, `toLocaleTimeString()`, CSS transforms for analog hands.*

**30. Typing Speed Test**  
A random paragraph is displayed. User types it. App tracks time from first keystroke, calculates WPM and accuracy at the end. Highlights errors in real time.  
*Teaches: character-by-character comparison, timing with `Date.now()`, WPM formula `(chars/5) / (seconds/60)`.*

**31. Drag and Drop List**  
A list of items that can be reordered by dragging. Order persists after drop.  
*Teaches: HTML5 Drag and Drop API (`dragstart`, `dragover`, `drop`), `insertBefore`, `getBoundingClientRect`.*

**32. Color Palette Generator**  
Input a hex color or click random. Generate 5 harmonious shades (tints and shades). Click any swatch to copy its hex value.  
*Teaches: hex to RGB conversion, HSL manipulation, generating color families programmatically.*

**33. Expense Tracker**  
Add income and expense entries with labels. Show balance, total income, total expenses. List all transactions with delete option.  
*Teaches: positive/negative values, running totals, array filtering, template literals for dynamic lists.*

**34. Habit Tracker**  
A weekly grid showing 7 days × N habits. Check off each habit for each day. Show completion streaks and percentage.  
*Teaches: 2D data structures (array of arrays), grid layout, localStorage with nested objects.*

**35. Simple Drawing App**  
Click and drag on an HTML `<canvas>` to draw. Choose brush size and color. Clear button. Optional: save as PNG.  
*Teaches: Canvas API, `mousemove`/`mousedown`/`mouseup` events, `ctx.beginPath()`, `lineTo()`, `stroke()`.*

**36. Emoji Picker**  
A searchable grid of emojis. Click one to copy it to the clipboard. Search filters in real time.  
*Teaches: large data arrays, search/filter with `.includes()`, clipboard API, virtual scrolling concept.*

**37. Read More / Read Less**  
A long block of text that shows only 3 lines by default. A "Read more" button expands it. Button toggles to "Read less".  
*Teaches: `max-height` animation, toggling text content, `overflow: hidden`.*

**38. Star Rating Component**  
Five stars. Hover highlights up to the hovered star. Click to set a rating. Rating persists. Show average if multiple items.  
*Teaches: hover states across siblings, comparing index to rating value, localStorage.*

**39. Search Filter**  
A list of items (countries, names, movies). A text input filters the list in real time, case-insensitive.  
*Teaches: `.filter()`, `.toLowerCase().includes()`, hiding/showing elements, performance with large lists.*

**40. Memory Card Game**  
A grid of face-down cards with matching pairs. Click to flip two — they stay open if they match, flip back if not. Track moves and time.  
*Teaches: array shuffling (`Fisher-Yates`), game state logic, CSS 3D flip transforms, setTimeout for flip-back delay.*

---

### 🟠 Stage 3 — APIs & Async JavaScript (41–60)
*Core concepts: `fetch`, `async/await`, Promises, error handling, real data*

**41. Weather App**  
Search a city name, display current temperature, weather description, humidity, and wind speed. Show an appropriate weather icon.  
*Teaches: `fetch`, `async/await`, query parameters in URLs, OpenWeatherMap API, `try/catch` for errors.*

**42. Joke Generator**  
Button fetches a random joke from a public API. Display setup and punchline with a small delay between them.  
*Teaches: basic `fetch`, `.json()`, conditional rendering (one-liner vs two-part jokes).*

**43. Dad Joke Generator**  
Fetches from `icanhazdadjoke.com`. Displays joke. Share button copies it. Favourite button saves to localStorage.  
*Teaches: custom request headers (`Accept: application/json`), saving API results locally.*

**44. Country Info App**  
Search a country name. Display flag, capital, population, region, currencies, and languages using the REST Countries API.  
*Teaches: displaying nested API data, array joining (for multiple currencies/languages), error states.*

**45. Dictionary App**  
Type a word, display its definition, part of speech, example sentence, and pronunciation audio (play button).  
*Teaches: chaining API data, `<audio>` element, multiple definitions from one response, deep object access.*

**46. GitHub Profile Viewer**  
Enter a GitHub username, show avatar, bio, follower count, and a list of their public repos sorted by stars.  
*Teaches: GitHub REST API, array `.sort()`, dynamic link creation, handling 404 (user not found).*

**47. Crypto Price Tracker**  
Live prices for top cryptocurrencies. Auto-refreshes every 30 seconds. Colour indicates price change (green up, red down).  
*Teaches: polling with `setInterval`, comparing previous vs current value, CoinGecko API.*

**48. Movie Search App**  
Search by title, display movie poster, year, rating, and plot. Click a result for full details.  
*Teaches: OMDB API with API key, debouncing search input, detail/list view switching.*

**49. News Headlines App**  
Show top headlines by category (tech, sports, business). Click a card to open the full article.  
*Teaches: NewsAPI, category filtering, opening external links safely (`target="_blank" rel="noopener"`).*

**50. Recipe Finder**  
Search by ingredient. Display matching recipes with image, title, and a "View Recipe" link.  
*Teaches: TheMealDB API (free, no key needed), search-on-submit vs search-on-type, empty results state.*

**51. Random User Generator**  
Button generates a random user profile with photo, name, email, location, and DOB from `randomuser.me`.  
*Teaches: complex nested JSON objects, optional chaining `?.`, formatted date output.*

**52. IP Address Locator**  
Display the user's IP address and location on a map using the ipify + LeafletJS library.  
*Teaches: multiple API calls in sequence, integrating a third-party map library, coordinates.*

**53. NASA Photo of the Day**  
Fetch and display NASA's Astronomy Picture of the Day — could be an image or a video.  
*Teaches: conditional rendering (image vs `<iframe>`), NASA APOD API, `<iframe>` embedding.*

**54. Currency Converter**  
Select two currencies, enter amount, display converted value using live exchange rates.  
*Teaches: dropdowns populated from API data, two-way conversion, rate math.*

**55. Lyrics Finder**  
Search for an artist and song title, display full lyrics.  
*Teaches: multi-parameter API queries, displaying preformatted text, handling "not found".*

**56. Book Search**  
Search books using the Google Books API. Display cover, title, author, and description. Add to a reading list saved in localStorage.  
*Teaches: Google Books API (no key needed for basic), saving complex objects to localStorage.*

**57. Pokémon Info App**  
Type a Pokémon name or number. Display sprite, type, stats, height, weight, and moves.  
*Teaches: PokéAPI (clean, great for beginners), dynamic stat bars via CSS width, number formatting.*

**58. GIF Search App**  
Search GIFs via Giphy API. Display a grid of results. Click to copy the GIF URL.  
*Teaches: Giphy API, CSS grid for image layouts, managing many results in the DOM.*

**59. QR Code Generator**  
Type text or a URL, generate a QR code image using a free QR API.  
*Teaches: APIs that return images (not JSON), setting `img.src` dynamically, download button.*

**60. URL Shortener**  
Paste a long URL, get a short one using a free shortening API. Copy to clipboard.  
*Teaches: POST requests with `fetch`, `method: 'POST'`, `headers`, `body: JSON.stringify()`.*

---

### 🔴 Stage 4 — Real Applications (61–80)
*Core concepts: complex state, multi-feature apps, data relationships, charts*

**61. Full To-Do App**  
Extended version of #21. Add categories, priority levels (low/medium/high), due dates, and sorting. Filter by any combination.  
*Teaches: complex filter chains, sorting arrays by multiple criteria, grouped UI.*

**62. Budget Tracker**  
Monthly income and expenses with categories. Bar chart showing spending by category. Month-by-month summary.  
*Teaches: Chart.js library, grouping data by category, calculating percentages.*

**63. Journal App**  
Daily journal entries with date, title, body text, and mood emoji. Calendar view. Search past entries. Export as text file.  
*Teaches: date-based data organisation, full-text search, `Blob` and `URL.createObjectURL()` for file export.*

**64. Pomodoro Timer** *(reference project)*  
Full implementation with modes, settings, session history, stats, focus mode, keyboard shortcuts, and sound.  
*Teaches: CONFIG/STATE/DOM architecture, SVG animation, Web Audio API, `data-` attributes for theming.*

**65. Flashcard App**  
Create decks, add cards (front/back). Study mode flips cards. Tracks how many you got right per deck. Spaced repetition option.  
*Teaches: nested data (decks contain cards), card flip animation, session performance tracking.*

**66. Markdown Previewer**  
Split-pane editor: type markdown on the left, see rendered HTML on the right in real time.  
*Teaches: the `marked.js` library, `innerHTML` from parsed content, XSS awareness (`DOMPurify`).*

**67. Mini Code Editor**  
A `<textarea>` with syntax highlight effect and a live HTML preview in an `<iframe>`.  
*Teaches: `<iframe>` `srcdoc` attribute, debouncing updates, `contenteditable`.*

**68. Quiz Builder**  
Create your own quizzes — add questions and multiple choice answers, mark the correct one. Save the quiz. Share as JSON.  
*Teaches: dynamic form building, validating user-created content, JSON export/import.*

**69. Recipe Manager**  
Add your own recipes with ingredients and steps. Edit and delete. Search by ingredient. Filter by cook time.  
*Teaches: full CRUD (Create, Read, Update, Delete) on localStorage data, form pre-filling for edit mode.*

**70. Contact Book**  
Add contacts with name, phone, email, notes. Edit, delete, search. Alphabetical grouping.  
*Teaches: CRUD with complex objects, sorting alphabetically, group-by-letter rendering.*

**71. Kanban Board**  
Three columns: To Do, In Progress, Done. Drag tasks between columns. Add and delete tasks. Saves state.  
*Teaches: Drag and Drop API across containers, nested state (column → tasks array), column counts.*

**72. Attendance Tracker**  
A class roster. Mark each student present, absent, or late for each session. Show attendance percentage per student.  
*Teaches: table generation from data, 2D state management, percentage calculations with colour coding.*

**73. Invoice Generator**  
Add line items (description, quantity, unit price). Auto-calculates totals with tax. Print/download as PDF using `window.print()`.  
*Teaches: dynamic table rows, running totals, `window.print()`, print CSS with `@media print`.*

**74. Shopping Cart**  
A product listing page. Add items to a cart. Update quantities. Remove items. Show subtotal, tax, and total.  
*Teaches: cart state as array of objects, quantity management, price calculation, cart count badge.*

**75. Reservation System**  
A weekly calendar grid. Click a slot to reserve it with your name. Reserved slots are highlighted. Cancel by clicking again.  
*Teaches: 2D grid rendering, slot state management, time slot formatting, localStorage persistence.*

**76. Multi-step Survey**  
A form split into steps with a progress bar. Validate each step before allowing next. Show summary at the end.  
*Teaches: multi-step form state, per-step validation, progress indicators, summary rendering.*

**77. Portfolio Website**  
Your personal portfolio — hero section, about, skills, projects grid, and contact form.  
*Teaches: page layout, scroll animations with `IntersectionObserver`, form handling, responsive design.*

**78. Blog Platform**  
Write and publish blog posts with a title, tags, and body. List all posts. Click to read full post. Markdown supported.  
*Teaches: multi-page-like navigation in SPA, `marked.js`, filtering by tag, publishing workflow.*

**79. Leaderboard App**  
Add players and scores. Sort by score. Highlight top 3. Filter by score range. Add timestamps.  
*Teaches: sorting, ranking logic, animated reorder, filtering with range inputs.*

**80. Voting / Poll App**  
Create polls with a question and multiple options. Vote once per session. Show live results as a bar chart.  
*Teaches: vote counting, preventing double votes with localStorage, visual percentage bars.*

---

### 🔵 Stage 5 — Advanced Concepts (81–100)
*Core concepts: Canvas, Web APIs, architecture, real-world patterns*

**81. Chat App UI**  
A realistic chat interface with message bubbles, timestamps, online status, typing indicator, and emoji support.  
*Teaches: message rendering patterns, timestamps, UI/UX of chat interfaces, scrolling behaviour.*

**82. Image Editor**  
Upload an image. Apply filters (brightness, contrast, saturation, grayscale, blur) with sliders. Download result.  
*Teaches: Canvas `drawImage`, `getImageData`, pixel manipulation, `filter` CSS property.*

**83. Music Player**  
Custom UI for a list of tracks. Play/pause/skip. Progress bar with scrubbing. Volume control. Shuffle/repeat.  
*Teaches: HTML5 `<audio>` API, `timeupdate` event, `currentTime` scrubbing, `ended` event.*

**84. Video Player**  
Custom controls for an HTML5 video — play, pause, seek, volume, fullscreen, playback speed.  
*Teaches: HTMLVideoElement API, `requestFullscreen()`, playback rate, custom control design.*

**85. Typing Practice App**  
Choose a difficulty level. Practice sessions with WPM tracking over time. Historical chart of improvement.  
*Teaches: session data accumulation over time, Chart.js line chart, localStorage history.*

**86. Habit Streak App**  
Calendar heatmap showing daily habit completion (like GitHub's contribution graph). Streak calculation. Weekly summary.  
*Teaches: date-based grid generation, heatmap colour scaling, streak algorithm, year view.*

**87. Finance Dashboard**  
Full dashboard with income vs expense chart, category breakdown pie chart, monthly trend line, and summary cards.  
*Teaches: Chart.js multiple chart types, dashboard layout, aggregating data for different views.*

**88. Real-time Search with Debouncing**  
Search that waits until you stop typing (300ms) before fetching results. Cancels pending requests on new keystroke.  
*Teaches: `debounce` function from scratch, `AbortController` for cancelling fetch, loading states.*

**89. Infinite Scroll Feed**  
A feed of posts that loads more content as you scroll to the bottom. Loading spinner while fetching.  
*Teaches: `IntersectionObserver` for scroll detection, pagination with API, appending to existing DOM.*

**90. Drag-and-Drop Form Builder**  
Drag form elements (text input, checkbox, radio, textarea) onto a canvas to build a custom form. Reorder them.  
*Teaches: complex drag and drop, dynamic form rendering, form element types.*

**91. Multi-step Form Wizard**  
A complex form split into steps with animated transitions, per-step validation, and a review screen before submit.  
*Teaches: form validation patterns, transition animations between steps, collecting and reviewing data.*

**92. Authentication UI Flow**  
Login, register, forgot password, and reset password screens. Client-side validation. Loading states. Success/error feedback.  
*Teaches: form UX patterns, client-side validation, UI states (idle/loading/success/error), field feedback.*

**93. E-commerce Product Page**  
Full product page: image gallery with zoom, size/colour picker, quantity selector, add to cart, reviews section.  
*Teaches: complex component state, image zoom on hover/click, variant selection logic.*

**94. Admin Dashboard**  
Sidebar navigation, data table with sorting/filtering/pagination, stat cards, a chart, and a form modal.  
*Teaches: pagination algorithm, client-side table sorting, responsive sidebar, modal management.*

**95. Browser Extension**  
A Chrome/Firefox extension that does something useful — a tab counter, colour picker, quick notes, or word highlighter.  
*Teaches: `manifest.json`, extension architecture, `chrome.tabs` API, popup vs background scripts.*

**96. WebSocket Chat**  
Two browser tabs communicate in real time using a local WebSocket server (Node.js). Messages appear instantly.  
*Teaches: WebSocket API (`new WebSocket()`), `onmessage`, `send()`, basic Node.js server.*

**97. Progressive Web App (PWA)**  
Take any completed app and make it installable and offline-capable using a Service Worker and Web App Manifest.  
*Teaches: `service-worker.js`, cache strategies, `manifest.json`, `beforeinstallprompt` event.*

**98. JavaScript Game**  
Build a complete game — Snake, Tetris, or Flappy Bird. Proper game loop, collision detection, scoring, game over.  
*Teaches: `requestAnimationFrame` game loop, Canvas API for game rendering, collision logic, state machines.*

**99. Open Source Contribution**  
Find a beginner-friendly JavaScript repo on GitHub (look for `good-first-issue` label). Fix a real bug or add a feature. Submit a PR.  
*Teaches: reading others' code, Git branching, pull requests, code review process, real-world collaboration.*

**100. Your Own SaaS Idea**  
Pick a real problem in your life. Build a tool that solves it. Design it properly. Polish it fully. Host it on GitHub Pages.  
*Teaches: everything — but more importantly, it teaches you to think like a product developer.*

---

### 🎯 Bonus Projects (101–110)

**101. Browser Paint App** — Full MS Paint clone in Canvas. Pencil, brush, eraser, shapes, fill, eyedropper, zoom, undo.

**102. Spreadsheet Clone** — A grid of cells with formula support. `=SUM(A1:A5)`, basic cell references, formatting.

**103. Regex Tester** — Input a regex pattern and test string. Highlight all matches. Show match count and groups.

**104. CSS Animation Builder** — Visually create keyframe animations by setting property values at time points. Export CSS code.

**105. API Tester (Mini Postman)** — Send GET/POST requests to any URL. Set headers and body. Display formatted response.

**106. JSON Formatter** — Paste raw JSON, display it as a collapsible tree. Validate it. Highlight syntax. Copy formatted.

**107. Keyboard Shortcut Trainer** — Shows a random shortcut from a chosen app. User presses keys. Tracks accuracy and speed.

**108. Speed Math Game** — Equations appear one after another. Type the answer as fast as possible. Score based on speed and accuracy.

**109. Language Flashcards** — Build a vocabulary learning app for any language. Spaced repetition algorithm, pronunciation audio.

**110. Personal Year in Review** — Input data about your year (books read, money spent, goals). Generate a beautiful visual summary.

---

## Progress Tracker

| # | Project | Status | Date | What I Learned |
|---|---------|--------|------|----------------|
| 1 | Color Flipper | ✅ Done | — | Math.random, DOM styling |
| 2 | Counter App | ✅ Done | — | — |
| 3 | Tip Calculator | ✅ Done | — | — |
| 4 | Character Counter | ✅ Done | — | — |
| 5 | Number Guessing Game | ✅ Done | — | — |
| 6 | Simple Quiz App | 🔄 Next | — | — |
| 7–110 | ... | ⬜ Todo | — | — |

---

*Built by [@acemaster-gh](https://github.com/acemaster-gh) · One project at a time.*