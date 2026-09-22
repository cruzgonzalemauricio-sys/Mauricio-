import { Reveal } from "./ui/Reveal";

export function OurStory() {
  return (
    <section id="historia" className="py-20 sm:py-28">
      <div className="container-brand grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src="/images/dog-portrait-plaid.jpg"
              alt="Retrato cercano de un perro con su arnés CRÈME de estampado tartán"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -z-10 -bottom-6 -right-6 h-full w-full max-w-md mx-auto lg:max-w-none rounded-[2rem] border border-camel/30"
          />
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="eyebrow mb-5">Nuestra historia</p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ink text-balance">
            No creamos una marca para perros.
            <br />
            Creamos una marca para quienes saben
            <br />
            que su perro es familia.
          </h2>
          <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-ink-soft max-w-lg">
            <p>
              CRÈME nació de algo muy simple: la idea de que un perro no es un
              complemento de la vida, es parte de ella. Se sienta a la mesa sin
              sentarse, decide los planes del fin de semana y ocupa un lugar en
              cada foto de familia.
            </p>
            <p>
              Por eso diseñamos cada arnés con la misma atención con la que
              elegiríamos algo para nosotros mismos: materiales que respetan
              su piel, formas que respetan su libertad de movimiento, y un
              diseño que respeta el buen gusto de quien pasea al otro extremo
              de la correa.
            </p>
          </div>
          <p className="mt-8 font-serif italic text-lg text-camel-deep">
            Porque ellos también forman parte de cada aventura.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
