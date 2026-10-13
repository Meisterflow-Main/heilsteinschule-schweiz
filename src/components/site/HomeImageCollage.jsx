import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

// Curated, higher-quality impressions: alpine seminar, excursions,
// certificate handover and the school location in Asp.
const IMAGES = [
  {
    src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Alpenseminar_2025_Titelbild.jpg",
    alt: "Alpenseminar 2025 — Leiterteam und Teilnehmende in den Schweizer Alpen",
    span: "lg",
  },
  {
    src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Zertifikate_%C3%BCbergabe1.jpg",
    alt: "Feierliche Zertifikatsübergabe an die Absolventinnen und Absolventen",
  },
  {
    src: "https://heilsteinschule.swiss/media/vslider/Stausee_breitformat.JPG",
    alt: "Geologische Reise Zermatt — Stausee Mattmark",
  },
  {
    src: "https://heilsteinschule.swiss/media/Glarnerland5.png",
    alt: "Geologische Reise vom Glarnerland ins Unterengadin",
  },
  {
    src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Backview.jpg",
    alt: "Leiterteam auf dem Weg zum Oberalppass",
  },
  {
    src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Bild_Tag_4-1.jpg",
    alt: "Aufstieg zum Steinbruch am Oberalppass",
  },
  {
    src: "https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg",
    alt: "Schul- und Ladenstandort Asp",
  },
];

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
          {/* Bento-style collage: one large hero image with smaller images around it */}
          <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] lg:grid-cols-4">
            {/* Large hero image — spans 2 cols & 2 rows */}
            <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-3xl shadow-lift">
              <OptimizedImage
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                width={1100}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amethyst-deep/40 via-transparent to-transparent" />
              <div className="absolute left-4 top-4">
                <SwissCrossBadge />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-heading text-sm font-semibold text-white drop-shadow-md sm:text-base">
                  Alpenseminar 2025 · Schweizer Alpen
                </p>
              </div>
            </div>

            {/* Smaller images around the hero */}
            {IMAGES.slice(1).map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl shadow-soft transition hover:shadow-lift"
              >
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}