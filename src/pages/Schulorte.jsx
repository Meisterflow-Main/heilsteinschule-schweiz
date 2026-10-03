import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import Schulorte from "@/components/site/Schulorte";

export default function SchulortePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <MapPin className="h-3.5 w-3.5" /> Ausbildung
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Schulorte</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Asp · Wallbach · Bern — drei Schulstandorte plus Alpenseminar in den Schweizer Alpen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Schulorte />
        <Reveal>
          <div className="mt-12 text-center">
            <Link
              to="/ausbildung-anmeldung"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
            >
              Zur Schulanmeldung <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}