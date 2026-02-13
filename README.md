# Volarq - React

Sitio web del estudio de arquitectura Volarq convertido a React.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Build para producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist`.

## Preview de producción

```bash
npm run preview
```

## Estructura del proyecto

```
volarq/
├── public/          # Archivos estáticos (CSS, imágenes, fuentes)
├── src/
│   ├── components/  # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx      # Componente principal
│   ├── main.jsx     # Punto de entrada
│   └── index.css    # Estilos principales
├── index.html       # HTML base
├── package.json     # Dependencias
└── vite.config.js   # Configuración de Vite
```

## Tecnologías utilizadas

- React 18
- Vite
- AOS (Animate On Scroll)
- Bootstrap (CSS)
- Font Awesome

## Características

- ✅ Navegación suave entre secciones
- ✅ Animaciones con AOS
- ✅ Diseño responsive
- ✅ Portfolio con galería de imágenes
- ✅ Botón de WhatsApp flotante
- ✅ Menú móvil responsive
