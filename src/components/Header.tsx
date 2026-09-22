import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Arneses", href: "#productos" },
  { label: "Nuestra historia", href: "#historia" },
  { label: "Guía de tallas", href: "#guia-tallas" },
  { label: "Contacto", href: "#newsletter" },
];

function IconSearch() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.6-3.6 5-5.5 7.5-5.5s5.9 1.9 7.5 5.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-soft/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(42,50,71,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-brand flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/creme-logo-circle.png"
            alt="CRÈME"
            className={`rounded-full object-cover transition-all duration-500 ${
              scrolled ? "h-10 w-10" : "h-12 w-12"
            }`}
          />
          <span className="hidden sm:block font-serif text-xl tracking-wide text-ink">
            CRÈME
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-ink-soft hover:text-ink transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-camel-deep transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5 text-ink">
          <button aria-label="Buscar" className="hidden sm:inline-flex hover:text-camel-deep transition-colors">
            <IconSearch />
          </button>
          <button aria-label="Mi cuenta" className="hidden sm:inline-flex hover:text-camel-deep transition-colors">
            <IconUser />
          </button>
          <button aria-label="Carrito" className="inline-flex hover:text-camel-deep transition-colors relative">
            <IconBag />
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-camel-deep text-[9px] font-semibold text-cream-soft">
              0
            </span>
          </button>

          <button
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex flex-col gap-1.5 p-1"
          >
            <span className={`h-px w-6 bg-ink transition-all ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-all ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-cream-soft transition-all duration-400 ease-out ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <nav className="container-brand flex flex-col gap-1 pt-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-cream-line text-lg font-serif text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
