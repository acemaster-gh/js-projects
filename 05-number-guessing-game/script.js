//SELECTORS

const themeBtn = document.querySelector('#themeBtn');
const input = document.querySelector('#guess-input');
const submit = document.querySelector('#submitBtn');
const reset = document.querySelector('#resetBtn');
const feedbackMessage = document.querySelector('#message');
const attempts = document.querySelector('#attempts');
const status = document.querySelector('#status');
const history = document.querySelector('#history');






//EVENT LISTENERS


themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = 'Switch to Light Mode';

    } else {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = 'Switch to Dark Mode';
    }

});

// step 1 - STATE OBJECT

const state = {
  min: 1,
  max: 100,
  secretNumber: null,
  attempts: 0,
  maxAttempts: 10,
  status: "idle", 
  history: []
};
// step 2 - GENERATING SECRET NUMBER (INITIALISATION)

function generateSecretNumber(min, max) {
    return Math.floor(Math.random( ) * (max - min + 1)) + min;
}

// state.secretNumber = generateSecretNumber(state.min, state.max);

// step 3 starting game

function startGame(){
    state.secretNumber = generateSecretNumber(state.min, state.max);
    state.attempts = 0;
    state.history = [];
    state.status = "playing";
    attempts.textContent = state.attempts;
    feedbackMessage.textContent = "Game started! Make a guess.";
    input.disabled = false;
    input.value = "";
}

// step 4 VALIDATION

function validateGuess(value) {
  if (state.status !== "playing") {
    return { valid: false, message: "Game is over. Reset to play again." };
  }

  if (value.trim() === "") {
    return { valid: false, message: "Input cannot be empty." };
  }

  const number = Number(value);

  if (isNaN(number)) {
    return { valid: false, message: "Please enter a valid number." };
  }

  if (!Number.isInteger(number)) {
    return { valid: false, message: "No decimals allowed." };
  }

  if (number < state.min || number > state.max) {
    return { valid: false, message: `Enter a number between ${state.min} and ${state.max}.` };
  }

  return { valid: true, number };
}

// step 5 HANDLE GUESS

function handleGuess(guess) {
  state.attempts++;
  state.history.push(guess);
  attempts.textContent = state.attempts;

  if (guess === state.secretNumber) {
    state.status = "won";
    input.disabled = true;
    return "Correct! You won!";
  }

  if (state.attempts >= state.maxAttempts) {
    state.status = "lost";
    input.disabled = true;
    return `Game over! The number was ${state.secretNumber}`;
  }

  if (guess > state.secretNumber) {
    return "Too high!";
  } else {
    return "Too low!";
  }
}


// STEP 6 CONNECTING THE SUBMIT BUTTON

submit.addEventListener("click", () => {
  const value = input.value;
  const validation = validateGuess(value);

  if (!validation.valid) {
    feedbackMessage.textContent = validation.message;
    return;
  }

  const resultMessage = handleGuess(validation.number);
  feedbackMessage.textContent = resultMessage;
});

reset.addEventListener('click', () => {
    startGame();
});

startGame(); 