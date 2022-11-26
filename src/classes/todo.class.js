export class Todo {
  static fromJSON({ id, task, completed, date }) {
    const tempTodo = new Todo(task);
    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.date = date;

    return tempTodo;
  }

  constructor(task) {
    this.task = task;
    this.id = new Date().getTime();
    this.completed = false;
    this.date = new Date();
  }

  printId() {
    console.log(`Id ${this.id}`);
  }
}
