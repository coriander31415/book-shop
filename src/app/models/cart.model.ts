import { IBook } from './book.model';

export interface ICart {
  book: IBook;
  qty: number;
  name?: string;
  price?: number;
  sum?: number;
}
