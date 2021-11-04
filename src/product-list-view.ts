import {Model} from './shape-shop-model'

export class productListView{
    private state: Model;

    public constructor(currentState: Model) {
        this.state = currentState;
    }
}