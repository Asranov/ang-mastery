import { createReducer, on } from '@ngrx/store';
import { initialCounterState } from './counter.state';
import * as CounterActions from './counter.actions';

export const counterReducer = createReducer(
  initialCounterState,
  on(CounterActions.increment, (state) => ({ ...state, count: state.count + 1 })),
  on(CounterActions.decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(CounterActions.reset, () => initialCounterState)
);
