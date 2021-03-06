import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
  @Input() book!: IBook;

  books: IBook[] = [];

  @Input() bookSelected!: IBook;

  constructor(private cartService: CartService, private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  setBookSelected(book: IBook): void {
    this.bookSelected = book;
    this.addToCart(this.bookSelected);
  }

  addToCart(bookSelected: IBook): void {
    this.cartService.addToCart(bookSelected);
  }
}
