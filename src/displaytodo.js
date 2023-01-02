const mainTaskDiv = document.querySelector("#tasks");

function displayToDo (newToDo) {
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
    statusDiv.classList.add(newToDo.priority);
    statusDiv.addEventListener("click", (event) => {
        toggleChecked(event)
        toggleDone(taskDiv)});

    titleP.classList.add("task-title");
    descriptionP.classList.add("task-description");
    dateP.classList.add("taks-date");

    titleP.innerHTML = newToDo.title;
    descriptionP.innerHTML = newToDo.description;
    dateP.innerHTML = newToDo.dueDate;


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