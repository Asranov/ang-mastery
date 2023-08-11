import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromTodoEffects from './todo/todo.effects';

export interface AppState {
  todos: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
};

export const effects = [fromTodoEffects.TodoEffects];
