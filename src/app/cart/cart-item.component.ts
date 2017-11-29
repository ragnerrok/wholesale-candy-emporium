import { Component, Input } from "@angular/core";
import { CartItem } from "./cart-item.model.ts";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

}
