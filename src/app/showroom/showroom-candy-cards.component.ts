import { Component } from "@angular/core";
import { Candy } from "./candy.model.ts";

@Component({
  selector: 'app-showroom-candy-cards',
  template:`
    <div class="row">
        <app-showroom-candy-card class="col-m-8 col-md-offset-2"
          [candy]="candy"
          *ngFor="let candy of candies"
          ></app-showroom-candy-card>
    </div>
  `
})
export class ShowroomCandyCardsComponent {
  //this is where I would start having the app go ask the backend "hey what candy I got?"
  candies: Candy[] = [
              //name, size, price
    new Candy('Fundo Bar', 'Small', 1, 100),
    new Candy('Fundo Bar', 'Medium', 1.5, 100),
    new Candy('Fundo Bar', 'Large', 3, 100),

    new Candy('Extreme Micro Sours', '', 1, 100),

    new Candy('Solo Brand Twirly Ropes', 'Small', 10, 100),
    new Candy('Solo Brand Twirly Ropes', 'Medium', 12.75, 100)
  ];

}
