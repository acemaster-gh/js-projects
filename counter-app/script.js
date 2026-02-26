const countDisplay = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let counter = 0;

//increase

increase.addEventListener('click', function() {
    counter++;
countDisplay.textContent = counter;
});

//decrease

decrease.addEventListener('click', function() {
    counter--;
    countDisplay.textContent = counter;
});
 reset.addEventListener('click', function() {
    counter = 0;
    countDisplay.textContent = counter;
 });