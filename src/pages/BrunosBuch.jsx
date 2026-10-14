import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Phone, Mail, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

export default function BrunosBuch() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/Brunos_Buch/20251107_112040.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <BookOpen className="h-3.5 w-3.5" /> Jetzt im Handel
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
              Reise zu mir <span className="text-gradient-gold">selbst</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Meine Lebensreise durch Handwerk, Reisen, Neuanfang, Heilung und Spiritualität.
              Bruno Vogler Pfeiffer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Buch-Inhalt */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src="https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/9bef8f5de_Reisezumirselbst_MediterraneLebensreise.png"
                alt="Buch - Reise zu mir selbst - Bruno Vogler Pfeiffer"
                className="w-full object-contain"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading center={false} eyebrow="ISBN 9798269951614" title="Reise zu mir selbst" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Eine Lebensgeschichte zwischen Werkbank und Uniform: Aufgewachsen in der Schweiz der
              1950er/60er Jahre, führt der Weg vom Handwerk zur Polizei – und wieder zurück zu den
              eigenen Wurzeln. Später folgen Selbstständigkeit, Reisen nach Israel und Afrika, prägende
              Begegnungen und die schrittweise Hinwendung zu Natur, Stille und Steinheilkunde.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Das Buch erzählt von Entscheidungen und Umwegen, vom Suchen und Finden eines verlässlichen
              inneren Kompasses. Es zeichnet ein Zeitbild abseits von Pathos: Arbeit mit den Händen,
              Verantwortung im Dienst, Lernwege auf Reisen, das Wiederaufstehen nach einem Schlaganfall –
              und ein leiser Humor, der vieles trägt.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Entstanden ist eine Biografie, die ohne große Gesten auskommt und gerade dadurch berührt:
              ein Blick auf das, was bleibt, wenn Rollen wechseln – und auf das, was wächst, wenn man den
              Dingen Zeit gibt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bestell-Info */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-10">
              <SectionHeading
                center={false}
                eyebrow="Bestellung"
                title="Jetzt erhältlich"
                subtitle="Nur für Kunden mit Schweizer Adresse!"
              />
              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-citrine/10 p-5">
                  <p className="text-sm font-semibold text-amethyst">
                    Das Buch ist nur per Vorkasse erhältlich — sFr. 20.– Versandkostenfrei!
                  </p>
                </div>
                <div className="rounded-xl border border-border p-5">
                  <p className="text-sm font-medium text-amethyst">Informationen für Vorkasse:</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Konto-Anfrage per Mail oder telefonisch:
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:+41793896622"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white transition hover:bg-amethyst-deep"
                    >
                      <Phone className="h-4 w-4" /> 079 389 66 22
                    </a>
                    <a
                      href="mailto:anfragen@heilsteinschule.ch"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-citrine px-6 py-3 text-sm font-semibold text-citrine-deep transition hover:bg-citrine/10"
                    >
                      <Mail className="h-4 w-4" /> E-Mail senden
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Lernen Sie Bruno Vogler Pfeiffer kennen
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Erfahren Sie mehr über den Gründer der Heilsteinschule Schweiz und seine Arbeit.
            </p>
            <Link
              to="/ueber-uns"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-3.5 text-sm font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
            >
              Über uns <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}