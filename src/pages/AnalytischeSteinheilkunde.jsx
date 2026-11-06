import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gem, Layers, Palette, FlaskConical, Mountain, GraduationCap, HelpCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const GRUNDLAGEN = [
  {
    icon: Mountain,
    title: "1. Entstehung",
    text: "Wie ein Stein entstanden ist, steht in Beziehung zur Lebenssituation: ob er im Erdinneren unter Druck gewachsen, aus einer Schmelze erstarrt oder aus Sedimenten gepresst wurde.",
  },
  {
    icon: Layers,
    title: "2. Kristallstruktur",
    text: "Die innere Ordnung eines Kristalls spiegelt die Grundhaltung des Menschen wider — von der klaren Würfelform bis zum wirren, blättrigen Gefüge.",
  },
  {
    icon: FlaskConical,
    title: "3. Chemische Zusammensetzung",
    text: "Die enthaltenen Elemente bilden die Verbindung zu Stoffwechselprozessen und zeigen, welche körperlichen Themen ein Stein anspricht.",
  },
  {
    icon: Palette,
    title: "4. Farbe",
    text: "Die Farbe beeinflusst Organsysteme, seelische und mentale Reaktionen sowie das geistige Erleben — sie ist das sichtbarste Merkmal in der Beratung.",
  },
];

const SCHRITTE = [
  {
    title: "Beobachten",
    text: "Ein Heilstein wird zuerst über seine äusseren Merkmale erfasst: Farbe, Glanz, Härte, Spaltbarkeit und Fundort. Diese Beobachtung ist überprüfbar und vermittelbar.",
  },
  {
    title: "Zuordnen",
    text: "Aus den vier Grundlagen entsteht ein Gesamtbild. Erst die Kombination von Entstehung, Struktur, Zusammensetzung und Farbe erklärt die Eigenschaften eines Steines.",
  },
  {
    title: "Anwenden",
    text: "In der Beratung wird der Stein zur Situation des Menschen in Beziehung gesetzt — als Begleitung, nicht als Ersatz für eine medizinische Abklärung.",
  },
];

export default function AnalytischeSteinheilkunde() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://heilsteinschule.swiss/media/Ruth_Bruno_Aug_25_2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/85 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Gem className="h-3.5 w-3.5" /> Grundlagenwissen
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Analytische Stein<span className="text-gradient-gold">heilkunde</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              Wie aus Geologie, Kristallstruktur, chemischer Zusammensetzung und Farbe ein
              nachvollziehbares Modell der Heilsteinanwendung wird — die Arbeitsweise der
              Heilsteinschule Schweiz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Die analytische Steinheilkunde ist ein Modell, das Heilsteine nicht über Glauben,
              sondern über beobachtbare Eigenschaften beschreibt. Entwickelt wurde es von
              Michael Gienger und wird an der Heilsteinschule Schweiz seit über 20 Jahren
              unterrichtet. Grundlage ist die Überzeugung, dass jeder Stein anhand von vier
              Merkmalen beschrieben werden kann, die sich gegenseitig ergänzen und gemeinsam
              eine Aussage über seine Wirkungsrichtung ergeben.
            </p>
            <p>
              Dieses Vorgehen hat einen praktischen Vorteil: Es ist lernbar. Wer die vier
              Grundlagen kennt, kann einen unbekannten Stein einordnen, die Auswahl in einer
              Beratung begründen und mit Fachpersonen aus Geologie und Mineralogie auf
              Augenhöhe sprechen. Gleichzeitig bleibt Raum für die eigene Wahrnehmung — die
              analytische und die intuitive Ebene werden im Unterricht bewusst nebeneinander
              geübt.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Das Modell"
              title="Die vier Grundlagen"
              subtitle="Jeder Heilstein wird nach denselben vier Kriterien betrachtet — in dieser Reihenfolge."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {GRUNDLAGEN.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-3xl border border-border bg-white p-7 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-amethyst">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading center={false} eyebrow="In der Praxis" title="Von der Analyse zur Anwendung" />
        </Reveal>
        <div className="mt-8 space-y-6">
          {SCHRITTE.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amethyst text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-amethyst">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/75">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 rounded-2xl border border-citrine/30 bg-citrine/5 p-5 text-sm leading-relaxed text-amethyst">
            Die beschriebenen Wirkungszusammenhänge geben das Modell der analytischen
            Steinheilkunde nach Michael Gienger wieder. Sie ersetzen keine medizinische
            Abklärung oder Behandlung.
          </p>
        </Reveal>
      </section>

      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Weiterlernen"
              title="Ausbildung, Seminare und Beratung"
              subtitle="In der dreimoduligen Grundausbildung wird das Modell Schritt für Schritt aufgebaut und in der Natur überprüft."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              to="/ausbildung#module"
              className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift"
            >
              <GraduationCap className="h-6 w-6 text-citrine-deep" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Grundausbildung</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Drei Module, 5 bis 8 Teilnehmende pro Klasse und das Alpenseminar als praktischer Teil.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-citrine-deep">
                Zu den Modulen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/seminare"
              className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift"
            >
              <Mountain className="h-6 w-6 text-citrine-deep" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Seminare</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Themen-Seminare und Alpen-Exkursionen für alle, die einzelne Bereiche vertiefen möchten.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-citrine-deep">
                Zu den Seminaren <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/kontakt"
              className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift"
            >
              <HelpCircle className="h-6 w-6 text-citrine-deep" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Frage stellen</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Unverbindlich fragen, ob die Ausbildung oder ein Seminar zu Ihrer Situation passt.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-citrine-deep">
                Zum Kontakt <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}