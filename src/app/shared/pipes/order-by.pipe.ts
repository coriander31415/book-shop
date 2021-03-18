import { Pipe, PipeTransform } from '@angular/core';
import { ICartItem } from 'src/app/cart/models/cart.model';

@Pipe({
  name: 'orderBy',
  // pure: false,
})
export class OrderByPipe implements PipeTransform {
  transform(cartItems: ICartItem[], sortValue: string, isDescSort: boolean): ICartItem[] {
    switch (sortValue) {
      case 'name':
        return isDescSort
          ? cartItems.sort((a, b) => (a.name > b.name ? 1 : -1))
          : cartItems.sort((a, b) => (b.name > a.name ? 1 : -1));
      case 'price':
        return cartItems.sort((a, b) => (isDescSort ? b.price - a.price : a.price - b.price));
      case 'qty':
        return cartItems.sort((a, b) => (isDescSort ? b.qty - a.qty : a.qty - b.qty));
      default:
        return cartItems;
    }
  }
}
