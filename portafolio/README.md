# Portafolio — Augusto Martinez

Hecho con Vite + React.

## Correrlo en tu compu

```bash
npm install
npm run dev
```

Abrí el link que aparece en la terminal (normalmente http://localhost:5173).

## Qué editar

- `src/data/perfil.js` → tu mail, GitHub y LinkedIn (donde dice COMPLETAR).
- `src/data/proyectos.js` → textos, tecnologías, estado y links de cada proyecto.
  Para sumar un proyecto, copiá un objeto de la lista y cambiale los datos.
- Capturas: guardalas en `public/capturas/` y poné la ruta en el campo `imagen`
  (por ejemplo `'/capturas/agl.png'`). Mientras esté vacío se ve la ilustración.
- Colores: están todos al principio de `src/index.css`.

## Subirlo a GitHub

```bash
git init
git add .
git commit -m "Primer versión del portafolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portafolio.git
git push -u origin main
```

(Primero creá el repositorio vacío `portafolio` en github.com.)

## Publicarlo en Vercel

1. Entrá a vercel.com → **Add New… → Project**.
2. Elegí el repositorio `portafolio`.
3. Vercel detecta Vite solo. Tocá **Deploy**.

Cada vez que hagas `git push`, la página se actualiza sola.
