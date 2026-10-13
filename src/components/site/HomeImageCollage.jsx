import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

// Real school photos (user-provided) — each shown at its natural ratio, never cropped.
const TILES = [
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/4b005ed48_WhatsAppImage2026-09-23at105952.jpeg", alt: "Teilnehmende des Alpenseminars blicken auf einen vergletscherten Berg", caption: "Alpenseminar vor dem Gletscher" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/42a59ef70_ChatGPTImageSep29202609_57_12PM.png", alt: "Drei Teilnehmende mit Alpenseminar-Zertifikat der Heilsteinschule", caption: "Zertifikatsübergabe Alpenseminar" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/593594f8a_WhatsAppImage2026-09-22at0205381.jpeg", alt: "Teilnehmende stossen nach dem Alpenseminar an", caption: "Abschluss des Alpenseminars" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/e4e3bc278_WhatsAppImage2026-09-22at020536.jpeg", alt: "Zwei Personen untersuchen Heilsteine mit Taschenlampe am Tisch", caption: "Mineralbestimmung im Unterricht" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/65203f027_WhatsAppImage2026-09-22at0205367.jpeg", alt: "Unterrichtsraum der Heilsteinschule mit Heilsteinen und Fachbüchern", caption: "Unterrichtsraum mit Heilsteinen" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/04bd9393b_WhatsAppImage2026-09-22at0205353.jpeg", alt: "Seminarraum der Heilsteinschule mit Ordnern und Arbeitsmaterial", caption: "Seminarraum der Heilsteinschule" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/3dca25c83_WhatsAppImage2026-09-22at0205382.jpeg", alt: "Zwei Personen betrachten eine Mineralien-Ausstellung im Museum", caption: "Museumsbesuch mit Heilsteinen" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/5ec3573c1_ChatGPTImageSep30202602_10_51AM.png", alt: "Bruno Vogler Pfeiffer präsentiert Rohsteine in der Schule", caption: "Heilsteine in der Praxis" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/ec6224bb6_ChatGPTImageSep29202609_43_38PM.png", alt: "Klarer Bergkristall in der Hand", caption: "Bergkristall — hautnah" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/e378a82ac_ChatGPTImageSep29202609_44_50PM.png", alt: "Schwarzes Mineral mit Gold-Einschlüssen in der Hand", caption: "Mineralbestimmung vor Ort" },
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

function Tile({ item, featured }) {
  return (
    <figure className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-card shadow-soft transition duration-500 hover:shadow-lift ${featured ? "sm:col-span-2" : ""}`}>
      {item.video ? (
        <video
          src={item.video}
          aria-label={item.alt}
          muted
          loop
          autoPlay
          playsInline
          className="block w-full"
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="block w-full transition duration-700 group-hover:scale-[1.03]"
        />
      )}
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amethyst-deep/75 to-transparent p-4">
        <p className="text-sm font-medium text-white">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

export default function HomeImageCollage() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="mb-8 flex items-center justify-center gap-3">
            <SwissCrossBadge />
          </div>
          <SectionHeading
            eyebrow="Schule in Aktion"
            title="Unterricht, Exkursionen und Menschen"
            subtitle="Echte Eindrücke aus dem Alpenseminar, den geologischen Exkursionen und dem Schulalltag — mit Kopf, Hand, Fuss und Herz."
          />
        </Reveal>

        {/* Masonry collage — each image keeps its natural ratio, nothing cropped */}
        <Reveal delay={0.1}>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {TILES.map((item, i) => (
              <Tile key={i} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}