import React from "react";
import { Mountain } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import VogesenGallery from "@/components/site/VogesenGallery";

const EXKURSIONEN = [
  { period: "2011 – 2021", place: "Zentralalpen", detail: "13 × · 65 Tage" },
  { period: "2015 – 2022", place: "Jura", detail: "12 Tage" },
  { period: "2016", place: "Portugal / Auroca", detail: "7 Tage" },
  { period: "2017", place: "Azoren", detail: "7 Tage" },
  { period: "2013 – 2018", place: "Vogesen / Odilienberg", detail: "6 Tage" },
  { period: "2018", place: "Idar-Oberstein", detail: "8 Tage" },
  { period: "2020", place: "Berchtesgaden", detail: "4 Tage" },
  { period: "2021", place: "Tessin", detail: "8 Tage" },
  { period: "2021", place: "Engadin", detail: "8 Tage" },
  { period: "2022", place: "Zermatt", detail: "6 Tage" },
  { period: "2022", place: "Heilsteinmuseum", detail: "3 Tage" },
];

export default function DiversesGeologischeReisen() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-amethyst-deep via-amethyst to-amethyst-soft/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Mountain className="h-3.5 w-3.5" /> Diverses
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Geologische Reisen
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              Ein Rückblick auf unsere geologischen Exkursionen in der Schweiz und in Europa —
              Zentralalpen, Jura, Vogesen, Azoren und mehr. 2011 – 2022, über 130 Tage im Feld.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Übersicht"
            title="Geologische Exkursionen"
            subtitle="Wo wir mit unseren Teilnehmenden unterwegs waren — Orte, Jahre und Dauer unserer Reisen."
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {EXKURSIONEN.map((e, i) => (
            <Reveal key={e.place + e.period} delay={(i % 2) * 0.05}>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-soft">
                <div>
                  <p className="font-heading text-base font-semibold text-amethyst">{e.place}</p>
                  <p className="font-mono text-xs uppercase tracking-wider text-citrine-deep">{e.period}</p>
                </div>
                <span className="shrink-0 rounded-full bg-citrine/15 px-3 py-1 text-xs font-semibold text-citrine-deep">
                  {e.detail}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <VogesenGallery />
    </>
  );
}