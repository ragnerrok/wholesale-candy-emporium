import { Component, Input, EventEmitter } from "@angular/core";
import { Candy } from "./candy.model";
import { CartItemsService } from "../cart/cart-items.service";
import { CandyService } from "./candy.service";

@Component({
  selector: 'app-showroom-candy-card',
  templateUrl: './showroom-candy-card.component.html'
})
export class ShowroomCandyCardComponent {
  //this is going to be the quick ways to add candy
  @Input() candy: Candy;

  constructor(private cartItemsService: CartItemsService, private candyService: CandyService) {}

  //Will need to talk to cart
  onAddCandy() {
    console.log('Add', this.candy);
    this.cartItemsService.addCandyToCart(this.candy);
  }

  goToProductPage() {
    console.log('Product', this.candy)
    this.candyService.setChosenCandy(this.candy);
  }

}
