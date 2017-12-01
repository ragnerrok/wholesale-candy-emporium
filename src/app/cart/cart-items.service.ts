import { Injectable } from '@angular/core';
import { CartItem } from "./cart-item.model";
import { Candy } from "../showroom/candy.model";
import { CandyService } from '../showroom/candy.service';
import { Observable } from "rxjs/Observable"
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

@Injectable()
export class CartItemsService {
  //Im not really sure I can do this but Im gonna try
  private subjectTotal = new Subject<number>();
  private totalPrice: number = 0;
  private cartItems: CartItem[] = [];

  constructor(private candyService: CandyService) {}

  addCandyToCart(candy: Candy, amount?: number) {
    let foundCandy = false;
    for(var i = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].candy === candy){
        let chosenAmount = amount ? amount : this.cartItems[i].amount+1;
        if(this.cartItems[i].candy.inventory > chosenAmount){
          this.cartItems[i].amount = chosenAmount;
        } else {
          this.cartItems[i].amount = this.cartItems[i].candy.inventory;
        }
        foundCandy = true;
        break;
      }
    }
    if(!foundCandy){
      let chosenAmount = amount ? amount : 1;
      if(candy.inventory < chosenAmount){
        chosenAmount = candy.inventory;
      }
      let newItem = new CartItem(candy,chosenAmount);
      this.cartItems.push(newItem);
    }

    this.setTotalPrice();
  }

  updateCartItem(item: CartItem, amount: number) {
    this.cartItems[this.cartItems.indexOf(item)].amount = amount;
    this.setTotalPrice();
  }

  doesCandyExistInCart(candy: Candy){
    //
  }

  getCartItems(){
    return this.cartItems;
  }

  deleteCartItem(item: CartItem){
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
    this.setTotalPrice();
  }

  setTotalPrice(){
    let total = 0;
    for(var i = 0; i < this.cartItems.length; i++){
      total += (this.cartItems[i].candy.price * this.cartItems[i].amount);
    }
    this.totalPrice = total;
    this.subjectTotal.next(this.totalPrice);
  }

  getTotalPriceSubscriber(): Observable<number>{
    return this.subjectTotal.asObservable();
  }

  getTotalPrice(): number {
      return this.totalPrice;
  }

  completeItemOrder(){
    for(var i = 0; i < this.cartItems.length; i++){
      this.candyService.updateCandyInventory(this.cartItems[i].candy, this.cartItems[i].amount);
    }
    this.cartItems = [];
    this.setTotalPrice();
  }

}
