import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  names: string[] = ["Stiv", "Alice", "Bob"]
  newNames: string[] = []
  numbers: number[] = [1, 2, 3, 4, 5]
  filterdNumbers: number[] = []

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  constructor() {
    this.filterdNumbers = this.numbers.filter(n => n % 2 === 0)

    this.names.forEach((name) => this.newNames.push(name))

    console.log("New names: ", this.newNames)

    console.log(this.filterdNumbers)
  }

}
