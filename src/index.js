import _ from 'lodash';
import './styles.css';

const content = document.querySelector("#main-content");

function component () {
    const element = document.createElement('div');

    element.innerHTML = "Hello";
    element.classList.add("test");

    return element;
}

content.append(component());


// Add Project button will ask for name of the project and creates a project
// Project will have add todo list button that will call a form to create a new todo Class
// new todo class will be pushed to todo array for each project.
// Dom Manipulation function will use the todo array and the todo classes on to the screen.
// 