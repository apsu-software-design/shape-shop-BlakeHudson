import {Model} from './shape-shop-model'
/**
 * processes view of shopping cart based on current state of the model
 */
export class cartView{
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
     * gives name, price, description, and quantity in cart
     * @returns Sting object of each item
     */
    public getView():String {
        let cart = this.state.itemsInCart();
        let quantity = this.state.itemQuantity();
        let items: String = new String("Items in cart:\n");
            
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