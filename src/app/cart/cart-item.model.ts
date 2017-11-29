import { Candy } from "../showroom/candy.model.ts";

export class CartItem {
  constructor(public id: number,
              public candy: Candy,
              public amount: number) {}
}
