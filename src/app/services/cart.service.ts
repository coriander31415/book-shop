import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { ICart } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  booksInCart: ICart[] = [];

  getItems(): ICart[] {
    return this.booksInCart;
  }

  addToCart(book: IBook): void {
    const ind: number = this.booksInCart.findIndex((el) => el.book.id === book.id);
    if (ind === -1) {
      this.booksInCart.push({ book, qty: 1 });
    } else {
      this.booksInCart[ind].qty += 1;
    }
  }

  removeFromCart(book: IBook): void {
    const ind: number = this.booksInCart.findIndex((el) => el.book.id === book.id);
    if (this.booksInCart[ind].qty > 1) {
      this.booksInCart[ind].qty -= 1;
    } else {
      this.deleteItemFromCart(book);
    }
  }

  deleteItemFromCart(book: IBook): void {
    const ind: number = this.booksInCart.findIndex((el) => el.book.id === book.id);
    this.booksInCart.splice(ind, 1);
  }
}
