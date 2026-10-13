import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

// Premium HD hero image (AI-generated) — shown uncropped at its natural ratio.
const HERO = "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/028c7a3d1_generated_image.png";

function SwissCrossBadge({ className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-soft ${className}`}>
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-label="Schweizer Flagge" role="img">
        <rect width="32" height="32" rx="4" fill="#D52B1E" />
        <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
        <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

export default function HomeImageCollage() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Schule in Aktion"
            title="Unterricht, Exkursionen und Menschen"
            subtitle="Eindrücke aus dem Alpenseminar, den geologischen Exkursionen und dem Schulalltag — mit Kopf, Hand, Fuss und Herz."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="group relative mt-10 overflow-hidden rounded-3xl shadow-lift">
            {/* HD image at its natural aspect ratio — never cropped */}
            <OptimizedImage
              src={HERO}
              alt="Heilsteinschule Schweiz — Exkursion in den Schweizer Alpen mit Heilsteinen"
              width={1600}
              className="block w-full transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute left-4 top-4">
              <SwissCrossBadge />
            </div>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amethyst-deep/70 to-transparent p-6">
              <p className="font-heading text-base font-semibold text-white sm:text-lg">
                Heilsteine erleben — mit Kopf, Hand, Fuss und Herz
              </p>
              <p className="mt-1 text-sm text-white/80">
                Exkursionen und Unterricht der Heilsteinschule Schweiz in den Schweizer Alpen
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}