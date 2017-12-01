import { Component } from "@angular/core";
import { CartItem } from "../cart/cart-item.model";
import { CartItemsService } from "../cart/cart-items.service";
import { Observable } from "rxjs/Observable"

@Component({
  selector: 'app-preview-order',
  template: `
    <h4 class="spacing-on-top"> Preview Order </h4>
    <div class="row" style="width: 100%;">
      <app-cart-item class="col"
        [cartItem]="cartItem"
        *ngFor="let cartItem of cartItems"
        ></app-cart-item>
    </div>
    <h6 class="text-color-blue font-large "> Total $ {{ cartTotal }} </h6>
    <a class="btn btn-primary" [routerLink]="['/complete']" (click)="onCompleteOrder()">Complete Order</a>
  `,
})
export class PreviewOrderComponent {
    cartTotal: number;
    cartItems: CartItem[];

    constructor(private cartItemsService: CartItemsService) {
      this.cartTotal = this.cartItemsService.getTotalPrice();
    }

    ngOnInit() {
      this.cartItems = this.cartItemsService.getCartItems();
      this.cartItemsService.getTotalPriceSubscriber().subscribe(cartTotal => this.cartTotal = cartTotal);
    }

    onCompleteOrder() {
      this.cartItemsService.completeItemOrder();
    }
}
