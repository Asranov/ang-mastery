import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from './user.actions';
import { UserState } from './user.state';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  users$ = this.store.select((state) => state.users);

  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    this.users$ = this.store.select((state) => state.users);
    console.log(this.users$);
    this.store.dispatch(loadUsers());
  }
}