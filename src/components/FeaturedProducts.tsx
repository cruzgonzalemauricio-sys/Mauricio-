import { products } from "../data/products";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

export function FeaturedProducts() {
  return (
    <section id="productos" className="py-20 sm:py-28 bg-cream-deep/60">
      <div className="container-brand">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <Reveal>
            <p className="eyebrow mb-4">Colección</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">
              Arneses pensados para ir juntos
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
              Cada modelo está pensado para acompañar sin incomodar: cómodo
              para ellos, bonito de llevar para vosotros.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-7">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 120} className="group">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-cream-soft shadow-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-5 pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-cream-soft text-xs tracking-wide">
                    {product.price}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-xl text-ink">{product.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft max-w-[26ch]">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color.name}
                      title={color.name}
                      className="h-4 w-4 rounded-full border border-ink/10"
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
                <a
                  href="#"
                  className="text-[13px] font-medium text-ink border-b border-camel-deep/60 hover:border-ink transition-colors"
                >
                  Ver producto
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-14 text-center">
          <Button href="#" variant="secondary">
            Ver toda la colección
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
