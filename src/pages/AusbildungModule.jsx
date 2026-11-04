import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, HandHeart, Award, Check, ArrowRight } from "lucide-react";
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

const INTRO = [
  "Seit 2011 widmen wir uns mit grosser Leidenschaft der analytischen Steinheilkunde. Unser Wissen basiert auf langjähriger Erfahrung und fundierten Ausbildungen in Deutschland bei Michael Gienger, Werner Kühni und Walter von Holst. Aus dem Herzenswunsch heraus, die faszinierende Welt der Heilsteine allen Menschen zugänglich zu machen, wurde die Heilsteinschule Schweiz gegründet.",
  "Wir verbinden fundiertes theoretisches Wissen mit praktischer Erfahrung und der unmittelbaren Begegnung mit den Steinen. Unser Unterricht folgt dem Leitgedanken Kopf, Herz, Hand und Fuss: verstehen, fühlen, anwenden und erleben. Dazu gehören auch gemeinsame Erfahrungen in der Natur und unterwegs in den Alpen.",
  "Als GKS-zertifizierte Schule für gemmologisch kontrollierte Steinqualität und vom Schweizerischen Verband für Natürliches Heilen (SVNH) nach AL2 zertifiziert, legen wir grossen Wert auf Qualität und fundierte Wissensvermittlung.",
  "Unsere grösste Motivation ist die Liebe und Faszination für die Schönheit und Vielfalt der Steine. Wir möchten diese Begeisterung weitergeben und Menschen dabei begleiten, Heilsteine nicht nur kennenzulernen, sondern sie als wertvolle Lebensbegleiter zu entdecken.",
];

export default function AusbildungModule() {
  return (
    <>
      {/* Kopf / Ausbildung Übersicht */}
      <section className="bg-quartz">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Ausbildung Übersicht"
              title="Die drei Module der Grundausbildung"
              subtitle="Aufbauend, praxisnah und Schritt für Schritt — vom ersten Verständnis der Steine bis zum Schulzertifikat."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {INTRO.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Die drei Module als Boxen */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
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
      </section>

      {/* Nächster Schritt */}
      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-white p-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-heading text-xl font-semibold text-amethyst">Frage zu den Modulen?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Wir beantworten gerne Ihre Fragen zu Inhalt, Ablauf und Terminen — oder Sie melden sich direkt verbindlich an.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                to="/ausbildung-anfrage"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-quartz"
              >
                Frage stellen
              </Link>
              <Link
                to="/ausbildung-anmeldung"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
              >
                Verbindlich anmelden <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}