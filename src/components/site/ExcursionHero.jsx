import React from "react";
import { Mountain } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import OptimizedImage from "@/components/site/OptimizedImage";

export default function ExcursionHero({ eyebrow, title, subtitle, image, alt }) {
  return (
    <section className="relative overflow-hidden bg-amethyst text-white">
      {image && (
        <div className="absolute inset-0 opacity-25">
          <OptimizedImage
            src={image}
            alt={alt || ""}
            width={1600}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
            <Mountain className="h-3.5 w-3.5" /> {eyebrow}
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}