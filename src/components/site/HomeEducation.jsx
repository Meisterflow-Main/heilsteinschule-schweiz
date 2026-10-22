import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, GraduationCap, Users, Mountain, Calendar } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

export default function HomeEducation() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Ausbildung"
          title="Heilsteinberater-Ausbildung mit SVNH-Zertifizierung"
          subtitle="Fundierte, praxisnahe Steinheilkunde — mit Kopf, Hand, Fuss und Herz zum anerkannten Abschluss."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Reveal delay={0.05}>
          <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amethyst/10">
              <GraduationCap className="h-6 w-6 text-amethyst" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Grundausbildung</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Dauer mindestens drei Vierteljahre. SVNH-zertifiziert, inklusive Unterlagen und
              Zertifikat. <strong className="text-amethyst">Klassengrösse: min. 5, max. 8 Personen.</strong>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amethyst/10">
              <Users className="h-6 w-6 text-amethyst" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Schulorte</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-amethyst">Wallbach</strong> (Grundausbildung) und{" "}
              <strong className="text-amethyst">Münsingen</strong> (Grundausbildung & Info-Nachmittag/-Abend).
              Asp ist der Hauptsitz mit Heilsteinshop und Praxis.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amethyst/10">
              <Mountain className="h-6 w-6 text-amethyst" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-amethyst">Alpenseminar</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ein obligatorischer praktischer Ausbildungsteil in den <strong className="text-amethyst">Schweizer Alpen</strong> —
              vier Übernachtungen, die das Erlernte vertiefen.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/ausbildung" className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light">
            Ausbildung entdecken <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/info-nachmittag" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-semibold text-amethyst transition hover:bg-muted">
            <Play className="h-4 w-4" /> Zum Info-Nachmittag/-Abend
          </Link>
        </div>
      </Reveal>
    </section>
  );
}