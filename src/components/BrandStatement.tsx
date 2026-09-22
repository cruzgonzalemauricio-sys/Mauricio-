import { Reveal } from "./ui/Reveal";

export function BrandStatement() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-brand">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">Nuestra filosofía</p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ink text-balance">
            «Diseñamos pensando en ellos, porque forman parte de nosotros.»
          </h2>
          <p className="mt-7 text-[15px] leading-relaxed text-ink-soft max-w-xl mx-auto">
            No hacemos accesorios para mascotas. Construimos una marca alrededor
            del vínculo entre las personas y sus perros. Cada arnés CRÈME está
            pensado para acompañar, no solo para sujetar: para el paseo de las
            ocho de la mañana, para la escapada del sábado y para todos los
            momentos pequeños que, sumados, son la vida juntos.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
          {[
            { label: "Familia", detail: "El vínculo primero" },
            { label: "Diseño", detail: "Estética cuidada" },
            { label: "Confianza", detail: "Ajuste seguro" },
            { label: "Aventura", detail: "Listos para salir" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 80} className="text-center sm:text-left">
              <p className="font-serif text-xl text-ink">{item.label}</p>
              <p className="mt-1 text-xs text-ink-soft">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
