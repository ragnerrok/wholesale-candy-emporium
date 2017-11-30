import { CartItem } from "./cart-item.model";
import { Candy } from "../showroom/candy.model";

export class CartItemsService {
  //Im not really sure I can do this but Im gonna try
  private cartItems: CartItem[] = [];

  addCandyToCart(candy: Candy) {
    let newItem = new CartItem(candy, 1);
    this.cartItems.push(newItem);
    console.log('Add', this.cartItems)
  }

  updateCartItem(item: CartItem, amount: number) {
    this.cartItems[this.cartItems.indexOf(item)].amount = amount;
    console.log('Update', this.cartItems);
  }

  doesCandyExistInCart(candy: Candy){
    //
  }

  getCartItems(){
    return this.cartItems;
  }

  deleteCartItem(item: CartItem){
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
    console.log('Delete', this.cartItems);
  }

}
