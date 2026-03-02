const themeBtn = document.querySelector('#themeBtn');
const toggleSidebar = document.querySelector('#toggle-sidebar');
const sidebar = document.querySelector('#sidebar');
const toggleIcon = document.querySelector('#toggleIcon')


themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = 'Switch to Light Mode';

    } else {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = 'Switch to Dark Mode';
    }

})

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {

        toggleIcon.style.transform = "rotate(0deg)";


        
    } else {toggleIcon.style.transform = "rotate(180deg)";
        

    }
});

