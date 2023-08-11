import { loadTodos } from './../store/todo/todo.actions';
import { Todo } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(state => state.todos.todos);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
