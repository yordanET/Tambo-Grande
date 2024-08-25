function habilitarEdicion() {
    // Habilitar campos para edición
    document.getElementById('nombre').disabled = false;
    document.getElementById('apellido').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('telefono').disabled = false;
    document.getElementById('dni').disabled = false;
    document.getElementById('password').disabled = false;

    // Mostrar botones de guardar y cancelar
    document.querySelector('.edit-actions').style.display = 'flex';
    // Ocultar botones de editar, cerrar sesión y eliminar
    document.querySelector('.account-actions').style.display = 'none';
}

function guardarCambios() {
    alert("Los datos de la cuenta se han guardado correctamente.");
    // Aquí puedes agregar la lógica para enviar los datos actualizados al servidor

    // Deshabilitar campos después de guardar
    document.getElementById('nombre').disabled = true;
    document.getElementById('apellido').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('telefono').disabled = true;
    document.getElementById('dni').disabled = true;
    document.getElementById('password').disabled = true;

    // Volver a mostrar los botones de editar, cerrar sesión y eliminar
    document.querySelector('.account-actions').style.display = 'flex';
    // Ocultar los botones de guardar y cancelar
    document.querySelector('.edit-actions').style.display = 'none';
}

function cancelarEdicion() {
    // Deshabilitar campos
    document.getElementById('nombre').disabled = true;
    document.getElementById('apellido').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('telefono').disabled = true;
    document.getElementById('dni').disabled = true;
    document.getElementById('password').disabled = true;

    // Volver a mostrar los botones de editar, cerrar sesión y eliminar
    document.querySelector('.account-actions').style.display = 'flex';
    // Ocultar los botones de guardar y cancelar
    document.querySelector('.edit-actions').style.display = 'none';
}

function cerrarSesion() {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        window.location.href = 'index.html'; // Redirige a la página de inicio (index.html)
    }
}

function eliminarCuenta() {
    if (confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.")) {
        alert("Cuenta eliminada correctamente.");
        window.location.href = 'index.html'; // Redirige a la página de inicio (index.html) después de la eliminación
        // Aquí puedes agregar la lógica para eliminar la cuenta del servidor
    }
}
