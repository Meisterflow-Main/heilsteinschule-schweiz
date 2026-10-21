import React from "react";
import { Link } from "react-router-dom";
import { Check, GraduationCap, ArrowRight, FileText, HelpCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import TrainingLocations from "@/components/site/TrainingLocations";

const VORAUSSETZUNGEN = [
  "Freude an Steinen und den Heilkräften der Natur.",
  "Willen, eine neue Herausforderung anzunehmen.",
  "Offenheit, sich auf die Wirkungen der Heilsteine einzulassen.",
  "Ein offenes Herz für alles was kommt — Nichts muss, alles darf sein und werden.",
];

const LEISTUNGEN = [
  "Ganzjähriger Start, Dauer mindestens ¾ Jahr",
  "Klassengrösse: min. 5, max. 8 Personen",
  "Sobald 5 Schüler angemeldet sind, wird der Schulbeginn festgelegt",
  "Persönlicher Zugang zur Cloud der Heilsteinschule",
];

export default function Ausbildung() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <img src="https://heilsteinschule.swiss/media/Ruth_Bruno_Aug_25_2.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <GraduationCap className="h-3.5 w-3.5" /> SVNH Zertifizierte Grundausbildung
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Zertifizierte Grundausbildung der <span className="text-gradient-gold">Heilsteinschule Schweiz</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Ruth Rios und Bruno Vogler Pfeiffer begleiten Sie auf dem Weg zum Heilsteinberater —
              mit Kopf, Hand, Fuss und Herz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Schulinhalt */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading center={false} eyebrow="Schulinhalt" title="Voraussetzungen & Ablauf" />
            <div className="mt-6 space-y-3">
              {VORAUSSETZUNGEN.map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-citrine/15 text-citrine-deep">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/80">{v}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-8 font-heading text-lg font-semibold text-amethyst">Für das Schulzertifikat</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Maximal 2 Fehltage während der ganzen Kursdauer. Ausgefallene Schultage können in einer
              Parallel-Klasse nachgeholt werden. Der Besuch eines Alpenseminars als praktischer
              Ausbildungsteil ist obligatorisch.
            </p>
            <Link
              to="/agb"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-citrine-deep underline underline-offset-2 hover:text-citrine"
            >
              <FileText className="h-4 w-4" /> Allgemeine Geschäftsbedingungen (AGB) ansehen
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <img src="https://heilsteinschule.swiss/media/SVNH-LOGO.jpg" alt="SVNH" className="h-12 w-12 rounded-lg object-contain" />
                <img src="https://heilsteinschule.swiss/media/GKS-Logo_farbig-ohne-Rand-300x300.png" alt="GKS" className="h-12 w-12 rounded-lg object-contain" />
              </div>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-heading text-4xl font-bold text-amethyst">CHF 4'250.–</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Ausbildungskosten inkl. Schulungsunterlagen und Zertifizierung. Ratenzahlung individuell auf Anfrage.
              </p>
              <div className="mt-6 space-y-2 border-t border-border pt-6">
                {LEISTUNGEN.map((l) => (
                  <div key={l} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" />
                    {l}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-quartz p-4 text-sm text-foreground/80">
                <strong className="text-amethyst">Nicht im Preis:</strong> Fachliteratur & Heilsteine,
                Reise-/Verpflegungskosten. Alpenseminar ca. <strong>CHF 490.–</strong> für 4 Übernachtungen
                mit Frühstück/Abendessen.
              </div>
              <div className="mt-4 rounded-xl bg-citrine/10 p-4 text-sm text-amethyst">
                <strong>Anzahlung:</strong> CHF 250.– zur Platzreservation (wird angerechnet). Schüler
                erhalten 20% Rabatt im Heilsteinshop-Asp.
              </div>
              <Link
                to="/agb"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-citrine-deep underline underline-offset-2 hover:text-citrine"
              >
                <FileText className="h-4 w-4" /> Allgemeine Geschäftsbedingungen (AGB) ansehen
              </Link>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/ausbildung-anmeldung"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
                >
                  Verbindlich anmelden <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/ausbildung-anfrage"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-quartz"
                >
                  Erst Fragen? Anfrage senden
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rabatt & Spezielles */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-soft">
              <h3 className="font-heading text-xl font-semibold text-amethyst">Rabatt & Spezielles</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/80">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" />
                  Während der Ausbildung erhalten die Schüler der Heilsteinschule Schweiz im Heilsteinshop-Asp 20% Rabatt auf die meisten Artikel.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" />
                  Die Schüler erhalten einen persönlichen Zugang zur Cloud der Heilsteinschule.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" />
                  Schultage können während der Ausbildung verschoben und auch an einem anderen Standort nachgeholt werden. Ab dem 3. Verschiebetag verrechnen wir für unsere Umtriebe CHF 30.– pro Tag, CHF 60.– pro Wochenende.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-soft">
              <h3 className="font-heading text-xl font-semibold text-amethyst">Anmeldung</h3>
              <p className="mt-5 text-sm leading-relaxed text-foreground/80">
                Die Anmeldung zur Heilsteinschule erfolgt online auf der Homepage, schriftlich oder per
                E-Mail. Die Anmeldung wird verbindlich mit der Anzahlung von{" "}
                <strong className="text-amethyst">CHF 250.–</strong> für die Platzreservation. Dieser
                Betrag wird an die erste Rate der Ausbildungskosten angerechnet.
              </p>
              <div className="mt-4 rounded-xl bg-quartz p-4 text-sm leading-relaxed text-foreground/80">
                Falls die Anmeldung zurückgezogen wird, verfällt der Unkostenbeitrag zu Gunsten der
                Heilsteinschule.
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to="/ausbildung-anmeldung"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
                >
                  Verbindlich anmelden <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/agb"
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-citrine-deep underline underline-offset-2 hover:text-citrine"
                >
                  <FileText className="h-4 w-4" /> Unsere AGB's sind auf der Homepage ersichtlich
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Schulorte — Wallbach, Münsingen, Asp */}
      <TrainingLocations />

      {/* Schulorte — Teaser zur separaten Seite */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-white p-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h3 className="font-heading text-xl font-semibold text-amethyst">Schulorte</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Asp (Hauptsitz) · Wallbach (Grundausbildung) · Münsingen (Grundausbildung & Info-Nachmittag) — dazu das Alpenseminar in den Schweizer Alpen.
                </p>
              </div>
              <Link
                to="/schulorte"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
              >
                Zur Seite Schulorte <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Schultermine — Teaser zur separaten Seite */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-white p-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h3 className="font-heading text-xl font-semibold text-amethyst">Schultermine & Kalender</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Alle neuen Schultermine, Schulkalender-Downloads und das Alpenseminar 2027.
                </p>
              </div>
              <Link
                to="/schultermine"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
              >
                Zur Seite Schultermine <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA: Frage und Anmeldung */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Nächste Schritte"
            title="Frage stellen oder anmelden"
            subtitle="Wählen Sie den für Sie passenden Weg: unverbindlich eine Frage stellen oder sich direkt verbindlich zur Ausbildung anmelden."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Link
              to="/ausbildung-anfrage"
              className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-amethyst">Frage zur Ausbildung</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Unverbindlich — wir beantworten gerne Ihre Fragen zu Inhalt, Kosten, Ablauf und Terminen.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep">
                Anfrage senden <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/ausbildung-anmeldung"
              className="group flex h-full flex-col rounded-3xl border border-citrine/40 bg-citrine/5 p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrine text-amethyst-deep">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-amethyst">Verbindlich anmelden</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Bereit zum Einstieg? Melden Sie sich verbindlich an. Anzahlung CHF 250.– zur Platzreservation.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep">
                Zur Anmeldung <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}