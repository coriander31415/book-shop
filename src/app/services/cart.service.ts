import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { ICart } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  booksInCart: ICart[] = [];

  addToCart(book: IBook): void {
    this.booksInCart.push({ book, quantity: 1 });
  }

  getItems(): ICart[] {
    return this.booksInCart;
  }

  clearCart() {
    this.booksInCart = [];
    return this.booksInCart;
  }
}
