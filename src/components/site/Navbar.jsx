import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { label: "Start", to: "/" },
  { label: "Ausbildung", to: "/ausbildung" },
  { label: "News", to: "/news" },
  { label: "Laden & Praxis", to: "/laden-praxis" },
  { label: "Lehrfilme", to: "/lehrfilme" },
  { label: "Info-Tag", to: "/info-tag" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3" aria-label="Heilsteinschule Schweiz Startseite">
            <img
              src="https://heilsteinschule.swiss/media/LogoName.png"
              alt="Heilsteinschule Schweiz Logo"
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    active
                      ? "text-amethyst"
                      : "text-foreground/70 hover:text-amethyst"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-citrine" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+41793896622"
              className="hidden items-center gap-2 rounded-full bg-citrine px-4 py-2 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light sm:inline-flex"
            >
              <Phone className="h-4 w-4" /> 079 389 66 22
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full glass text-amethyst lg:hidden"
              aria-label="Menü öffnen"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "mt-2 max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass rounded-2xl p-3 shadow-soft">
            <nav className="flex flex-col">
              {NAV.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                      active ? "bg-amethyst/5 text-amethyst" : "text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:+41793896622"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-4 py-3 text-sm font-semibold text-amethyst-deep"
              >
                <Phone className="h-4 w-4" /> 079 389 66 22
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}