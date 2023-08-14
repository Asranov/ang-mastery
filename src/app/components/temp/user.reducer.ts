
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { initialState, UserState } from './user.state';

export const userReducer = createReducer(
  initialState,
  on(UserActions.usersLoaded, (state, { users }) => ({
    ...state,
    users: users,
  }))
);
