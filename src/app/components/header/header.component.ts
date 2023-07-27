import { Tasks } from './../../mock-tasks';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = "Welcome to header";
  color = "red"

  foo() {
    console.log(1)
  }
}
