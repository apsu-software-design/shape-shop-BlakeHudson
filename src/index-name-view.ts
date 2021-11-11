import {Model} from './shape-shop-model'
/**
 * view for list of items name and position in cart for removal
 */
export class indexNameView{
    private state: Model;

    /**
     * constructor takes the current model object to obtain state
     * currentState: Model     
     */
    public constructor(currentState: Model) {
        this.state = currentState;
    }

    /**
     * view for each item in cart
     * gives a position reference and name for selecting along with quantity
     * @returns Sting object of each item
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