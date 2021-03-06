import { Component, OnInit } from '@angular/core';
import { ICart } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  booksInCart: ICart[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.booksInCart = this.cartService.getItems();
    // console.log('cartService (ngOnInit) : ', this.booksInCart);
  }
}
