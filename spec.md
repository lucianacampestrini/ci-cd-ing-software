# Especificación de Desarrollo (SDD): Saludo Personalizado en Mayúsculas

## Contexto del Proyecto
Aplicación web sencilla con HTML, CSS puro y Vanilla JS, testeada con Jest y JSDOM.

## FASE 1: Análisis del código base
1. Leer e interpretar `src/index.html` para ubicar el contenedor principal (`.card`), el botón (`#btn-accion`) y el párrafo de salida (`#mensaje`).
2. Analizar `src/app.js` para comprender la lógica actual de eventos (toggle de visibilidad del mensaje).
3. Analizar `tests/app.test.js` para entender cómo se está inyectando el HTML en JSDOM y las aserciones actuales de Jest.

## FASE 2: Desarrollo del requerimiento y Pruebas
Implementar la siguiente funcionalidad asegurando que el diseño de la tarjeta no se rompa:

**1. Actualización de UI (`index.html`):**
- Agregar un `<label>` y un `<input type="text" id="input-nombre">` dentro de la `.card`, justo por encima del botón azul.
- El input debe estar restringido mediante atributos HTML para aceptar únicamente texto (strings).

**2. Actualización de Lógica (`app.js`):**
- Capturar el valor ingresado en el `#input-nombre`.
- Implementar un mecanismo para que, al momento de "guardar" (puede ser mediante el evento `blur` al salir del input, o en el evento `input`), el texto ingresado se transforme automáticamente a MAYÚSCULAS en el DOM.
- Modificar el evento `click` del `#btn-accion`: al presionarlo, el `#mensaje` debe mostrar exactamente el siguiente texto: `"¡Hola [NOMBRE EN MAYÚSCULAS]! Acción realizada con éxito! El JS funciona."` (reemplazando la variable con el valor real).

**3. Actualización de Pruebas (`app.test.js`):**
- Actualizar el test original para que contemple el nuevo texto esperado.
- Crear un nuevo test específico que simule la escritura de un nombre en el input, simule el guardado/blur, y verifique que el `value` del input se haya convertido a mayúsculas.
- Crear un test que verifique la integración completa: escribir en el input, hacer click en el botón, y validar que el `#mensaje` renderiza el saludo personalizado correctamente.

## FASE 3: Análisis del código desarrollado
1. Validar que la manipulación del DOM en `app.js` sea segura y eficiente (uso correcto de `getElementById` o `querySelector`, y `textContent`).
2. Asegurar que la lógica contemple casos borde básicos (ejemplo: si el usuario deja el input vacío, manejar el string vacío de forma elegante, sin que diga "¡Hola !").
3. Verificar que no se hayan introducido `console.log` innecesarios o código muerto.

## FASE 4: Verificación de pruebas
1. Asegurar que los nuevos bloques de `expect()` en Jest estén correctamente estructurados bajo la sintaxis actual de la suite.
2. Confirmar que el código propuesto permite ejecutar `npm test` devolviendo un 100% de éxito (verde) sin romper los selectores originales.