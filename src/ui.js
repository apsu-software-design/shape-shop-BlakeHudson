"use strict";
//User Interface for The Shopping Cart 
//@author James Church
exports.__esModule = true;
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var products_1 = require("./products");
var shape_shop_model_1 = require("./shape-shop-model");
var cart_view_1 = require("./cart-view");
var product_list_view_1 = require("./product-list-view");
var total_price_view_1 = require("./total-price-view");
var index_name_view_1 = require("./index-name-view");
// Hey look. It's a global variable. This is totally cool, right?
//let shopping_cart: Product[] = [];
//let quantity_cart: number[] = [];
var model = new shape_shop_model_1.Model;
/**
 * Function to run the UI
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                addItemToCart();
                break;
            case '2':
                removeItemFromCart();
                break;
            case '3':
                viewItemsInCart();
                break;
            case '4':
                viewCartTotal();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function addItemToCart() {
    letUserSelectItem();
    letUserSelectQuantity();
}
function letUserSelectItem() {
    var prods = new product_list_view_1.ProductListView(model);
    console.log(prods.getView());
    var response = readlineSync.question('> ');
    switch (response) { //handle each response
        case '1':
            model.addProduct(new products_1.Product("Triangle", 3.5, "It's got three sides!"));
            break;
        case '2':
            model.addProduct(new products_1.Product("Square", 4.5, "It's got four sides!"));
            break;
        case '3':
            model.addProduct(new products_1.Product("Pentagon", 5.5, "It's got five sides!"));
            break;
        default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}
function letUserSelectQuantity() {
    console.log("How many of this shape would you like to purchase?\n  ");
    var response = readlineSync.question('> ');
    model.setQuantityOfItem(parseInt(response));
    console.log(''); //extra empty line for revisiting
}
function removeItemFromCart() {
    console.log("Select an item to be removed from the cart.\n  ");
    // MAy need a new view here
    viewIndexItems();
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    model.removeProduct(toRemove);
    console.log(''); //extra empty line for revisiting
}
function viewItemsInCart() {
    var view = new cart_view_1.cartView(model);
    console.log(view.getView().toString());
}
function viewCartTotal() {
    var view = new total_price_view_1.totalPriceView(model);
    console.log(view.getView());
}
function viewIndexItems() {
    var view = new index_name_view_1.indexNameView(model);
    console.log(view.getView().toString());
}
