import {Model} from './shape-shop-model'
/**
 * 
 */
export class indexNameView{
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
        let items: String = new String("Items for removal:");
            
            for (let i = 0; i < cart.length; i++) {
                let item: string = (            
                "\n"
                +("\n    Item: "+i.toString())
                +("\n    Name: "+cart[i].getName().toString())
                +("\nQuantity: "+quantity[i].toString()));
                items = items.concat(item);
            }

        return items;
    }
}