import { Component } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.css']
})
export class MasteryComponent {
  user: User = {
    id: 1,
    name: 'John Doe',
    age: 30,
  };
}
