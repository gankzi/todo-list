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