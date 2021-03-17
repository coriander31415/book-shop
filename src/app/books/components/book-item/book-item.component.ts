import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() book!: IBook;

  @Output() selectBook: EventEmitter<IBook> = new EventEmitter<IBook>();

  bookInfoStyles = {
    opacity: 0.5,
    backgroundColor: 'ivory',
    'margin-bottom': '10px',
  };

  addBookToCart(book: IBook): void {
    this.selectBook.emit(book);
  }
}
