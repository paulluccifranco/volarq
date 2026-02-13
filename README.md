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

## 🔥 Deployment en Firebase

### Prerequisitos

1. **Instalar Firebase CLI** (si no lo tienes instalado):
```bash
npm install -g firebase-tools
```

2. **Iniciar sesión en Firebase**:
```bash
firebase login
```

### Pasos para deployar

1. **Inicializar Firebase en el proyecto** (solo la primera vez):
```bash
firebase init hosting
```

   Durante la inicialización:
   - Selecciona "Use an existing project" o crea uno nuevo
   - **Public directory**: `dist` (esta es la carpeta que genera Vite)
   - **Configure as a single-page app**: `Yes` (para que React Router funcione correctamente)
   - **Set up automatic builds**: `No` (o `Yes` si usas GitHub Actions)
   - **File dist/index.html already exists. Overwrite?**: `No`

2. **Construir el proyecto para producción**:
```bash
npm run build
```

   Esto generará los archivos optimizados en la carpeta `dist/`.

3. **Hacer el deploy**:
```bash
firebase deploy --only hosting
```

4. **Ver tu sitio en vivo**:
   Firebase te proporcionará una URL como: `https://tu-proyecto.web.app` o `https://tu-proyecto.firebaseapp.com`

### Configuración de Firebase

El archivo `firebase.json` ya está configurado con:
- **Public directory**: `dist`
- **Rewrites**: Configurado para SPA (Single Page Application) - todas las rutas redirigen a `index.html`

### Comandos útiles

```bash
# Ver el estado del proyecto
firebase projects:list

# Ver información del hosting
firebase hosting:sites:list

# Ver el historial de deploys
firebase hosting:channel:list

# Hacer deploy solo de hosting
firebase deploy --only hosting

# Hacer deploy a un canal de preview
firebase hosting:channel:deploy preview

# Abrir el sitio en el navegador después del deploy
firebase open hosting:site
```

### Variables de entorno (si las necesitas)

Si necesitas usar variables de entorno en producción:

1. Crea un archivo `.env.production` en la raíz del proyecto
2. Agrega tus variables:
```
VITE_API_URL=https://api.tudominio.com
VITE_EMAIL_SERVICE=emailjs
```

3. Vite automáticamente las incluirá en el build cuando ejecutes `npm run build`

### Notas importantes

- ✅ Asegúrate de ejecutar `npm run build` antes de cada deploy
- ✅ El archivo `firebase.json` ya está configurado correctamente
- ✅ Firebase Hosting es gratuito para proyectos pequeños
- ✅ El sitio se actualiza automáticamente después del deploy (puede tardar unos minutos)

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
