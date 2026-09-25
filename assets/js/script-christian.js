// =============================================
//  script-christian.js
//  Interactividad DOM — Sección Christian Salazar
// =============================================

// Seleccionar los elementos de la sección con querySelector
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

// =============================================
//  LIGHTBOX — Visor de imagen a pantalla completa
// =============================================

// Seleccionar elementos del lightbox con querySelector
const imgWrapper = document.querySelector('.img-lightbox-wrapper');
const imgOriginal = document.querySelector('.img-lightbox-wrapper img');
const lightboxModal = document.querySelector('#lightbox-modal');
const lightboxImg = document.querySelector('#lightbox-img');
const btnCerrar = document.querySelector('#lightbox-cerrar');

// Función para abrir el lightbox
function abrirLightbox() {
    // Copiar la fuente de la imagen al modal
    lightboxImg.src = imgOriginal.src;
    lightboxImg.alt = imgOriginal.alt;

    // Mostrar el overlay y activar animación
    lightboxModal.style.display = 'flex';

    // Pequeño delay para que la transición CSS se aplique
    setTimeout(function () {
        lightboxModal.classList.add('activo');
    }, 10);
}

// Función para cerrar el lightbox con animación
function cerrarLightbox() {
    lightboxModal.classList.remove('activo');

    // Esperar a que termine la animación antes de ocultar
    setTimeout(function () {
        lightboxModal.style.display = 'none';
    }, 350);
}

// Eventos del lightbox
if (imgWrapper && lightboxModal) {
    // Abrir al hacer clic en la imagen
    imgWrapper.addEventListener('click', abrirLightbox);

    // Cerrar con el botón ×
    btnCerrar.addEventListener('click', cerrarLightbox);

    // Cerrar al hacer clic fuera de la imagen (en el overlay)
    lightboxModal.addEventListener('click', function (e) {
        if (e.target === lightboxModal) {
            cerrarLightbox();
        }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightboxModal.classList.contains('activo')) {
            cerrarLightbox();
        }
    });
}
