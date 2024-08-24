import Product from './product.js';

class Order {
    constructor(orderId, products, customer) {
        this.orderId = orderId;
        this.products = products;  // Array de objetos Product
        this.customer = customer;
    }

    gdndsnnsnsj
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

export default Order;
