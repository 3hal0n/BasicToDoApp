const todoInput = document.querySelector(".todo__input");
const todoCreateButton = document.querySelector(".todo__create__button");
const todoContainer = document.querySelector(".todo__container");

const allTodoItemText = [];


function checkBoxStrike() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const todoText = this.nextElementSibling;
      if (this.checked) {
        todoText.style.textDecoration = "line-through";
        todoText.style.color = "red";
      } else {
        todoText.style.textDecoration = "none";
        todoText.style.color = "black";
      }
    });
  });
}

function attachDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".todo__delete__button");

  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      allTodoItemText.splice(index, 1);
      renderAllTodos();
    });
  });
}

function renderAllTodos() {
  const allTodoItemHtmls = allTodoItemText.map((text) => {
    return `<div class="todo__item">
      <div class="todo__item__left">
        <input type="checkbox" id="completed" name="completed" />
        <span>${text}</span>
      </div>
      <div class="todo__item__right">
        <svg
          class="todo__delete__button"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </div>
    </div>`;
  });

  todoContainer.innerHTML = allTodoItemHtmls.join("");

  checkBoxStrike();         
  attachDeleteListeners();  
}

function renderTodo() {
  todoCreateButton.addEventListener("click", () => {
    const todoItemText = todoInput.value.trim();
    todoInput.value = "";
    if (!todoItemText) return;

    allTodoItemText.push(todoItemText);
    renderAllTodos(); 
  });
}
renderTodo();
