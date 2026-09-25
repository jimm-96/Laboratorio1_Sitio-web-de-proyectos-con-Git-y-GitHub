// =============================================
//  script-christian.js
//  Interactividad DOM — Sección Christian Salazar
// =============================================

// Commit 2: Seleccionar los elementos de la sección con querySelector
const btnLeerMas = document.querySelector('#btn-leer-mas');
const detallesExtra = document.querySelector('#detalles-extra');

// Agregar addEventListener y modificar el DOM al hacer clic
if (btnLeerMas && detallesExtra) {
    btnLeerMas.addEventListener('click', function () {
        // Verificar si el contenido extra está visible
        const estaVisible = detallesExtra.style.display === 'block';

        if (estaVisible) {
            // Ocultar el contenido extra
            detallesExtra.style.display = 'none';
            btnLeerMas.textContent = 'Leer más';
        } else {
            // Mostrar el contenido extra
            detallesExtra.style.display = 'block';
            btnLeerMas.textContent = 'Leer menos';
        }
    });
}
