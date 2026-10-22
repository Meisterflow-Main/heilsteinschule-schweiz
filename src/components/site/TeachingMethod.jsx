import React from "react";
import { Brain, Hand, Footprints, Heart } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const PRINCIPLES = [
  { icon: Brain, label: "Kopf", text: "Analytisches Wissen, welches erklärt, warum und wie die Heilsteine wirken." },
  { icon: Hand, label: "Hand", text: "Die Kraft der Steine erleben und spüren, Methoden für Körper und Psyche erlernen." },
  { icon: Footprints, label: "Fuss", text: "Die Steine unterwegs in den Alpen erfahren und die Mineralien unmittelbar erleben." },
  { icon: Heart, label: "Herz", text: "Neugierde und Faszination als Startkapital — Liebe und Leidenschaft entstehen." },
];

export default function TeachingMethod() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Unsere Methode"
          title="Kopf, Hand, Fuss und Herz"
          subtitle="Analytisches Wissen, praktisches Erleben, Naturerfahrung und Herzensbildung gehören bei uns zusammen."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.06}>
            <div className="flex h-full gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-amethyst">{p.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}