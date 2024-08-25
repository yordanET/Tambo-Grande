// Función para mostrar u ocultar el campo de código de empresa según el rol seleccionado
function mostrarCampoCodigo() {
    const rol = document.getElementById('rol').value;
    const codigoEmpresaContainer = document.getElementById('empresa-code-group');

    if (rol === 'administrador') {
        codigoEmpresaContainer.style.display = 'block';
    } else {
        codigoEmpresaContainer.style.display = 'none';
    }
}

// Función para validar el formulario de registro
function validarFormularioRegistro() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const telefono = document.getElementById('telefono').value;
    const dni = document.getElementById('dni').value;
    const rol = document.getElementById('rol').value;
    const codigoEmpresa = document.getElementById('codigo-empresa').value;

    // Expresiones regulares para validar los campos
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Mínimo 8 caracteres, al menos una letra y un número
    const regexTelefono = /^\d{9}$/; // Exactamente 9 dígitos
    const regexDNI = /^\d{8}$/; // Exactamente 8 dígitos

    if (!regexNombre.test(nombre)) {
        alert("El nombre es inválido. Debe contener al menos 2 caracteres y solo letras.");
        return false;
    }

    if (!regexNombre.test(apellido)) {
        alert("El apellido es inválido. Debe contener al menos 2 caracteres y solo letras.");
        return false;
    }

    if (!regexEmail.test(email)) {
        alert("El correo electrónico es inválido.");
        return false;
    }

    if (!regexPassword.test(password)) {
        alert("La contraseña es inválida. Debe contener al menos 8 caracteres, incluyendo una letra y un número.");
        return false;
    }

    if (!regexTelefono.test(telefono)) {
        alert("El teléfono es inválido. Debe contener exactamente 9 dígitos.");
        return false;
    }

    if (!regexDNI.test(dni)) {
        alert("El DNI es inválido. Debe contener exactamente 8 dígitos.");
        return false;
    }

    if (rol === 'administrador' && codigoEmpresa.trim() === '') {
        alert("El código de empresa es obligatorio para el rol de Administrador.");
        return false;
    }

    alert("Formulario de registro enviado correctamente.");
    return true; // Aquí puedes agregar la lógica para enviar los datos al servidor.
}

// Event listener para el cambio de selección del rol
document.getElementById('rol').addEventListener('change', mostrarCampoCodigo);

// Event listener para el botón de registro
document.querySelector('.auth-btn').addEventListener('click', validarFormularioRegistro);



