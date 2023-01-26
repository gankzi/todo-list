import _ from 'lodash';
import './styles.css';
import { addNewProject } from './addproject';
import { renderProjectContent } from './projectcontents';
import { projects } from './addproject';
import { isToday } from 'date-fns'
import { isThisWeek } from 'date-fns'
import { parseISO } from 'date-fns'


const addProject = document.querySelector("#add-project");
const addNewProjects = document.querySelector("#add-new-project");
const cancelNewProject = document.querySelector("#cancel-new-project");
const inboxButton = document.querySelector('#inbox-button');
const todayButton = document.querySelector('#today-button');
const weekButton = document.querySelector('#week-button');
const addTask = document.querySelector('#add-task-button');
const inbox = [];
const today = [];
const week = [];

addProject.addEventListener('click', openAddProject);
cancelNewProject.addEventListener('click', closeAddProject);
addNewProjects.addEventListener('click', addNewProject);
inboxButton.addEventListener('click', () => {
    getAllTodo();
    renderProjectContent("Inbox", inbox);
    hideAddTask();
});
    
todayButton.addEventListener('click', () => {
    getTodayTodo();
    renderProjectContent("Today", today);
    hideAddTask();
});
weekButton.addEventListener('click', () => {
    getWeekTodo();
    renderProjectContent("This Week", week);
    hideAddTask();
});

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

function hideAddTask() {
    addTask.style.display = "none";
}

function getAllTodo() {
    inbox.length = 0;

    projects.forEach(project => 
        project.todo.forEach(todo => inbox.push(todo)));
}

function getTodayTodo() {
    today.length = 0;

    projects.forEach((project) => {
        project.todo.forEach((todo) => {
            if(isToday(parseISO(todo.dueDate))) {
                today.push(todo);
            }});
        });  

        };

function getWeekTodo() {
    week.length = 0;

    projects.forEach((project) => {
        project.todo.forEach((todo) => {
            if(isThisWeek(parseISO(todo.dueDate))) {
                week.push(todo);
            }});
        });  
}

document.body.appendChild(component());

export {openAddProject, getAllTodo, getTodayTodo, getWeekTodo, inbox, today, week};


// Add Project button will ask for name of the project and creates a project
// Project will have add todo list button that will call a form to create a new todo Class
// new todo class will be pushed to todo array for each project.
// Dom Manipulation function will use the todo array and the todo classes on to the screen.
// 