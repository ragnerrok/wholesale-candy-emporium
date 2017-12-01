import { Component, OnInit } from "@angular/core";
import { CartItem } from "./cart-item.model";
import { Candy } from "../showroom/candy.model";
import { CartItemsService } from "./cart-items.service";
import { Observable } from "rxjs/Observable"

@Component({
  selector: 'app-cart',
  template: `
    <div class="row" style="width: 100%;">
      <app-cart-item class="col-12"
        [cartItem]="cartItem"
        *ngFor="let cartItem of cartItems"
        ></app-cart-item>

        <app-cart-total class="col-12" [cartTotal]="cartTotal"></app-cart-total>
        </div>
  `,
})
export class CartComponent implements OnInit {
  cartTotal: number;
  cartItems: CartItem[];
    //using fake item till I get services up and running
    //new CartItem(new Candy('Fundo Bar', 'Small', 1, 100), 10)

    constructor(private cartItemsService: CartItemsService) {
      this.cartTotal = this.cartItemsService.getTotalPrice();
    }

    ngOnInit() {
      this.cartItems = this.cartItemsService.getCartItems();
      this.cartItemsService.getTotalPriceSubscriber().subscribe(cartTotal => this.cartTotal = cartTotal);
    }




}
