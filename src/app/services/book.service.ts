import { Injectable } from '@angular/core';
import { Book } from '../types/book.types'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', rating: 5, review: 'Increíble distopía.' },
    { id: 2, title: 'Steve Jobs', author: 'Walter Isaacson', rating: 4, review: 'Una obra auténticamente inspiradora.' },
  ];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push({ ...book, id: this.books.length + 1 });
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }
}
