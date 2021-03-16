export interface ICart {
  cartItems: ICartItem[];
  totalQty: number;
  totalCost: number;
}
export interface ICartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  cost: number;
}
