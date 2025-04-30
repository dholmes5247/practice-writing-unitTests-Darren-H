/* 
Implement and test a basic shopping cart module. The module should include the 
following methods: 
1. addItem(cart, item, quantity): Adds an item to the cart. 
2. removeItem(cart, item): Removes an item from the cart. 
3. getTotalItems(cart): Returns the total number of items in the cart. */

const shoppingCart = {};

function addItem(item, quantity) {
    shoppingCart[item] = (shoppingCart[item] || 0) + quantity;
}

function removeItem(item) {
    delete shoppingCart[item];
}

function getTotalItems() {
    let total = 0;
    for (let item in shoppingCart) {
        total += shoppingCart[item];
    }
    return total;
}


module.exports = { shoppingCart, addItem, removeItem, getTotalItems };


//addItem("Apple", 3);
//addItem("Banana", 2);
//console.log("Cart:", shoppingCart); // { Apple: 3, Banana: 2 }
//console.log("Total Items:", getTotalItems()); // 5
//removeItem("Banana");
//console.log("Cart after removal:", shoppingCart); // { Apple: 3, Banana: 0 }
//console.log("Total Items after removal:", getTotalItems()); // 3

//moduleExports = {shoppingCart, addItem, removeItem, getTotalItems};