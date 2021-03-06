import { IBook } from './book.model';

export interface ICart {
  book: IBook;
  quantity: number;
  name?: string;
  price?: number;
  sum?: number;
}
