# ReinventED Schools — Sitio web

Sitio web construido con **React + Vite + React Router**, replicando el mockup
`Mockup Web ReinventED 2026`.

## Requisitos
- Node.js 18+ (probado con Node 20)

## Cómo correrlo

```bash
npm install
npm run dev      # abre http://localhost:5173
```

Para generar la versión de producción:

```bash
npm run build    # genera /dist
npm run preview  # sirve /dist localmente
```

## Estructura de páginas

| Mockup | Ruta | Archivo |
|--------|------|---------|
| 1. Home | `/` | `src/pages/Home.jsx` |
| 2. Conócenos | `/conocenos` | `src/pages/Conocenos.jsx` |
| 3. ¿Por qué repensar la educación? | `/transforma` | `src/pages/Transforma.jsx` |
| 4. ReinventED Puembo | `/colegios/puembo` | `src/pages/School.jsx` |
| 5. ReinventED Santa Clara | `/colegios/santa-clara` | `src/pages/School.jsx` |
| 6. ReinventED IDV | `/colegios/idv` | `src/pages/School.jsx` |
| 7. ReinventED Rímac | `/colegios/rimac` | `src/pages/School.jsx` |
| 8. Implementa en tu club deportivo | `/transforma/club` | `src/pages/TransformaClub.jsx` |
| 9. Implementa en tu institución | `/transforma/colegio` | `src/pages/TransformaColegio.jsx` |
| + Noticias | `/noticias` | `src/pages/Noticias.jsx` |
| + Buscar | `/buscar` | `src/pages/Buscar.jsx` |

Las 4 sedes (Puembo, IDV, Santa Clara, Rímac) comparten la plantilla
`School.jsx` y se diferencian por colores/textos definidos en
`src/data/schools.js`.

## Imágenes

Todos los espacios de imagen son **placeholders** (`.img-ph`, con la etiqueta
"Imagen"). Para colocar una imagen real, reemplaza el `<div className="img-ph" />`
por un `<img src="/ruta/a/imagen.jpg" alt="..." />` o asigna la imagen como
`background-image`. Coloca tus archivos en la carpeta `public/`.

## Paleta de marca

Definida en `src/index.css` (`:root`): azul `#5277bd`, amarillo `#f4c20d`,
teal Puembo `#2bae8c`, lima Santa Clara `#9fc131`, azul/magenta IDV
`#1b4a77`/`#e5007e`, dorado/celeste Rímac `#f4c20d`/`#4fa3d1`.
