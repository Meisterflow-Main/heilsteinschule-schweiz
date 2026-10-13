import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const IMAGES = [
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Bild_Tag_4-1.jpg", alt: "Geologische Exkursion am Oberalppass", span: "lg" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Zertifikate_%C3%BCbergabe1.jpg", alt: "Zertifikatsübergabe an Absolventinnen und Absolventen" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Bild_Tag_4-2.jpg", alt: "Heilsteine sammeln in den Alpen" },
  { src: "https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg", alt: "Schul- und Ladenstandort Asp" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Backview.jpg", alt: "Leiterteam des Alpenseminars" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Bild_Tag_4-3.jpg", alt: "Mineralien am Oberalppass" },
  { src: "https://heilsteinschule.swiss/media/Laden/20240226_100437.jpg", alt: "Heilsteinshop Asp — Beratung im Laden" },
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
          <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[220px]">
            {/* Large central image */}
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-soft">
              <OptimizedImage src={IMAGES[0].src} alt={IMAGES[0].alt} width={900} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute left-3 top-3">
                <SwissCrossBadge />
              </div>
            </div>
            {/* Smaller images */}
            {IMAGES.slice(1).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl shadow-soft">
                <OptimizedImage src={img.src} alt={img.alt} width={500} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}