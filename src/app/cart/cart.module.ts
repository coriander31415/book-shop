import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [CommonModule],
  exports: [CartListComponent, CartItemComponent],
})
export class CartModule {}
