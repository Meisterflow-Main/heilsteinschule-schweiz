import React from "react";
import { Mountain, Boxes, FlaskConical, Palette, Info } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const GRUNDLAGEN = [
  {
    nr: "1",
    icon: Mountain,
    title: "Entstehung",
    lead: "in Beziehung zu Lebenssituationen",
    text: "Die Entstehungsgeschichte eines Heilsteins steht in Beziehung zu verschiedenen Lebenssituationen und deren Erfahrungen.",
  },
  {
    nr: "2",
    icon: Boxes,
    title: "Kristallstruktur",
    lead: "Spiegel der menschlichen Grundhaltung",
    text: "Die Kristallstruktur eines Heilsteins spiegelt die grundlegende Haltung und innere Ausrichtung des Menschen wider.",
  },
  {
    nr: "3",
    icon: FlaskConical,
    title: "Chemische Zusammensetzung",
    lead: "Verbindung zu Stoffwechselprozessen",
    text: "Die chemische Zusammensetzung der Heilsteine steht in Verbindung mit den Stoffwechselprozessen des menschlichen Körpers.",
  },
  {
    nr: "4",
    icon: Palette,
    title: "Farbenlehre",
    lead: "Einfluss auf Körper und Psyche",
    text: "Die Farbe eines Heilsteins beeinflusst die Organsysteme sowie seelische und mentale Reaktionen und das geistige Erleben.",
  },
];

export default function Modul1Grundlagen() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Modul 1 · Theorie"
            title="Die vier Grundlagen der analytischen Steinheilkunde"
            subtitle="Die analytische Steinheilkunde nach Michael Gienger basiert auf vier wesentlichen Grundlagen: der geologischen Entstehung, der Kristallstruktur, der chemischen Zusammensetzung und der Farbe der Heilsteine."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            Im Rahmen der Ausbildung vermitteln wir geologische Grundkenntnisse sowie ein fundiertes
            Verständnis für die Entstehung und die unterschiedlichen Eigenschaften der Heilsteine. Dabei
            betrachten wir die Zusammenhänge zwischen den vier Grundlagen und dem menschlichen Erleben:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {GRUNDLAGEN.map((g, i) => (
            <Reveal key={g.nr} delay={0.05 * i}>
              <div className="flex h-full gap-5 rounded-3xl border border-border bg-white p-7 shadow-soft">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                    <g.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.15em] text-amethyst/40">{g.nr}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-amethyst">{g.title}</h3>
                  <p className="mt-1 text-sm font-medium text-citrine-deep">{g.lead}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{g.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-citrine/30 bg-citrine/5 p-6 text-center text-sm leading-relaxed text-amethyst">
            Durch die Verbindung dieser vier Grundlagen lernen die Teilnehmenden, Heilsteine ganzheitlich zu
            betrachten und ihre unterschiedlichen Eigenschaften und Zusammenhänge nach der analytischen
            Steinheilkunde zu verstehen.
          </p>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-citrine-deep" />
            <span>
              Hinweis: Die beschriebenen Wirkungszusammenhänge geben das Modell der analytischen
              Steinheilkunde nach Michael Gienger wieder.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}