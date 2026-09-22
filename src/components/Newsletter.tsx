import { useState } from "react";
import { Reveal } from "./ui/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section id="newsletter" className="py-20 sm:py-28">
      <div className="container-brand">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 sm:px-16 sm:py-20 text-center">
          <div
            aria-hidden
            className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-camel/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-olive/20 blur-3xl"
          />

          <p className="eyebrow !text-camel-light mb-4 relative">Únete</p>
          <h2 className="relative font-serif text-3xl sm:text-4xl text-cream-soft text-balance">
            Formar parte de la familia
          </h2>
          <p className="relative mt-4 max-w-md mx-auto text-sm leading-relaxed text-cream-soft/70">
            Novedades, lanzamientos y algún que otro contenido pensado para
            quienes, como nosotros, saben que un perro cambia la forma de ver
            la vida.
          </p>

          {sent ? (
            <p className="relative mt-8 font-serif text-lg italic text-camel-light">
              Gracias por unirte — ya sois familia CRÈME.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full sm:flex-1 rounded-full border border-cream-soft/25 bg-cream-soft/10 px-5 py-3.5 text-sm text-cream-soft placeholder:text-cream-soft/40 outline-none focus:border-camel-light transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-camel-light px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream-soft transition-colors"
              >
                Unirme
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
