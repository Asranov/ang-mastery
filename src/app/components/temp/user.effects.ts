import { IUser } from './temp.component';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private http: HttpClient) { }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(
          map((users) => UserActions.usersLoaded({ users })),
          catchError(() => of({ type: 'Load Users Failed' }))
        )
      )
    )
  );
}
