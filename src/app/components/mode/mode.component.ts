import { ChangeMode } from './../../store/mode.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent {
  mode$: Observable<boolean>
  isLoading: boolean = false

  constructor(private store: Store<{ mode: boolean }>) {
    this.mode$ = store.pipe(select('mode'));
  }

  change() {
    this.store.dispatch(new ChangeMode())
  }

  toggle() {
    this.isLoading = !this.isLoading
  }

}
