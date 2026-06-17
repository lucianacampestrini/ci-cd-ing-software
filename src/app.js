const boton = document.getElementById('btn-accion');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    // Verificamos si el mensaje ya tiene la clase 'visible'
    if (mensaje.classList.contains('visible')) {
        // Si está visible, lo ocultamos quitando la clase
        mensaje.classList.remove('visible');
    } else {
        // Si está oculto, seteamos el texto exacto que espera Jest y lo mostramos
        mensaje.textContent = '¡Acción realizada con éxito! El JS funciona.';
        mensaje.classList.add('visible');
    }
});