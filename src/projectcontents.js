import { addToDo } from "./createtodo";
import { displayToDo } from "./displaytodo";
import { editTodo } from "./displaytodo";

const contentTitle = document.querySelector('#main-heading');
const addTask = document.querySelector('#add-task-button');
const cancelNewTask = document.querySelector('.cancel-add-task');
const addNewTask = document.querySelector('.add-task');
const editTask = document.querySelector('.edit-task');



addTask.addEventListener('click', openNewTaskForm);
addNewTask.addEventListener('click', addToDo);
editTask.addEventListener('click', editTodo);


if (cancelNewTask) {
    cancelNewTask.addEventListener('click', closeNewTaskForm)
};

function renderProjectContent (projectName, projectTodo) {
    contentTitle.innerHTML = projectName;

    console.log(projectName, projectTodo);
    displayToDo(projectTodo);
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