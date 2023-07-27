import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
}

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
  user = {
    name: "Stiv",
    age: 25
  }

  users: User[] = [
    {
      name: "Stiv",
      age: 25,
    },
    {
      name: "Alice",
      age: 18,
    },
    {
      name: "Bob",
      age: 23,
    },
  ]

  increment() {
    this.counter++;
    console.log(this.counter)
  }


  decrement() {
    this.counter--;
    console.log(this.counter)
  }


  constructor() {
    this.filterdNumbers = this.numbers.filter(n => n % 2 === 0)

    this.names.forEach((name) => this.newNames.push(name))

    console.log("New names: ", this.newNames)

    console.log(this.filterdNumbers)

    setTimeout(() => {
      console.log("SetTimeout worked")
    }, 5000)
  }

}
