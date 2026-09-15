import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const SECTIONS = [
  {
    t: "Anmeldung",
    c: "Für Veranstaltungen, Seminare und Ausbildungen ist eine Anmeldung erforderlich. Diese ist verbindlich. Die Anmeldungen werden in der Reihenfolge ihres Eingangs berücksichtigt. Die Anmeldung wird verbindlich mit der Anzahlung von CHF 250.– für die Platzreservation. Dieser Betrag wird an die erste Rate der Ausbildungskosten angerechnet. Falls die Anmeldung zurückgezogen wird, verfällt der Unkostenbeitrag zu Gunsten der Heilsteinschule.",
  },
  {
    t: "Preise und Konditionen",
    c: "Die Ausbildungskosten inkl. Schulungsunterlagen und Zertifizierung betragen CHF 4'250.–, zahlbar in 2 Raten: die erste Rate ist 4 Wochen vor Kursbeginn fällig, die zweite Rate 2 Wochen vor dem 13. Schultag. Im Preis nicht inbegriffen sind Fachliteratur, Heilsteine, Reisekosten, Verpflegung und Unterkunft. Für das Alpenseminar fallen zusätzlich ca. CHF 490.– an.",
  },
  {
    t: "Rabatt und Spezielles",
    c: "Während der Zeit der Ausbildung erhalten die Schüler der Heilsteinschule Schweiz im Heilsteinshop-Asp 20% Rabatt auf die meisten Artikel. Die Schüler erhalten einen persönlichen Zugang zur Cloud der Heilsteinschule. Schultage können während der Ausbildung verschoben und auch an einem anderen Standort nachgeholt werden. Ab dem 3. Verschiebetag verrechnen wir CHF 30.– pro Tag, CHF 60.– pro Wochenende.",
  },
  {
    t: "Voraussetzungen für das Zertifikat",
    c: "Maximal 2 Fehltage während der ganzen Kursdauer. Es besteht immer die Möglichkeit, ausgefallene Schultage in einer Parallel-Klasse nachzuholen. Der Besuch eines Alpenseminars als praktischer Ausbildungsteil ist obligatorisch.",
  },
  {
    t: "Durchführung",
    c: "Sobald an einem Schulstandort mindestens 5 Schüler angemeldet sind, wird der Schulbeginn festgelegt. Bei Klassen über 10 Schüler werden die Schultage durch 2 Dozenten geführt. Ganzjähriger Start, Dauer mindestens ¾ Jahr.",
  },
];

export default function AGB() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading center={false} eyebrow="Verbindliche Grundlagen" title="Allgemeine Geschäftsbedingungen (AGB)" />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 space-y-4">
          {SECTIONS.map((s, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-white p-5 shadow-soft">
              <summary className="flex cursor-pointer items-center justify-between font-heading text-base font-semibold text-amethyst">
                {s.t}
                <span className="text-citrine-deep transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.c}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}