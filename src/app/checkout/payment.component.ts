import { Component } from "@angular/core";

@Component({
  selector: 'app-payment',
  template: `
  <h4 class="spacing-on-top"> Payment </h4>
  <img class="img-responsive girly-candy" style="max-width: 300px" alt="Money image">
  <div><button class="btn btn-primary" [routerLink]="['../shipping']">Click to Add Money!</button></div>
  `,
})
export class PaymentComponent {


}
