import { projects } from "./addproject";
import { displayToDo } from "./displaytodo";
import { renderProjectContent } from "./projectcontents";

const todoTitle = document.querySelector('#title');
const todoDescription = document.querySelector('#description');
const todoDueDate = document.querySelector('#due-date');
const todoPriority = document.querySelector('#priority-select');
const mainHeading = document.querySelector('#main-heading');

const todoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};


function addToDo(event) {
    let title = todoTitle.value;
    let description = todoDescription.value;
    let dueDate = todoDueDate.value;
    let priority = todoPriority.value;

    event.preventDefault();

    const newToDo = todoFactory(title, description, dueDate, priority);

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title == mainHeading.innerHTML) {
            projects[i].todo.push(newToDo);
        }
      displayToDo(projects[i].todo);
    };

    closeNewTaskForm();

}

function closeNewTaskForm() {
    document.querySelector('#new-task').style.display = "none";
}


export { addToDo };