import {Model} from './shape-shop-model'
/**
 * view for total price of all items in cart
 */
export class totalPriceView{
    private state: Model;
    /**
     * constructor takes the current model object to obtain state
     * currentState: Model     
     */
    public constructor(currentState: Model) {
        this.state = currentState;
    }

    /**
     * view for total price each item in cart
     * @returns Sting object of total price
     */
    public getView(): String {
        let total: number = 0;
        for (let i = 0; i < this.state.itemsInCart().length; i++) {
            total += this.state.itemsInCart()[i].getPrice() * this.state.itemQuantity()[i];
        }
        return ("Shopping Cart Total: "+total);
    }
}