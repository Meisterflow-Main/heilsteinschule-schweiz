import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Award, MapPin, Users, CreditCard, Clock, HelpCircle, GraduationCap } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const FACTS = [
  { icon: Clock, label: "Dauer", value: "Mindestens ¾ Jahr" },
  { icon: Award, label: "Zertifizierung", value: "SVNH-Zertifizierung" },
  { icon: MapPin, label: "Schulorte", value: "Wallbach & Münsingen" },
  { icon: Users, label: "Teilnehmer", value: "5–8 Personen" },
  { icon: CreditCard, label: "Preis", value: "CHF 4'250.– inkl. Unterlagen & Zertifikat" },
  { icon: Calendar, label: "Starttermine", value: "Ganzjähriger Start — siehe Kalender" },
];

export default function HomeTrainingOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Grundausbildung"
          title="Heilsteinberater-Ausbildung mit SVNH-Zertifizierung"
          subtitle="Fundierte, praxisnahe Steinheilkunde — mit Kopf, Hand, Fuss und Herz zum anerkannten Abschluss."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FACTS.map((f, i) => (
          <Reveal key={f.label} delay={i * 0.05}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amethyst/10 text-amethyst">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-citrine-deep">{f.label}</p>
                <p className="mt-1 text-sm font-medium leading-snug text-amethyst">{f.value}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-quartz p-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">
            <strong className="text-amethyst">Zahlbar in 2 Raten.</strong> Anzahlung CHF 250.– zur Platzreservation.
            Klassengrösse: min. 5, max. 8 Personen.
          </p>
          <Link
            to="/schultermine"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-citrine-deep underline underline-offset-4 hover:text-citrine"
          >
            <Calendar className="h-4 w-4" /> Nächste Starttermine im Kalender <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/ausbildung-anfrage"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-semibold text-amethyst transition hover:bg-muted"
          >
            <HelpCircle className="h-4 w-4" /> Frage zur Ausbildung
          </Link>
          <Link
            to="/ausbildung-anmeldung"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
          >
            <GraduationCap className="h-4 w-4" /> Jetzt anmelden <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}