import { Action } from '@ngrx/store';
import { ActionType } from './mode.actions';

export const mode: boolean = false;

export function modeReducer(state = mode, action: Action) {
  switch (action.type) {
    case ActionType.ChangeMode:
      return !state;
    default:
      return state;
  }
}
