import React from "react";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";

const TIMELINE = [
  {
    year: "1970",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/08c713d17_Screenshot_20260911_104842_Facebook1.jpg",
    title: "Die Handwerksjahre",
    text: "Als junger Handwerker lernt Bruno Vogler Pfeiffer den sorgfältigen Umgang mit Naturmaterialien — Holz und Stein prägen sein Gespür für Material und Struktur.",
  },
  {
    year: "1975",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/32636db50_Screenshot_20260415_180704_WhatsApp_resized1.jpg",
    title: "Familie und Beruf",
    text: "Prägende Jahre, in denen Verantwortung und die Verbundenheit mit der Natur wachsen — der Grundstein für den späteren Weg zur Heilsteinkunde.",
  },
  {
    year: "1984",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/d5f80bf3b_Screenshot_20260415_180711_WhatsApp1.jpg",
    title: "Die Arbeit mit Stein",
    text: "Maurerhandwerk und Naturmaterialien vertiefen das Verständnis für Gestein — ein entscheidender Schritt auf dem Weg zur Heilsteinschule Schweiz.",
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