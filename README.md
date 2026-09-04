# Laboratorio 1: Sitio Web de Proyectos

## Descripción del Proyecto
Este sitio web es un portal colaborativo desarrollado por el equipo para presentar los proyectos individuales de cada integrante (**Maicol Aracena**, **Joaquin Michea** y **Christian Salazar**) de forma unificada y visualmente coherente.

El proyecto se construye de manera incremental utilizando **Git y GitHub**, aplicando buenas prácticas de control de versiones:
- Trabajo en ramas independientes por cada integrante (`branch`).
- Commits incrementales y descriptivos (mínimo 5 por integrante).
- Integración mediante **Pull Requests** hacia la rama `main`.
- Respeto a acuerdos comunes de diseño (paleta de colores, tipografía, estructura de tarjetas y clases CSS).

---

## Acuerdos de Estándares de Diseño

Para asegurar la coherencia visual y modularidad del sitio web entre todos los integrantes, se establecen los siguientes acuerdos obligatorios:

### 1. Paleta de Colores
Diseño profesional basado en tonos azules (estilo CV / Portfolio):
- **Azul Primario (Títulos y énfasis principal):** `#0f4c81`
- **Azul Acento (Botones y enlaces):** `#2563eb`
- **Azul Claro (Fondo de badges y detalles suaves):** `#e0f2fe`
- **Fondo General del Sitio:** `#f8fafc`
- **Fondo de Tarjetas:** `#ffffff`
- **Texto Principal:** `#1e293b`
- **Texto Secundario:** `#64748b`
- **Bordes y Separadores:** `#e2e8f0`

### 2. Tipografía
Tipografía moderna y legible con excelente acabado profesional:
- **Títulos (`h1`, `h2`, `h3`):** `'Segoe UI', system-ui, -apple-system, sans-serif` (peso 600–700).
- **Texto general y párrafos:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` (peso 400).
- **Etiquetas de tecnologías:** Misma tipografía en peso 500 y tamaño reducido (`0.85rem`).

### 3. Estructura Visual de Cada Sección (Tarjeta de Proyecto)
Cada integrante estructurará su proyecto dentro de una tarjeta con el siguiente orden:
1. **Encabezado (`.project-header`):** Título del proyecto (`.project-title`).
2. **Imagen / Vista previa (`.project-img`):** Imagen centrada del proyecto con bordes redondeados y tamaño homogéneo.
3. **Cuerpo de la tarjeta (`.project-body`):**
   - Descripción clara y concisa (`.project-description`).
   - Contenedor de tecnologías (`.tech-tags`) con etiquetas individuales (`.tech-tag`).
4. **Enlace / Acción (`.project-link`):** Botón estilizado con enlace al repositorio o demostración.

### 4. Nombres de Clases CSS Globales
Todos los integrantes deben usar exactamente estos nombres de clases en su código HTML:

| Elemento | Clase CSS | Descripción |
| :--- | :--- | :--- |
| Sección del integrante | `.member-section` | Contenedor principal de la sección de cada alumno. |
| Nombre del integrante | `.member-name` | Título (`<h2>`) con el nombre del integrante. |
| Contenedor de tarjetas | `.projects-grid` | Cuadrícula o contenedor flex para los proyectos. |
| Tarjeta de proyecto | `.project-card` | Contenedor individual de la tarjeta. |
| Encabezado de tarjeta | `.project-header` | Bloque superior del proyecto. |
| Título del proyecto | `.project-title` | Nombre del proyecto (`<h3>`). |
| Imagen del proyecto | `.project-img` | Imagen o captura del proyecto (`<img>`). |
| Cuerpo de tarjeta | `.project-body` | Bloque con el detalle y descripción. |
| Descripción | `.project-description` | Párrafo explicativo del proyecto (`<p>`). |
| Contenedor de tags | `.tech-tags` | Contenedor para agrupar las etiquetas de tecnologías. |
| Etiqueta individual | `.tech-tag` | Badge con cada tecnología utilizada (`<span>`). |
| Botón o enlace | `.project-link` | Enlace hacia el repositorio o demo del proyecto (`<a>`). |