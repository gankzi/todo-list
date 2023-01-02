import { displayToDo } from "./displaytodo";

const todoTitle = document.querySelector('#title');
const todoDescription = document.querySelector('#description');
const todoDueDate = document.querySelector('#due-date');
const todoPriority = document.querySelector('#priority-select');

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
    displayToDo(newToDo);


    console.log(newToDo);
}

export { addToDo };