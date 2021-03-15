import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBook } from '../../../models/book.model';
import { BookService } from '../../../services/book.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];

  constructor(private cartService: CartService, private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  selectBook(book: IBook): void {
    this.addToCart(book);
  }

  addToCart(bookSelected: IBook): void {
    this.cartService.addBookToCart(bookSelected);
  }

  trackByBookId(_index: number, book: IBook): number {
    return book.id;
  }
}
