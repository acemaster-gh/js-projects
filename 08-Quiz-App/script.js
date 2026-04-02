/* =============================================
   QUESTIONS
   ============================================= */




const questions = 
  [
    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",
        options: ["var", "let", "const", "set"],
        answer: 2,
        explanation: "The 'const' keyword creates a block-scoped variable whose value cannot be changed through reassignment."
    },
    {
        question: "What is the correct way to write a single-line comment in JavaScript?",
        options: ["** Comment", "// Comment", "/* Comment */", "# Comment"],
        answer: 1,
        explanation: "Double slashes (//) are used for single-line comments, while /* */ is used for multi-line comments."
    },
    {
        question: "Which data type is used for 'true' or 'false' values?",
        options: ["String", "Number", "Boolean", "Undefined"],
        answer: 2,
        explanation: "Booleans represent logical entities and can only have two values: true or false."
    },
    {
        question: "What will 'typeof []' return in JavaScript?",
        options: ["array", "object", "list", "null"],
        answer: 1,
        explanation: "In JavaScript, arrays are technically a specialized type of object, so 'typeof' returns 'object'."
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "join()"],
        answer: 0,
        explanation: "The .push() method adds one or more elements to the end of an array and returns the new length."
    }
]



/* =============================================
    STATE VARIABLES
   ============================================= */


const state = {
    currentIndex:0,
    score:0,
    answered:false,
    screen:'start',
    timeLeft:60,
    timerInterval:null
};



/* =============================================
   DOM SELECTOR
   ============================================= */

const DOM = {
     darkMode: document.querySelector('#dark-mode'),
     startBtn: document.querySelector('#start-btn'),
     screenQuiz: document.querySelector('#screen-quiz'),
     screenResult: document.querySelector('#screen-result'),
     progressDisplay: document.querySelector('#progress-number'),
     optionsContainer: document.querySelector('#option-container'),
    restartBtn: document.querySelector('#restart-btn'),
    nextBtn: document.querySelector('#next-btn'),
    popupResult: document.querySelector('#popup-result-text'),
    popupExplanation: document.querySelector('#popup-explanation-text'),
    timerDisplay: document.querySelector('#timer-display'),
    screenStart: document.querySelector('#screen-start'),
    popup: document.querySelector('#popup-explanation'),
    questionText: document.querySelector('#question-text'),
    finalScore: document.querySelector('#final-score'),
    scoreDisplay: document.querySelector('#quiz-score'),
    


};







/* =============================================
   RENDER FUNCTION
   ============================================= */

   function render() {
 
    
   DOM.screenStart.classList.add('hidden');
   DOM.screenQuiz.classList.add('hidden');
   DOM.screenResult.classList.add('hidden');

   

if (state.screen === 'start') {
    DOM.screenStart.classList.remove('hidden');
}

if (state.screen === 'quiz') {
    DOM.screenQuiz.classList.remove('hidden');
    
    DOM.progressDisplay.textContent = `Q ${state.currentIndex + 1  } of ${questions.length}`;

    DOM.questionText.textContent = questions[state.currentIndex].question;

    DOM.timerDisplay.textContent = state.timeLeft;
    DOM.scoreDisplay.textContent = `Score: ${state.score}`;


    // clear old buttons
DOM.optionsContainer.innerHTML = '';

// create new buttons from current question
questions[state.currentIndex].options.forEach((option, index) => {
  const btn = document.createElement('button');
  btn.textContent = option;
  btn.classList.add('option-btn');
  btn.addEventListener('click', () => selectAnswer(index));
  DOM.optionsContainer.appendChild(btn);
});

}

if (state.screen === 'result') {
    DOM.screenResult.classList.remove('hidden');
    DOM.finalScore.textContent = `You scored ${state.score} out of ${questions.length}`;
}

};


   /* =============================================
   START QUIZ FUNCTION
   ============================================= */

   function startQuiz() {
    clearInterval(state.timerInterval);
state.screen = 'quiz';
state.currentIndex = 0;
state.score = 0 ;
state.timeLeft = 60 ;
state.timerInterval = setInterval(tick, 1000);

render();



   }


   /* =============================================
   TIMER FUNCTION
   ============================================= */
   function tick() {
  state.timeLeft--;
  if (state.timeLeft <= 0) {
    // end the quiz and the timer
    clearInterval(state.timerInterval);
    state.screen = 'result';

  }
  render();
};



   /* =============================================
   ANSWER SELECTION FUNCTION
   ============================================= */
function selectAnswer(index) {
    if (state.answered) return;
    state.answered = true;
    const isCorrect = index === questions[state.currentIndex].answer;

    if (isCorrect) { 
        state.score++;
   }


// highlight all buttons after answer
const buttons = DOM.optionsContainer.querySelectorAll('.option-btn');
buttons.forEach((btn, i) => {
  if (i === questions[state.currentIndex].answer) {
    btn.classList.add('correct');   // green
  }
  if (i === index && !isCorrect) {
    btn.classList.add('wrong');     // red
  }
  btn.disabled = true;  // prevent clicking again
});

   DOM.popup.classList.remove('hidden');
   DOM.popupResult.textContent = isCorrect ? 'Correct!' : 'Wrong!';
   DOM.popupExplanation.textContent = questions[state.currentIndex].explanation;

   

    
}


 /* =============================================
   NEXT QUESTION FUNCTION
   ============================================= */



function nextQuestion(){
    DOM.popup.classList.add('hidden');
    state.answered = false;

    if (state.currentIndex + 1 >= questions.length) {
        clearInterval(state.timerInterval);
    state.screen = 'result'  ;  
} else { state.currentIndex++;}




render();

}

function restartQuiz() {
    clearInterval(state.timerInterval);
    state.screen = 'start';
    state.currentIndex = 0;
    state.answered = false;
    state.timeLeft = 60;
    state.timerInterval = null;
    render();

}

/* =============================================
BUTTON HIGHLIGHT
============================================= */



/* =============================================
   EVENT LISTENERS
   ============================================= */


DOM.darkMode.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode');
})
DOM.startBtn.addEventListener('click', startQuiz);
DOM.nextBtn.addEventListener('click', nextQuestion);
DOM.restartBtn.addEventListener('click', restartQuiz);

render();
