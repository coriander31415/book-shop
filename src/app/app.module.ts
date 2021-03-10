import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookItemComponent } from './components/book/book-item/book-item.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookItemComponent, CartListComponent, CartItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
