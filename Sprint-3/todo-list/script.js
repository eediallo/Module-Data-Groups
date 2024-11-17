function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // resets content
  todos.forEach((todo, _) => {
    const li = document.createElement("li");
    li.textContent = todo.task;
    list.appendChild(li);

    const tickIcon = document.createElement("i");
    const binIcon = document.createElement("i");

    tickIcon.classList.add("fa", "fa-check", "icon");
    binIcon.classList.add("fa", "fa-trash", "icon");

    li.appendChild(tickIcon);
    li.appendChild(binIcon);

    tickIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;
      li.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    binIcon.addEventListener("click", () => {
      const todoIndex = todos.indexOf(todo);
      // check if todo exists and delete it from the todos
      if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        populateTodoList(todos);
      }
    });
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// displays initial todos list
populateTodoList(todos);

// add a new todo to the lsit
function addNewTodo(event) {
  event.preventDefault();
  const inputField = event.target.querySelector("#todoInput");
  const inputFieldValue = inputField.value.trim();
  if (inputFieldValue) {
    const newTodo = { task: inputFieldValue, completed: false };
    todos.push(newTodo);
    populateTodoList(todos);
    inputField.value = "";
  }
}

function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

const removeAllCompletedBtn = document.querySelector("#remove-all-completed");
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);
