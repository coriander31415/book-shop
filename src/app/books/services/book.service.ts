import { Injectable } from '@angular/core';
import { booksCatalogue } from '../../shared/constants/books-catalogue';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: IBook[] = [];

  getBooks(): IBook[] {
    this.books = booksCatalogue;
    return this.books;
  }
}
