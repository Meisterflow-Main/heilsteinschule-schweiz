import React from "react";
import { BookOpen, HandHeart, Award, Check } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const MODULE = [
  {
    step: "Modul 1",
    tag: "Theorie",
    title: "Grundlagen der analytischen Steinheilkunde",
    icon: BookOpen,
    topics: [
      "Entstehung, Aufbau und Inhaltsstoffe der Heilsteine",
      "Kristallsysteme, Härte und äussere Erscheinung",
      "Die analytische Methode nach Michael Gienger verstehen",
      "Heilsteine erkennen, bestimmen und richtig benennen",
      "Erste Zuordnung von Steinen zu Themen und Wirkungsfeldern",
    ],
  },
  {
    step: "Modul 2",
    tag: "Vertiefung",
    title: "Vertiefung und praktische Anwendung",
    icon: HandHeart,
    topics: [
      "Heilsteine anwenden: tragen, auflegen, Steinwasser und Raum",
      "Reinigen, Aufladen und Pflegen der eigenen Steine",
      "Wirkungsfelder, Kombinationen und Grenzen der Steinheilkunde",
      "Die eigene Steinsammlung aufbauen und dokumentieren",
      "Üben in der Kleingruppe — fühlen, erleben, überprüfen",
    ],
  },
  {
    step: "Modul 3",
    tag: "Praxis & Abschluss",
    title: "Beratung, Natur und Zertifizierung",
    icon: Award,
    topics: [
      "Gesprächsführung und Beratung mit Heilsteinen",
      "Gesteinskunde draussen: Exkursionen im Fricktal",
      "Das Alpenseminar als obligatorischer Praxisteil",
      "Lernschritte und Unterlagen in der Schul-Cloud",
      "Abschluss, Schulzertifikat und die nächsten Schritte",
    ],
  },
];

export default function AusbildungModules() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Ausbildung Übersicht"
            title="Die drei Module der Grundausbildung"
            subtitle="Aufbauend, praxisnah und Schritt für Schritt — vom ersten Verständnis der Steine bis zum Schulzertifikat."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MODULE.map((m, i) => (
            <Reveal key={m.step} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                    <m.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-quartz px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-amethyst">
                    {m.tag}
                  </span>
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">{m.step}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-amethyst">{m.title}</h3>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {m.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}