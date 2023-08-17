import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BookService } from './book.service';

export interface IBook {
  id: string;
  name: string;
  author: string;
  publishedYear: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: IBook[] = [];

  selectedBook: IBook | undefined;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.books = this.bookService.getAllBooks();
  }

  select(book: IBook): void {
    this.selectedBook = book;
    this.router.navigate(['/books', book.id])
    console.log(this.selectedBook);
  }
}
