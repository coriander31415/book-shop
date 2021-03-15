import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { ICart, ICartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ICart = {
    cartItems: [],
    totalQty: 0,
    totalCost: 0,
  };

  getItems(): ICart {
    return this.cart;
  }

  addBookToCart(book: IBook): void {
    const { id, name, price } = book;
    const itemInd = this.cart.cartItems.findIndex(({ id: cartId }) => id === cartId);
    if (itemInd !== -1) {
      this.increaseQty(id);
    } else {
      const cartItem: ICartItem = { id, name, price, qty: 1, cost: price };
      this.cart.cartItems = [...this.cart.cartItems, cartItem];
    }
    this.updateCartData();
  }

  increaseQty(id: number): void {
    const itemInd = this.cart.cartItems.findIndex(({ id: cartId }) => id === cartId);
    this.cart.cartItems[itemInd] = { ...this.cart.cartItems[itemInd], qty: this.cart.cartItems[itemInd].qty + 1 };
    this.getItemCost(this.cart.cartItems[itemInd]);
    this.updateCartData();
  }

  decreaseQty(id: number): void {
    const itemInd = this.cart.cartItems.findIndex(({ id: cartId }) => id === cartId);
    if (this.cart.cartItems[itemInd].qty > 0) {
      this.cart.cartItems[itemInd] = { ...this.cart.cartItems[itemInd], qty: this.cart.cartItems[itemInd].qty - 1 };
      this.getItemCost(this.cart.cartItems[itemInd]);
    } else {
      this.deleteItemFromCart(id);
    }
    this.updateCartData();
  }

  deleteItemFromCart(id: number): void {
    const itemInd = this.cart.cartItems.findIndex(({ id: cartId }) => id === cartId);
    this.cart.cartItems.splice(itemInd, 1);
    this.updateCartData();
  }

  deleteAllItemsFromCart(): void {
    this.cart.cartItems = [];
    this.updateCartData();
  }

  private getItemCost(cartItem: ICartItem): void {
    cartItem.cost = cartItem.price * cartItem.qty;
  }

  private updateCartData(): void {
    this.cart.totalQty = this.cart.cartItems.reduce((acc, curr) => acc + curr.qty, 0);
    this.cart.totalCost = this.cart.cartItems.reduce((acc, curr) => acc + curr.cost, 0);
  }
}
