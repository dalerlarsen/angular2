import {Injectable} from "angular2/core"
import {TodoModel} from "./todo-model";
@Injectable()
export class TodoService {
  todos = [
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("dance", "completed"),
    new TodoModel("party"),
    new TodoModel("work"),
    new TodoModel("play"),
    new TodoModel("record", "completed"),
    new TodoModel("earn"),
    new TodoModel("charm"),
    new TodoModel("exercise"),
    new TodoModel("switm", "completed"),
    new TodoModel("code")
  ];

  addTodo(todo: TodoModel) {
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo: TodoModel){
    todo.toggle();

    const i = this.todos.indexOf(todo);
    // reconstruct the todos array
    this.todos = [
      ...this.todos.slice(0, i),
      todo,
      ...this.todos.slice(i+1)
    ]
  }
}
