import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { booksCatalogue } from '../constants/constants';

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
