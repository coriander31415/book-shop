import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule, OrdersModule],
})
export class SharedModule {}
