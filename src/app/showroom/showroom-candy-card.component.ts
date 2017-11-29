import { Component, Input } from "@angular/core";
import { Candy } from "./candy.model.ts";

@Component({
  selector: 'app-showroom-candy-card',
  templateUrl: './showroom-candy-card.component.html'
})
export class ShowroomCandyCardComponent {
  //this is going to be the quick ways to add candy
  @Input() candy: Candy;

  //Will need to talk to cart
  onAdd() {

  }

}
