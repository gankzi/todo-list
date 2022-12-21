import _ from 'lodash';
import './styles.css';
import addNProject from './addproject';

const content = document.querySelector("#main-content");
const addProject = document.querySelector("#add-project");
const addNewProject = document.querySelector("#add-new-project");
const cancelNewProject = document.querySelector("#cancel-new-project");


addProject.addEventListener('click', openAddProject);
cancelNewProject.addEventListener('click', closeAddProject);
addNewProject.addEventListener('click', addNProject)

function component () {
    const element = document.createElement('div');

    element.innerHTML = "";

    return element;
}


function openAddProject() {
    document.querySelector("#new-project").style.display = "inline-flex";
}

function closeAddProject() {
    document.querySelector("#new-project").style.display = "none";
}




content.append(component());

export default {openAddProject};


// Add Project button will ask for name of the project and creates a project
// Project will have add todo list button that will call a form to create a new todo Class
// new todo class will be pushed to todo array for each project.
// Dom Manipulation function will use the todo array and the todo classes on to the screen.
// 