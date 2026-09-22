const COLUMNS = [
  {
    title: "Ayuda",
    links: ["FAQ", "Guía de tallas", "Envíos", "Devoluciones", "Contacto"],
  },
  {
    title: "Marca",
    links: ["Nuestra historia", "Arneses", "Comunidad", "Blog"],
  },
  {
    title: "Legal",
    links: ["Política de privacidad", "Términos y condiciones", "Cookies"],
  },
];

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTiktok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 3h2.4c.3 1.9 1.6 3.3 3.6 3.6v2.5c-1.4 0-2.7-.4-3.7-1.1v6.4c0 3.2-2.4 5.6-5.6 5.6a5.5 5.5 0 0 1-1-10.9v2.5a3 3 0 1 0 3.6 2.9V3Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-cream-deep/70 pt-16 pb-8">
      <div className="container-brand">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src="/images/creme-logo-circle.png"
                alt="CRÈME"
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="font-serif text-2xl text-ink">CRÈME</span>
            </a>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-ink-soft">
              Arneses y accesorios diseñados para quienes saben que su perro
              es, sencillamente, familia.
            </p>
            <div className="mt-6 flex items-center gap-4 text-ink">
              <a href="#" aria-label="Instagram" className="hover:text-camel-deep transition-colors">
                <IconInstagram />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-camel-deep transition-colors">
                <IconTiktok />
              </a>
              <a href="#" aria-label="Email" className="hover:text-camel-deep transition-colors">
                <IconMail />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-ink mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13.5px] text-ink-soft hover:text-camel-deep transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-cream-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} CRÈME. Todos los derechos reservados.</p>
          <p>Hecho con cariño para quienes pasean acompañados.</p>
        </div>
      </div>
    </footer>
  );
}
