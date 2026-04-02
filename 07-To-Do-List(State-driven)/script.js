const sidebar = document.querySelector("#sidebar");
const toggleBtn = document.querySelector("#toggle-sidebar");
const themeBtn = document.querySelector("#themeBtn");
const themeIcon = document.querySelector("#themeIcon");
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');



/*state for data storage*/ 
let tasks = [];



/* SIDEBAR TOGGLE */

toggleBtn.addEventListener("click", () => {

sidebar.classList.toggle("collapsed")

})

/* THEME TOGGLE */

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode")

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark")

themeIcon.classList.remove("bx-moon")
themeIcon.classList.add("bx-sun")

}else{

localStorage.setItem("theme","light")

themeIcon.classList.remove("bx-sun")
themeIcon.classList.add("bx-moon")

}

})

/* RESTORE THEME */

const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){

document.body.classList.add("dark-mode")

themeIcon.classList.remove("bx-moon")
themeIcon.classList.add("bx-sun")

}
