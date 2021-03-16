import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, OrdersModule],
  exports: [CommonModule, OrdersModule],
})
export class SharedModule {}
