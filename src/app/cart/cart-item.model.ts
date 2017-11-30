import { Candy } from "../showroom/candy.model";

export class CartItem {
  constructor(public candy: Candy,
              public amount: number) {}
}
