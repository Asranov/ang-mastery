import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = "Welcome to header";
  color = "red"
  testCount = 0

  constructor() {
    for (let i = 0; i <= 5; i++) {
      this.testCount++
    }

    console.log("Count:", this.testCount)
  }
}