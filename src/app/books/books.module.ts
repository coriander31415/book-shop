import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [BookListComponent, BookItemComponent],
  imports: [SharedModule],
})
export class BooksModule {}
