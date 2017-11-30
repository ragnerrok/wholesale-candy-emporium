import { Candy } from "./candy.model";
export class CandyService {
  private chosenCandy: Candy;
  private candies: Candy[] = [
    //name, size, price
    new Candy('Fundo Bar', 'Small', 1, 100),
    new Candy('Fundo Bar', 'Medium', 1.5, 100),
    new Candy('Fundo Bar', 'Large', 3, 100),

    new Candy('Extreme Micro Sours', '', 1, 100),

    new Candy('Solo Brand Twirly Ropes', 'Small', 10, 100),
    new Candy('Solo Brand Twirly Ropes', 'Medium', 12.75, 100)

  ];

  updateCandyInventory(candy: Candy, amountBought: number) {
    let chosenCandy = this.candies[this.candies.indexOf(candy)];
    let currentInventory = chosenCandy.inventory;
    chosenCandy.inventory = currentInventory - amountBought;
    console.log('Update', this.candies);
  }

  getCandies(){
    return this.candies;
  }

  getChosenCandy(){
    if(this.chosenCandy){
      return this.chosenCandy;
    }else{
      this.setChosenCandy(this.candies[0]);
      return this.candies[0];
    }
  }

  setChosenCandy(candy: Candy){
    this.chosenCandy = candy;
  }

}
