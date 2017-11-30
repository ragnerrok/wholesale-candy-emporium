import { Component, OnInit } from "@angular/core";
import { Candy } from "./candy.model";
import { CandyService } from "./candy.service";

@Component({
  selector: 'app-candy-product-pages',
  templateUrl: './candy-product-page.component.html',
  host: {'class': 'col-9 p-0'}
})
export class CandyProductPageComponent implements OnInit {
  //this is where I would start having the app go ask the backend "hey what candy I got?"
  candy: Candy;

  constructor(private candyService: CandyService) {}

  ngOnInit() {
    this.candy = this.candyService.getChosenCandy();
  }



}
