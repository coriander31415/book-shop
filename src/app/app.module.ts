import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemComponent } from './books/components/book-item/book-item.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { AboutComponent } from './layout/components/about/about.component';
import { APP_CONSTANTS, ConstantsService } from './shared/services/constants.service';
import { APP_RANDOM_STRING_5, GeneratorFactory, GeneratorService } from './shared/services/generator.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    CartListComponent,
    CartItemComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    {
      provide: LocalStorageService,
      useClass: LocalStorageService,
    },
    {
      provide: APP_CONSTANTS,
      useValue: ConstantsService,
    },
    {
      provide: APP_RANDOM_STRING_5,
      useFactory: GeneratorFactory(5),
      deps: [GeneratorService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
