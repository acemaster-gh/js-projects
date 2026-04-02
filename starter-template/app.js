/* =============================================
   APP.JS
   Build your project logic here.
   The layout (sidebar, topbar, theme) is
   already handled by layout.js.

   Drop your app into the #appContent element.
   ============================================= */


/* ── CONFIG ──────────────────────────────────
   Put all magic numbers and settings here.
   Change once → updates everywhere.
─────────────────────────────────────────────── */
const CONFIG = {
  // example:
  // maxItems: 10,
  // apiUrl: 'https://api.example.com',
};


/* ── STATE ───────────────────────────────────
   Everything your app needs to remember.
   One object. Never scattered variables.
─────────────────────────────────────────────── */
const appState = {
  // example:
  // items: [],
  // isLoading: false,
};


/* ── DOM ─────────────────────────────────────
   Grab every element ONCE at the top.
   Never use getElementById inside a function.
─────────────────────────────────────────────── */
const DOM = {
  app: document.getElementById('appContent'),
  // example:
  // btn: document.getElementById('myBtn'),
};


/* ── RENDER ──────────────────────────────────
   Read from STATE → update the DOM.
   Never change state inside render().
─────────────────────────────────────────────── */
function render() {
  // Update DOM from state here
}


/* ── LOGIC ───────────────────────────────────
   Change STATE only. Never touch the DOM.
   Always call render() after changing state.
─────────────────────────────────────────────── */

// example:
// function addItem(text) {
//   appState.items.push({ id: Date.now(), text });
//   render();
// }


/* ── EVENTS ──────────────────────────────────
   All listeners at the bottom.
   Each calls a named function — no inline logic.
─────────────────────────────────────────────── */

// example:
// DOM.btn.addEventListener('click', addItem);


/* ── INIT ────────────────────────────────────
   Runs once on page load.
─────────────────────────────────────────────── */
render();
