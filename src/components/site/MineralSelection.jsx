import React from "react";
import { Gem } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const VIDEOS = [
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/05b4e9b71_WhatsAppVideo2026-09-22at0210584.mp4#t=0,18", label: "Auswahl" },
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/270c228e7_WhatsAppVideo2026-09-22at0210583.mp4#t=0,18", label: "Prüfung" },
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/2847934fa_WhatsAppVideo2026-09-22at0210582.mp4#t=0,18", label: "Befühlen" },
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/df17ff5f2_WhatsAppVideo2026-09-22at0210581.mp4#t=0,18", label: "Vergleich" },
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/b6f4d6066_WhatsAppVideo2026-09-22at021058.mp4#t=0,18", label: "Entscheidung" },
];

export default function MineralSelection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Mineralienauswahl"
          title="Mit allen Sinnen den richtigen Stein finden"
          subtitle="Jeder Heilstein wird einzeln in die Hand genommen, geprüft und ausgewählt. Mit Wissen, Gefühl und Intuition entscheiden wir, welche Mineralien als Lebensbegleiter dienen dürfen."
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-6">
        {VIDEOS.map((v, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <figure className="group relative overflow-hidden rounded-2xl border border-border bg-amethyst shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <video
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amethyst-deep/90 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[11px] font-medium text-amethyst">
                  <Gem className="h-3 w-3" /> {v.label}
                </div>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}