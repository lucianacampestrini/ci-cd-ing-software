const boton = document.getElementById('btn-accion');
const mensaje = document.getElementById('mensaje');
const inputNombre = document.getElementById('input-nombre');

// Función para transformar el nombre a mayúsculas
inputNombre.addEventListener('input', () => {
    inputNombre.value = inputNombre.value.toUpperCase();
});

boton.addEventListener('click', () => {
    // Verificamos si el mensaje ya tiene la clase 'visible'
    if (mensaje.classList.contains('visible')) {
        mensaje.classList.remove('visible');
    } else {
        const nombre = inputNombre.value.trim();
        
        if (nombre === '') {
            mensaje.textContent = '¡Acción realizada con éxito! El JS funciona.';
        } else {
            mensaje.textContent = `¡Hola ${nombre}! Acción realizada con éxito! El JS funciona.`;
        }
        
        mensaje.classList.add('visible');
    }
});