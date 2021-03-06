import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICart } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() booksInCart!: ICart;

  constructor(private cartService: CartService) {}
}
