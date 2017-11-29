import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ShowroomComponent } from './showroom/showroom.component';
import { ShowroomCandyCardsComponent } from './showroom/showroom-candy-cards.component';
import { ShowroomCandyCardComponent } from './showroom/showroom-candy-card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';

import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ShowroomComponent,
    ShowroomCandyCardsComponent,
    ShowroomCandyCardComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [ BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
