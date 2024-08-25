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

    // Redirige según el rol seleccionado
    if (rol === 'administrador') {
        window.location.href = 'admin-inicio.html'; // Redirige a la página de administrador
    } else {
        window.location.href = 'cliente-inicio.html'; // Redirige a la página de cliente
    }

    return true; // Aquí puedes agregar la lógica para enviar los datos al servidor.
}

// Función para validar el inicio de sesión
function validarInicioSesion() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para verificar el nombre de usuario y la contraseña
    // Por simplicidad, vamos a utilizar valores estáticos
    const adminUser = "admin";
    const adminPass = "admin123";
    const clientUser = "cliente";
    const clientPass = "cliente123";

    if (username === adminUser && password === adminPass) {
        // Redirige a la interfaz de administrador
        alert("Inicio de sesión exitoso como administrador.");
        window.location.href = 'admin-inicio.html';
    } else if (username === clientUser && password === clientPass) {
        // Redirige a la interfaz de cliente
        alert("Inicio de sesión exitoso como cliente.");
        window.location.href = 'cliente-inicio.html';
    } else {
        // Muestra un mensaje de error
        alert("Nombre de usuario o contraseña incorrectos.");
    }
}

// Event listener para el cambio de selección del rol
document.getElementById('rol')?.addEventListener('change', mostrarCampoCodigo);

// Event listener para el botón de registro en register.html
document.querySelector('.auth-btn.register')?.addEventListener('click', validarFormularioRegistro);

// Event listener para el botón de inicio de sesión en login.html
document.querySelector('.auth-btn.login')?.addEventListener('click', validarInicioSesion);





