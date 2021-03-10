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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.booksInCart = this.cartService.getItems();
  }

  trackByBookId(index: number, bookInCart: ICart) {
    return bookInCart ? bookInCart.book.id : undefined;
  }
}
