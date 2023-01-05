const mainTaskDiv = document.querySelector("#tasks");

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
    editImg.setAttribute("src", "../src/css/circle-edit-outline.svg");
    editImg.setAttribute("alt", "edit-img");

    editButton.append(editImg);

    deleteButton.classList.add("task-delete");
    deleteImg.setAttribute("src", "../src/css/trash-can-outline.svg");
    deleteImg.setAttribute("alt", "trasn-can-img");

    deleteButton.append(deleteImg);

    taskDiv.append(statusDiv, titleP, descriptionP, dateP, editButton, deleteButton);
   
    mainTaskDiv.append(taskDiv);
    
    }
    console.log(todos);
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

export { displayToDo };