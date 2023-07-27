import { Task } from './../../Task';
import { Tasks } from './../../mock-tasks';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = Tasks
  completedTasks: Task[] = []

  constructor() {
    this.completedTasks = this.tasks.filter((task) => task.completed)
  }
}
