// cart.js

// Inicializa el carrito al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateCartTotal();
    loadCartItems();
});

// Función para actualizar el total del carrito
function updateCartTotal() {
    let total = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-details p').textContent.replace('Precio: S/. ', ''));
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        total += price * quantity;
    });
    document.querySelector('.cart-total h3').textContent = `Total: S/. ${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeCartItem(button) {
    button.closest('.cart-item').remove();
    updateCartTotal();
}

// Función para cargar los productos del carrito (Ejemplo de cómo se podría hacer)
function loadCartItems() {
    // Aquí podrías cargar los elementos desde el localStorage o una base de datos
    console.log('Cargando productos del carrito...');
}
