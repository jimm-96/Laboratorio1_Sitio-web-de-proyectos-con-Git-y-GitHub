/* ============================================================
   SCRIPT MAICOL — Dark Mode Toggle
   Usa querySelector para seleccionar el botón y addEventListener
   para reaccionar al click, alternando la clase 'dark-mode'.
   ============================================================ */

// Seleccionar el botón de dark mode con querySelector
const darkModeBtn = document.querySelector('#dark-mode-toggle');

// Íconos SVG: luna (modo claro) y sol (modo oscuro)
const iconMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`;

const iconSun = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>`;

// Leer preferencia guardada en localStorage o del sistema operativo
const savedTheme = localStorage.getItem('theme-maicol');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

// Función reutilizable para aplicar el tema y actualizar el botón
function applyTheme(dark) {
    if (dark) {
        document.documentElement.classList.add('dark-mode');
        darkModeBtn.innerHTML = iconSun;
        darkModeBtn.setAttribute('aria-label', 'Cambiar a modo claro');
    } else {
        document.documentElement.classList.remove('dark-mode');
        darkModeBtn.innerHTML = iconMoon;
        darkModeBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
    }
    // Guardar la preferencia en localStorage
    localStorage.setItem('theme-maicol', dark ? 'dark' : 'light');
}

// Aplicar el tema guardado al cargar la página
applyTheme(isDark);

// Agregar addEventListener para reaccionar al evento 'click'
darkModeBtn.addEventListener('click', function () {
    isDark = !isDark;

    // Modificar el DOM: agregar o quitar la clase 'dark-mode' en el <html>
    applyTheme(isDark);

    // Micro-animación de feedback: escala + rotación al hacer click
    darkModeBtn.style.transform = 'scale(0.75) rotate(180deg)';
    setTimeout(function () {
        darkModeBtn.style.transform = 'scale(1) rotate(0deg)';
    }, 200);
});
