import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from 'src/app/state/Counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;

  constructor(private store: Store<{ counter: { count: number } }>) {
    this.store.select('counter').subscribe((state) => {
      this.count = state.count;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.count = 0
  }

  ngOnInit() {
    console.log("ngOnInit: worked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy: worked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit: worked");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit: worked");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked: worked");
  }
}
