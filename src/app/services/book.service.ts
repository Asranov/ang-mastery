import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: string[] = ["Book 1", "Book 2", "Book 3"]

  getAllBooks(): string[] {
    return this.books;
  }

  addBook(book: string): void {
    this.books.push(book);
  }
}