function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // remove list content
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
      if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        populateTodoList(todos);
      }
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
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

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
