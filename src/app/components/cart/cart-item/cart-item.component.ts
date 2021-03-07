import { Component, Input } from '@angular/core';
import { IBook } from '../../../models/book.model';
import { ICart } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() booksInCart!: ICart;

  constructor(private cartService: CartService) {}

  increaseQty(book: IBook): void {
    this.cartService.addToCart(book);
  }

  decreaseQty(book: IBook): void {
    this.cartService.removeFromCart(book);
  }

  deleteItem(book: IBook): void {
    this.cartService.deleteItemFromCart(book);
  }
}
