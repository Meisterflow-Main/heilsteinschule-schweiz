import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle, GraduationCap, Play } from "lucide-react";
import Reveal from "@/components/site/Reveal";

export default function HomeClosingCta() {
  return (
    <section className="relative overflow-hidden bg-amethyst text-white">
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Frage stellen oder anmelden</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Unverbindlich eine Frage stellen oder sich direkt verbindlich zur Ausbildung anmelden —
            Anzahlung CHF 250.– zur Platzreservation, wird angerechnet.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/ausbildung-anfrage"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <HelpCircle className="h-4 w-4" /> Frage stellen
            </Link>
            <Link
              to="/ausbildung-anmeldung"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
            >
              <GraduationCap className="h-4 w-4" /> Jetzt anmelden <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/70">
            Oder besuchen Sie den kostenlosen{" "}
            <Link
              to="/info-nachmittag"
              className="inline-flex items-center gap-1.5 font-semibold text-citrine-light underline underline-offset-4 transition hover:text-white"
            >
              <Play className="h-3.5 w-3.5" /> Info-Nachmittag/-Abend
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}