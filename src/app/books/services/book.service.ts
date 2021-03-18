import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { booksCatalogue } from '../../shared/constants/books-catalogue';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books$ = of(booksCatalogue);

  getBooks(): Observable<IBook[]> {
    return this.books$;
  }
}
