/* =============================================
   PROJECT NAME
   What it does — one sentence description
   ============================================= */


/* =============================================
   1. CONFIG
   — Magic numbers and settings live here only.
   — Change once, updates everywhere.
   ============================================= */
const CONFIG = {
    // example: maxScore: 10,
    // example: timerDuration: 60,
};


/* =============================================
   2. STATE
   — Everything your app needs to remember.
   — One object. Never scattered variables.
   ============================================= */
const state = {
    // example: isRunning: false,
    // example: score: 0,
};


/* =============================================
   3. DOM ELEMENTS
   — Grab every element ONCE here at the top.
   — Never use getElementById inside a function.
   ============================================= */
const DOM = {
    // example: btn:     document.getElementById('btn'),
    // example: display: document.querySelector('.display'),
};


/* =============================================
   4. UTILITY FUNCTIONS
   — Small, reusable helpers. Do ONE thing each.
   — Pure: same input always gives same output.
   ============================================= */

// example:
// function formatNumber(n) {
//     return n.toString().padStart(2, '0');
// }


/* =============================================
   5. RENDER FUNCTIONS
   — Read from STATE → update the DOM.
   — Never change state inside a render function.
   ============================================= */

function render() {
    // update all DOM elements from current state
}


/* =============================================
   6. LOGIC FUNCTIONS
   — Change STATE only. Never touch the DOM.
   — Call render() after changing state.
   ============================================= */

// example:
// function increment() {
//     state.score++;
//     render();
// }


/* =============================================
   7. EVENT LISTENERS
   — All listeners grouped here at the bottom.
   — Each one calls a named function, not inline logic.
   ============================================= */

// example:
// DOM.btn.addEventListener('click', increment);


/* =============================================
   8. INIT
   — Runs once on page load. Sets the initial UI.
   ============================================= */
render();

