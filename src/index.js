import "./styles.css";
import { TodoList, createTodoHtml } from "./classes";

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml);
