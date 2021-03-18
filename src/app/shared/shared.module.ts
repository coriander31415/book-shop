import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdersModule } from '../orders/orders.module';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { HighlightElementDirective } from './directives/highlight-element.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [ChangeBackgroundDirective, HighlightElementDirective, OrderByPipe],
  imports: [CommonModule, OrdersModule, FormsModule],
  exports: [CommonModule, OrdersModule, ChangeBackgroundDirective, HighlightElementDirective, OrderByPipe, FormsModule],
})
export class SharedModule {}
