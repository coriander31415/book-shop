import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { ICart } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  booksInCart: ICart[] = [];

  totalQty = 0;

  totalSum = 0;

  getItems(): ICart[] {
    return this.booksInCart;
  }

  addToCart(book: IBook): void {
    const ind: number = this.booksInCart.findIndex((el) => el.book.id === book.id);
    if (ind === -1) {
      this.booksInCart.push({ book, qty: 1, sum: book.price });
    } else {
      this.booksInCart[ind].qty += 1;
    }
    this.updateCartData();
  }

  removeFromCart(book: IBook): void {
    const ind: number = this.booksInCart.findIndex((el) => el.book.id === book.id);
    if (this.booksInCart[ind].qty > 1) {
      this.booksInCart[ind].qty -= 1;
    } else {
      this.deleteItemFromCart(book);
    }
    this.updateCartData();
  }

  deleteItemFromCart(book: IBook): void {
    const ind: number = this.booksInCart.findIndex((el) => el.book.id === book.id);
    this.booksInCart.splice(ind, 1);
    this.updateCartData();
  }

  clearCart() {
    this.booksInCart = [];
    return this.booksInCart;
    this.updateCartData();
  }

  getTotalQty(booksInCart: ICart[]): number {
    return booksInCart.reduce((acc, curr) => acc + curr.qty, 0);
  }

  getTotalSum(booksInCart: ICart[]): number {
    return booksInCart.reduce((acc, curr) => acc + curr.qty * curr.book.price, 0);
  }

  updateCartData(): void {
    this.totalQty = this.getTotalQty(this.booksInCart);
    this.totalSum = this.getTotalSum(this.booksInCart.slice());
  }
}
