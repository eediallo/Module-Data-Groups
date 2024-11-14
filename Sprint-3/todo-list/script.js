function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  // steps
  // 1. loop through the todos array
  // 2. creates an li element
  // 3. set the text content to the task
  // 4. append the li to the list

  // tick icon
  // 1. loop through the li
  // 2. create an icon

  list.innerHTML = "";
  todos.forEach((obj, index) => {
    const li = document.createElement("li");
    li.textContent = obj.task;

    list.appendChild(li);

    const tickIcon = document.createElement("i");
    const binIcon = document.createElement("i");
    tickIcon.classList.add("fa-check");
    binIcon.classList.add("fa-trash");
    li.appendChild(tickIcon);
    li.appendChild(binIcon);
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
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  console.log(event);
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputField = document.querySelector("#todoInput");
  let inputFieldValue = inputField.value;
  console.log(inputFieldValue);
  const newTodo = { task: inputFieldValue, completed: false };
  todos.push(newTodo);
  inputField.value = "";
}
const addBtn = document.querySelector("#btn");
addBtn.addEventListener("click", (event) => {
  addNewTodo(event);
});

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
