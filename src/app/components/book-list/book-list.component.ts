import { NgForOf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BookService } from '../../services/book.service'
import { Book } from '../../types/book.types'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  imports: [
    FormsModule,
    NgForOf,
  ],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  newBook: Partial<Book> = { title: '', author: '', rating: 0, review: '' };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addBook(): void {
    if (this.newBook.title && this.newBook.author && this.newBook.rating) {
      this.bookService.addBook(this.newBook as Book);
      this.newBook = { title: '', author: '', rating: 0, review: '' };
      this.books = this.bookService.getBooks();
    }
  }

  editBook(book: Book): void {
    const updatedReview = prompt('Edita la reseña:', book.review);
    if (updatedReview !== null) {
      this.bookService.updateBook({ ...book, review: updatedReview });
      this.books = this.bookService.getBooks();
    }
  }
}
