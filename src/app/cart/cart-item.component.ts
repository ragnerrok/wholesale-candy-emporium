import { Component, Input } from "@angular/core";
import { CartItem } from "./cart-item.model";
import { CartItemsService } from "./cart-items.service";


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  constructor(private cartItemsService: CartItemsService) {}

  onDeleteItem() {
    this.cartItemsService.deleteCartItem(this.cartItem);
  }

  onUpdateItem(amount: number){
    this.cartItemsService.updateCartItem(this.cartItem, amount);
  }

}
