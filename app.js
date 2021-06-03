//Selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//Event listeners
todoButton.addEventListener('click', addTodo)

//Functions
function addTodo(event){
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = "Hey";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // checkmark button
    const completedButton = document.createElement('button');
    completedButton.innextHTML = '<i class="fas fa-check-circle"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // delete button
    const trashButton = document.createElement('button');
    trashButton.innextHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
}