import { Component } from "@angular/core";

@Component({
  selector: 'app-shipping',
  template: `
  <h4 class="spacing-on-top"> Shipping </h4>
  <img class="img-responsive girly-candy" style="max-width: 300px" alt="Money image">
  <div><button class="btn btn-primary" [routerLink]="['../preview']">Click to Add Shipping Address!</button></div>
  `,
})
export class ShippingComponent {


}
