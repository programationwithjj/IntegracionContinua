// Función para validar el formulario antes de enviarlo
function validateForm() {
    // Recuperar todos los campos de entrada requeridos en el formulario
    const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true; // Variable para mantener el estado de la validación

    // Iterar sobre cada campo para verificar si está vacío
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            // Si algún campo está vacío, mostrar un mensaje de error y cambiar el color del borde a rojo
            input.style.borderColor = 'red';
            // Cambiar isValid a false para evitar que el formulario se envíe
            isValid = false;
            // Mostrar un mensaje de error específico si es necesario
            showError(input, 'Este campo es obligatorio.');
        } else {
            // Restablecer el color del borde si el campo está lleno
            input.style.borderColor = 'initial';
            // Ocultar el mensaje de error si el campo ha sido corregido
            hideError(input);
        }
    });

    // Devolver el estado de isValid; si es false, el formulario no se enviará
    return isValid;
}

// Función para mostrar un mensaje de error debajo del campo de entrada
function showError(input, message) {
    // Comprobar si ya existe un mensaje de error
    let error = input.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
        // Si ya existe, simplemente actualizar el mensaje
        error.textContent = message;
    } else {
        // Si no existe, crear un nuevo elemento div para el mensaje de error
        error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }
}

// Función para ocultar el mensaje de error
function hideError(input) {
    // Comprobar si existe un mensaje de error
    let error = input.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
        // Si existe, eliminarlo
        error.remove();
    }
}

// Opcionalmente, añadir un evento 'input' a cada campo para validar dinámicamente mientras el usuario escribe
document.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
    input.addEventListener('input', () => {
        // Validar el campo cada vez que el usuario escribe algo
        if (input.value.trim() !== '') {
            input.style.borderColor = 'green'; // Opcional: cambiar el color a verde si el campo es válido
            hideError(input); // Ocultar el mensaje de error si el campo ha sido llenado
        } else {
            input.style.borderColor = 'red'; // Mantener el borde rojo si está vacío
        }
    });
});
