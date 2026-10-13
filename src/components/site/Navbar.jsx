import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, GraduationCap, MapPinned, CalendarDays, Mountain, Users, BookOpen, Clock, Quote, Heart, Play, Mail, FileText, Gem, Sparkles, Store, ExternalLink } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Ausbildung",
    children: [
      { label: "Ausbildung Übersicht", to: "/ausbildung", icon: GraduationCap },
      { label: "Schulorte: Wallbach & Bern", to: "/schulorte", icon: MapPinned },
      { label: "Kalender", to: "/schultermine", icon: CalendarDays },
      { label: "Exkursionen & Alpenseminar", to: "/geologische-reisen", icon: Mountain },
      { label: "Erfahrungsberichte", to: "/schueler-berichte", icon: Users },
    ],
  },
  {
    label: "Die Schule",
    children: [
      { label: "Gründer & Geschichte", to: "/ueber-uns", icon: BookOpen },
      { label: "Timeline", to: "/ueber-uns#timeline", icon: Clock },
      { label: "Team", to: "/ueber-uns#team", icon: Users },
      { label: "Interview", to: "/ueber-uns#interview", icon: Quote },
      { label: "Werner Kühni", to: "/ueber-uns#werner-kuehni", icon: Heart },
      { label: "Buch", to: "/brunos-buch", icon: BookOpen },
    ],
  },
  { label: "Info-Nachmittag", to: "/info-nachmittag" },
  { label: "Online-Shop", href: "https://heilstein-shop.com/" },
  {
    label: "Verkaufsladen Asp",
    children: [
      { label: "Heilsteine Verkauf + Lager in Asp", to: "/verkaufsladen-asp", icon: Gem },
      { label: "Armbänder - Kreation diopteia", to: "/armbaender-kreation-diopteia", icon: Sparkles },
      { label: "Shop & Praxis", to: "/laden-praxis", icon: Store },
    ],
  },
  {
    label: "Videos & Newsletter",
    children: [
      { label: "Lehrfilme", to: "/lehrfilme", icon: Play },
      { label: "News & Newsletter", to: "/news", icon: Mail },
      { label: "Blog", to: "/blog", icon: FileText },
    ],
  },
  {
    label: "Diverses",
    children: [
      { label: "Brunos Buch", to: "/brunos-buch", icon: BookOpen },
      { label: "Michael Gienger", to: "/michael-gienger", icon: Users },
      { label: "Geologische Reisen", to: "/geologische-reisen", icon: Mountain },
      { label: "Granit & Gneis", to: "/granit-gneis", icon: Mountain },
    ],
  },
  {
    label: "Regionen",
    children: [
      { label: "Alle Regionen", to: "/regionen", icon: MapPinned },
      { label: "Asp", to: "/regionen/asp", icon: MapPinned },
      { label: "Wallbach", to: "/regionen/wallbach", icon: MapPinned },
      { label: "Bern", to: "/regionen/bern", icon: MapPinned },
      { label: "Zürich", to: "/regionen/zuerich", icon: MapPinned },
      { label: "Basel", to: "/regionen/basel", icon: MapPinned },
      { label: "Aarau", to: "/regionen/aarau", icon: MapPinned },
      { label: "Baden", to: "/regionen/baden", icon: MapPinned },
      { label: "Brugg", to: "/regionen/brugg", icon: MapPinned },
      { label: "Olten", to: "/regionen/olten", icon: MapPinned },
    ],
  },
  { label: "Kontakt", to: "/kontakt" },
];

const ACTIVE_PATHS = {
  Ausbildung: ["/ausbildung", "/schulorte", "/schultermine", "/geologische-reisen", "/schueler-berichte", "/alpenseminar-2025", "/glarnerland-engadin", "/georeise-nord-sued-2021", "/zermatt-2022", "/heilstein-museum-2022", "/anmeldung", "/ausbildung-anmeldung", "/ausbildung-anfrage"],
  "Die Schule": ["/ueber-uns", "/brunos-buch", "/michael-gienger"],
  "Verkaufsladen Asp": ["/verkaufsladen-asp", "/armbaender-kreation-diopteia", "/laden-praxis"],
  "Videos & Newsletter": ["/lehrfilme", "/news", "/blog"],
  Diverses: ["/brunos-buch", "/michael-gienger", "/geologische-reisen", "/granit-gneis"],
  Regionen: ["/regionen"],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isItemActive = (item) => {
    if (item.to) {
      return location.pathname === item.to.split("#")[0];
    }
    if (item.children) {
      const paths = ACTIVE_PATHS[item.label] || [];
      return paths.some((p) => location.pathname === p || location.pathname.startsWith(p + "/"));
    }
    return false;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl glass px-4 py-2.5 shadow-soft transition-all duration-500">
          <Link to="/" className="flex items-center rounded-xl transition-all duration-500" aria-label="Heilsteinschule Schweiz Startseite">
            <img src="https://heilsteinschule.swiss/media/LogoName.png" alt="Heilsteinschule Schweiz Logo" className="h-14 w-auto rounded-xl bg-white object-contain p-2 shadow-soft sm:h-16" />
          </Link>

          <nav className="hidden items-center gap-0 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item);
              if (item.children) {
                return (
                  <div key={item.label} className="relative" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                    <button className={`relative inline-flex whitespace-nowrap items-center gap-1 rounded-full px-2 py-2 text-xs font-medium transition ${active ? "text-amethyst" : "text-foreground/70 hover:text-amethyst"}`} onClick={() => setOpenDropdown((o) => (o === item.label ? null : item.label))}>
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      {active && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-citrine" />}
                    </button>
                    <div className={`absolute left-0 top-full z-50 w-60 pt-2 transition-all duration-200 ${openDropdown === item.label ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1"}`}>
                      <div className="glass rounded-2xl p-2 shadow-lift">
                        {item.children.map((c) => (
                          <Link key={c.to} to={c.to} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-amethyst/5 hover:text-amethyst">
                            <c.icon className="h-3.5 w-3.5 text-citrine-deep" /> {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.href) {
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-xs font-medium text-foreground/70 transition hover:text-amethyst">
                    {item.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                );
              }
              return (
                <Link key={item.label} to={item.to} className={`relative whitespace-nowrap rounded-full px-2 py-2 text-xs font-medium transition ${active ? "text-amethyst" : "text-foreground/70 hover:text-amethyst"}`}>
                  {item.label}
                  {active && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-citrine" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+41793896622" className="ml-2 hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-citrine px-3 py-2 text-xs font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light sm:inline-flex">
              <Phone className="h-3.5 w-3.5" /> 079 389 66 22
            </a>
            <button onClick={() => setOpen((o) => !o)} className="inline-flex h-10 w-10 items-center justify-center rounded-full glass text-amethyst lg:hidden" aria-label="Menü öffnen">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "mt-2 max-h-[48rem] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="glass rounded-2xl p-3 shadow-soft">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label}>
                      <button onClick={() => setMobileExpanded((m) => ({ ...m, [item.label]: !m[item.label] }))} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted">
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded[item.label] ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded[item.label] && (
                        <div className="ml-3 rounded-xl bg-muted/50 p-1">
                          {item.children.map((c) => (
                            <Link key={c.to} to={c.to} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-amethyst/5 hover:text-amethyst">
                              <c.icon className="h-3.5 w-3.5 text-citrine-deep" /> {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                if (item.href) {
                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted">
                      {item.label}
                      <ExternalLink className="h-4 w-4 text-citrine-deep" />
                    </a>
                  );
                }
                const active = isItemActive(item);
                return (
                  <Link key={item.label} to={item.to} className={`rounded-xl px-4 py-3 text-base font-medium transition ${active ? "bg-amethyst/5 text-amethyst" : "text-foreground/80 hover:bg-muted"}`}>
                    {item.label}
                  </Link>
                );
              })}
              <a href="tel:+41793896622" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-4 py-3 text-sm font-semibold text-amethyst-deep">
                <Phone className="h-4 w-4" /> 079 389 66 22
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}