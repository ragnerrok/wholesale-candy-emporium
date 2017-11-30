import { Component, OnInit } from "@angular/core";
import { Candy } from "./candy.model";
import { CandyService } from "./candy.service";

@Component({
  selector: 'app-showroom-candy-cards',
  template:`
    <div class="row">
        <app-showroom-candy-card class="col-m-8 col-md-offset-2"
          [candy]="candy"
          *ngFor="let candy of candies"
          ></app-showroom-candy-card>
    </div>
  `,
  host: {'class': 'col-9 p-0'}
})
export class ShowroomCandyCardsComponent implements OnInit {
  //this is where I would start having the app go ask the backend "hey what candy I got?"
  candies: Candy[];

  constructor(private candyService: CandyService) {}

  ngOnInit() {
    this.candies = this.candyService.getCandies();
  }

}
