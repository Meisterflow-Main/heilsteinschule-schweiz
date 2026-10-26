import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { Image } from "@/components/ui/image";
import JuratagGallery from "@/components/site/JuratagGallery";

const BASE = "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/";
const GROUP_IMG = BASE + "5118c0523_IMG-20260823-WA0019.jpg";
const COLLECTING_IMG = BASE + "df015e336_20260823_111023.jpg";

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

      {/* Juratag & Buch */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <Image
                src={COLLECTING_IMG}
                alt="Steine sammeln am Hang im Fricktal"
                className="aspect-[4/3] w-full"
                fittingType="fill"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading center={false} eyebrow="Aus der Praxis" title="Dem Jura auf der Spur" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Am Juratag im Fricktal sind wir mit dem Dozenten-Team der Heilsteinschule Schweiz unterwegs:
              Jura, Zentralalpen, Vogesen und mehr — wir erleben die Steine in der Natur und erfahren ihre
              Herkunft unmittelbar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Die Eindrücke dieser Tage und die Geschichten dahinter finden Sie in Bruno Vogler Pfeiffers
              Buch «Reise zu mir selbst».
            </p>
            <Link
              to="/brunos-buch"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-3.5 text-sm font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
            >
              <BookOpen className="h-4 w-4" /> «Reise zu mir selbst» <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <JuratagGallery />
    </>
  );
}