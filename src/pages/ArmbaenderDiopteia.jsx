import React from "react";
import { Sparkles, ExternalLink, Tag } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const GALLERY_BASE = "https://heilsteinschule.swiss/media/rfg-folders/armbaender---kreation-diopteia-gallery";

// Full list of bracelet images from the old site gallery (Armbaender001–067, gaps as on original)
const FILES = [
  "001","004","005","006","007","008","009","010","011","012","013","014","015","016",
  "017","018","019","020","021","022","023","025","026","027","028","029","030","031",
  "032","033","034","035","036","037","038","039","040","041","042","043","044","045",
  "046","047","048","049","050","051","052","053","054","055","056","057","058","059",
  "060","061","062","063","064","065","066","067",
].map((n) => `Armbaender${n}.jpg`);

export default function ArmbaenderDiopteia() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <OptimizedImage
            src={`${GALLERY_BASE}/Armbaender053.jpg`}
            alt=""
            width={1600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Sparkles className="h-3.5 w-3.5" /> Heilsteine - Laden in Asp und Onlineshop
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
              Armbänder - Kreation diopteia
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Handgefertigte Heilstein-Armbänder der Kreation diopteia — im Laden in Asp und im Onlineshop.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Kreation diopteia"
            title="Armbänder - Kreation diopteia"
            subtitle="Heilsteine - Laden in Asp und Onlineshop. Eine Auswahl handgefertigter Armbänder aus echten Heilsteinen."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://heilstein-shop.com/armbaender/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
            >
              <ExternalLink className="h-4 w-4" /> Zu den Armbändern im Onlineshop
            </a>
            <a
              href="https://heilstein-shop.com/action/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-amethyst transition hover:border-citrine hover:text-citrine-deep"
            >
              <Tag className="h-4 w-4" /> Aktuelle Aktionen
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {FILES.map((file, i) => (
            <Reveal key={file} delay={(i % 4) * 0.04}>
              <a
                href="https://heilstein-shop.com/armbaender/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-border bg-muted shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift"
              >
                <div className="aspect-square overflow-hidden">
                  <OptimizedImage
                    src={`${GALLERY_BASE}/${file}`}
                    alt="Heilsteinshop Asp - Armbänder - Kreation diopteia"
                    width={500}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Heilsteinshop Asp - Armbänder - Kreation diopteia · Onlineshop: heilstein-shop.com/armbaender/ · Aktionen: heilstein-shop.com/action/
          </p>
        </Reveal>
      </section>
    </>
  );
}