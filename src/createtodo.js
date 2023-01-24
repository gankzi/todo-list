import { projects } from "./addproject";
import { displayToDo } from "./displaytodo";

const todoTitle = document.querySelector('#title');
const todoDescription = document.querySelector('#description');
const todoDueDate = document.querySelector('#due-date');
const todoPriority = document.querySelector('#priority-select');
const mainHeading = document.querySelector('#main-heading');

const todoFactory = (title, description, dueDate, priority, project) => {
    return { title, description, dueDate, priority, project };
};


function addToDo(event) {
    let title = todoTitle.value;
    let description = todoDescription.value;
    let dueDate = todoDueDate.value;
    let priority = todoPriority.value;
    let project = mainHeading.innerHTML

    event.preventDefault();

    const newToDo = todoFactory(title, description, dueDate, priority, project);

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title == mainHeading.innerHTML) {
            projects[i].todo.push(newToDo);
            displayToDo(projects[i].todo);
        }
    };

    closeNewTaskForm();
    console.log(projects);
}

function closeNewTaskForm() {
    todoTitle.value = "";
    todoDescription.value = "";
    todoDueDate.value = "";
    todoPriority.value = "low";
    document.querySelector('#new-task').style.display = "none";
}


export { addToDo };