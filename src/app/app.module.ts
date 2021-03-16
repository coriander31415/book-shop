import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { CartModule } from './cart/cart.module';
import { LayoutModule } from './layout/layout.module';
import { OrdersModule } from './orders/orders.module';
import { APP_CONSTANTS, ConstantsService } from './shared/services/constants.service';
import { APP_RANDOM_STRING_5, GeneratorFactory, GeneratorService } from './shared/services/generator.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, SharedModule, BooksModule, CartModule, OrdersModule, AppRoutingModule],
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
