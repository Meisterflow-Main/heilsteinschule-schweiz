import React from "react";
import { BookOpen, Sparkles, Award } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const MODULE = [
  {
    step: "Modul 1",
    tag: "Theorie",
    title: "Grundlagen der analytischen Steinheilkunde",
    icon: BookOpen,
    subtitle:
      "Die analytische Steinheilkunde nach Michael Gienger basiert auf vier wesentlichen Grundlagen: der geologischen Entstehung, der Kristallstruktur, der chemischen Zusammensetzung und der Farbe der Heilsteine.",
    intro:
      "Im Rahmen der Ausbildung vermitteln wir geologische Grundkenntnisse sowie ein fundiertes Verständnis für die Entstehung und die unterschiedlichen Eigenschaften der Heilsteine. Dabei betrachten wir die Zusammenhänge zwischen den vier Grundlagen und dem menschlichen Erleben:",
    items: [
      {
        nr: "1",
        title: "Entstehung",
        lead: "in Beziehung zu Lebenssituationen",
        text: "Die Entstehungsgeschichte eines Heilsteins steht in Beziehung zu verschiedenen Lebenssituationen und deren Erfahrungen.",
      },
      {
        nr: "2",
        title: "Kristallstruktur",
        lead: "Spiegel der menschlichen Grundhaltung",
        text: "Die Kristallstruktur eines Heilsteins spiegelt die grundlegende Haltung und innere Ausrichtung des Menschen wider.",
      },
      {
        nr: "3",
        title: "Chemische Zusammensetzung",
        lead: "Verbindung zu Stoffwechselprozessen",
        text: "Die chemische Zusammensetzung der Heilsteine steht in Verbindung mit den Stoffwechselprozessen des menschlichen Körpers.",
      },
      {
        nr: "4",
        title: "Farbenlehre",
        lead: "Einfluss auf Körper und Psyche",
        text: "Die Farbe eines Heilsteins beeinflusst die Organsysteme sowie seelische und mentale Reaktionen und das geistige Erleben.",
      },
    ],
    closing:
      "Durch die Verbindung dieser vier Grundlagen lernen die Teilnehmenden, Heilsteine ganzheitlich zu betrachten und ihre unterschiedlichen Eigenschaften und Zusammenhänge nach der analytischen Steinheilkunde zu verstehen.",
    note: "Die beschriebenen Wirkungszusammenhänge geben das Modell der analytischen Steinheilkunde nach Michael Gienger wieder.",
  },
  {
    step: "Modul 2",
    tag: "Vertiefung",
    title: "Vertiefung und praktische Anwendung",
    icon: Sparkles,
    subtitle:
      "In diesem Ausbildungsbereich vertiefen die Teilnehmenden ihr Wissen über Heilsteine und Kristalle und lernen, die erworbenen Kenntnisse gezielt in der Praxis anzuwenden. Dabei stehen sowohl die praktische Erfahrung als auch die Weiterentwicklung des analytischen und intuitiven Verständnisses im Mittelpunkt.",
    intro: "Die Schwerpunkte umfassen:",
    items: [
      {
        nr: "1",
        title: "Heilsteine kennenlernen und Fälschungen erkennen",
        text: "Vertiefte Kenntnisse über verschiedene Heilsteine und Kristalle erwerben, ihre Eigenschaften kennenlernen und echte Steine von Fälschungen und Imitationen unterscheiden.",
      },
      {
        nr: "2",
        title: "Heilsteine und Kristalle praktisch anwenden",
        text: "Unterschiedliche Anwendungsmöglichkeiten von Heilsteinen und Kristallen kennenlernen. Dazu gehören Heilsteinwasser sowie die Anwendung und Wirkung von Steinen in Wohn- und Arbeitsräumen.",
      },
      {
        nr: "3",
        title: "Krankheitsbilder und psychische Herausforderungen",
        text: "Sich mit verschiedenen Krankheitsbildern und psychischen Problemen auseinandersetzen und die unterstützende Rolle der Steinheilkunde auf dem persönlichen Lebensweg kennenlernen.",
      },
      {
        nr: "4",
        title: "Strahlenschutz und ergänzende Themenbereiche",
        text: "Beschäftigung mit Strahlenschutz, ätherischen Ölen und kolloidalem Silber sowie deren Einordnung in die ergänzenden Themen der Steinheilkunde.",
      },
      {
        nr: "5",
        title: "Analytisches und intuitives Wissen entwickeln",
        text: "Das analytische Verständnis und die intuitive Wahrnehmung schulen, um Heilsteine bewusster zu erkennen, ihre Eigenschaften besser zu verstehen und sie gezielt anzuwenden.",
      },
    ],
    closing:
      "Ziel ist es, das erworbene Wissen zu vertiefen, praktische Fähigkeiten zu entwickeln und Sicherheit im bewussten Umgang mit Heilsteinen und Kristallen zu gewinnen.",
  },
  {
    step: "Modul 3",
    tag: "Praxis & Abschluss",
    title: "Beratung, Natur und Zertifizierung",
    icon: Award,
    subtitle:
      "In diesem Ausbildungsbereich verbinden wir das erworbene Fachwissen mit praktischer Beratung, persönlichen Erfahrungen und dem direkten Erleben der Natur. Die Teilnehmenden lernen, ihr Wissen gezielt einzusetzen, Heilsteine individuell auszuwählen und die Steinheilkunde in ihre berufliche Praxis zu integrieren.",
    intro: "Die Schwerpunkte umfassen:",
    items: [
      {
        nr: "1",
        title: "Heilsteinberatung und Integration in die Praxis",
        text: "Wie finde ich den passenden Heilstein? Wie kann ich mein erworbenes Wissen sinnvoll und gezielt in meine eigene Praxis integrieren? Wir vermitteln Grundlagen für eine fundierte und individuelle Heilsteinberatung.",
      },
      {
        nr: "2",
        title: "Selbsterfahrung und persönliche Entwicklung",
        text: "Durch praktische Übungen und eigene Erfahrungen vertiefen die Teilnehmenden ihr Verständnis für Heilsteine und gewinnen Sicherheit im Umgang mit deren Anwendungsmöglichkeiten.",
      },
      {
        nr: "3",
        title: "Exkursion ins Fricktal",
        text: "Die Natur hautnah erleben: Bei einer Exkursion ins Fricktal lernen die Teilnehmenden, Versteinerungen zu finden und sich mit der Geomantie auseinanderzusetzen.",
      },
      {
        nr: "4",
        title: "Alpenseminar – obligatorischer Praxisteil",
        text: "Das Alpenseminar ist ein obligatorischer Bestandteil der Ausbildung. Dabei begeben sich die Teilnehmenden auf die Suche nach Schweizer Heilsteinen und vertiefen ihre praktischen Kenntnisse direkt in der Natur.",
      },
      {
        nr: "5",
        title: "Ausführliche Ausbildungsunterlagen und Cloud-Zugang",
        text: "Alle Teilnehmenden erhalten ausführliche Ausbildungsunterlagen sowie Zugang zur Heilsteinschule-Cloud mit ergänzenden Lernmaterialien.",
      },
      {
        nr: "6",
        title: "Abschlussprüfung und Zertifizierung",
        text: "Nach erfolgreichem Abschluss der Ausbildung und bestandener Prüfung wird das SVNH-Zertifikat feierlich überreicht.",
      },
    ],
    closing:
      "Ziel ist es, die Teilnehmenden optimal auf die praktische Anwendung und Beratung vorzubereiten und ihnen das notwendige Wissen sowie die Erfahrung für ihren weiteren Weg in der Steinheilkunde mitzugeben.",
  },
];

function ModulBox({ m, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <div className="rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
              <m.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">{m.step}</p>
              <h3 className="mt-1.5 font-heading text-2xl font-semibold leading-snug text-amethyst">{m.title}</h3>
            </div>
          </div>
          <span className="rounded-full bg-quartz px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-amethyst">
            {m.tag}
          </span>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{m.subtitle}</p>
        {m.intro && <p className="mt-4 text-sm font-medium text-amethyst">{m.intro}</p>}

        <div className="mt-5 grid gap-4 border-t border-border pt-6 md:grid-cols-2">
          {m.items.map((it) => (
            <div key={it.nr} className="flex gap-4 rounded-2xl bg-quartz/60 p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-citrine/20 font-mono text-xs font-semibold text-citrine-deep">
                {it.nr}
              </span>
              <div>
                <h4 className="font-heading text-base font-semibold leading-snug text-amethyst">{it.title}</h4>
                {it.lead && <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-citrine-deep">{it.lead}</p>}
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{it.text}</p>
              </div>
            </div>
          ))}
        </div>

        {m.closing && (
          <p className="mt-6 rounded-2xl border border-citrine/30 bg-citrine/5 p-5 text-sm leading-relaxed text-amethyst">
            {m.closing}
          </p>
        )}

        {m.note && <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{m.note}</p>}
      </div>
    </Reveal>
  );
}

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
        <div className="mt-12 space-y-6">
          {MODULE.map((m, i) => (
            <ModulBox key={m.step} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}