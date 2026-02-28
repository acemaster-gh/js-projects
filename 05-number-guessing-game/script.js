//SELECTORS

const themeBtn = document.querySelector('#theme-Btn');
const input = document.querySelector('#input')


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