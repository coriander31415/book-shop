import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersModule } from '../orders/orders.module';
import { ChangeBackgroundDirective } from './directives/change-background.directive';

@NgModule({
  declarations: [ChangeBackgroundDirective],
  imports: [CommonModule, OrdersModule],
  exports: [CommonModule, OrdersModule, ChangeBackgroundDirective],
})
export class SharedModule {}
