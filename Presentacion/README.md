# Presentacion (HTML/CSS/JS)

Estructura solicitada:

```
Presentacion
└─ src
   ├─ Estilos
   │  └─ style.css
   ├─ pagina
   │  └─ index.html
   └─ javascript
      └─ main.js
└─ img
   ├─ profile.svg
   ├─ iglesia.svg
   ├─ practicas.svg
   └─ imss.svg
```

## Cómo abrir
1. Descarga y descomprime el ZIP.
2. Abre `Presentacion/src/pagina/index.html` en tu navegador.

## Personalización rápida
- Fondo por sección: cambia en `style.css` las variables `--bg1`, `--bg2`, `--bg3` o asigna tu propia imagen con CSS usando `--section-bg: url('../../img/mi-fondo.jpg') center/cover fixed no-repeat;` en el selector del `section` que desees.
- Carrusel: reemplaza las imágenes dentro de `.carousel-track` o deja solo una `<img>` si no quieres carrusel.
- Línea de tiempo: edita los nodos `.milestone` en la sección Educación.
- Tarjetas de experiencia: reemplaza cada imagen y texto dentro de `.card`.

## Tecnologías
- HTML5 + CSS + JavaScript puro.
- Bootstrap reboot/grid (opcional, no invasivo) por CDN.
- Scroll-snap para navegación vertical por secciones sin "cambiar de página".