import { displayProjects } from "./displayprojects";
import { renderProjectContent } from "./projectcontents";

const newProjectInput = document.querySelector("#project-name");
const projects = [
    {title: "Shopping", todo: [
   {title: "Buy Milk",
    description: "Buy 2% Fat Milk from Superstore",
    dueDate: "2023-01-10",
    priority: "medium"},
    {title: "Buy Cereal",
    description: "Buy cereal on sale from Superstore",
    dueDate: "2023-01-10",
    priority: "low"},
    {title: "Buy eggs",
    description: "Buy dozen pack of eggs",
    dueDate: "2023-01-08",
    priority: "high"}]}];


renderProjectContent(projects[0].title, projects[0].todo);
displayProjects(projects);


const projectFactory = (title, todo) => {
    
    todo = [];

    return {title, todo};
};

function addNewProject(event) {
    let newProjectName = newProjectInput.value;

    event.preventDefault();

    const newProject = projectFactory(newProjectName);
    projects.push(newProject);

    displayProjects(projects);
    clearProjectForm();
    closeAddProject(event);

    console.log(projects);
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


export {addNewProject, deleteProject, projects};


// Add Project button will ask for name of the project and creates a project
// Project will have add todo list button that will call a form to create a new todo Class
// new todo class will be pushed to todo array for each project.
// Dom Manipulation function will use the todo array and the todo classes on to the screen.
// 