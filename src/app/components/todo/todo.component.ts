import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  inputValue: string = ""
  todos: string[] = []

  submit() {
    this.todos.push(this.inputValue)
    this.inputValue = ""
    console.log(this.todos)
  }
}
