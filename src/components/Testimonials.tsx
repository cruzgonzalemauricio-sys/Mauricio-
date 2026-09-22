import { Reveal } from "./ui/Reveal";

// Testimonios de ejemplo (placeholder) — sustituir por reseñas reales de clientes.
const TESTIMONIALS = [
  {
    quote:
      "Desde que tiene el arnés CRÈME, Milo se deja poner el arnés solo con verlo. Se nota que está pensado para que estén cómodos de verdad.",
    name: "Ejemplo de testimonio",
    pet: "Milo · Caniche toy",
  },
  {
    quote:
      "Lo que más me gusta es que no parece un accesorio de tienda de mascotas: es bonito, combina con todo y se ve que está bien hecho.",
    name: "Ejemplo de testimonio",
    pet: "Nala · Bichón",
  },
  {
    quote:
      "Viajamos mucho con ella y este arnés ha aguantado playa, montaña y ciudad sin perder color. Y encima, precioso en fotos.",
    name: "Ejemplo de testimonio",
    pet: "Coco · Mestiza",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-cream-deep/60">
      <div className="container-brand">
        <Reveal className="max-w-xl mx-auto text-center mb-14">
          <p className="eyebrow mb-4">Familias CRÈME</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">
            Lo que cuentan quienes ya pasean con nosotros
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name + i}
              delay={i * 100}
              className="rounded-2xl bg-cream-soft p-8 shadow-card flex flex-col"
            >
              <span className="font-serif text-4xl text-camel-light leading-none">&ldquo;</span>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft italic">
                {t.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-cream-line">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft mt-0.5">{t.pet}</p>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-camel-deep/70">
                  Placeholder — testimonio de ejemplo
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
