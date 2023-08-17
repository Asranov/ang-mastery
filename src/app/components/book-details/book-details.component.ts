import { BookService } from './../books/book.service';
import { ActivatedRoute } from '@angular/router';
import { IBook } from './../books/books.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  selectedBook: IBook | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      if (bookId) {
        this.selectedBook = this.bookService.getBookById(bookId);
      }
    });
  }
}
