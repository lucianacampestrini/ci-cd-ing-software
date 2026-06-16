/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

// Cargamos el HTML real para testearlo
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

describe('Pruebas del Frontend', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        jest.resetModules(); 
        require('../src/app.js'); // Cargamos la lógica
    });

    test('El botón debe tener la clase "blue" inicialmente', () => {
        const boton = document.getElementById('btn-accion');
        // Cuando en la demo cambies el botón a verde, este test va a fallar hasta que actualices la palabra a 'green' acá también.
        expect(boton.classList.contains('blue')).toBe(true);
    });

    test('Al presionar el botón, debe mostrar un mensaje de éxito', () => {
        const boton = document.getElementById('btn-accion');
        boton.click(); // Simulamos el clic
        const mensaje = document.getElementById('mensaje');
        
        expect(mensaje.textContent).toBe('¡Acción realizada con éxito! El JS funciona.');
    });
});


