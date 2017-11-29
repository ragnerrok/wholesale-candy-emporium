import { CartItem } from "./cart-item.model";

export class CartItemsService {
  //Im not really sure I can do this but Im gonna try
  private cartItems: CartItem[] = {};
  private idGenerator: number = 0;

  addItemToCart(item: CartItem) {
    this.cartItems[item.id] = item;
    console.log('Add', this.cartItems)
  }

  updateCartItem(id: number, amount: number) {
    this.cartItems[id].amount = currentInventory - amountBought;
    console.log('Update', this.cartItems);
  }

  getCartItems(){
    return this.cartItems;
  }

  getNewId(){
    this.idGenerator++;
    return this.idGenerator;
  }

  deleteCartItem(id: number){
    delete cartItems[id];
    console.log('Delete', this.cartItems);
  }

}
