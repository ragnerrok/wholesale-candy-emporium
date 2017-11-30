import { Injectable } from '@angular/core';
import { CartItem } from "./cart-item.model";
import { Candy } from "../showroom/candy.model";
import { CandyService } from '../showroom/candy.service';

@Injectable()
export class CartItemsService {
  //Im not really sure I can do this but Im gonna try
  private totalPrice: number = 0;
  private cartItems: CartItem[] = [];

  constructor(private candyService: CandyService) {}

  addCandyToCart(candy: Candy, amount?: number) {
    let newItem = new CartItem(candy, amount ? amount : 1);
    this.cartItems.push(newItem);
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
    console.log('SetPrice', this.totalPrice);
  }

  getTotalPrice(){
    console.log('GetPrice', this.totalPrice);
    return this.totalPrice;
  }

  completeItemOrder(){
    for(var i = 0; i < this.cartItems.length; i++){
      this.candyService.updateCandyInventory(this.cartItems[i].candy, this.cartItems[i].amount);
    }
    this.cartItems = [];
  }

}
