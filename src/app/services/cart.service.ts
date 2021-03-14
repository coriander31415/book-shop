import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { ICart, ICartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ICart = {
    cartItems: [],
    totalQty: 0,
    totalCost: 0,
  };

  getItems(): ICart {
    return this.cart;
  }

  getItemIndx(id: number): number {
    const itemIndx = this.cart.cartItems.findIndex((cartItem) => {
      return cartItem.id === id;
    });
    return itemIndx;
  }

  addBookToCart(book: IBook): void {
    const { id, name, price } = book;
    const itemInd: number = this.cart.cartItems.findIndex((cartItem) => cartItem.id === book.id);
    if (itemInd !== -1) {
      this.increaseQty(id);
    } else {
      const cartItem: ICartItem = { id, name, price, qty: 1, cost: price };
      this.cart.cartItems = [...this.cart.cartItems, cartItem];
    }
    this.updateCartData();
  }

  increaseQty(id: number): void {
    const itemInd: number = this.cart.cartItems.findIndex((cartItem) => cartItem.id === id);
    this.cart.cartItems[itemInd] = { ...this.cart.cartItems[itemInd], qty: this.cart.cartItems[itemInd].qty + 1 };
    this.getItemCost(this.cart.cartItems[itemInd]);
    this.updateCartData();
  }

  decreaseQty(id: number): void {
    const itemInd: number = this.cart.cartItems.findIndex((cartItem) => cartItem.id === id);
    if (this.cart.cartItems[itemInd].qty > 0) {
      this.cart.cartItems[itemInd] = { ...this.cart.cartItems[itemInd], qty: this.cart.cartItems[itemInd].qty - 1 };
      this.getItemCost(this.cart.cartItems[itemInd]);
    } else {
      this.deleteItemFromCart(id);
    }
    this.updateCartData();
  }

  deleteItemFromCart(id: number): void {
    const itemInd: number = this.cart.cartItems.findIndex((cartItem) => cartItem.id === id);
    this.cart.cartItems.splice(itemInd, 1);
    this.updateCartData();
  }

  deleteAllItemsFromCart(): void {
    this.cart.cartItems = [];
    this.updateCartData();
  }

  getItemCost(cartItem: ICartItem): void {
    cartItem.cost = cartItem.price * cartItem.qty;
  }

  updateCartData(): void {
    this.cart.totalQty = this.cart.cartItems.reduce((acc, curr) => acc + curr.qty, 0);
    this.cart.totalCost = this.cart.cartItems.reduce((acc, curr) => acc + curr.cost, 0);
  }
}
