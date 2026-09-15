import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-24 bg-amethyst text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="https://heilsteinschule.swiss/media/LogoName.png"
              alt="Heilsteinschule Schweiz"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Heilsteinkraft erfahren, spüren, lernen. Mit Kopf, Hand, Fuss und Herz zum
              Heilsteinberater. Zertifiziert vom SVNH.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <img
                src="https://heilsteinschule.swiss/media/SVNH-LOGO.jpg"
                alt="SVNH zertifiziert"
                className="h-12 w-12 rounded-lg bg-white/95 object-contain p-1"
              />
              <img
                src="https://heilsteinschule.swiss/media/GKS-Logo_farbig-ohne-Rand-300x300.png"
                alt="GKS zertifiziert"
                className="h-12 w-12 rounded-lg bg-white/95 object-contain p-1"
              />
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-citrine-light">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Start", to: "/" },
                { label: "Ausbildung", to: "/ausbildung" },
                { label: "News", to: "/news" },
                { label: "Laden & Praxis", to: "/laden-praxis" },
                { label: "Lehrfilme", to: "/lehrfilme" },
                { label: "Info-Tag", to: "/info-tag" },
                { label: "Kontakt", to: "/kontakt" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 transition hover:text-citrine-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-citrine-light">
              Rechtliches
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/impressum" className="text-white/70 transition hover:text-citrine-light">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-white/70 transition hover:text-citrine-light">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-white/70 transition hover:text-citrine-light">
                  AGB
                </Link>
              </li>
              <li>
                <Link to="/auftrag-bewerten" className="text-white/70 transition hover:text-citrine-light">
                  Bewertung abgeben
                </Link>
              </li>
              <li>
                <a
                  href="https://heilstein-shop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition hover:text-citrine-light"
                >
                  Online Shop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-citrine-light">
              Kontakt
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-citrine-light" />
                <span className="text-white/70">
                  Heilsteinschule Schweiz<br />
                  Dorfstrasse 22<br />
                  5025 Asp, Schweiz
                </span>
              </li>
              <li>
                <a href="tel:+41793896622" className="flex items-center gap-3 text-white/70 transition hover:text-citrine-light">
                  <Phone className="h-4 w-4 shrink-0 text-citrine-light" /> +41 79 389 66 22
                </a>
              </li>
              <li>
                <a href="mailto:info@heilsteinschule.ch" className="flex items-center gap-3 text-white/70 transition hover:text-citrine-light">
                  <Mail className="h-4 w-4 shrink-0 text-citrine-light" /> info@heilsteinschule.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Heilsteinschule Schweiz · CHE-160.366.095 · Alle Rechte vorbehalten</p>
          <p className="flex flex-wrap items-center justify-center gap-x-2">
            <span>heilsteinschule.ch</span><span>·</span>
            <span>heilsteinschule.swiss</span><span>·</span>
            <span>heilsteinschule.info</span><span>·</span>
            <span>heilsteinschule.com</span><span>·</span>
            <span>schweizer-heilsteine.ch</span>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-citrine text-amethyst-deep shadow-lift transition-all duration-300 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label="Nach oben scrollen"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}