import React from "react";
import { GraduationCap, Phone, Mail, Check } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import SeminarCard from "@/components/site/SeminarCard";
import { TAGESSEMINAR } from "@/data/infoanlaesse";

export default function Seminare() {
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
              <GraduationCap className="h-3.5 w-3.5" /> Fachwissen an einem Tag
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Seminare</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Tagesseminare der Heilsteinschule Schweiz in Asp — ein Thema der Steinheilkunde, fundiert
              vermittelt und an einem Tag erlebbar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TERMIN */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Termin"
            title="Nächstes Tagesseminar"
            subtitle="Die Seminare vertiefen ein Thema der Steinheilkunde — inklusive Verpflegung, Kursunterlagen und Fachbuch."
          />
        </Reveal>
        <div className="mx-auto mt-12 max-w-xl">
          <SeminarCard seminar={TAGESSEMINAR} />
        </div>
      </section>

      {/* INHALTE */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-white p-7 shadow-soft sm:p-9">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">Im Kursgeld enthalten</span>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-amethyst">{TAGESSEMINAR.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {TAGESSEMINAR.displayDate} · {TAGESSEMINAR.time} · {TAGESSEMINAR.ort} — {TAGESSEMINAR.leitung}
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {TAGESSEMINAR.inklusive.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-heading text-xl font-bold text-amethyst">{TAGESSEMINAR.preis}</span>
                  <p className="text-xs text-muted-foreground">{TAGESSEMINAR.hinweis}</p>
                </div>
                <a
                  href="mailto:anfragen@heilsteinschule.ch"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-5 py-2.5 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
                >
                  <Mail className="h-4 w-4" /> Seminar anfragen
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 text-center shadow-soft sm:flex-row sm:items-center sm:justify-around sm:text-left">
            <div>
              <h3 className="font-heading text-base font-semibold text-amethyst">Fragen zum Seminar?</h3>
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