import React from "react";
import { Link } from "react-router-dom";
import { Check, MapPin, Clock, CalendarDays, GraduationCap, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import ContactForm from "@/components/site/ContactForm";
import EnrollmentForm from "@/components/site/EnrollmentForm";
import ExcursionReports from "@/components/site/ExcursionReports";

const STANDORTE = [
  {
    name: "Schule Asp",
    ort: "Heilsteinshop-Asp, Dorfstrasse 22, 5025 Asp",
    img: "https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg",
    tage: "Donnerstag, 09:00–17:00 Uhr, 2× monatlich",
    leitung: "Ruth Rios",
    hinweis: "Hauptsitz und Laden · Parkplätze beim Haus vorhanden",
  },
  {
    name: "Wallbach AG (Fricktal)",
    ort: "Rheinstrasse 29, 4323 Wallbach AG",
    img: "https://heilsteinschule.swiss/media/wunderblock/wallbach-ag.jpg",
    tage: "Donnerstag 09–17h (2×/Monat), Sa/So 1×/Monat",
    leitung: "Ruth Rios",
    hinweis: "Parkplätze beim Haus vorhanden",
  },
  {
    name: "Schule Bern",
    ort: "Kapellenstrasse 5 (4. Stock), 3011 Bern",
    img: "https://heilsteinschule.swiss/media/wunderblock/svnh-gebaeude.jpg",
    tage: "Wochenende, 09:00–17:00 Uhr, 1× monatlich",
    leitung: "Ruth Rios",
    hinweis: "Im selben Gebäude wie SVNH · Neue Klasse 2027 · 6 Min. ab HB",
    weg: "ÖV: Vom Hauptbahnhof Bern ca. 6 Min. zu Fuss — Zug in Richtung Welle 7 verlassen, Richtung Süden zum Hirschengraben, weiter auf die Monbijoustrasse, dann rechts in die Kapellenstrasse. Hausnummer 5 links. Auto: Nur blaue Zone (1 Std.) und City West Parking. Keine eigenen Parkplätze.",
  },
  {
    name: "Schule Uster ZH",
    ort: "Brauereistrasse 10, 8610 Uster",
    img: "https://heilsteinschule.swiss/media/wunderblock/schulort-uster1.jpg",
    tage: "Neue Klasse 2027 geplant",
    leitung: "Sarah Ziegenhagen",
    hinweis: "Parkplätze beim Haus vorhanden",
  },
];

const TEAM = [
  { name: "Bruno Vogler Pfeiffer", role: "Schul-Gründer und Schulleiter", img: "https://heilsteinschule.swiss/media/topics-pictures/thumbs/bruno_vogler_pfeiffer.png" },
  { name: "Ruth Rios", role: "Hauptdozentin der Heilsteinschule", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/460e2670f_ChatGPTImageSep21202602_29_12PM.png" },
  { name: "Pascal Bossard", role: "Kreativ verantwortlich, Leiter Alpenseminar", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/057e4eb82_ChatGPTImageSep21202602_32_05PM.png" },
  { name: "Sarah Ziegenhagen", role: "Dozentin Uster ZH", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/744f004b6_ChatGPTImageSep21202602_35_44PM.png" },
  { name: "Joe Schnarwiler", role: "Dozent", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/8ed080c78_ChatGPTImageSep21202602_36_58PM.png" },
  { name: "Maja Pfeiffer", role: "StV Schulleitung und Leitung Heilsteinshop-Asp", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/d3b26ef85_ChatGPTImageSep21202602_40_48PM.png" },
  { name: "Judith von Rotz", role: "Buchhaltung und Rechnungswesen", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/1a6cef69a_ChatGPTImageSep21202602_42_52PM.png" },
  { name: "René Schmid", role: "IT Support — gesamte IT-Infrastruktur", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/16619e80b_ChatGPTImageSep21202602_43_39PM.png" },
];

const VORAUSSETZUNGEN = [
  "Freude an Steinen und den Heilkräften der Natur.",
  "Willen, eine neue Herausforderung anzunehmen.",
  "Offenheit, sich auf die Wirkungen der Heilsteine einzulassen.",
  "Ein offenes Herz für alles was kommt — Nichts muss, alles darf sein und werden.",
];

const LEISTUNGEN = [
  "Ganzjähriger Start, Dauer mindestens ¾ Jahr",
  "Sobald 5 Schüler angemeldet sind, wird der Schulbeginn festgelegt",
  "Bei Klassen über 10 Schüler: 2 Dozenten",
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
                Ausbildungskosten inkl. Schulungsunterlagen und Zertifizierung. Zahlbar in 2 Raten.
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
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#anmeldung"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
                >
                  Verbindlich anmelden <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-quartz"
                >
                  Erst Fragen? Anfrage senden
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Schulorte */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Schulorte"
              title="Asp · Wallbach · Bern · Uster"
              subtitle="Vier Standorte in der Schweiz — finden Sie den Lernort, der zu Ihnen passt."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {STANDORTE.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-amethyst/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 font-heading text-xl font-semibold text-white">{s.name}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-2 text-sm text-foreground/80">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {s.ort}
                    </div>
                    <div className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {s.tage}
                    </div>
                    <div className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> Leitung: {s.leitung}
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{s.hinweis}</p>
                    {s.weg && (
                      <div className="mt-3 rounded-lg bg-quartz p-3 text-xs leading-relaxed text-muted-foreground">
                        <strong className="text-amethyst">Wegbeschreibung:</strong> {s.weg}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Dozenten-Team"
            title="Team Heilsteinschule"
            subtitle="Für mehr Info klicken Sie jeweils auf die Person."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading text-base font-semibold text-amethyst">{m.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Schultermine */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Schultermine"
              title="Kalender & Downloads"
              subtitle="Alle Schulkalender und Termine auf einen Blick."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <CalendarDays className="h-7 w-7 text-citrine-deep" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Schulkalender Bern 2</h3>
                <p className="mt-1 text-sm text-muted-foreground">Start 23.01.2027 · Wochenenden</p>
                <a
                  href="https://heilsteinschule.swiss/ausbildung/schultermine/?dl=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-citrine-deep hover:underline"
                >
                  Download →
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <CalendarDays className="h-7 w-7 text-citrine-deep" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Schulkalender Asp8</h3>
                <p className="mt-1 text-sm text-muted-foreground">Start 21.05.2026 · Donnerstags</p>
                <a
                  href="https://heilsteinschule.swiss/ausbildung/schultermine/?dl=15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-citrine-deep hover:underline"
                >
                  Download →
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <CalendarDays className="h-7 w-7 text-citrine-deep" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Schulkalender Wallbach 1</h3>
                <p className="mt-1 text-sm text-muted-foreground">Start 30.01.2027 · Wochenenden</p>
                <a
                  href="https://heilsteinschule.swiss/ausbildung/schultermine/?dl=28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-citrine-deep hover:underline"
                >
                  Download →
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <CalendarDays className="h-7 w-7 text-citrine-deep" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Schulkalender Wallbach 2</h3>
                <p className="mt-1 text-sm text-muted-foreground">Start 21.01.2027 · Donnerstags</p>
                <a
                  href="https://heilsteinschule.swiss/ausbildung/schultermine/?dl=23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-citrine-deep hover:underline"
                >
                  Download →
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 rounded-2xl bg-quartz p-5 text-sm text-foreground/80">
              <p className="font-semibold text-amethyst">Alpenseminar 2027: 23.06. – 27.06.2027 (für alle Klassen)</p>
              <p className="mt-1 text-xs text-muted-foreground">Schulstart 2027 bei mindestens 5 Anmeldungen pro Lehrgang. Uster 1: ab 2027 geplant.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Exkursionen & Alpenseminar (Praktischer Ausbildungsteil) */}
      <ExcursionReports />

      {/* Allgemeine Anfrage (unverbindlich) */}
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Allgemeine Anfrage"
            title="Noch Fragen zur Ausbildung?"
            subtitle="Unverbindliche Anfrage — wir beantworten gerne Ihre Fragen zu Inhalt, Kosten, Ablauf und Terminen. Verbindlich anmelden können Sie sich weiter unten."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <ContactForm defaultDescription="Anfrage zur Ausbildung" idPrefix="ausbfrage" inquiryType="ausbildung_anfrage" />
          </div>
        </Reveal>
      </section>

      {/* Verbindliche Anmeldung */}
      <section id="anmeldung" className="bg-quartz/60 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Verbindliche Anmeldung"
              title="Anmeldung zur Ausbildung"
              subtitle="Mit diesem Formular melden Sie sich verbindlich zur Grundausbildung an. Die Anzahlung von CHF 250.– sichert Ihren Platz und wird bei der Rechnung angerechnet."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
              <EnrollmentForm idPrefix="anmeldung" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}