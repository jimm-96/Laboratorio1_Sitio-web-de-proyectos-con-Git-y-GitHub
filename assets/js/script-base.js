/* ============================================================
   SCRIPT BASE — Dark Mode Toggle
   Crea un botón flotante en la esquina superior derecha
   para alternar entre modo claro y modo oscuro.
   ============================================================ */

(function () {
    'use strict';

    // ---- Crear el botón de toggle ----
    const btn = document.createElement('button');
    btn.id = 'dark-mode-toggle';
    btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
    btn.title = 'Cambiar modo de color';

    // Íconos SVG para sol (light) y luna (dark)
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

    const iconMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>`;

    // ---- Leer preferencia guardada ----
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    function applyTheme(dark) {
        if (dark) {
            document.documentElement.classList.add('dark-mode');
            btn.innerHTML = iconSun;
            btn.setAttribute('aria-label', 'Cambiar a modo claro');
        } else {
            document.documentElement.classList.remove('dark-mode');
            btn.innerHTML = iconMoon;
            btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
        }
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    // Aplicar tema inicial
    applyTheme(isDark);

    // ---- Evento de click ----
    btn.addEventListener('click', function () {
        isDark = !isDark;
        applyTheme(isDark);

        // Pequeña animación de feedback
        btn.style.transform = 'scale(0.85)';
        setTimeout(function () {
            btn.style.transform = 'scale(1)';
        }, 150);
    });

    // ---- Insertar en el DOM ----
    document.body.appendChild(btn);
})();

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
