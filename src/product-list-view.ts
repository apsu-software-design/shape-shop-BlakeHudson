import { Model } from './shape-shop-model'

export class ProductListView {
    private state: Model;

    public constructor(currentState: Model) {
        this.state = currentState;
    }

    /**
     * getView
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