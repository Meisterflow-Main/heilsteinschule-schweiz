import React from "react";
import { Link } from "react-router-dom";
import { MapPin, GraduationCap, Store, Info, ArrowRight, Users } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const LOCATIONS = [
  {
    icon: GraduationCap,
    name: "Wallbach",
    role: "Grundausbildung",
    tag: "Basic Training",
    text: "Standard-Standort für die Grundausbildung im Fricktal, Kanton Aargau — nahe der deutschen Grenze und dem Rhein.",
    classSize: "Klassengrösse: min. 5, max. 8 Personen",
    cta: { label: "Zur Anmeldung", to: "/ausbildung-anmeldung" },
  },
  {
    icon: GraduationCap,
    name: "Münsingen",
    role: "Grundausbildung & Info-Nachmittag/-Abend",
    tag: "Basic Training + Info",
    text: "Grundausbildung und kostenloser Info-Nachmittag/-Abend in Münsingen — 5 Gehminuten ab Bahnhof Münsingen.",
    classSize: "Klassengrösse: min. 5, max. 8 Personen",
    info: "Info-Nachmittag/-Abend verfügbar",
    cta: { label: "Zur Anmeldung", to: "/ausbildung-anmeldung" },
  },
  {
    icon: Store,
    name: "Asp",
    role: "Hauptsitz · Shop & Praxis · Info-Nachmittag/-Abend",
    tag: "Headquarters",
    text: "Hauptsitz der Heilsteinschule mit Heilsteinshop, Praxis, Beratung und praktischen Ausbildungsteilen. Hier finden auch Info-Nachmittage/-Abende statt.",
    separate: true,
    cta: { label: "Shop & Praxis entdecken", to: "/laden-praxis" },
  },
];

export default function TrainingLocations() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Schulorte"
            title="Wo findet die Ausbildung statt?"
            subtitle="Die Grundausbildung erfolgt in Wallbach und Münsingen. Asp ist der Hauptsitz mit Shop, Praxis und praktischen Ausbildungsteilen."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 0.08}>
              <div className={`flex h-full flex-col rounded-3xl border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift ${loc.separate ? "border-citrine/30" : "border-border"}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${loc.separate ? "bg-citrine/15 text-citrine-deep" : "bg-amethyst/10 text-amethyst"}`}>
                    <loc.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-amethyst">{loc.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-citrine-deep">{loc.tag}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-amethyst">{loc.role}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{loc.text}</p>
                <div className="mt-4 space-y-2">
                  {loc.classSize && (
                    <div className="flex items-center gap-2 rounded-lg bg-citrine/10 px-3 py-2 text-xs font-medium text-amethyst">
                      <Users className="h-3.5 w-3.5 text-citrine-deep" /> {loc.classSize}
                    </div>
                  )}
                  {loc.info && (
                    <div className="flex items-center gap-2 rounded-lg bg-amethyst/5 px-3 py-2 text-xs font-medium text-amethyst">
                      <Info className="h-3.5 w-3.5 text-amethyst" /> {loc.info}
                    </div>
                  )}
                </div>
                <Link
                  to={loc.cta.to}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep hover:text-citrine"
                >
                  {loc.cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <Link to="/schulorte" className="inline-flex items-center gap-2 text-sm font-semibold text-amethyst underline underline-offset-4 hover:text-citrine-deep">
              <MapPin className="h-4 w-4" /> Alle Schulorte ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}