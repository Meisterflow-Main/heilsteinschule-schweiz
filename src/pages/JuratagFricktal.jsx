import React from "react";
import { MapPin } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import JuratagGallery from "@/components/site/JuratagGallery";
import JuratagBookSection from "@/components/site/JuratagBookSection";

const BASE = "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/";
const GROUP_IMG = BASE + "5118c0523_IMG-20260823-WA0019.jpg";

export default function JuratagFricktal() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-30">
          <Image src={GROUP_IMG} alt="Juratag im Fricktal" className="h-full w-full" fittingType="fill" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/85 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <MapPin className="h-3.5 w-3.5" /> Exkursion im Fricktal
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Juratag im Fricktal</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Ein Tag im Jura — wir erleben die Steine in der Natur und erfahren ihre Herkunft unmittelbar.
            </p>
          </Reveal>
        </div>
      </section>

      <JuratagGallery />

      <JuratagBookSection />
    </>
  );
}