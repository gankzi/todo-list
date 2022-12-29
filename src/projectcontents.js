import { addToDo } from "./createtodo";

const contentTitle = document.querySelector('#main-heading');
const addTask = document.querySelector('#add-task-button');
const cancelNewTask = document.querySelector('.cancel-add-task');
const addNewTask = document.querySelector('.add-task');



addTask.addEventListener('click', openNewTaskForm);
addNewTask.addEventListener('click', addToDo);


if (cancelNewTask) {
    cancelNewTask.addEventListener('click', closeNewTaskForm)
};

function renderProjectContent (projectName) {
    contentTitle.innerHTML = projectName;
}





function openNewTaskForm(event) {
    event.preventDefault();
    document.querySelector('#new-task').style.display = "flex";
}

function closeNewTaskForm(event) {
    event.preventDefault();
    document.querySelector('#new-task').style.display = "none";
}

export {renderProjectContent };