import React from "react";
import { Gem, MapPin, Phone, ExternalLink } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const GALLERY_BASE = "https://heilsteinschule.swiss/media/rfg-folders/heilsteine-lager-in-asp-gallery";

const GALERIE = [
  { file: "20240226_100121.jpg", alt: "Heilsteinshop Asp - Kristalle" },
  { file: "20240226_095959.jpg", alt: "Lager - Heilsteinshop Asp - Fluorit, Covellin, Moosachat, Chalcedon, Aragonit, Karneol, Disthen, Prehnit, Ozeanchalzedon, Kryptomelan, Achat, Labradorit, Calcit, Petalith, Axinit, Apatit" },
  { file: "20240226_100059.jpg", alt: "Heilsteinshop Asp - Amethyst" },
  { file: "20240226_100049.jpg", alt: "Heilsteinshop Asp - Kristalle Schweiz" },
  { file: "20240226_100102.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100202.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_095921.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100207.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100237.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100246.jpg", alt: "Heilsteinshop Asp - Halit Salz" },
  { file: "20240226_100301.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100319.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100354.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100404.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100003.jpg", alt: "Lager - Heilsteinshop Asp - Fluorit, Covellin, Moosachat, Chalcedon, Aragonit, Karneol, Disthen, Prehnit, Ozeanchalzedon, Kryptomelan, Achat, Labradorit, Calcit, Petalith, Axinit, Apatit" },
  { file: "20240226_100411.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100420.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100437.jpg", alt: "Heilsteinshop Asp - Armbänder" },
  { file: "20240226_100444.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100520.jpg", alt: "Heilsteinshop Asp - Armbänder" },
  { file: "20240226_100532.jpg", alt: "Heilsteinshop Asp - Armbänder" },
  { file: "20240226_100541.jpg", alt: "Literatur und Steinheilkunde - Heilsteinshop Asp" },
  { file: "20240226_100013.jpg", alt: "Heilsteinshop Asp - Pyrit" },
  { file: "20240226_100601.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100904.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100911.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100940.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_100951.jpg", alt: "Heilsteinshop Asp - Kristalle Schweiz" },
  { file: "20240226_101052.jpg", alt: "Anhänger - Heilsteinshop Asp" },
  { file: "20240226_101124.jpg", alt: "Heilsteinshop Asp - Kunstwerke - Handarbeiten" },
  { file: "20240226_101206.jpg", alt: "Heilsteinshop Asp" },
  { file: "20240226_101223.jpg", alt: "Heilsteinshop Asp" },
];

export default function VerkaufsladenAsp() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <OptimizedImage
            src="https://heilsteinschule.swiss/media/Laden/20240226_100121.jpg"
            alt=""
            width={1600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Gem className="h-3.5 w-3.5" /> Heilsteinshop-Asp
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Verkaufsladen Asp</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Heilsteine Lager + Verkauf in Asp — Rohsteine, Trommelsteine, Anhänger, Armbänder,
              Halsketten, Literatur.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Heilsteinshop Asp"
            title="Heilsteine Lager + Verkauf in Asp"
            subtitle="Ein Blick in unser Lager und den Verkaufsladen in Asp. Rohsteine, Trommelsteine, Anhänger, Armbänder, Halsketten, Literatur und Steinheilkunde."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {GALERIE.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.04}>
              <figure className="group overflow-hidden rounded-xl border border-border bg-muted shadow-soft">
                <div className="aspect-square overflow-hidden">
                  <OptimizedImage
                    src={`${GALLERY_BASE}/${g.file}`}
                    alt={g.alt}
                    width={500}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="truncate px-3 py-2 text-xs text-muted-foreground">{g.alt}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                <MapPin className="h-5 w-5 text-citrine-deep" />
                <p className="mt-2 font-heading text-sm font-semibold text-amethyst">Standort</p>
                <p className="mt-1 text-sm text-muted-foreground">Dorfstrasse 22, 5025 Asp</p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                <Phone className="h-5 w-5 text-citrine-deep" />
                <p className="mt-2 font-heading text-sm font-semibold text-amethyst">Telefon</p>
                <a href="tel:+41793896622" className="mt-1 block text-sm text-muted-foreground hover:text-amethyst">079 389 66 22</a>
              </div>
              <a
                href="https://heilstein-shop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift"
              >
                <ExternalLink className="h-5 w-5 text-citrine-deep" />
                <p className="mt-2 font-heading text-sm font-semibold text-amethyst">Online Shop</p>
                <p className="mt-1 text-sm text-muted-foreground group-hover:text-amethyst">Zum heilstein-shop.com</p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}