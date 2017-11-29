import { Component } from "@angular/core";
import { CartItem } from "./cart-item.model.ts";
import { Candy } from "../showroom/candy.model.ts";

@Component({
  selector: 'app-cart',
  template: `
    <div class="row">
      <app-cart-item class="col-12"
        [cartItem]="cartItem"
        *ngFor="let cartItem of cartItems"
        ></app-cart-item>

        <div class="col-12">
          <div class="card" style="margin:10px;">
            <div class="card-block">
              <p class="card-title">
                Total {{ cartTotal }}
              </p>
              <a class="btn btn-primary">Checkout</a>
            </div>
          </div>
        </div>
  `,
})
export class CartComponent {
  cartTotal: number = 100;
  cartItems: CartItem[] = [
    //using fake item till I get services up and running
    new CartItem(new Candy('Fundo Bar', 'Small', 1, 100), 10)
  ];
}
