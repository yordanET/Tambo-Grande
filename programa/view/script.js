// script.js

// Función para manejar la búsqueda de productos
document.querySelector('.search-input').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    // Aquí podrías implementar una función para filtrar productos en tiempo real
    console.log(`Buscando productos que coincidan con: ${searchQuery}`);
});

// Funciones para manejar el incremento y decremento de cantidad en la sección de ofertas
function incrementQuantity(button) {
    const input = button.previousElementSibling;
    let quantity = parseInt(input.value);
    input.value = ++quantity;
}

function decrementQuantity(button) {
    const input = button.nextElementSibling;
    let quantity = parseInt(input.value);
    if (quantity > 1) {
        input.value = --quantity;
    }
}

// Función para agregar un producto al carrito (ejemplo)
function addToCart(productName, productPrice) {
    console.log(`Producto añadido al carrito: ${productName} - Precio: S/. ${productPrice}`);
    // Aquí se puede añadir el código para actualizar el carrito y guardar en localStorage o en una base de datos
}
