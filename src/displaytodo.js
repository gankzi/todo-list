import { projects } from "./addproject";
import { getAllTodo, getTodayTodo, getWeekTodo, inbox, today, week } from "./index";
import { renderProjectContent } from "./projectcontents";

const mainTaskDiv = document.querySelector("#tasks");
const mainHeading = document.querySelector('#main-heading');
const editTask = document.querySelector('#edit-task');
const editTodoTitle = document.querySelector('#edit-title');
const editTodoDescription = document.querySelector('#edit-description');
const editTodoDueDate = document.querySelector('#edit-due-date');
const editTodoPriority = document.querySelector('#edit-priority-select');
const editTaskButton = document.querySelector('.edit-task');
const cancelEditButton = document.querySelector('.cancel-edit-task');

cancelEditButton.addEventListener('click', closeEdit);

function displayToDo (todos) {
    
    const todoList = document.querySelectorAll(".task");
    todoList.forEach(todo => mainTaskDiv.removeChild(todo));

    for(let i = 0; i < todos.length; i++) {

    const taskDiv = document.createElement('div');
    const statusDiv = document.createElement('div');
    const titleP = document.createElement('p');
    const descriptionP = document.createElement('p');
    const dateP = document.createElement('p');
    const editButton = document.createElement('button');
    const editImg = document.createElement('img');
    const deleteButton = document.createElement('button');
    const deleteImg = document.createElement('img');

    taskDiv.classList.add("task");

    statusDiv.classList.add("status", "unchecked")
    statusDiv.classList.add(todos[i].priority);
    statusDiv.addEventListener("click", (event) => {
        toggleChecked(event)
        toggleDone(taskDiv)});

    titleP.classList.add("task-title");
    descriptionP.classList.add("task-description");
    dateP.classList.add("taks-date");

    titleP.innerHTML = todos[i].title;
    descriptionP.innerHTML = todos[i].description;
    dateP.innerHTML = todos[i].dueDate;
        
    editButton.classList.add("task-edit");
    editButton.setAttribute('id', 'editBtn');
    editButton.addEventListener("click", (event) => { 
        openEdit(event,todos[i].project)});
    editImg.setAttribute("src", "../src/css/circle-edit-outline.svg");
    editImg.setAttribute("alt", "edit-img");
    editImg.setAttribute("class", todos[i].project)
    editImg.setAttribute("id", i);

    editButton.append(editImg);

    deleteButton.classList.add("task-delete");
    deleteButton.setAttribute('id', 'delBtn');
    deleteButton.addEventListener("click", (event) => {
        deleteTodo(event, todos[i].project)});
    deleteImg.setAttribute("src", "../src/css/trash-can-outline.svg");
    deleteImg.setAttribute("alt", "trasn-can-img");
    deleteImg.setAttribute("id", i);
    
    deleteButton.append(deleteImg);

    taskDiv.append(statusDiv, titleP, descriptionP, dateP, editButton, deleteButton);
   
    mainTaskDiv.append(taskDiv);
    
    }

    const delBtn = document.getElementsByClassName("task-edit");
    const editBtn = document.getElementsByClassName("task-delete");

    if (mainHeading.innerHTML == "Today" || mainHeading.innerHTML == "This Week" || mainHeading.innerHTML == "Inbox") {
        for (let i = 0; i < delBtn.length; i++) {
            delBtn[i].disabled = true;
            editBtn[i].disabled = true;
        }
    }

}

function deleteTodo(event, proj) {
    const index = event.target.id;

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title == proj) {
        projects[i].todo.splice(index,1);
            if (mainHeading == "Inbox") {
            getAllTodo();
            renderProjectContent("Inbox", inbox);
            console.log(inbox);
             } else if (mainHeading == "Today") {
            getTodayTodo();
            renderProjectContent("Today", today);
            console.log(today);
             } else if (mainHeading == "This Week") {
            getWeekTodo();
            renderProjectContent("This Week", week);
            console.log(week);
            } else {
             displayToDo(projects[i].todo);
            }
        }

    }
}

function openEdit(event, proj) {
    const index = event.target.id;
    editTask.style.display = "flex";

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title == proj) {
            editTodoTitle.value = projects[i].todo[index].title;
            editTodoDescription.value = projects[i].todo[index].description;
            editTodoDueDate.value = projects[i].todo[index].dueDate;
            editTodoPriority.value = projects[i].todo[index].priority;
        }
    }

    function onEditClick() {
        editTodo(index, proj);
    }
    
    editTaskButton.addEventListener('click', onEditClick, {once : true});
};

function closeEdit() {
    editTask.style.display = "none";
}


function editTodo(index, proj) {

    let title = editTodoTitle.value;
    let description = editTodoDescription.value;
    let dueDate = editTodoDueDate.value;
    let priority = editTodoPriority.value;


    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title == proj) {
            projects[i].todo[index].title = title;
            projects[i].todo[index].description = description;
            projects[i].todo[index].dueDate = dueDate;
            projects[i].todo[index].priority = priority;
            displayToDo(projects[i].todo);
        }
    };

    closeEdit();
}

function toggleDone (taskDiv) {
    taskDiv.classList.toggle("done");
}

function toggleChecked(event) {
    if (event.target.classList.contains("unchecked")) {
        event.target.classList.remove("unchecked")
        event.target.classList.add("checked");
    } else {
        event.target.classList.remove("checked")
        event.target.classList.add("unchecked");
    }
}

export { displayToDo, editTodo};