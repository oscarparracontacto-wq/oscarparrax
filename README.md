# Portfolio — Óscar Parra

Web personal de Óscar Parra, realizador y director audiovisual.

## Estructura

```
index.html          Página principal
style.css           Estilos de todo el sitio
work/               Páginas de cada proyecto
videos/             Clips cortos de las tarjetas (mp4, mudos, en bucle)
img/                Fotos de rodaje y otras imágenes
```

## Convención de nombres

Cada proyecto usa el mismo identificador en los tres sitios:

- `work/premios-esland.html`
- `videos/premios-esland.mp4`
- `img/esland-rodaje-1.webp`, `-2`, `-3`, `-4`

## Añadir un proyecto nuevo

1. Renderizar el clip: MP4 H.264, 960x540, 5 segundos, sin audio, 1200 Kb/s
2. Subirlo a `videos/`
3. Subir las fotos de rodaje a `img/`
4. Crear la página en `work/`
5. En `index.html`, apuntar la tarjeta a `work/nombre.html` y `videos/nombre.mp4`

## Despliegue

GitHub Pages sirve la rama `main`. Cada subida republica el sitio en uno o dos minutos.

Web: https://oscarparracontacto-wq.github.io/oscarparrax/
