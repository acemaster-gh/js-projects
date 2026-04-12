 //1. STATE

 const state = {
 isRunning: false,
 elapsedTime: 0,
 timerInterval: null,
 laps: [],


 }
 
 //2. DOM SELECTOR

 const DOM = {

    timerDisplay : document.querySelector('#timer-display'),
    startBtn: document.querySelector('#start'),    
    stopBtn: document.querySelector('#stop'),    
    resetBtn: document.querySelector('#reset'),    
    addLapBtn: document.querySelector('#addlap'),    
    lapList: document.querySelector('#lap-list'),

}

//3. FUNCTIONS


function tick() {
    state.elapsedTime += 10;
    render();

}
 function startTimer() {
    if(state.isRunning) return;
    state.isRunning = true;
    state.timerInterval = setInterval(tick, 10);


 }

 function stopTimer() {
    if (!state.isRunning) return;
    state.isRunning = false;
    clearInterval(state.timerInterval);
 }

 function addLap() {
    state.laps.push(state.elapsedTime);
    render();


    
 }

 function resetTimer() {
 clearInterval(state.timerInterval);
 state.isRunning = false;
 state.elapsedTime = 0;
 state.laps = [];
 render();

    
 }
 function render() {
    DOM.timerDisplay.textContent = formatTime(state.elapsedTime);
    DOM.lapList.innerHTML = '';
    state.laps.forEach((lapTime, index) => {
        const li = document.createElement('li');
        li.textContent = `Lap ${index +1} ${formatTime(lapTime)}`;
        DOM.lapList.appendChild(li);
        });
    
 }


 function formatTime(ms) {
   const minutes = Math.floor(ms / 60000);
   const seconds = Math.floor((ms % 60000) / 1000);
   const millis = Math.floor((ms % 1000) / 10 );
   
   return `${pad(minutes)}:${pad(seconds)}:${pad(millis)}`;


 }
 function pad(n) {
   return n.toString().padStart(2, '0');

 }

// 4. EVENT LISTENER

   DOM.startBtn.addEventListener('click', startTimer);
   DOM.stopBtn.addEventListener('click', stopTimer);
   DOM.resetBtn.addEventListener('click', resetTimer);
   DOM.addLapBtn.addEventListener('click', addLap);
    

   render();
   