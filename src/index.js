import _ from 'lodash';
import './styles.css';
import { addNewProject } from './addproject';
import { renderProjectContent } from './projectcontents';
import { projects } from './addproject';
import { isToday } from 'date-fns';

const addProject = document.querySelector("#add-project");
const addNewProjects = document.querySelector("#add-new-project");
const cancelNewProject = document.querySelector("#cancel-new-project");
const inboxButton = document.querySelector('#inbox-button');
const todayButton = document.querySelector('#today-button');
const weekButton = document.querySelector('#week-button');
const inbox = [];
const today = [];
const week = [];

addProject.addEventListener('click', openAddProject);
cancelNewProject.addEventListener('click', closeAddProject);
addNewProjects.addEventListener('click', addNewProject);
inboxButton.addEventListener('click', () => {
    getAllTodo();
    console.log(inbox);
    renderProjectContent("Inbox", inbox)});
todayButton.addEventListener('click', () => {renderProjectContent("Today", [])});
weekButton.addEventListener('click', () => {renderProjectContent("This Week", [])});

function openAddProject() {
    document.querySelector("#new-project").style.display = "inline-flex";
}

function closeAddProject(event) {
    event.preventDefault();
    document.querySelector("#new-project").style.display = "none";
}

function component() {
   const element = document.createElement('div');
  
   return element;
  }

function getAllTodo() {
    inbox.length = 0;

    projects.forEach(project => 
        project.todo.forEach(todo => inbox.push(todo)));
}

function getTodayTodo() {
    today.length = 0;

    projects.forEach(project =>
        project.todo.forEach(todo => 
           if (isToday(todo.dueDate)) {
            today.push(todo);
           } 
            ));

}

document.body.appendChild(component());

export default {openAddProject};


// Add Project button will ask for name of the project and creates a project
// Project will have add todo list button that will call a form to create a new todo Class
// new todo class will be pushed to todo array for each project.
// Dom Manipulation function will use the todo array and the todo classes on to the screen.
// 