import { Component, OnInit, Input } from "@angular/core";
import { CartItemsService } from "./cart-items.service";

@Component({
  selector: 'app-cart-total',
  template: `
      <div class="card" style="margin:10px; width: 100%; padding: 10px;">
        <div class="card-block">
          <div class="card-title">
            <strong> Total </strong> $ {{ cartTotal }}
          </div>
          <a class="btn btn-primary ">Checkout</a>
        </div>
  `,
})
export class CartTotalComponent implements OnInit {
    @Input() cartTotal: number;

    constructor(private cartItemsService: CartItemsService) {}

    ngOnInit() {

    }

}
