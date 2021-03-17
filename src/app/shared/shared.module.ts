import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersModule } from '../orders/orders.module';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { HighlightElementDirective } from './directives/highlight-element.directive';

@NgModule({
  declarations: [ChangeBackgroundDirective, HighlightElementDirective],
  imports: [CommonModule, OrdersModule],
  exports: [CommonModule, OrdersModule, ChangeBackgroundDirective, HighlightElementDirective],
})
export class SharedModule {}
