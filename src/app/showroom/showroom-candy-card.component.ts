import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Candy } from "./candy.model";

@Component({
  selector: 'app-showroom-candy-card',
  templateUrl: './showroom-candy-card.component.html'
})
export class ShowroomCandyCardComponent {
  //this is going to be the quick ways to add candy
  @Input() candy: Candy;
  @Output() addingCandyToCart = new EventEmitter<Candy>();

  //Will need to talk to cart
  onAddCandy(event) {
    console.log('Add', event);
    this.addingCandyToCart.emit(event);
  }

}
