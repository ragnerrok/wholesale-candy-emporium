import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ShowroomComponent } from './showroom/showroom.component';
import { ShowroomCandyCardsComponent } from './showroom/showroom-candy-cards.component';
import { ShowroomCandyCardComponent } from './showroom/showroom-candy-card.component';
import { CandyProductPageComponent } from './showroom/candy-product-page.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { CartTotalComponent } from './cart/cart-total.component';
import { CartItemComponent } from './cart/cart-item.component';

import { CandyService } from './showroom/candy.service';
import { CartItemsService } from './cart/cart-items.service';


import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ShowroomComponent,
    ShowroomCandyCardsComponent,
    ShowroomCandyCardComponent,
    CandyProductPageComponent,

    CheckoutComponent,
    CartComponent,
    CartTotalComponent,
    CartItemComponent
  ],
  imports: [ BrowserModule, routing],
  providers: [CandyService, CartItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
