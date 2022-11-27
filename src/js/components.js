import { todoList } from "..";
import { Todo, TodoList } from "../classes";
import "../css/components.css";

// HTML References
const d = document;
const divTodoList = d.querySelector(".todo-list");
const input = d.querySelector(".new-todo");
const clearCompleted = d.querySelector(".clear-completed");
const filters = d.querySelector(".filters");
const anchorsFilter = d.querySelectorAll(".filtro");

export const createTodoHtml = ({ task, completed, id }) => {
  const todoHtml = `
  <li class="${completed ? "completed" : ""}" data-id="${id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${completed ? "checked" : ""}>
      <label>${task}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>`;

  const divTodo = d.createElement("div");
  divTodo.innerHTML = todoHtml;

  divTodoList.append(divTodo.firstElementChild);
  return divTodo.firstElementChild;
};

// Events
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && input.value.length > 0) {
    const todo = new Todo(input.value);
    todoList.newTodo(todo);
    createTodoHtml(todo);
    input.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute("data-id");

  if (event.target.matches("input")) {
    todoList.toggleTodo(todoId);
    todoElement.classList.toggle("completed");
  }

  if (event.target.matches("button")) {
    todoList.deleteTodo(todoId);
    divTodoList.removeChild(todoElement);
  }
});

clearCompleted.addEventListener("click", (event) => {
  todoList.deleteCompleted();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const element = divTodoList.children[i];

    if (element.classList.contains("completed")) {
      divTodoList.removeChild(element);
    }
  }
});

filters.addEventListener("click", (event) => {
  const filterName = event.target.text;

  anchorsFilter.forEach((anchor) => anchor.classList.remove("selected"));

  event.target.classList.add("selected");

  for (const elem of divTodoList.children) {
    const completed = elem.classList.contains("completed");
    elem.classList.remove("hidden");

    switch (filterName) {
      case "Pendientes":
        completed && elem.classList.add("hidden");
        break;
      case "Completados":
        !completed && elem.classList.add("hidden");
        break;
    }
  }
});
