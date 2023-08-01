import { Component } from '@angular/core';
import { User } from 'src/app/models';
import { BookService } from 'src/app/services/book.service';
import { AnimalService } from 'src/app/services/animals.service';

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

  books: string[] = [];
  newBook: string = 'Book 4';
  animals: string[] = [];

  constructor(private bookService: BookService, private animalService: AnimalService) {
    this.books = this.bookService.getAllBooks();
    this.animals = this.animalService.getAllAnimals();
  }

  addBook() {
    this.bookService.addBook(this.newBook);
    console.log(this.books);
  }
}
