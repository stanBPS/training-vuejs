export default {
    cart: {
        items: [],
    },

    /**
     * Add an item to the basket.
     *
     * @param {*} item the item to add
     */
    addToCart(item) {
        let itemToAdd = {
            ...item,
            quantity: 1,
        };
        const existingItem = this.cart.items.find(
            existingItem => existingItem.id === item.id,
        );
        if (existingItem) {
            itemToAdd = existingItem;
            itemToAdd.quantity++;
        } else {
            this.cart.items.push({
                ...item,
                quantity: 1,
            });
        }
    },

    incrementCartItem(itemId) {
        const itemToIncrement = this.cart.items.find(
            item => item.id === itemId,
        );
        itemToIncrement.quantity++;
    },

    decrementCartItem(itemId) {
        const itemToDecrement = this.cart.items.find(
            item => item.id === itemId,
        );
        itemToDecrement.quantity--;
        if (itemToDecrement.quantity <= 0) {
            this.cart.items.splice(this.cart.items.indexOf(itemToDecrement), 1);
        }
    },

    emptyCart() {
        this.cart.items = [];
    },
};
