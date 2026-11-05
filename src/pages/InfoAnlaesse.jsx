import React from "react";
import { CalendarDays, Phone, Mail } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import InfoAnlassCard from "@/components/site/InfoAnlassCard";
import { INFOABEND, PROGRAMM } from "@/data/infoanlaesse";

export default function InfoAnlaesse() {
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
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Infoanlässe</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Info-Nachmittag und Info-Abend an der Heilsteinschule Schweiz — lernen Sie die Schule, das
              Dozententeam und die Steinheilkunde kennen, ohne Kosten und ohne Verpflichtung.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMM */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Programm"
            title="Was passiert an den Infoanlässen?"
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

      {/* TERMIN */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Termin"
              title="Nächster Infoanlass"
              subtitle="Der Info-Nachmittag/-Abend findet in Münsingen und Asp statt. Eine Anmeldung ist nicht zwingend, hilft uns aber bei der Planung."
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-xl">
            <InfoAnlassCard infoabend={INFOABEND} />
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 text-center shadow-soft sm:flex-row sm:items-center sm:justify-around sm:text-left">
            <div>
              <h3 className="font-heading text-base font-semibold text-amethyst">Fragen zum Infoanlass?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Wir sind gerne für Sie da.</p>
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
      </section>
    </>
  );
}