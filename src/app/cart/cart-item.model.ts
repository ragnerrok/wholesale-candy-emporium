import { Candy } from "../showroom/candy.model.ts";

export class CartItem {
  constructor(public candy: Candy,
              public amount: number) {}
}
