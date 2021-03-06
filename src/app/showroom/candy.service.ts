import { Candy } from "./candy.model";
export class CandyService {
  private chosenCandy: Candy;
  private candies: Candy[] = [
    //name, size, price
    new Candy('Fundo Bar', 'Small', 1, 100, 'fundo-bar-small', 'These bars are packed with caramel nougat goodness. They come in three fun sizes to help get you through your day!'),
    new Candy('Fundo Bar', 'Medium', 1.5, 100, 'fundo-bar-medium', 'These bars are packed with caramel nougat goodness. They come in three fun sizes to help get you through your day!'),
    new Candy('Fundo Bar', 'Large', 3, 100, 'fundo-bar-large', 'These bars are packed with caramel nougat goodness. They come in three fun sizes to help get you through your day!'),

    new Candy('Extreme Micro Sours', '', 1, 100, 'extreme-micro-sours', 'Even the tiniest micro sour will leave you squirming in your shoes. Be careful with these, you sour patch youngsters.'),

    new Candy('Solo Brand Twirly Rope', 'Small', 10, 100, 'solo-brand-twirly-rope-small', 'An individual clamshell packaged string o’ licorice. This string is so tasty, you might spend an entire day trying to open a dozen!'),
    new Candy('Solo Brand Twirly Rope', 'Medium', 12.75, 100, 'solo-brand-twirly-rope-medium', 'An individual clamshell packaged string o’ licorice. This string is so tasty, you might spend an entire day trying to open a dozen!')

  ];

  updateCandyInventory(candy: Candy, amountBought: number) {
    let chosenCandy = this.candies[this.candies.indexOf(candy)];
    let currentInventory = chosenCandy.inventory;
    chosenCandy.inventory = currentInventory - amountBought;
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
