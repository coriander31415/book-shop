import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../../models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent {
  @Input() book!: IBook;

  @Output() bookSelected: EventEmitter<IBook> = new EventEmitter<IBook>();

  // addBookToCart(book: IBook) {
  //   this.booksInCart.emit(book);
  // }

  selectBook(book: IBook): void {
    this.bookSelected.emit(book);
  }
}
