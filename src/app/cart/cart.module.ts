import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [SharedModule],
  exports: [CartListComponent, CartItemComponent],
})
export class CartModule {}
