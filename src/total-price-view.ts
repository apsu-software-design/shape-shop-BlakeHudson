import {Model} from './shape-shop-model'

export class totalPriceView{
    private state: Model;

    public constructor(currentState: Model) {
        this.state = currentState;
    }

    /**
     * getView
 : String    */
    public getView(): String {
        
        let total: number = 0;
        for (let i = 0; i < this.state.itemsInCart.length; i++) {
            total += this.state.itemsInCart()[i].getPrice() * this.state.itemQuantity()[i];
        }
        return ("Shopping Cart Total: "+total);
    }
}