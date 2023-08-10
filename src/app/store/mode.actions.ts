import { Action } from '@ngrx/store';

export enum ActionType {
  ChangeMode = '[Mode Component], ChangeMode',
}

export class ChangeMode implements Action {
  readonly type = ActionType.ChangeMode;
}