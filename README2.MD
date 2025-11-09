# Proyecto DSW - Grupo 13

Este repositorio contiene el desarrollo del proyecto de la materia **Desarrollo de Software Web**.  
A continuación se documentan las mejoras sugeridas y cuáles fueron implementadas en la última versión del sitio (`dsw-tp-2-grupo13`), indicando la ruta del sitio y el archivo de código correspondiente.

---

## 📊 Comparativa de Mejoras

| Nº | Mejora Sugerida                        | Sitio1 (dsw-grupo13-kappa) | Sitio2 (dsw-tp-2-grupo13) |
|----|----------------------------------------|----------------------------|---------------------------|
| 1  | Interfaz con animaciones suaves         | ❌                         | ✅                        |
| 2  | Búsqueda/Filtrado en JSON local         | ❌                         | ✅                        |
| 3  | Paginación para la API externa          | ❌                         | ✅                        |
| 4  | Galería de imágenes interactiva         | ❌                         | ❌                        |
| 5  | Barras de progreso de habilidades       | ❌                         | ❌                        |
| 6  | Botones de redes sociales animados      | ❌                         | ✅                        |
| 7  | Carrusel de proyectos destacados        | ❌                         | ❌                        |

✅ = Implementado  
❌ = No implementado

---

## 🚀 Mejoras implementadas en Sitio2

### 1. Interfaz con animaciones suaves
- **Ruta del sitio:** `/`, `/peliculas`, `/libros`
- **Código fuente:**  
  - `src/components/Card.jsx` → tarjetas con efectos hover.  
  - `src/styles/card.css` → transiciones y animaciones CSS.  
- **Descripción:** Se añadieron transiciones al cargar tarjetas y efectos hover en botones, mejorando la experiencia visual.

---

### 2. Búsqueda/Filtrado en JSON local
- **Ruta del sitio:** `/peliculas`, `/libros`
- **Código fuente:**  
  - `src/pages/Peliculas.jsx` → buscador y filtros sobre datos locales.  
  - `src/pages/Libros.jsx` → lógica similar para filtrar por texto/categoría.  
  - `src/data/peliculas.json` y `src/data/libros.json` → archivos JSON locales.  
- **Descripción:** Se implementó un buscador por texto y filtros por categoría en los datos locales.

---

### 3. Paginación para la API externa
- **Ruta del sitio:** `/peliculas`
- **Código fuente:**  
  - `src/pages/Peliculas.jsx` → botones “Anterior” y “Siguiente” y estado de página actual.  
  - `src/components/Pagination.jsx` → componente reutilizable para la navegación entre páginas.  
- **Descripción:** Se añadieron controles de paginación para recorrer resultados de la API, mostrando la página actual.

---

### 6. Botones de redes sociales animados
- **Ruta del sitio:** `/contacto`
- **Código fuente:**  
  - `src/pages/Contacto.jsx` → renderiza los iconos de redes sociales.  
  - `src/styles/contacto.css` → efectos hover (cambio de color, escala).  
  - Uso de librerías como *FontAwesome* para los íconos.  
- **Descripción:** Se agregaron iconos de redes sociales con efectos hover, enlazando a perfiles ficticios.

---

## 📌 Evaluación
La evaluación se realizará revisando primero este README.md para identificar qué mejoras se cumplieron, y luego se validará la funcionalidad aplicada en el deploy:

- Versión inicial: [dsw-grupo13-kappa](https://dsw-grupo13-kappa.vercel.app/)  
- Versión final: [dsw-tp-2-grupo13](https://dsw-tp-2-grupo13.vercel.app/)

---
