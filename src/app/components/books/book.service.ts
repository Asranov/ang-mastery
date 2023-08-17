import { IBook } from './books.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: IBook[] = [
    { id: '1', name: 'Book 1', author: 'Author 1', publishedYear: 2020 },
    { id: '2', name: 'Book 2', author: 'Author 2', publishedYear: 2020 },
    { id: '3', name: 'Book 3', author: 'Author 3', publishedYear: 2020 },
  ];

  getAllBooks(): IBook[] {
    return this.books
  }

  constructor() { }
}
