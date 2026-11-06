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
      "Dies sind die 4 Grundlagen der analytischen Steinheilkunde nach Michael Gienger: Wir vermitteln geologische Grundkenntnisse, Entstehung, Farbenlehre, chemische Zusammensetzung der Heilsteine und Kristallstrukturen.",
    items: [
      {
        nr: "1",
        title: "Entstehung",
        text: "steht in Beziehung zu Lebenssituationen",
      },
      {
        nr: "2",
        title: "Kristallstruktur",
        text: "spiegelt die Grundhaltung des Menschen wider",
      },
      {
        nr: "3",
        title: "Zusammensetzung",
        text: "ist die Verbindung zu Stoffwechselprozessen",
      },
      {
        nr: "4",
        title: "Farbe",
        text: "beeinflusst Organsysteme und seelische/mentale Reaktionen, sowie geistiges Erleben",
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
    <Reveal delay={index * 0.08}>
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
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.subtitle}</p>
        {m.intro && <p className="mt-3 text-sm font-medium text-amethyst">{m.intro}</p>}

        <ul className="mt-5 space-y-3 border-t border-border pt-5">
          {m.items.map((it) => (
            <li key={it.nr} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-citrine/20 font-mono text-[11px] font-semibold text-citrine-deep">
                {it.nr}
              </span>
              <div>
                <p className="text-sm font-semibold leading-snug text-amethyst">{it.title}</p>
                {it.lead && <p className="mt-0.5 text-xs font-medium text-citrine-deep">{it.lead}</p>}
                <p className="mt-1 text-xs leading-relaxed text-foreground/75">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          {m.closing && (
            <p className="rounded-2xl border border-citrine/30 bg-citrine/5 p-4 text-xs leading-relaxed text-amethyst">
              {m.closing}
            </p>
          )}
          {m.note && <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{m.note}</p>}
        </div>
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
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MODULE.map((m, i) => (
            <ModulBox key={m.step} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}