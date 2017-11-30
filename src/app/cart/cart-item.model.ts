import { Candy } from "../showroom/candy.model";

export class CartItem {
  constructor(public id: number,
              public candy: Candy,
              public amount: number) {}
}
