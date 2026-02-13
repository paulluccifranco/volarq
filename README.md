# Volarq - React

Sitio web del estudio de arquitectura Volarq convertido a React con diseño moderno y mobile first.

## 🎨 Diseño

El sitio ha sido rediseñado siguiendo una estructura moderna y limpia, inspirada en sitios profesionales contemporáneos, con enfoque en **mobile first**.

### Características del diseño:

- ✅ Diseño mobile first (responsive desde móvil)
- ✅ Navegación moderna con menú hamburguesa
- ✅ Hero section con mensaje principal destacado
- ✅ Servicios con numeración (01, 02, 03, 04)
- ✅ Secciones con títulos grandes y texto descriptivo
- ✅ Portfolio con grid responsive y modal de imágenes
- ✅ Formulario de contacto integrado
- ✅ Animaciones suaves con AOS
- ✅ Botón flotante de WhatsApp

## 📦 Instalación

```bash
npm install
```

## 🚀 Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🏗️ Build para producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist`.

## 👀 Preview de producción

```bash
npm run preview
```

## 📁 Estructura del proyecto

```
volarq/
├── public/              # Archivos estáticos (CSS, imágenes, fuentes)
│   ├── css/            # Estilos originales
│   ├── images/         # Imágenes del sitio
│   └── js/             # Scripts originales (no usados en React)
├── src/
│   ├── components/     # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── CallToAction.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── styles/         # Estilos modernos
│   │   └── modern.css
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos principales
├── index.html          # HTML base
├── package.json        # Dependencias
└── vite.config.js      # Configuración de Vite
```

## 🛠️ Tecnologías utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll
- **Bootstrap (CSS)** - Sistema de grid (parcialmente)
- **Font Awesome** - Iconos

## 📱 Secciones del sitio

1. **Hero** - Mensaje principal y llamada a la acción
2. **About (Quienes Somos)** - Información sobre el estudio
3. **Services** - Servicios numerados con descripción
4. **Call to Action** - Sección motivacional
5. **Portfolio (Diseños)** - Galería de proyectos
6. **Contact** - Formulario de contacto
7. **Footer** - Información de contacto y redes sociales

## 🎯 Características principales

- **Navegación suave** entre secciones
- **Menú móvil** con animación
- **Animaciones** con AOS al hacer scroll
- **Portfolio interactivo** con modal de imágenes
- **Formulario de contacto** funcional
- **Diseño responsive** en todos los dispositivos
- **Botón de WhatsApp** flotante

## 📝 Notas

- El formulario de contacto actualmente simula el envío. Para producción, deberás integrarlo con tu backend o servicio de email (como EmailJS, Formspree, etc.)
- Las imágenes deben estar en la carpeta `public/images/`
- Los estilos originales se mantienen en `public/css/` para compatibilidad

## 🔧 Personalización

### Colores principales

Los colores se pueden modificar en `src/styles/modern.css`:

```css
:root {
  --primary-color: #72C05B;
  --primary-dark: #5aa048;
  --text-dark: #272727;
  --text-light: #64686d;
  /* ... */
}
```

### Contenido

El contenido de cada sección se puede modificar directamente en los componentes React en `src/components/`.

## 📄 Licencia

Ver archivo `License.txt` para más información.
