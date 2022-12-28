import { displayProjects } from "./displayprojects";

const newProjectInput = document.querySelector("#project-name");
const projects = [];



const projectFactory = (title) => {
    return {title};
};

function addNewProject(event) {
    let newProjectName = newProjectInput.value;

    event.preventDefault();

    const newProject = projectFactory(newProjectName);
    projects.push(newProject);

    displayProjects(projects);
    clearProjectForm();
    closeAddProject(event);
}

function closeAddProject(event) {
    event.preventDefault();
    document.querySelector("#new-project").style.display = "none";
}

function deleteProject(event) {
    const index = event.target.id;

    projects.splice(index, 1);
    displayProjects(projects);
}

function clearProjectForm() {
    newProjectInput.value = "";
}


export {addNewProject, deleteProject};


// Add Project button will ask for name of the project and creates a project
// Project will have add todo list button that will call a form to create a new todo Class
// new todo class will be pushed to todo array for each project.
// Dom Manipulation function will use the todo array and the todo classes on to the screen.
// 