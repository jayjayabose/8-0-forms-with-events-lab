const form = document.querySelector('form');
const p = document.querySelector('p');
const list = document.querySelector('ul');    


form.addEventListener('submit', (event) => {
    event.preventDefault();
    p.textContent = '';
    if (inputIsValid(event)) updateList(event);
    

});


const inputIsValid = (event) => {
    if (event.target.task.value.length === 0) {
        p.textContent = 'Enter a task, dude.'
        return false;
    }
    return true;
}

const updateList = (event) => {
    console.log(event.target.task.value);
    console.log(event.target.task.value.length);
    
    const li = document.createElement('li');
    li.textContent = event.target.task.value;
    li.addEventListener('click', event => {
        li.setAttribute('style', "text-decoration: line-through");  
    });
    list.append(li);
    event.target.task.setAttribute('placeholder', 'enter another task'); //> this does not work
    //event.target.task.value = 'akdufhaisdjfh'; //> this works
    console.log(typeof event.target.task);
    



}

/**
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const list = document.querySelector('ul');    
    const li = document.createElement('li');
    li.textContent = event.target.todo.value;;
    list.append(li);    
});
 */