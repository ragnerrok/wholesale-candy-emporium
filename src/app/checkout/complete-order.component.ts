import { Component } from "@angular/core";

@Component({
  selector: 'app-complete',
  template: `
  <a style="margin:20px;" class="text-baby-purple" [routerLink]="['']" >Continue Shopping</a>
  <div class="container">
    <img [routerLink]="['']" class="img-responsive girly-candy" style="max-width: 300px" alt="Candy image">
    <h4 class="useCandyFont text-baby-purple font-large"> Thank you for buying! </h4>
  </div>
  `,
})
export class CompleteOrderComponent {


}
