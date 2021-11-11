//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {Product} from './products';
import {Model} from './shape-shop-model';
import {cartView} from './cart-view';
import { ProductListView } from './product-list-view';
import {totalPriceView } from './total-price-view';
import  { indexNameView} from './index-name-view';

/**
 * Model variable that contains the current state of the program,
 * Used to get views for the user based on the selection
 */
let model: Model = new Model;
/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(); break;
      case '2': removeItemFromCart(); break;
      case '3': viewItemsInCart(); break;
      case '4': viewCartTotal(); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}
/**
 * Calls to separate functions,
 * One to add Product to cart and one to enter quantity.
 */
function addItemToCart() {
    letUserSelectItem();
    letUserSelectQuantity();
}

function letUserSelectItem() {
    let prods: ProductListView = new ProductListView(); //View for each available prouct to add to cart
    console.log(prods.getView());

    let response = readlineSync.question('> ')

    switch(response) { //handle each response
      case '1': model.addProduct(new Product("Triangle", 3.5, "It's got three sides!")); break;
      case '2': model.addProduct(new Product("Square", 4.5, "It's got four sides!")); break;
      case '3': model.addProduct(new Product("Pentagon", 5.5, "It's got five sides!")); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}

function letUserSelectQuantity() {
    console.log(`How many of this shape would you like to purchase?
  `);

    let response = readlineSync.question('> ')
    model.setQuantityOfItem(parseInt(response)); //Updates state model
    console.log(''); //extra empty line for revisiting
}

function removeItemFromCart() {
    console.log(`Select an item to be removed from the cart.
  `);
    //View for selecting items to delete
    viewIndexItems();

    let response = readlineSync.question('> ')
    let toRemove = parseInt(response);

    model.removeProduct(toRemove); //Updates state model
    console.log(''); //extra empty line for revisiting
}

function viewItemsInCart() {
  let view: cartView = new cartView(model);
  console.log(view.getView().toString());

}

function viewCartTotal() {
  let view: totalPriceView = new totalPriceView(model);
  console.log(view.getView());
}

function viewIndexItems() {
  let view: indexNameView = new indexNameView(model);
  console.log(view.getView().toString());
}
