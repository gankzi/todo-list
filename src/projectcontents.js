import { addToDo } from "./createtodo";
import { displayToDo } from "./displaytodo";
import Logo from "../src/css/check-underline.svg";
import Inbox from "../src/css/inbox.svg";
import Today from "../src/css/calendar-today-outline.svg";
import Week from "../src/css/calendar-month-outline.svg";
import Plus from "../src/css/plus.svg";
import Github from "../src/css/github.svg";



const contentTitle = document.querySelector('#main-heading');
const addTask = document.querySelector('#add-task-button');
const cancelNewTask = document.querySelector('.cancel-add-task');
const addNewTask = document.querySelector('.add-task');
const logoImg = document.querySelector('#logo');
const inboxImg = document.querySelector('#inbox-img');
const todayImg = document.querySelector('#today-img');
const weekImg = document.querySelector('#week-img');
const addProjectImg = document.querySelector('#add-project-img');
const addTaskImg = document.querySelector('#add-task-img');
const githubImg = document.querySelector('#github-img');


addTask.addEventListener('click', openNewTaskForm);
addNewTask.addEventListener('click', addToDo);



if (cancelNewTask) {
    cancelNewTask.addEventListener('click', closeNewTaskForm)
};

function renderProjectContent (projectName, projectTodo) {
    contentTitle.innerHTML = projectName;

    displayToDo(projectTodo);
    showAddTask();
}

function showAddTask() {
    addTask.style.display = "flex";
}

function openNewTaskForm(event) {
    event.preventDefault();
    document.querySelector('#new-task').style.display = "flex";
}

function closeNewTaskForm(event) {
    event.preventDefault();
    document.querySelector('#new-task').style.display = "none";
}

logoImg.setAttribute('src', Logo);
inboxImg.setAttribute('src', Inbox);
todayImg.setAttribute('src', Today);
weekImg.setAttribute('src', Week);
addProjectImg.setAttribute('src', Plus);
addTaskImg.setAttribute('src', Plus);
githubImg.setAttribute('src', Github);





export {renderProjectContent };