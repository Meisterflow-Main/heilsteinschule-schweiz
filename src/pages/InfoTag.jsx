import React from "react";
import { CalendarDays, MapPin, Phone, Mail } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import ContactForm from "@/components/site/ContactForm";

const TERMINE = [
  {
    datum: "Samstag 10.10.2026, 13:00–17:00 Uhr",
    ort: "Kostenloser Infonachmittag an der Heilsteinschule in Bern",
    img: "https://heilsteinschule.swiss/media/Info-Tag/Berner-Wappen.png",
    note: "5 Gehminuten ab HB.",
  },
  {
    datum: "Samstag 31.10.2026, 13:00–17:00 Uhr",
    ort: "Kostenloser Infonachmittag an der Heilsteinschule in Asp",
    img: "https://heilsteinschule.swiss/media/Info-Tag/Argauer-wappen.png",
    note: "Dorfstr. 22, 5025 Asp — 15 Auto-Min. von Aarau",
  },
];

export default function InfoTag() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <img src="https://heilsteinschule.swiss/media/Info-Tag/Info-Tag.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <CalendarDays className="h-3.5 w-3.5" /> Kostenlos
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Info-Tag</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Kostenloser Infonachmittag an der Heilsteinschule — erfahren Sie mehr über die
              faszinierende Welt der Heilsteine und unsere Ausbildung.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Termine" title="Wir freuen uns auf Ihre Anmeldung" subtitle="Anmeldung per Formular, Telefon oder E-Mail." />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TERMINE.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:shadow-lift">
                <img src={t.img} alt="" className="h-20 w-20 object-contain" />
                <h3 className="mt-5 font-heading text-lg font-semibold text-amethyst">{t.datum}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.ort}</p>
                <p className="mt-2 text-xs text-citrine-deep">{t.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-3 rounded-2xl bg-quartz p-5 text-sm sm:flex-row sm:items-center sm:justify-center">
            <span className="font-medium text-amethyst">Direkt anmelden:</span>
            <a href="tel:+41793896622" className="inline-flex items-center gap-2 font-semibold text-citrine-deep hover:underline">
              <Phone className="h-4 w-4" /> 079 389 66 22
            </a>
            <span className="hidden text-muted-foreground sm:inline">·</span>
            <a href="mailto:anfragen@heilsteinschule.ch" className="inline-flex items-center gap-2 font-semibold text-citrine-deep hover:underline">
              <Mail className="h-4 w-4" /> anfragen@heilsteinschule.ch
            </a>
          </div>
        </Reveal>
      </section>

      <section className="bg-quartz/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Anmeldung" title="Zum Infonachmittag anmelden" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
              <ContactForm defaultDescription="Anmeldung zum Info-Tag" idPrefix="infotag" />
            </div>
          </Reveal>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-citrine-deep" /> Dorfstr. 22, 5025 Asp
          </div>
        </div>
      </section>
    </>
  );
}