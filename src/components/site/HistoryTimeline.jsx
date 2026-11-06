import React from "react";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";

const TIMELINE = [
  {
    year: "1970",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/f768a42ec_ChatGPTImageSep29202603_38_30PM.png",
    title: "Die Schreinerlehre",
    text: "Mit 16 Jahren absolviert Bruno Vogler Pfeiffer eine Schreinerlehre — der erste bewusste Umgang mit Holz und der Grundstein seiner handwerklichen Präzision.",
  },
  {
    year: "1975",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/3d05b47e6_ChatGPTImageSep29202603_43_51PM.png",
    title: "Die Maurerlehre",
    text: "Als Zusatzausbildung hängt er eine Maurerlehre an — der erste bewusste Umgang mit Stein, der später den Weg zu den Heilsteinen bahnt.",
  },
  {
    year: "1987",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/53397d677_ChatGPTImageSep29202603_38_20PM.png",
    title: "Im Dienst",
    text: "Nach der Handwerkszeit und Auslandreisen absolviert er 1983 die Polizeirekrutenschule und dient bis 1990 bei der Kapo Aargau — Verantwortung im Dienst, bevor es ihn in die Wirtschaft zieht.",
  },
  {
    year: "2008",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/a2da5d70c_ChatGPTImageSep30202602_17_44AM.png",
    title: "Gründung der Heilsteinschule",
    text: "Nach der Ausbildung in analytischer Steinheilkunde bei Michael Gienger gründet Bruno Vogler Pfeiffer die Heilsteinschule Schweiz und bildet bis heute über 250 Personen aus.",
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
              Vier Stationen aus dem Leben von Bruno Vogler Pfeiffer — vom Handwerker über den Dienst zum Gründer der Heilsteinschule Schweiz.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.12}>
              <div className="group relative">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <span className="h-px w-8 bg-citrine/40" />
                  <span className="font-heading text-4xl font-bold text-gradient-gold sm:text-5xl">{item.year}</span>
                  <span className="h-px w-8 bg-citrine/40" />
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lift transition duration-500 group-hover:border-citrine/40">
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