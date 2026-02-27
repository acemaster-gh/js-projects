const darkBtn = document.getElementById("theme-toggle");
const textInput = document.querySelector('#text-input');
const characterCount = document.querySelector('#char-count');
const remainingCharacter = document.querySelector('#remaining')
const maxLength = 200;



// darkmode logic

darkBtn.addEventListener('click', function() {

    document.body.classList.toggle("dark-mode");

     if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "Switch to Light Mode";
    } else {
        darkBtn.textContent = "Switch to Dark Mode";
    }
});

textInput.addEventListener("input", function() {
    
    const currentText = textInput.value;
    const currentLength = currentText.length;
    const remainingLength = maxLength - currentLength

    characterCount.textContent = currentLength;
    remainingCharacter.textContent = remainingLength;


});