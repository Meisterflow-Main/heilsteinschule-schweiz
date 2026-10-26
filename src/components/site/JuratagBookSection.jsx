import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const COVER =
  "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/9bef8f5de_Reisezumirselbst_MediterraneLebensreise.png";

export default function JuratagBookSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={COVER}
              alt="Buch - Reise zu mir selbst - Bruno Vogler Pfeiffer"
              className="w-full object-contain"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            center={false}
            eyebrow="Buch"
            title="Reise zu mir selbst"
            subtitle="Bruno Vogler Pfeiffer"
          />
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
          <Link
            to="/brunos-buch"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-3.5 text-sm font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
          >
            Zum Buch <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}