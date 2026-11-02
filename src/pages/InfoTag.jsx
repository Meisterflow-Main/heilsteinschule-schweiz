import React from "react";
import { CalendarDays, MapPin, Phone, Mail, Clock, Users, HandHeart, GraduationCap, MessageSquare, ArrowRight, Train, Newspaper, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import InfoNachmittagForm from "@/components/site/InfoNachmittagForm";

// ─── Info-Nachmittag Termine ───────────────────────────────────────────────
// Um einen neuen Termin hinzuzufügen: einfach hier einen Eintrag ergänzen.
// Abgelaufene Termine (Datum in der Vergangenheit) werden automatisch ausgeblendet.
// Wenn alle Termine abgelaufen sind, zeigt das Formular "Weitere Termine folgen".
const TERMINE = [
  {
    id: "asp-2026-10-31",
    datum: "2026-10-31",
    displayDate: "Samstag, 31.10.2026",
    time: "13:00–17:00 Uhr",
    ort: "Asp",
    address: "Dorfstr. 22, 5025 Asp",
    travelTime: "15 Auto-Min. von Aarau.",
    img: "https://heilsteinschule.swiss/media/Info-Tag/Argauer-wappen.png",
    travelInfo:
      "Asp liegt im Fricktal, Kanton Aargau. Parkplätze beim Haus vorhanden.",
  },
];

// ─── Tagesseminar ──────────────────────────────────────────────────────────
const TAGESSEMINAR = {
  time: "09:00–17:00 Uhr",
  displayDate: "Samstag, 16. Januar 2027",
  ort: "Asp",
  title: "Die 24 Heilsteine der Hildegard von Bingen",
  leitung: "Tagesseminar in Asp mit Bruno Vogler Pfeiffer",
  inklusive: [
    "Kurskosten inklusive Mittagessen",
    "Fachbuch über Hildegard von Bingen",
    "Kursunterlagen",
    "Zwischenverpflegung",
  ],
  preis: "Fr. 258.00",
  hinweis: "Anmeldung entspricht def. Buchung",
  img: "https://heilsteinschule.swiss/media/Info-Tag/Argauer-wappen.png",
};

// ─── Programm ──────────────────────────────────────────────────────────────
const PROGRAMM = [
  {
    icon: HandHeart,
    title: "Begrüssung & Vorstellung",
    text: "Lernen Sie die Heilsteinschule Schweiz und die Menschen dahinter kennen.",
  },
  {
    icon: GraduationCap,
    title: "Die Ausbildung",
    text: "Erfahren Sie, was die Grundausbildung umfasst und wie sie strukturiert ist.",
  },
  {
    icon: Users,
    title: "Lernansatz",
    text: "Entdecken Sie die Philosophie des Lernens mit Kopf, Herz, Hand und Fuss.",
  },
  {
    icon: MessageSquare,
    title: "Fragen & Austausch",
    text: "Stellen Sie individuelle Fragen und sprechen Sie mit dem Team.",
  },
  {
    icon: ArrowRight,
    title: "Nächste Schritte",
    text: "Informationen zu Terminen, Standorten, Anmeldung und dem weiteren Vorgehen.",
  },
];

export default function InfoTag() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <img src="https://heilsteinschule.swiss/media/Info-Tag/Info-Tag.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <CalendarDays className="h-3.5 w-3.5" /> Kostenlos & unverbindlich
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Info-Nachmittag/-Abend</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Kostenloser Info-Nachmittag/-Abend an der Heilsteinschule Schweiz in Asp und Münsingen —
              erfahren Sie mehr über die faszinierende Welt der Heilsteine und unsere Ausbildung.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WAS PASSIERT AM INFO-NACHMITTAG? */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Programm"
            title="Was passiert am Info-Nachmittag/-Abend?"
            subtitle="Ein Nachmittag voller Eindrücke — lernen Sie die Schule, das Dozententeam und die Steinheilkunde unverbindlich kennen."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMM.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-amethyst">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TERMINE */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Termine"
              title="Anstehende Info-Nachmittage/-Abende"
              subtitle="Der Info-Nachmittag/-Abend findet in Münsingen und Asp statt. Wählen Sie unten Ihren Wunschtermin."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {TERMINE.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:shadow-lift">
                  <img src={t.img} alt={`Wappen ${t.ort}`} className="h-20 w-20 object-contain" />
                  <div className="mt-5 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                    <CalendarDays className="h-3.5 w-3.5" /> {t.time}
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-amethyst">{t.displayDate}</h3>
                  <p className="mt-1 text-sm font-medium text-amethyst">Kostenloser Info-Nachmittag/-Abend in {t.ort}</p>
                  <div className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {t.address}
                  </div>
                  <div className="mt-2 flex items-start gap-2 text-sm text-foreground/80">
                    <Train className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {t.travelTime}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={TERMINE.length * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-citrine bg-white p-7 shadow-soft transition hover:shadow-lift">
                <img src={TAGESSEMINAR.img} alt={`Wappen ${TAGESSEMINAR.ort}`} className="h-20 w-20 object-contain" />
                <div className="mt-5 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  <CalendarDays className="h-3.5 w-3.5" /> {TAGESSEMINAR.time}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-amethyst">{TAGESSEMINAR.displayDate}</h3>
                <p className="mt-1 text-sm font-medium text-amethyst">{TAGESSEMINAR.leitung}</p>
                <h4 className="mt-4 font-heading text-base font-semibold text-amethyst">{TAGESSEMINAR.title}</h4>
                <ul className="mt-3 space-y-1.5">
                  {TAGESSEMINAR.inklusive.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="text-sm font-medium text-muted-foreground">Kurskosten Total</span>
                  <span className="font-heading text-xl font-bold text-amethyst">{TAGESSEMINAR.preis}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{TAGESSEMINAR.hinweis}</p>
                <Link
                  to="/kontakt"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-citrine px-5 py-2.5 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
                >
                  Anmelden <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={TERMINE.length * 0.1 + 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:shadow-lift">
                <img
                  src="https://heilsteinschule.swiss/modules/tiny_newsletter/templates/latest-topics/header.jpg"
                  alt="Newsletter Heilsteinschule Schweiz"
                  className="h-20 w-full rounded-2xl object-cover"
                />
                <div className="mt-5 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  <Newspaper className="h-3.5 w-3.5" /> Newsletter
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-amethyst">Newsletter der Heilsteinschule Schweiz</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Alle Termine und Neuigkeiten der Heilsteinschule Schweiz im Überblick.
                </p>
                <a
                  href="https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=17&a="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-citrine px-5 py-2.5 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
                >
                  Newsletter ansehen <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              <Clock className="mr-1.5 inline h-4 w-4 text-citrine-deep" />
              Weitere Termine folgen. Neue Daten werden hier veröffentlicht, sobald sie feststehen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ANMELDUNG / FORMULAR */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Anmeldung"
            title="Zum Info-Nachmittag/-Abend anmelden"
            subtitle="Wählen Sie einen Termin, geben Sie die Anzahl Personen an und senden Sie uns Ihre Anmeldung."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <InfoNachmittagForm termine={TERMINE} idPrefix="infon" />
          </div>
        </Reveal>
      </section>

      {/* DIREKTE KONTAKTMÖGLICHKEITEN */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 text-center shadow-soft sm:flex-row sm:items-center sm:justify-around sm:text-left">
              <div>
                <h3 className="font-heading text-base font-semibold text-amethyst">Lieber direkt anmelden?</h3>
                <p className="mt-1 text-sm text-muted-foreground">Per Telefon oder E-Mail.</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <a href="tel:+41793896622" className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-5 py-2.5 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light">
                  <Phone className="h-4 w-4" /> 079 389 66 22
                </a>
                <a href="mailto:anfragen@heilsteinschule.ch" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-amethyst transition hover:bg-muted">
                  <Mail className="h-4 w-4" /> E-Mail senden
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}