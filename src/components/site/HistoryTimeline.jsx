import React from "react";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";

const TIMELINE = [
  {
    year: "1970",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/08c713d17_Screenshot_20260911_104842_Facebook1.jpg",
    title: "Die Handwerksjahre",
    text: "Mit 16 Jahren absolviert Bruno Vogler Pfeiffer eine Schreinerlehre und hängt eine Maurerlehre als Zusatzausbildung an — der erste bewusste Umgang mit Holz und Stein.",
  },
  {
    year: "2007",
    img: "https://heilsteinschule.swiss/media/wunderblock/Bruno.jpg",
    title: "Der Weg zu den Heilsteinen",
    text: "2001 beginnt er eine mediale Ausbildung und stösst auf die verlässliche Kraft der Heilsteine. 2007 absolviert er die Grundausbildung in analytischer Steinheilkunde bei Michael Gienger.",
  },
  {
    year: "2011",
    img: "https://heilsteinschule.swiss/media/topics-pictures/bruno_vogler_pfeiffer.png",
    title: "Gründung der Heilsteinschule",
    text: "Bruno Vogler Pfeiffer gründet die Heilsteinschule Schweiz und bildet bis heute über 250 Personen aus. Die Schule ist SVNH-zertifiziert, der Heilsteinshop-Asp GKS-zertifiziert.",
  },
];

export default function HistoryTimeline() {
  return (
    <section className="relative overflow-hidden bg-amethyst-deep py-24 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-b from-amethyst-deep via-amethyst-soft/20 to-amethyst-deep" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-citrine" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-light">Meine Reise</span>
              <span className="h-px w-8 bg-citrine" />
            </div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-[2.75rem] text-white">
              Der Weg zur <span className="text-gradient-gold">Heilsteinschule</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Drei Stationen aus dem Leben von Bruno Vogler Pfeiffer — vom Handwerker zum Gründer der Heilsteinschule Schweiz.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.15}>
              <div className="group relative">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <span className="h-px w-12 bg-citrine/40" />
                  <span className="font-heading text-5xl font-bold text-gradient-gold sm:text-6xl">{item.year}</span>
                  <span className="h-px w-12 bg-citrine/40" />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lift transition duration-500 group-hover:border-citrine/40">
                  <Image
                    src={item.img}
                    alt={`${item.title} – ${item.year}`}
                    className="aspect-[4/5] w-full bg-amethyst-soft/20"
                    fittingType="fill"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-heading text-lg font-semibold text-citrine-light">{item.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/70">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}