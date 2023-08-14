import { createAction, props } from '@ngrx/store';
import { IUser } from './temp.component';

export const loadUsers = createAction('[User] Load Users');

export const usersLoaded = createAction(
  '[User] Users Loaded',
  props<{ users: IUser[] }>()
);
