import { Model } from './shape-shop-model'
/**
 * view for all items available for purchase
 */
export class ProductListView {
    private state: Model;

    /**
     * constructor takes the current model object to obtain state
     * currentState: Model     
     */
    public constructor(currentState: Model) {
        this.state = currentState;
    }

    /**
     * view for products available to purchase by name
     * @returns Sting object of each available product
     */
    public getView(): String {
        let products: String = (`Here you can select your shape. Pick an option:
    1. Buy a Triangle!
    2. Buy a Square!
    3. Buy a Pentagon!
    4. Go back. Don't buy anything.`);
        return products;
    }
}