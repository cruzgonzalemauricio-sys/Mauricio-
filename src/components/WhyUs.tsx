import { Reveal } from "./ui/Reveal";

const REASONS = [
  {
    title: "Comodidad",
    text: "Materiales suaves y transpirables, pensados para llevarlo puesto horas sin molestar.",
  },
  {
    title: "Ajuste a medida",
    text: "Varios puntos de regulación para que quede firme sin apretar, sea cual sea su forma.",
  },
  {
    title: "Seguridad",
    text: "Cierres reforzados y enganches pensados para caminar tranquilos, en la ciudad o en el campo.",
  },
  {
    title: "Diseño cuidado",
    text: "Estampados propios y colores atemporales: un accesorio que también os gusta llevar a vosotros.",
  },
  {
    title: "Resistencia",
    text: "Confeccionados para el uso diario, del parque a la lluvia y de la lluvia a casa.",
  },
  {
    title: "Pensado para el día a día",
    text: "Fácil de poner y quitar, para que el momento antes del paseo sea siempre sencillo.",
  },
];

function IconMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3 4 7v5c0 5 3.4 8.7 8 9 4.6-.3 8-4 8-9V7l-8-4Z" strokeLinejoin="round" />
    </svg>
  );
}

export function WhyUs() {
  return (
    <section id="guia-tallas" className="py-20 sm:py-28 bg-ink text-cream-soft">
      <div className="container-brand">
        <Reveal className="max-w-xl mb-16">
          <p className="eyebrow !text-camel-light mb-4">Por qué CRÈME</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-balance">
            Un arnés en el que confiar, cada día
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <div className="text-camel-light">
                <IconMark />
              </div>
              <h3 className="mt-4 font-serif text-lg">{reason.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-cream-soft/70 max-w-[32ch]">
                {reason.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
