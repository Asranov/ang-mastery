import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './../store/counter.actions';
import { Observable } from 'rxjs';
import { CounterState } from './../store/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counterValue$: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) {
    this.counterValue$ = this.store.select(state => state.counter.count);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}

