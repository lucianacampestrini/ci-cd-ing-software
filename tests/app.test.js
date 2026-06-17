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
        
        // DEMO PASO 2 (Falla el Pipeline): Al poner el botón verde en el HTML, 
        // esta línea va a buscar 'blue' y va a hacer explotar el test.
        //expect(boton.classList.contains('blue')).toBe(true);

        //  DEMO PASO 3 (Pasa el Pipeline): Para arreglar la build, 
         expect(boton.classList.contains('green')).toBe(true);
    });

    test('Al presionar el botón, debe mostrar un mensaje de éxito', () => {
        const boton = document.getElementById('btn-accion');
        boton.click(); // Simulamos el clic
        const mensaje = document.getElementById('mensaje');
        
        expect(mensaje.textContent).toBe('¡Acción realizada con éxito! El JS funciona.');
    });
});