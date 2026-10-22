import React from "react";
import { Instagram, Play } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const REELS = [
  {
    src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/a9e81d6e8_Reel_Steinanwendung.mp4",
    title: "Steinanwendung erleben",
    caption: "Heilsteine behutsam auflegen — Gelerntes am eigenen Körper erfahren.",
  },
  {
    src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/da622bc2d_Reel_Laden.mp4",
    title: "Heilsteinshop Asp",
    caption: "Rohsteine, Trommelsteine, Armbänder & mehr — GKS kontrolliert.",
  },
  {
    src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/8e9ccd0c9_Reel_Ausbildung.mp4",
    title: "Ausbildung mit Herz",
    caption: "Mit Kopf, Herz, Hand und Fuss zum Heilsteinberater.",
  },
  {
    src: "https://heilsteinschule.swiss/media/Filme/Energiesteine_reinigen_und_aufladen.mp4",
    title: "Energiesteine reinigen & aufladen",
    caption: "Viele Steine haben besondere Eigenschaften — richtig reinigen und aufladen.",
  },
];

export default function Reels() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Instagram Reels"
          title="Heilsteine in bewegten Bildern"
          subtitle="Eindrücke aus unserer Welt der Steinheilkunde — Anwendung, Laden und Ausbildung."
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {REELS.map((r, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <figure className="group relative overflow-hidden rounded-2xl border border-border bg-amethyst shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[9/16] overflow-hidden bg-black">
                <video
                  src={r.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amethyst-deep/90 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[11px] font-medium text-amethyst">
                  <Instagram className="h-3 w-3" /> Reel
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-heading text-sm font-semibold leading-snug sm:text-base">{r.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/75 sm:text-xs">{r.caption}</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}