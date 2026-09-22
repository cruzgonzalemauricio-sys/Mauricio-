# CRÈME — Tema de Shopify

Este ZIP contiene un tema completo de Shopify (Online Store 2.0, Liquid +
secciones editables) con el mismo diseño, textos e identidad visual que la
web de CRÈME construida antes, incluyendo las fotografías reales de la marca.

## Cómo instalarlo

1. En tu panel de Shopify: **Tienda online → Temas**
2. Botón **"Añadir tema" → "Subir archivo ZIP"**
3. Sube `creme-shopify-theme.zip` tal cual (sin descomprimir)
4. Cuando termine de procesar, pulsa **"Personalizar"** para verlo y
   publícalo cuando estés listo con **"Acciones → Publicar"**

## Qué incluye

- **Portada completa**: las 9 secciones del sitio original (hero, filosofía
  de marca, productos destacados, "juntos en cada aventura", por qué CRÈME,
  nuestra historia, testimonios, comunidad Instagram, newsletter), todas
  editables desde el personalizador de temas de Shopify (textos, imágenes,
  botones, bloques).
- **Páginas de tienda funcionales**: producto, colección, carrito, buscador,
  404, página genérica, blog/artículo y cuenta de cliente (login, registro,
  pedidos, direcciones) — con estilo simple pero coherente con la marca, ya
  que el encargo original era la home.
- **Las fotografías reales** de CRÈME (de su Instagram) ya incluidas en
  `assets/`.
- El mismo sistema de color (crema / marino / camel / oliva) y tipografías
  (Playfair Display + Inter).

## Antes de publicar

- **Productos destacados**: por defecto muestra 3 tarjetas de ejemplo
  (Tartán, Pata de Camel, Verde Oliva). En cuanto crees tus productos reales
  en Shopify, edita la sección "Productos destacados" en el personalizador y
  selecciona tu colección — pasará a mostrar productos reales automáticamente
  (imagen, precio, variantes de color si las tienes configuradas).
- **Testimonios**: siguen siendo los mismos placeholders marcados como
  "ejemplo", listos para sustituir por reseñas reales desde el
  personalizador (son bloques, no código).
- **Redes sociales y menú**: añade tus enlaces reales de Instagram/TikTok y
  las páginas de FAQ/envíos/devoluciones/legal desde el personalizador
  (footer) y el menú de navegación de Shopify.
- **Newsletter**: el formulario está conectado al sistema nativo de clientes
  de Shopify (añade el tag "newsletter" a quien se apunte). Si usas Klaviyo
  u otra app de email marketing, ese formulario se puede sustituir por el
  snippet de la app en cuestión.

## Notas técnicas

- El CSS de las 9 secciones de la home (`assets/creme-base.css`) es el
  resultado exacto de compilar el mismo proyecto React/Tailwind — no hay
  build step en Shopify, así que si más adelante quieres añadir nuevas
  clases de utilidad, tendrán que añadirse a mano en `creme-theme.css`.
- El JavaScript (`assets/creme-theme.js`) es vanilla JS sin dependencias:
  menú móvil, cabecera sticky, animaciones al hacer scroll y el selector de
  variantes de producto.
