import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight, MapPin, Gem, GraduationCap, CalendarDays, MapPinned, BookOpen, Mountain } from "lucide-react";
import { REGIONS } from "@/data/regions";

const NAV = [
  { label: "Start", to: "/" },
  { label: "Ausbildung", to: "/ausbildung" },
  { label: "News", to: "/news" },
  { label: "Online Shop", href: "https://heilstein-shop.com/" },
  { label: "Lehrfilme", to: "/lehrfilme" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Info-Tag", to: "/info-tag" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [mobileRegions, setMobileRegions] = useState(false);
  const [ladenOpen, setLadenOpen] = useState(false);
  const [mobileLaden, setMobileLaden] = useState(false);
  const [ausbildungOpen, setAusbildungOpen] = useState(false);
  const [mobileAusbildung, setMobileAusbildung] = useState(false);
  const [diversesOpen, setDiversesOpen] = useState(false);
  const [mobileDiverses, setMobileDiverses] = useState(false);
  const [mobileGeo, setMobileGeo] = useState(false);
  const [mobileBerichte, setMobileBerichte] = useState(false);
  const location = useLocation();

  const isRegion = location.pathname.startsWith("/regionen");
  const isAusbildung = ["/ausbildung", "/schultermine", "/schulorte"].includes(location.pathname);
  const isLaden = ["/laden-praxis", "/verkaufsladen-asp", "/granit-gneis", "/armbaender-kreation-diopteia"].includes(location.pathname);
  const isDiverses = ["/michael-gienger", "/schueler-berichte", "/brunos-buch", "/geologische-reisen", "/granit-gneis"].includes(location.pathname);

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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl glass px-4 py-2.5 shadow-soft transition-all duration-500">
          <Link
            to="/"
            className="flex items-center rounded-xl transition-all duration-500"
            aria-label="Heilsteinschule Schweiz Startseite"
          >
            <img
              src="https://heilsteinschule.swiss/media/LogoName.png"
              alt="Heilsteinschule Schweiz Logo"
              className="h-14 w-auto rounded-xl bg-white object-contain p-2 shadow-soft sm:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-0 lg:flex">
            {NAV.map((item) => {
              const active = item.to && location.pathname === item.to;
              const cls = `relative whitespace-nowrap rounded-full px-2 py-2 text-xs font-medium transition ${
                active ? "text-amethyst" : "text-foreground/70 hover:text-amethyst"
              }`;
              if (item.label === "Ausbildung") {
                return (
                  <div
                    key="Ausbildung"
                    className="relative"
                    onMouseEnter={() => setAusbildungOpen(true)}
                    onMouseLeave={() => setAusbildungOpen(false)}
                  >
                    <button
                      className={`relative inline-flex whitespace-nowrap items-center gap-1 rounded-full px-2 py-2 text-xs font-medium transition ${
                        isAusbildung ? "text-amethyst" : "text-foreground/70 hover:text-amethyst"
                      }`}
                      onClick={() => setAusbildungOpen((o) => !o)}
                    >
                      Ausbildung
                      <ChevronDown className={`h-4 w-4 transition-transform ${ausbildungOpen ? "rotate-180" : ""}`} />
                      {isAusbildung && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-citrine" />}
                    </button>
                    <div
                      className={`absolute left-0 top-full z-50 w-56 pt-2 transition-all duration-200 ${
                        ausbildungOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1"
                      }`}
                    >
                      <div className="glass rounded-2xl p-2 shadow-lift">
                        <Link
                          to="/ausbildung"
                          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-amethyst transition hover:bg-amethyst/5"
                        >
                          <GraduationCap className="h-4 w-4 text-citrine-deep" /> Ausbildung
                        </Link>
                        <Link
                          to="/schultermine"
                          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst"
                        >
                          <CalendarDays className="h-3.5 w-3.5 text-citrine-deep" /> Schultermine
                        </Link>
                        <Link
                          to="/schulorte"
                          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst"
                        >
                          <MapPinned className="h-3.5 w-3.5 text-citrine-deep" /> Schulorte
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link key={item.to} to={item.to} className={cls}>
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-citrine" />
                  )}
                </Link>
              );
            })}
            <div
              className="relative"
              onMouseEnter={() => setLadenOpen(true)}
              onMouseLeave={() => setLadenOpen(false)}
            >
              <button
                className={`relative inline-flex whitespace-nowrap items-center gap-1 rounded-full px-2 py-2 text-xs font-medium transition ${
                  isLaden ? "text-amethyst" : "text-foreground/70 hover:text-amethyst"
                }`}
                onClick={() => setLadenOpen((o) => !o)}
              >
                Laden & Praxis
                <ChevronDown className={`h-4 w-4 transition-transform ${ladenOpen ? "rotate-180" : ""}`} />
                {isLaden && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-citrine" />}
              </button>
              <div
                className={`absolute left-0 top-full z-50 w-60 pt-2 transition-all duration-200 ${
                  ladenOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1"
                }`}
              >
                <div className="glass rounded-2xl p-2 shadow-lift">
                  <Link
                    to="/laden-praxis"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-amethyst transition hover:bg-amethyst/5"
                  >
                    <Gem className="h-4 w-4 text-citrine-deep" /> Laden & Praxis
                  </Link>
                  <Link
                    to="/verkaufsladen-asp"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    <Gem className="h-3.5 w-3.5 text-citrine-deep" /> Verkaufsladen Asp
                  </Link>
                  <Link
                    to="/granit-gneis"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    <Gem className="h-3.5 w-3.5 text-citrine-deep" /> Granit & Gneis
                  </Link>
                  <Link
                    to="/armbaender-kreation-diopteia"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    <Gem className="h-3.5 w-3.5 text-citrine-deep" /> Armbänder - Kreation diopteia
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setRegionsOpen(true)}
              onMouseLeave={() => setRegionsOpen(false)}
            >
              <button
              className={`relative inline-flex whitespace-nowrap items-center gap-1 rounded-full px-2 py-2 text-xs font-medium transition ${
                  isRegion ? "text-amethyst" : "text-foreground/70 hover:text-amethyst"
                }`}
                onClick={() => setRegionsOpen((o) => !o)}
              >
                Regionen
                <ChevronDown className={`h-4 w-4 transition-transform ${regionsOpen ? "rotate-180" : ""}`} />
                {isRegion && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-citrine" />}
              </button>
              <div
                className={`absolute left-0 top-full z-50 w-64 pt-2 transition-all duration-200 ${
                  regionsOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1"
                }`}
              >
                <div className="glass max-h-[24rem] overflow-y-auto rounded-2xl p-2 shadow-lift">
                  <Link
                    to="/regionen"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-amethyst transition hover:bg-amethyst/5"
                  >
                    <MapPin className="h-4 w-4 text-citrine-deep" /> Alle Regionen
                  </Link>
                  <div className="my-1 h-px bg-border" />
                  {REGIONS.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/regionen/${r.slug}`}
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst"
                    >
                      <MapPin className="h-3.5 w-3.5 text-citrine-deep" /> {r.city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setDiversesOpen(true)}
              onMouseLeave={() => setDiversesOpen(false)}
            >
              <button
                className={`relative inline-flex whitespace-nowrap items-center gap-1 rounded-full px-2 py-2 text-xs font-medium transition ${
                  isDiverses ? "text-amethyst" : "text-foreground/70 hover:text-amethyst"
                }`}
                onClick={() => setDiversesOpen((o) => !o)}
              >
                Diverses
                <ChevronDown className={`h-4 w-4 transition-transform ${diversesOpen ? "rotate-180" : ""}`} />
                {isDiverses && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-citrine" />}
              </button>
              <div
                className={`absolute left-0 top-full z-50 w-60 pt-2 transition-all duration-200 ${
                  diversesOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1"
                }`}
              >
                <div className="glass rounded-2xl p-2 shadow-lift">
                  <Link
                    to="/brunos-buch"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-amethyst transition hover:bg-amethyst/5"
                  >
                    <BookOpen className="h-4 w-4 text-citrine-deep" /> Brunos Buch
                  </Link>
                  <Link
                    to="/michael-gienger"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-citrine-deep" /> Michael Gienger
                  </Link>
                  {/* Geologische Reisen — fly-out */}
                  <div className="group/geo relative">
                    <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">
                      <span className="inline-flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 text-citrine-deep" /> Geologische Reisen
                      </span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                    <div className="invisible absolute left-full top-0 z-50 w-56 -ml-1 translate-x-1 pt-2 opacity-0 transition-all duration-200 group-hover/geo:visible group-hover/geo:translate-x-0 group-hover/geo:opacity-100">
                      <div className="glass rounded-2xl p-2 shadow-lift">
                        <Link to="/geologische-reisen" className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">Glarnerland – Engadin</Link>
                        <Link to="/geologische-reisen" className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">Georeise Nord – Süd 2021</Link>
                        <Link to="/geologische-reisen" className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">Zermatt 2022</Link>
                        <Link to="/geologische-reisen" className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">Heilstein Museum 2022</Link>
                        <Link to="/geologische-reisen#alpen-seminare" className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">Alpenseminar 2025</Link>
                      </div>
                    </div>
                  </div>
                  {/* Berichte — fly-out */}
                  <div className="group/berichte relative">
                    <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">
                      <span className="inline-flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 text-citrine-deep" /> Berichte
                      </span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                    <div className="invisible absolute left-full top-0 z-50 w-56 -ml-1 translate-x-1 pt-2 opacity-0 transition-all duration-200 group-hover/berichte:visible group-hover/berichte:translate-x-0 group-hover/berichte:opacity-100">
                      <div className="glass rounded-2xl p-2 shadow-lift">
                        <Link to="/granit-gneis" className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">Granit und Gneis</Link>
                        <Link to="/schueler-berichte" className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">Schüler-Berichte</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+41793896622"
              className="ml-2 hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-citrine px-3 py-2 text-xs font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" /> 079 389 66 22
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
            open ? "mt-2 max-h-[44rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass rounded-2xl p-3 shadow-soft">
            <nav className="flex flex-col">
              {NAV.map((item) => {
                if (item.label === "Ausbildung") {
                  return (
                    <div key="Ausbildung">
                      <button
                        onClick={() => setMobileAusbildung((o) => !o)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted"
                      >
                        <span className="inline-flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-citrine-deep" /> Ausbildung
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileAusbildung ? "rotate-180" : ""}`} />
                      </button>
                      {mobileAusbildung && (
                        <div className="ml-3 rounded-xl bg-muted/50 p-1">
                          <Link
                            to="/ausbildung"
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-amethyst transition hover:bg-amethyst/5"
                          >
                            Ausbildung
                          </Link>
                          <Link
                            to="/schultermine"
                            className="block rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                          >
                            Schultermine
                          </Link>
                          <Link
                            to="/schulorte"
                            className="block rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                          >
                            Schulorte
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }
                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  );
                }
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
              <button
                onClick={() => setMobileLaden((o) => !o)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted"
              >
                <span className="inline-flex items-center gap-2">
                  <Gem className="h-4 w-4 text-citrine-deep" /> Laden & Praxis
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileLaden ? "rotate-180" : ""}`} />
              </button>
              {mobileLaden && (
                <div className="ml-3 rounded-xl bg-muted/50 p-1">
                  <Link
                    to="/laden-praxis"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-amethyst transition hover:bg-amethyst/5"
                  >
                    Laden & Praxis
                  </Link>
                  <Link
                    to="/verkaufsladen-asp"
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    Verkaufsladen Asp
                  </Link>
                  <Link
                    to="/granit-gneis"
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    Granit & Gneis
                  </Link>
                  <Link
                    to="/armbaender-kreation-diopteia"
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    Armbänder - Kreation diopteia
                  </Link>
                </div>
              )}
              <button
                onClick={() => setMobileRegions((o) => !o)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-citrine-deep" /> Regionen
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileRegions ? "rotate-180" : ""}`} />
              </button>
              {mobileRegions && (
                <div className="ml-3 max-h-64 overflow-y-auto rounded-xl bg-muted/50 p-1">
                  <Link
                    to="/regionen"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-amethyst transition hover:bg-amethyst/5"
                  >
                    Alle Regionen
                  </Link>
                  {REGIONS.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/regionen/${r.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                    >
                      {r.city}
                    </Link>
                  ))}
                </div>
              )}
              <button
                onClick={() => setMobileDiverses((o) => !o)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted"
              >
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-citrine-deep" /> Diverses
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileDiverses ? "rotate-180" : ""}`} />
              </button>
              {mobileDiverses && (
                <div className="ml-3 rounded-xl bg-muted/50 p-1">
                  <Link
                    to="/brunos-buch"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-amethyst transition hover:bg-amethyst/5"
                  >
                    Brunos Buch
                  </Link>
                  <Link
                    to="/michael-gienger"
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    Michael Gienger
                  </Link>
                  <button
                    onClick={() => setMobileGeo((o) => !o)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    <span className="inline-flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-citrine-deep" /> Geologische Reisen
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileGeo ? "rotate-180" : ""}`} />
                  </button>
                  {mobileGeo && (
                    <div className="ml-3 rounded-lg bg-background/50 p-1">
                      <Link to="/geologische-reisen" className="block rounded-lg px-3 py-2 text-xs text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst">Glarnerland – Engadin</Link>
                      <Link to="/geologische-reisen" className="block rounded-lg px-3 py-2 text-xs text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst">Georeise Nord – Süd 2021</Link>
                      <Link to="/geologische-reisen" className="block rounded-lg px-3 py-2 text-xs text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst">Zermatt 2022</Link>
                      <Link to="/geologische-reisen" className="block rounded-lg px-3 py-2 text-xs text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst">Heilstein Museum 2022</Link>
                      <Link to="/geologische-reisen#alpen-seminare" className="block rounded-lg px-3 py-2 text-xs text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst">Alpenseminar 2025</Link>
                    </div>
                  )}
                  <button
                    onClick={() => setMobileBerichte((o) => !o)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst"
                  >
                    <span className="inline-flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-citrine-deep" /> Berichte
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileBerichte ? "rotate-180" : ""}`} />
                  </button>
                  {mobileBerichte && (
                    <div className="ml-3 rounded-lg bg-background/50 p-1">
                      <Link to="/granit-gneis" className="block rounded-lg px-3 py-2 text-xs text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst">Granit und Gneis</Link>
                      <Link to="/schueler-berichte" className="block rounded-lg px-3 py-2 text-xs text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst">Schüler-Berichte</Link>
                    </div>
                  )}
                </div>
              )}
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