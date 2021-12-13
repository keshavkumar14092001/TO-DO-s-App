
// Selectors

const todoInput = document.querySelector('.todo-text');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



// Function

function addTodo(event) {
    event.preventDefault();

    // Creating Todo div:
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Creating li:
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;
    todoLi.classList.add('todo-item');

    // Appending Child:
    todoDiv.appendChild(todoLi);

    // Creating Check button:
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('check');

    // Appending Child:
    todoDiv.appendChild(checkBtn);

    // Creating Deleter button:
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete');

    // Appending Child:
    todoDiv.appendChild(deleteBtn);

    // Appending to ul list:
    todoList.appendChild(todoDiv);

    // Clearing Input Value:
    todoInput.value = "";
}

function deleteCheck(event) {

    const varyfing = event.target;

    // Checking for delete:
    if (varyfing.classList[0] === 'delete') {
        const unWanted = varyfing.parentElement;
        // Adding Animation:
        unWanted.classList.add('fall');
        unWanted.addEventListener('transitionend', () => {
            unWanted.remove();
        });
    }

    // Checking for check:
    if (varyfing.classList[0] === 'check') {
        const wanted = varyfing.parentElement;
        wanted.classList.toggle('completed');
    }

}