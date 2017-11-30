import { Component } from "@angular/core";
import { CartItem } from "../cart/cart-item.model";
import { CartItemsService } from "../cart/cart-items.service";

@Component({
  selector: 'app-preview-order',
  template: `
    <h4> Preview Order </h4>
    <div class="row" style="width: 100%;">
      <app-cart-item class="col-3"
        [cartItem]="cartItem"
        *ngFor="let cartItem of cartItems"
        ></app-cart-item>
    </div>
    <h6>$ {{ cartTotal }} </h6>
    <a class="btn btn-primary" (click)="onCompleteOrder()">Complete Order</a>
  `,
})
export class PreviewOrderComponent {
    cartTotal: number;
    cartItems: CartItem[];

    constructor(private cartItemsService: CartItemsService) {}

    ngOnInit() {
      this.cartItems = this.cartItemsService.getCartItems();
    //  this.cartTotal = this.cartItemsService.getTotalPrice();
    }

    onCompleteOrder() {
      this.cartItemsService.completeItemOrder();
    }
}
