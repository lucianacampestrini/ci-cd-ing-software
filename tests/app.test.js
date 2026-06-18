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

    test('El botón debe tener la clase de color correcta', () => {
        const boton = document.getElementById('btn-accion');
        expect(boton.classList.contains('blue')).toBe(true);
    });

    test('Al presionar el botón sin nombre, debe mostrar el mensaje estándar', () => {
        const boton = document.getElementById('btn-accion');
        boton.click(); // Simulamos el clic
        const mensaje = document.getElementById('mensaje');
        
        expect(mensaje.textContent).toBe('¡Acción realizada con éxito! El JS funciona.');
    });

    test('El input de nombre debe transformar el texto a mayúsculas automáticamente', () => {
        const inputNombre = document.getElementById('input-nombre');
        
        inputNombre.value = 'juan perez';
        // Simulamos el evento de input
        inputNombre.dispatchEvent(new Event('input'));
        
        expect(inputNombre.value).toBe('JUAN PEREZ');
    });

    test('Debe mostrar un saludo personalizado en mayúsculas al presionar el botón con un nombre', () => {
        const inputNombre = document.getElementById('input-nombre');
        const boton = document.getElementById('btn-accion');
        const mensaje = document.getElementById('mensaje');

        inputNombre.value = 'luciano';
        inputNombre.dispatchEvent(new Event('input')); // Asegura transformación
        
        boton.click();
        
        expect(mensaje.textContent).toBe('¡Hola LUCIANO! Acción realizada con éxito! El JS funciona.');
    });
});