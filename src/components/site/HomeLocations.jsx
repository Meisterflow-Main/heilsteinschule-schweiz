import React from "react";
import { Link } from "react-router-dom";
import { MapPin, GraduationCap, Store, Mountain, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const LOCATIONS = [
  {
    name: "Wallbach",
    role: "Grundausbildung",
    icon: GraduationCap,
    text: "Standard-Standort für die Grundausbildung im Fricktal, Kanton Aargau. Klassengrösse: min. 5, max. 8 Personen.",
    color: "bg-amethyst/10 text-amethyst",
  },
  {
    name: "Bern",
    role: "Grundausbildung & Info-Nachmittag",
    icon: GraduationCap,
    text: "Grundausbildung und kostenlose Info-Nachmittage im selben Gebäude wie der SVNH. 6 Min. ab Hauptbahnhof.",
    color: "bg-amethyst/10 text-amethyst",
  },
  {
    name: "Asp",
    role: "Hauptsitz · Shop & Praxis · Info-Nachmittag",
    icon: Store,
    text: "Hauptsitz der Heilsteinschule mit Heilsteinshop, Praxis und Schulungsräumen. Hier begann 2011 alles.",
    color: "bg-citrine/15 text-citrine-deep",
  },
  {
    name: "Schweizer Alpen",
    role: "Alpenseminar",
    icon: Mountain,
    text: "Obligatorischer praktischer Ausbildungsteil. Vier Übernachtungen mit Halbpension vertiefen das Erlernte.",
    color: "bg-amethyst/10 text-amethyst",
  },
];

export default function HomeLocations() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Schulorte"
            title="Vier Orte — vier unterschiedliche Rollen"
            subtitle="Nicht jeder Ort ist ein Schulstandort. Erfahren Sie, wo Ausbildung, Shop und Alpenseminar stattfinden."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${loc.color}`}>
                  <loc.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">{loc.name}</h3>
                <p className="mt-1 text-xs font-medium text-citrine-deep">{loc.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{loc.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link to="/schulorte" className="inline-flex items-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-amethyst-soft">
              Alle Schulorte ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}