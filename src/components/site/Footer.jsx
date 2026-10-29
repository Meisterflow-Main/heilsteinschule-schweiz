import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, ExternalLink } from "lucide-react";

const FOOTER_GROUPS = [
  {
    title: "Ausbildung",
    links: [
      { label: "Ausbildung Übersicht", to: "/ausbildung" },
      { label: "Schulorte", to: "/schulorte" },
      { label: "Kalender", to: "/schultermine" },
      { label: "Exkursionen & Alpenseminar", to: "/geologische-reisen" },
      { label: "Schülerberichte", to: "/schueler-berichte" },
    ],
  },
  {
    title: "Die Schule",
    links: [
      { label: "Gründer & Geschichte", to: "/ueber-uns" },
      { label: "Timeline", to: "/ueber-uns#timeline" },
      { label: "Team", to: "/ueber-uns#team" },
      { label: "Interview", to: "/ueber-uns#interview" },
      { label: "Werner Kühni", to: "/ueber-uns#werner-kuehni" },
      { label: "Buch", to: "/brunos-buch" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Online-Shop", href: "https://heilstein-shop.com/" },
      { label: "Shop & Praxis", to: "/laden-praxis" },
      { label: "Produktsortiment", to: "/laden-praxis" },
      { label: "Beratung", to: "/laden-praxis" },
    ],
  },
  {
    title: "Regionen",
    links: [
      { label: "Alle Regionen", to: "/regionen" },
      { label: "Zürich", to: "/regionen/zuerich" },
      { label: "Basel", to: "/regionen/basel" },
      { label: "Aarau", to: "/regionen/aarau" },
      { label: "Baden", to: "/regionen/baden" },
      { label: "Brugg", to: "/regionen/brugg" },
      { label: "Olten", to: "/regionen/olten" },
      { label: "Münsingen", to: "/regionen/muensingen" },
      { label: "Asp", to: "/regionen/asp" },
      { label: "Wallbach", to: "/regionen/wallbach" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Kontakt", to: "/kontakt" },
      { label: "Standorte", to: "/schulorte" },
      { label: "Bewertung abgeben", to: "/auftrag-bewerten" },
    ],
  },
];

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
        <div className="grid gap-12 lg:grid-cols-[minmax(210px,1.3fr)_repeat(5,minmax(0,1fr))]">
          <div>
            <img src="https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/2d5efb176_HeilsteinschuleSchweizLogo.png" alt="Heilsteinschule Schweiz" className="h-auto w-full max-w-[240px] object-contain" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Heilsteinkraft erfahren, spüren, lernen. Mit Kopf, Herz, Hand und Fuss zum
              Heilsteinberater. Zertifiziert vom SVNH.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <img src="https://heilsteinschule.swiss/media/SVNH-LOGO.jpg" alt="SVNH zertifiziert" className="h-12 w-12 rounded-lg bg-white/95 object-contain p-1" />
              <img src="https://heilsteinschule.swiss/media/GKS-Logo_farbig-ohne-Rand-300x300.png" alt="GKS zertifiziert" className="h-12 w-12 rounded-lg bg-white/95 object-contain p-1" />
            </div>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-citrine-light">{group.title}</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {group.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/70 transition hover:text-citrine-light">{l.label}</a>
                    ) : (
                      <Link to={l.to} className="text-white/70 transition hover:text-citrine-light">{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/impressum" className="transition hover:text-citrine-light">Impressum</Link>
            <Link to="/datenschutz" className="transition hover:text-citrine-light">Datenschutz</Link>
            <Link to="/agb" className="transition hover:text-citrine-light">AGB</Link>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+41793896622" className="flex items-center gap-2 transition hover:text-citrine-light">
              <Phone className="h-4 w-4 text-citrine-light" /> +41 79 389 66 22
            </a>
            <a href="mailto:anfragen@heilsteinschule.ch" className="flex items-center gap-2 transition hover:text-citrine-light">
              <Mail className="h-4 w-4 text-citrine-light" /> anfragen@heilsteinschule.ch
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-citrine-light" /> Dorfstrasse 22, 5025 Asp
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Heilsteinschule Schweiz · CHE-160.366.095 · Alle Rechte vorbehalten</p>
          <p className="flex flex-wrap items-center justify-center gap-x-2">
            <span>heilsteinschule.ch</span><span>·</span>
            <span>heilsteinschule.swiss</span><span>·</span>
            <span>heilsteinschule.info</span><span>·</span>
            <span>heilsteinschule.com</span><span>·</span>
            <span>schweizer-heilsteine.ch</span>
          </p>
        </div>

        <div className="mt-6 flex justify-center border-t border-white/10 pt-6 text-center">
          <a href="https://meisterflow.ch" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 transition hover:text-citrine-light">
            Website erstellt von MeisterFlow
          </a>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-citrine text-amethyst-deep shadow-lift transition-all duration-300 ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        aria-label="Nach oben scrollen"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}