import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, FileText, ShieldCheck } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import EnrollmentForm from "@/components/site/EnrollmentForm";

const ANMELDEBEDINGUNGEN = [
  "Für Veranstaltungen, Seminare und Ausbildungen ist eine Anmeldung erforderlich. Diese ist verbindlich.",
  "Die Anmeldungen werden in der Reihenfolge ihres Eingangs berücksichtigt.",
  "Die Anmeldung wird verbindlich mit der Anzahlung von CHF 250.– für die Platzreservation. Dieser Betrag wird an die erste Rate der Ausbildungskosten angerechnet.",
  "Falls die Anmeldung zurückgezogen wird, verfällt der Unkostenbeitrag zu Gunsten der Heilsteinschule.",
];

export default function Anmeldung() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/Ruth_Bruno_Aug_25_2.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <GraduationCap className="h-3.5 w-3.5" /> Verbindliche Anmeldung
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
              Anmeldung zur <span className="text-gradient-gold">Ausbildung</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Mit diesem Formular melden Sie sich verbindlich zur SVNH-zertifizierten Grundausbildung
              zum Heilsteinberater an. Bitte lesen Sie die Anmeldebedingungen sorgfältig durch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Anmeldebedingungen */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-citrine/30 bg-citrine/5 p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-xl font-semibold text-amethyst">Anmeldebedingungen</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mit der verbindlichen Anmeldung akzeptieren Sie folgende Bedingungen:
            </p>
            <ul className="mt-4 space-y-3">
              {ANMELDEBEDINGUNGEN.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-citrine/15 text-xs font-bold text-citrine-deep">
                    {i + 1}
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-white/60 p-4 text-sm text-amethyst">
              <strong>Ausbildungskosten:</strong> CHF 4'250.– inkl. Schulungsunterlagen und Zertifizierung,
              zahlbar in 2 Raten. Nicht im Preis: Fachliteratur, Heilsteine, Reise-/Verpflegungskosten.
              Alpenseminar ca. CHF 490.– für 4 Übernachtungen mit Frühstück/Abendessen.
            </div>
            <Link
              to="/agb"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-citrine-deep underline underline-offset-2 hover:text-citrine"
            >
              <FileText className="h-4 w-4" /> Vollständige AGB ansehen
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Verbindlich"
            title="Anmeldeformular"
            subtitle="Bitte füllen Sie alle Felder aus. Mit dem Absenden bestätigen Sie die verbindliche Anmeldung und akzeptieren die oben genannten Anmeldebedingungen sowie die AGB."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <EnrollmentForm idPrefix="anmeldung" showTerms={false} />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-quartz/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              Noch unsicher? Stellen Sie zuerst eine unverbindliche Frage.
            </p>
            <Link
              to="/ausbildung-anfrage"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-quartz"
            >
              Frage zur Ausbildung <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}