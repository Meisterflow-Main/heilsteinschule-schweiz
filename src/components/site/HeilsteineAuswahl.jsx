import React from "react";
import { Gem } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const AUSWAHL_BASE = "https://heilsteinschule.swiss/media/rfg-folders/heilseine-auswahl-gallery";

const STEINE = [
  "Fluorit",
  "Covellin",
  "Moosachat",
  "Chalcedon",
  "Aragonit",
  "Karneol",
  "Disthen",
  "Prehnit",
  "Ozeanchalzedon",
  "Kryptomelan",
  "Achat",
  "Labradorit",
  "Calcit",
  "Petalith",
  "Axinit",
  "Apatit",
];

const ITEMS = STEINE.map((name) => ({
  img: `${AUSWAHL_BASE}/${name}.jpg`,
  label: name,
  alt: `Heilsteinshop Asp - ${name}`,
}));

export default function HeilsteineAuswahl() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Heilsteinshop Asp"
          title="Heilsteine Auswahl"
          subtitle="Fluorit, Covellin, Moosachat, Chalcedon, Aragonit, Karneol, Disthen, Prehnit, Ozeanchalzedon, Kryptomelan, Achat, Labradorit, Calcit, Petalith, Axinit, Apatit."
        />
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <Reveal key={item.img} delay={(i % 4) * 0.04}>
            <figure className="group overflow-hidden rounded-xl border border-border bg-muted shadow-soft">
              <div className="aspect-square overflow-hidden">
                <OptimizedImage
                  src={item.img}
                  alt={item.alt}
                  width={500}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center gap-1.5 px-3 py-2 text-xs text-muted-foreground">
                <Gem className="h-3 w-3 text-citrine-deep" />
                {item.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}