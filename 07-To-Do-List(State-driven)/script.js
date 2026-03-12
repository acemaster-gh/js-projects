const sidebar = document.querySelector("#sidebar");
const toggleBtn = document.querySelector("#toggle-sidebar");
const themeBtn = document.querySelector("#themeBtn");
const themeIcon = document.querySelector("#themeIcon");
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');





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






/* =========================
   TODO APP — STATE & VALUE HANDLING
========================= */


// const addTask = () => {
//   const taskText = input.value.trim();


// }



/* =========================
   ADD TASK
========================= */

// function addTask()

// function addTask() {
    
// }

// read value from input

// create task object

// push task to tasks array

// clear input

// call renderTasks()



/* =========================
   RENDER TASKS
========================= */

// function renderTasks()

// clear task list

// loop through tasks

// create li element

// create checkbox

// create task text

// create delete button

// append elements

// add to task list



/* =========================
   TOGGLE TASK COMPLETE
========================= */

// when checkbox clicked

// find task in array

// toggle completed value

// re-render tasks



/* =========================
   DELETE TASK
========================= */

// when delete button clicked

// remove task from tasks array

// re-render tasks



/* =========================
   EVENT LISTENERS
========================= */

// add click listener for add button

// add enter key listener for input



/* =========================
   INITIAL RENDER
========================= */

// call renderTasks()