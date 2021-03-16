import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() cartItem!: ICartItem;

  @Output() increaseQty = new EventEmitter<number>();

  @Output() decreaseQty = new EventEmitter<number>();

  @Output() deleteItem = new EventEmitter<number>();

  onIncreaseQty(id: number): void {
    this.increaseQty.emit(id);
  }

  onDecreaseQty(id: number): void {
    this.decreaseQty.emit(id);
  }

  onDeleteItem(id: number): void {
    this.deleteItem.emit(id);
  }
}
