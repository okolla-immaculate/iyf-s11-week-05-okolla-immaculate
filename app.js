// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

//functions
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    li.innerHTML = `
        <span class="${todo.completed ? "completed" : ""}">
            ${todo.text}
        </span>
        <button class="delete-btn">Delete</button>
    `;

    return li;
}

function renderTodos() {
    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateStats();
}


function addTodo(text) {
    todos.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    renderTodos();
}


function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
    );

    renderTodos();
}


function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}


function updateStats() {
    const activeTodos = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${activeTodos} item(s) left`;
}


function filterTodos(filter) {
    currentFilter = filter;
    renderTodos();
}
//Event listeners.
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") return;

    addTodo(text);

    input.value = "";
    input.focus();
});

todoList.addEventListener("click", function (event) {

    const li = event.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);

    if (event.target.classList.contains("delete-btn")) {
        deleteTodo(id);
        return;
    }

    if (event.target.tagName === "SPAN") {
        toggleTodo(id);
    }
});


filters.forEach(button => {
    button.addEventListener("click", function () {

        filters.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        filterTodos(this.dataset.filter);
    });
});


clearCompletedBtn.addEventListener("click", function () {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

//initialize
renderTodos();