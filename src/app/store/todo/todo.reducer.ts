import { Todo } from './../../models/todo.model';
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: any;
}

const initialState: TodoState = {
  todos: [],
  error: null,
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({ ...state, todos })),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({ ...state, error }))
);
