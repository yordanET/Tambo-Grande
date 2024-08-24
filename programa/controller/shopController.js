import Product from '../model/product.js';
import Order from '../model/order.js';

class ShopController {
    constructor() {
        this.products = [];
        this.orders = [];
        this.init();
    }

    init() {
        // Agregar productos iniciales
        this.addProduct(new Product(1, "Quinoa", 10.5, 50));
        this.addProduct(new Product(2, "Chia", 15.0, 30));

        this.renderProducts();
    }

    addProduct(product) {
        this.products.push(product);
    }

    renderProducts() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        this.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <p><strong>${product.name}</strong></p>
                <p>Precio: $${product.price}</p>
                <p>Stock: ${product.stock}</p>
                <button onclick="shopController.addToCart(${product.id})">Agregar al Carrito</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product && product.updateStock(1)) {
            const order = new Order(this.orders.length + 1, [product], "Cliente");
            this.orders.push(order);
            this.renderOrders();
            this.renderProducts();
        } else {
            alert("Stock no disponible");
        }
    }

    renderOrders() {
        const orderList = document.getElementById('order-list');
        orderList.innerHTML = '';

        this.orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order';
            orderDiv.innerHTML = `
                <p><strong>Pedido ID: ${order.orderId}</strong></p>
                <p>Cliente: ${order.customer}</p>
                <p>Total: $${order.calculateTotal()}</p>
            `;
            orderList.appendChild(orderDiv);
        });
    }
}

// Instanciar el controlador
window.shopController = new ShopController();
