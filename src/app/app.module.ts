import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MasteryComponent } from './components/mastery/mastery.component';
import { TodosComponent } from './components/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './state/Counter/counter.reducer';
import { CounterEffects } from './state/Counter/counter.effects';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TodoComponent,
    MasteryComponent,
    TodosComponent,
    UsersComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: counterReducer }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
