// no-back.js

// Esta función se ejecuta cuando el usuario intenta regresar a la página anterior.
function disableBackNavigation() {
    window.history.pushState(null, "", window.location.href);

    window.onpopstate = function() {
        window.history.pushState(null, "", window.location.href);
    };
}

// Llama a la función para deshabilitar la navegación hacia atrás
disableBackNavigation();
