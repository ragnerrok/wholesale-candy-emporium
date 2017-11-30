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
        this.cartItems[i].amount = amount ? amount : this.cartItems[i].amount+1;
        foundCandy = true;
        break;
      }
    }
    if(!foundCandy){
      let newItem = new CartItem(candy, amount ? amount : 1);
      this.cartItems.push(newItem);
    }
    this.setTotalPrice();
    console.log('Add', this.cartItems)
  }

  updateCartItem(item: CartItem, amount: number) {
    this.cartItems[this.cartItems.indexOf(item)].amount = amount;
    this.setTotalPrice();
    console.log('Update', this.cartItems);
  }

  doesCandyExistInCart(candy: Candy){
    //
  }

  getCartItems(){
    console.log('CartItems')
    return this.cartItems;
  }

  deleteCartItem(item: CartItem){
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
    this.setTotalPrice();
    console.log('Delete', this.cartItems);
  }

  setTotalPrice(){
    let total = 0;
    for(var i = 0; i < this.cartItems.length; i++){
      total += (this.cartItems[i].candy.price * this.cartItems[i].amount);
    }
    this.totalPrice = total;
    this.subjectTotal.next(this.totalPrice);
    console.log('SetPrice', this.totalPrice);
  }

  getTotalPrice(): Observable<number>{
    console.log('GetPrice', this.totalPrice);
    return this.subjectTotal.asObservable();
  }

  completeItemOrder(){
    for(var i = 0; i < this.cartItems.length; i++){
      this.candyService.updateCandyInventory(this.cartItems[i].candy, this.cartItems[i].amount);
    }
    this.cartItems = [];
  }

}
