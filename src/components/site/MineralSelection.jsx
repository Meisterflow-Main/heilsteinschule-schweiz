import React, { useRef, useEffect } from "react";
import { Gem, ExternalLink } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const SHOP_HEILSTEINE = "https://heilstein-shop.com/heilsteine/";

const VIDEOS = [
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/270c228e7_WhatsAppVideo2026-09-22at0210583.mp4", label: "Prüfung", href: SHOP_HEILSTEINE },
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/2847934fa_WhatsAppVideo2026-09-22at0210582.mp4", label: "Befühlen", href: SHOP_HEILSTEINE },
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/df17ff5f2_WhatsAppVideo2026-09-22at0210581.mp4", label: "Vergleich", href: SHOP_HEILSTEINE },
  { src: "https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/b6f4d6066_WhatsAppVideo2026-09-22at021058.mp4", label: "Entscheidung", href: SHOP_HEILSTEINE },
];

const TRIM_SECONDS = 18;

function VideoCard({ src, label, delay, href }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      v.play().catch(() => {
        // Retry once after a short delay if autoplay was blocked
        setTimeout(() => v.play().catch(() => {}), 500);
      });
    };

    const onTimeUpdate = () => {
      if (v.currentTime >= TRIM_SECONDS) {
        v.currentTime = 0;
      }
    };

    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("loadeddata", tryPlay);
    tryPlay();

    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <Reveal delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-border bg-amethyst shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amethyst-deep/90 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[11px] font-medium text-amethyst">
            <Gem className="h-3 w-3" /> {label}
          </div>
          <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-citrine px-2.5 py-1 text-[11px] font-semibold text-amethyst-deep opacity-0 transition group-hover:opacity-100">
            <ExternalLink className="h-3 w-3" /> Im Shop
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function MineralSelection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Mineralienauswahl"
          title="Einige Mineralien im Porträt"
          subtitle="Jeder Heilstein wird einzeln in die Hand genommen, geprüft und ausgewählt. Mit Wissen, Gefühl und Intuition entscheiden wir, welche Mineralien als Lebensbegleiter dienen dürfen. Klicken Sie auf ein Porträt für die Beschreibung im Online-Shop."
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
        {VIDEOS.map((v, i) => (
          <VideoCard key={i} src={v.src} label={v.label} delay={i * 0.06} href={v.href} />
        ))}
      </div>
    </section>
  );
}