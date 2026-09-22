import { Reveal } from "./ui/Reveal";

const MOMENTS = [
  {
    image: "/images/dog-coffee-companion.jpg",
    label: "Compañía",
    span: "sm:row-span-2",
  },
  {
    image: "/images/dog-city-walk.jpg",
    label: "Paseo",
    span: "",
  },
  {
    image: "/images/kitchen-family.jpg",
    label: "En familia",
    span: "",
  },
  {
    image: "/images/dog-home-counter.jpg",
    label: "Hogar",
    span: "",
  },
  {
    image: "/images/dog-portrait-plaid.jpg",
    label: "Cada día",
    span: "",
  },
];

export function Adventures() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-brand">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Estilo de vida</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink text-balance">
            Juntos en cada aventura
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            En casa, en la calle o de viaje: el arnés que elegís los acompaña
            en cualquier momento, porque la vida junto a ellos pasa
            sobre todo en lo cotidiano.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-4 sm:gap-5">
          {MOMENTS.map((moment, i) => (
            <Reveal
              key={moment.label}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl ${moment.span} ${
                i === 0 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/5] sm:aspect-auto sm:h-full">
                <img
                  src={moment.image}
                  alt={moment.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif italic text-cream-soft text-lg">
                {moment.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
