import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const BASE = "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/";

const PHOTOS = [
  { src: `${BASE}398b5c4a7_IMG_1899.JPG`, alt: "Eingang zum Heilstein-Museum", caption: "Eingang zum Heilstein-Museum." },
  { src: `${BASE}fb3700ada_IMG_1839.JPG`, alt: "Schauraum mit Vitrinen im Heilstein-Museum", caption: "Führung durch die Schauräume mit den Vitrinen." },
  { src: `${BASE}73ccd82ac_IMG_1880.JPG`, alt: "Werner Kühni erklärt an der Vitrine", caption: "Sekundär entstandene Mineralien — erklärt an der Vitrine." },
  { src: `${BASE}69e1c4134_IMG_2022.JPG`, alt: "Vitrine mit gezüchteten Mineralien", caption: "Gezüchtete Mineralien — Kupfersulfat und mehr." },
  { src: `${BASE}c579bb2d7_P1070098.JPG`, alt: "Grosse Bergkristalle in der Vitrine", caption: "Blick durch die Vitrine auf grosse Bergkristalle." },
  { src: `${BASE}a028d893f_IMG_1891.JPG`, alt: "Heilsteine im Museumsgarten", caption: "Heilsteine und Heilpflanzen im Museumsgarten." },
];

export default function HeilsteinmuseumGallery() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="2022 · 3 Tage"
            title="Heilsteinmuseum"
            subtitle="Eindrücke aus dem Heilstein-Museum: 4 Schauräume mit 106 Vitrinen, Museumsgarten und die Privatsammlung von Werner Kühni."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 0.05}>
              <figure className="group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Link
              to="/heilstein-museum-2022"
              className="inline-flex items-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white transition hover:bg-amethyst-deep"
            >
              Zum Heilstein-Museum <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}