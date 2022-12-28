const contentTitle = document.querySelector('#main-heading');
const addTask = document.querySelector('#add-task-button');
const newTaskForm = document.querySelector('#new-task');
const cancelNewTask = document.querySelector('#cancel-add-task');


addTask.addEventListener('click', openNewTaskForm);
if (cancelNewTask) {
cancelNewTask.addEventListener('click', closeNewTaskForm);
};


function renderProjectContent (projectName) {
    contentTitle.innerHTML = projectName;

}

function openNewTaskForm() {
    newTaskForm.style.display = "flex";
}

function closeNewTaskForm() {
    newTaskForm.style.display = "none";
}

export {renderProjectContent };