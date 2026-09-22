# CRÈME — Web de marca

Homepage de CRÈME, marca de arneses y accesorios para perros, construida con
**React + TypeScript + Vite + Tailwind CSS v4**.

## Concepto

> "Tu perro no es una mascota más. Es uno más de la familia."

La identidad visual parte del logo real de la marca (fondo crema, wordmark
serif en azul marino, ilustración lineal del perro) y se extiende a toda la
web: tipografía (Playfair Display + Inter), paleta (crema, marino, camel,
verde oliva) y fotografía real de la marca (`public/images`), extraída de su
propio contenido de Instagram.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción (tsc + vite build)
npm run preview  # sirve el build de dist/
```

## Estructura

```
src/
  components/       Secciones de la home (Header, Hero, FeaturedProducts...)
  components/ui/     Componentes reutilizables (Button, Reveal)
  data/products.ts   Datos de producto (contenido de ejemplo, ver nota abajo)
  hooks/useReveal.ts Hook de animación al hacer scroll (IntersectionObserver)
public/images/       Fotografía real de marca y logo, ya optimizados para web
```

## Contenido pendiente de sustituir

Todo el contenido marcado explícitamente como placeholder debe reemplazarse
antes de publicar la web en producción:

- **Precios y especificaciones técnicas** de los arneses (`src/data/products.ts`).
- **Testimonios** (`src/components/Testimonials.tsx`) — actualmente son
  ejemplos ilustrativos, claramente etiquetados como tales.
- **Enlaces de navegación y redes sociales** que aún apuntan a `#`.
- Textos legales (política de privacidad, términos, envíos, devoluciones).
