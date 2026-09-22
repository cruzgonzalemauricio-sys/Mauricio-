import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden
        className="absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-camel-light/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-40 -left-40 h-[360px] w-[360px] rounded-full bg-olive/10 blur-3xl"
      />

      <div className="container-brand relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <p className="eyebrow mb-6">CRÈME · Arneses &amp; accesorios</p>
          <h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] text-ink text-balance">
            Tu perro no es
            <br />
            una mascota más.
            <br />
            <span className="italic text-camel-deep">Es familia.</span>
          </h1>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Diseñamos arneses pensados para ir juntos: al paseo de cada mañana,
            al viaje del fin de semana y a cada pequeño instante del día a día
            que compartís los dos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#productos" variant="primary">
              Descubrir arneses
            </Button>
            <Button href="#historia" variant="secondary">
              Conocer nuestra historia
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-8 border-t border-cream-line pt-6">
            <div>
              <p className="font-serif text-2xl text-ink">100%</p>
              <p className="text-xs text-ink-soft mt-1">Diseñado para ellos</p>
            </div>
            <div className="h-8 w-px bg-cream-line" />
            <div>
              <p className="font-serif text-2xl text-ink">+480</p>
              <p className="text-xs text-ink-soft mt-1">Familias CRÈME</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] border border-camel/25" aria-hidden />
            <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src="/images/woman-dog-studio.jpg"
                alt="Una mujer abraza con cariño a su perro, vestido con un arnés CRÈME"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-6 sm:-left-10 w-40 sm:w-48 rounded-2xl bg-cream-soft p-3 shadow-card rotate-[-4deg]">
              <img
                src="/images/dog-city-walk.jpg"
                alt="Perro paseando por la ciudad con su arnés CRÈME"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <p className="mt-2 text-center font-serif text-xs italic text-ink-soft">
                Juntos, todos los días
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
