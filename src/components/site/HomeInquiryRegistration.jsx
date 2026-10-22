import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle, GraduationCap } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

export default function HomeInquiryRegistration() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
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
            <h3 className="mt-5 font-heading text-xl font-semibold text-amethyst">Verbindliche Anmeldung</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-amethyst">CHF 250.– Anzahlung</strong> zur Platzreservation (wird angerechnet).
              Bereit zum Einstieg? Melden Sie sich verbindlich an.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep">
              Jetzt anmelden <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}