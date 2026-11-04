import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import ContactForm from "@/components/site/ContactForm";
import GoogleReviewCard from "@/components/site/GoogleReviewCard";

export default function Kontakt() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <img src="https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              Anfragen
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Kontakt</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Die Heilsteinschule Schweiz: mit Kopf, Herz, Hand und Fuss zum Heilsteinberater.
              Schreiben Sie uns — wir freuen uns auf Ihre Nachricht.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Kontaktinfos */}
          <Reveal>
            <SectionHeading center={false} eyebrow="So erreichen Sie uns" title="Heilsteinschule Schweiz" />
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-amethyst">Adresse</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Heilsteinschule Schweiz<br />
                    Heilsteinshop-Asp, Bruno Vogler Pfeiffer<br />
                    Dorfstrasse 22, 5025 Asp
                  </p>
                </div>
              </div>
              <a href="tel:+41793896622" className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:border-citrine hover:shadow-lift">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-amethyst">Telefon</h3>
                  <p className="mt-1 text-sm text-muted-foreground">+41 79 389 66 22</p>
                </div>
              </a>
              <a href="mailto:anfragen@heilsteinschule.ch" className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:border-citrine hover:shadow-lift">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-amethyst">E-Mail</h3>
                  <p className="mt-1 text-sm text-muted-foreground">anfragen@heilsteinschule.ch</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-amethyst">Öffnungszeiten Laden</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Dreimal im Monat geöffnet — aktuelle Termine finden Sie auf der Seite{" "}
                    <a href="https://heilsteinschule.swiss/laden---praxis/" target="_blank" rel="noopener noreferrer" className="text-citrine-deep underline underline-offset-2 hover:text-citrine">
                      Laden & Praxis
                    </a>{" "}
                    oder auf Anfrage per Telefon oder E-Mail.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Formular */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-amethyst">Schreiben Sie uns</h3>
              <p className="mt-1 text-sm text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
              <div className="mt-6">
                <ContactForm defaultDescription="" idPrefix="kontakt" showTerms />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Google-Bewertungen */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Reveal>
            <GoogleReviewCard />
          </Reveal>
        </div>
      </section>
    </>
  );
}