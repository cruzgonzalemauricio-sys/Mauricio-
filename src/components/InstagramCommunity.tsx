import { Reveal } from "./ui/Reveal";

const GRID_IMAGES = [
  "/images/dog-portrait-plaid.jpg",
  "/images/product-tartan-set.jpg",
  "/images/dog-coffee-companion.jpg",
  "/images/kitchen-family.jpg",
  "/images/dog-city-walk.jpg",
  "/images/product-olive-stool.jpg",
  "/images/dog-home-counter.jpg",
  "/images/product-olive-macro.jpg",
];

function IconHeart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7.5-4.6-10.1-9.1C.4 8.9 1.7 5.4 5 4.4c2-.6 4 .1 5 1.9 1-1.8 3-2.5 5-1.9 3.3 1 4.6 4.5 3.1 7.5C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

export function InstagramCommunity() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-brand">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <p className="eyebrow mb-4">Comunidad</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">
            #UnoMásDeLaFamilia
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            Cada semana compartimos los momentos de las familias CRÈME.
            Etiquetanos en tus fotos para formar parte de esta comunidad.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-sm font-medium text-camel-deep border-b border-camel-deep/50 hover:border-camel-deep"
          >
            @cremeoriginal
          </a>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {GRID_IMAGES.map((src, i) => (
            <Reveal
              key={src + i}
              delay={i * 60}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt="Momento compartido por la comunidad CRÈME"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-ink/0 text-cream-soft opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <IconHeart />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
