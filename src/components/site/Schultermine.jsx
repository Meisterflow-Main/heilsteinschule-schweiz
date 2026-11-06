import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Download, Mountain, ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

export const TERMINE = [
  { ort: "Wallbach 1", beginn: "30. / 31. 01. 2027", tag: "Sa/So", stern: true },
  { ort: "Wallbach 2", beginn: "21. 01. 2027", tag: "Do", stern: true },
  { ort: "Münsingen 2", beginn: "23. / 24. 01. 2027", tag: "Sa/So", stern: true },
];

export const KALENDER = [
  { name: "Schulkalender Bern 2", zeitraum: "Januar 2027 bis Oktober 2027" },
  { name: "Schulkalender Münsingen 2", groesse: "10.51 KB", start: "23.01.2027", rhythmus: "Wochenenden", dl: 3 },
  { name: "Schulkalender Wallbach 2", groesse: "19.39 KB", start: "21.01.2027", rhythmus: "Donnerstags", dl: 23 },
  { name: "Schulkalender Wallbach 1", groesse: "10.54 KB", start: "30.01.2027", rhythmus: "Wochenenden", dl: 28 },
];

export default function Schultermine({ withHeading = true }) {
  return (
    <div>
      {withHeading && (
        <Reveal>
          <SectionHeading
            eyebrow="Schultermine"
            title="Neue Schultermine & Kalender"
            subtitle="Alle Termine, Schulkalender und das Alpenseminar auf einen Blick."
          />
        </Reveal>
      )}

      {/* Neue Schultermine Tabelle */}
      <Reveal delay={0.05}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
          <div className="grid grid-cols-3 bg-amethyst px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white sm:px-6">
            <div>Ort</div>
            <div>Beginn</div>
            <div>Tag</div>
          </div>
          {TERMINE.map((t, i) => (
            <div
              key={t.ort}
              className={`grid grid-cols-3 px-5 py-3 text-sm sm:px-6 ${
                i % 2 ? "bg-quartz/40" : "bg-white"
              }`}
            >
              <div className="font-medium text-amethyst">
                {t.ort} {t.stern && <span className="text-citrine-deep">*</span>}
              </div>
              <div className="text-foreground/80">{t.beginn}</div>
              <div className="text-foreground/80">{t.tag}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Alpenseminar */}
      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-col items-start gap-2 rounded-2xl border border-citrine/40 bg-citrine/5 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Mountain className="h-7 w-7 text-citrine-deep" />
            <div>
              <h3 className="font-heading text-lg font-semibold text-amethyst">Alpenseminar 2027</h3>
              <p className="text-sm text-muted-foreground">23.06. – 27.06.2027 · für alle Klassen</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            * Schulstart 2027 bei mindestens 5 Anmeldungen pro Lehrgang.
          </p>
        </div>
      </Reveal>

      {/* Schulanmeldung */}
      <Reveal delay={0.12}>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
          <p className="text-sm text-foreground/80">
            Schulanmeldung:{" "}
            <Link to="/ausbildung-anmeldung" className="font-semibold text-citrine-deep hover:underline">
              Zur Schulanmeldung
            </Link>
          </p>
          <span className="text-xs text-muted-foreground">Kalender aktualisiert am 16. Sept 2027</span>
        </div>
      </Reveal>

      {/* Kalender Downloads */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {KALENDER.map((k, i) => (
          <Reveal key={k.name} delay={i * 0.05}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-7 w-7 text-citrine-deep" />
                <h3 className="font-heading text-lg font-semibold text-amethyst">{k.name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {k.zeitraum ? (
                  k.zeitraum
                ) : (
                  <>
                    Start {k.start} · <strong>{k.rhythmus}</strong>
                  </>
                )}
              </p>
              {k.groesse && <p className="text-xs text-muted-foreground">{k.groesse}</p>}
              {k.dl && (
                <a
                  href={`https://heilsteinschule.swiss/ausbildung/schultermine/?dl=${k.dl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-citrine-deep hover:underline"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 text-center text-xs text-muted-foreground">Zeige {KALENDER.length} von insgesamt {KALENDER.length} Dateien</div>
      </Reveal>
    </div>
  );
}