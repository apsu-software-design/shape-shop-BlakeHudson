import {Model} from './shape-shop-model'
/**
 * 
 */
export class cartView{
    private state: Model;

    /**
     * constructor
     * currentState: Model     
     * */
    public constructor(currentState: Model) {
        this.state = currentState;
    }

    /**
     * getView
    */
    public getView():String {
        let cart = this.state.itemsInCart();
        let quantity = this.state.itemQuantity();
        let items: String = new String();
            
            for (let i = 0; i < cart.length; i++) {
                let item: string = (            
                "\n"
                +("\n       Name: "+cart[i].getName().toString())
                +("\n      Price: "+cart[i].getPrice().toString())
                +("\nDescription: "+cart[i].getDescription().toString())
                +("\n   Quantity: "+quantity[i].toString()));
                items = items.concat(item);
            }

        return items;
    }
}