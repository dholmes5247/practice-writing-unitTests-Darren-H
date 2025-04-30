const { shoppingCart, addItem, removeItem, getTotalItems } = require('../cart.js');

describe("Shopping Cart Functions", () => {

    beforeEach(() => {
        for (let item in shoppingCart) {
            delete shoppingCart[item]; // Reset cart between tests
        }
    });

    describe("addItem", () => {
        test("Positive: Add a new item with a valid name and quantity", () => {
            addItem("Apple", 2);
            expect(shoppingCart["Apple"]).toBe(2);
        });

        test("Negative: Add an item with a negative quantity", () => {
            addItem("Banana", -3);
            expect(shoppingCart["Banana"]).toBe(undefined);
        });

        test("Edge Case: Add an item with a quantity of 0", () => {
            addItem("Orange", 0);
            expect(shoppingCart["Orange"]).toBe(0);
        });
    });

    describe("removeItem", () => {
        test("Positive: Remove an existing item from the cart", () => {
            addItem("Milk", 1);
            removeItem("Milk");
            expect(shoppingCart["Milk"]).toBeUndefined();
        });

        test("Negative: Attempt to remove an item not in the cart", () => {
            removeItem("Eggs");
            expect(shoppingCart["Eggs"]).toBeUndefined();
        });

        test("Edge Case: Remove the last item from the cart", () => {
            addItem("Juice", 5);
            removeItem("Juice");
            expect(getTotalItems()).toBe(0);
        });
    });

    describe("getTotalItems", () => {
        test("Positive: Calculate the total number of items correctly", () => {
            addItem("Bread", 2);
            addItem("Butter", 3);
            expect(getTotalItems()).toBe(5);
        });

        test("Negative: Handle an empty cart", () => {
            expect(getTotalItems()).toBe(0);
        });

        test("Edge Case: Calculate with large quantities", () => {
            addItem("Rice", 1000);
            addItem("Beans", 2000);
            expect(getTotalItems()).toBe(3000);
        });
    });

});