import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookItemComponent } from './components/book/book-item/book-item.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { AboutComponent } from './components/about/about.component';
import { LocalStorageService } from './services/local-storage.service';
import { ConstantsService, APP_CONSTANTS } from './services/constants.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    CartListComponent,
    CartItemComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LocalStorageService,
      useClass: LocalStorageService,
    },
    {
      provide: APP_CONSTANTS,
      useValue: ConstantsService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
