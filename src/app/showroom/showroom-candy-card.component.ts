import { Component } from "@angular/core";
import { Candy } from "./candy.model.ts";

@Component({
  selector: 'app-showroom-candy-card',
  template: 'showroom-candy-card.component.html'
})
export class ShowroomCandyCardsComponent {
  //this is going to be the quick ways to add candy
  candy: Candy;

  //Will need to talk to cart
  onAdd() {

  }

}
