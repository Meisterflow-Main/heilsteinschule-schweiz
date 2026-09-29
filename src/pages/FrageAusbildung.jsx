import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, HelpCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import ContactForm from "@/components/site/ContactForm";

export default function FrageAusbildung() {
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
              <HelpCircle className="h-3.5 w-3.5" /> Unverbindliche Anfrage
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
              Frage zur <span className="text-gradient-gold">Ausbildung</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Sie haben Fragen zu Inhalt, Kosten, Ablauf oder Terminen der Heilsteinberater-Ausbildung?
              Stellen Sie Ihre Frage — wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Unverbindlich"
            title="Ihre Frage an uns"
            subtitle="Dieses Formular ist unverbindlich und dient ausschliesslich der Beantwortung Ihrer Fragen. Für eine verbindliche Anmeldung nutzen Sie bitte die separate Anmeldeseite."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <ContactForm
              defaultDescription="Anfrage zur Ausbildung"
              idPrefix="frage"
              inquiryType="ausbildung_anfrage"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-quartz/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              Bereit zum Einstieg? Dann können Sie sich direkt verbindlich anmelden.
            </p>
            <Link
              to="/ausbildung-anmeldung"
              className="inline-flex items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
            >
              Verbindlich anmelden <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}