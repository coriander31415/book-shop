import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICart } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CartListComponent implements OnInit {
  booksInCart: ICart[] = [];

  totalQty = 0;

  totalSum = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.booksInCart = this.cartService.getItems();
    this.totalQty = this.cartService.getTotalQty(this.booksInCart);
  }

  deleteAllItems(): void {
    this.booksInCart = this.cartService.clearCart();
  }
}
