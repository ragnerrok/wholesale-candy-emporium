import { CartItem } from "./cart-item.model";

export class CartItemsService {
  //Im not really sure I can do this but Im gonna try
  private cartItems: CartItem[] = [];

  addItemToCart(item: CartItem) {
    this.cartItems.push(item);
    console.log('Add', this.cartItems)
  }

  updateCartItem(item: CartItem, amount: number) {
    this.cartItems[this.cartItems.indexOf(item)].amount = amount;
    console.log('Update', this.cartItems);
  }

  getCartItems(){
    return this.cartItems;
  }

  deleteCartItem(item: CartItem){
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
    console.log('Delete', this.cartItems);
  }

}
