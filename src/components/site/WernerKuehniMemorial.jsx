import React from "react";
import { Heart } from "lucide-react";
import Reveal from "@/components/site/Reveal";

export default function WernerKuehniMemorial() {
  return (
    <section className="relative overflow-hidden bg-amethyst-deep py-24">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--citrine)),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-citrine/60" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-light">
              In liebevoller Erinnerung
            </span>
            <span className="h-px w-8 bg-citrine/60" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Werner Kühni
          </h2>
          <p className="mt-2 font-mono text-sm tracking-wide text-citrine-light">
            † 3.9.2026
          </p>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            Werner Kühni war ein Wegbereiter der analytischen Steinheilkunde und
            einer der wichtigsten Lehrer von Bruno Vogler Pfeiffer. Mit grosser
            Hingabe, Wissen und Herz begleitete er unzählige Menschen auf ihrem
            Weg zu den Heilsteinen.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Sein Wirken, seine Präsenz und seine Liebe zu den Mineralien bleiben
            unvergessen — sie leben weiter in jeder Heilsteinschule, in jedem
            Stein, der in die Hand genommen wird.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-citrine/30 px-5 py-2 text-sm text-citrine-light">
            <Heart className="h-4 w-4" /> Wir danken dir, Werner.
          </div>
        </Reveal>
      </div>
    </section>
  );
}