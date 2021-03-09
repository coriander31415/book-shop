import { IBook } from './book.model';

export interface ICart {
  book: IBook;
  qty: number;
  sum: number;
}
