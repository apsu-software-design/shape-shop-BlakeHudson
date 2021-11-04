import {Model} from './shape-shop-model'
/**
 * 
 */
export class cartView{
    private state: Model;

    /**
     * constructor
currentState: Model     */
    public constructor(currentState: Model) {
        this.state = currentState;
    }

    /**
     * getView
    */
    public getView():String {
        let cart = this.state.itemsInCart();
        let items: String = new String();
        
        for (let i = 0; i < cart.length; i++) {
            let item:string = '';
            item += ("");
            item += ("       Name: "+cart[i].getName());
            item += ("      Price: "+cart[i].getPrice());
            item += ("Description: "+cart[i].getDescription());
            //item += ("   Quantity: "+cart[i].);
            items.concat(item);
        }

        return items;
    }
}