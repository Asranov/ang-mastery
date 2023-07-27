import { Component } from '@angular/core';
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  inputValue: string = ""
  todos: string[] = []
  faCoffee = faCoffee

  submit() {
    this.todos.push(this.inputValue)
    this.inputValue = ""
    console.log(this.todos)
  }
}
