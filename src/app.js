function hacerClic() {
    document.getElementById('mensaje').textContent = '¡Acción realizada con éxito! El JS funciona.';
}

// Asociar el evento solo si estamos en el navegador
if (typeof document !== 'undefined') {
    const boton = document.getElementById('btn-accion');
    if (boton) {
        boton.addEventListener('click', hacerClic);
    }
}

// Exportar la función para que el Test Unitario pueda leerla
if (typeof module !== 'undefined') {
    module.exports = { hacerClic };
}