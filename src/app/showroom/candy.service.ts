import { Candy } from "./candy.model";
export class CandyService {
  private candies: Candy[] = [
    //name, size, price
    new Candy(0, 'Fundo Bar', 'Small', 1, 100),
    new Candy(1, 'Fundo Bar', 'Medium', 1.5, 100),
    new Candy(2, 'Fundo Bar', 'Large', 3, 100),

    new Candy(3, 'Extreme Micro Sours', '', 1, 100),

    new Candy(4, 'Solo Brand Twirly Ropes', 'Small', 10, 100),
    new Candy(5, 'Solo Brand Twirly Ropes', 'Medium', 12.75, 100)

  ];

  updateCandyInventory(id: number, amountBought: number) {
    let currentInventory = this.candies[id].inventory;
    this.candies[id].inventory = currentInventory - amountBought;
    console.log(this.candies)
  }

  getCandies(){
    return this.candies;
  }

}
