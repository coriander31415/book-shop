import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICart, ICartItem } from '../../models/cart.model';
import { ISort } from '../../models/sort.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CartListComponent implements OnInit {
  cart: ICart = {
    cartItems: [],
    totalQty: 0,
    totalCost: 0,
  };

  isDescSort = true;

  sortBy!: string;

  sortOptions: ISort[] = [
    { value: '', sortName: '' },
    { value: 'name', sortName: 'by name' },
    { value: 'price', sortName: 'by price' },
    { value: 'qty', sortName: 'by quantity' },
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.cart = this.cartService.getItems();
  }

  trackByCartItemId(_index: number, cartItem: ICartItem): number {
    return cartItem.id;
  }

  onIncreaseQty(id: number): void {
    this.cartService.increaseQty(id);
  }

  onDecreaseQty(id: number): void {
    this.cartService.decreaseQty(id);
  }

  onDeleteItem(id: number): void {
    this.cartService.deleteItemFromCart(id);
  }

  onDeleteAllItems(): void {
    this.cartService.deleteAllItemsFromCart();
  }
}
