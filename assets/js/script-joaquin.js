/* ============================================================
   SECCIÓN JOAQUÍN MICHEA — Interacción con querySelector
   Selecciona el botón "Ver Proyecto" de la sección #joaquin
   y usa addEventListener para cambiar su color al pasar el mouse.
   ============================================================ */

(function () {
    'use strict';

    // Seleccionar el enlace "Ver Proyecto" dentro de la sección de Joaquín
    var btnProyecto = document.querySelector('#joaquin .project-link');

    // Verificar que el elemento existe antes de agregar eventos
    if (btnProyecto) {

        // Guardar el estilo original del background para restaurarlo después
        var estiloOriginal = btnProyecto.style.background;

        // ---- Evento: mouseover → cambiar color del botón ----
        btnProyecto.addEventListener('mouseover', function () {
            // Cambiar a un gradiente al pasar el mouse
            btnProyecto.style.background = 'linear-gradient(135deg, #ff0000ff, #721717ff)';
            btnProyecto.style.boxShadow = '0 4px 14px rgba(255, 23, 23, 0.45)';
        });

        // ---- Evento: mouseout → restaurar color original ----
        btnProyecto.addEventListener('mouseout', function () {
            // Volver al gradiente azul original
            btnProyecto.style.background = estiloOriginal;
            btnProyecto.style.boxShadow = '';
        });
    }
})();
