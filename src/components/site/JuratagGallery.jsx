import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { Image } from "@/components/ui/image";

const BASE = "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/";

const IMAGES = [
  { file: "6451e5bcf_IMG-20260823-WA0025.jpg", alt: "Die Gruppe auf den Kalksteinruinen im Fricktal" },
  { file: "8f13ecb34_20260823_105613.jpg", alt: "Steinfunde auf dem Waldboden" },
  { file: "fdabd430e_20260823_1454111.jpg", alt: "Fossil in der Hand" },
  { file: "eb80612b8_20260823_1458281.jpg", alt: "Versteinertes Muschelfossil" },
  { file: "1401669e0_20260823_1524121.jpg", alt: "Fossil im Kalkstein" },
  { file: "f3a9c9947_20260823_1452301.jpg", alt: "Kleine Fundstücke in der Hand" },
  { file: "1de50ef83_20260823_152405.jpg", alt: "Ammonit in der Hand" },
  { file: "5dde00ff8_20260823_152436.jpg", alt: "Ammonit im Gestein" },
];

export default function JuratagGallery() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Eindrücke"
            title="Bilder vom Juratag"
            subtitle="Steine, Fossilien und die Menschen, die sie finden — ein Blick auf den Juratag im Fricktal."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <Reveal key={img.file} delay={(i % 3) * 0.06}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <Image
                  src={BASE + img.file}
                  alt={img.alt}
                  className="aspect-[4/3] w-full"
                  fittingType="fill"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}