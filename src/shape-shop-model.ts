
import {Product} from './products';

/**
 * The model maintains the state of the application,
 * list of products and 
 * list of quantities for each product. 
 */
export class Model{
    private shopping_cart: Product[] = [];
    private quantity_cart: number[] = [];

    /**
     * adds a new product to shopping cart
     * @param prod Product object to be added to cart
     */
    public addProduct(prod: Product){
        this.shopping_cart.push(prod);
    }

    /**
     * addQuantity
     */
    public setQuantityOfItem(qty: number) {
        this.quantity_cart.push(qty);
    }
    
    /**
     * removes a product based on the index of that product in a list
     * @param position index in of profuct to be removed
     */
    public removeProduct(position: number){
        this.shopping_cart.splice(position,1);
        this.quantity_cart.splice(position, 1);
    }
    
    /**
     * itemsInCart returns a list of all products in cart
     */
    public itemsInCart(): Product[] {
        return this.shopping_cart;   
    }

    /**
     * itemQuantity
     */
    public itemQuantity(): number[] {
        return this.quantity_cart;
    }


}