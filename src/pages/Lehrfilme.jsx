import React from "react";
import { Film, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import VideoCard from "@/components/site/VideoCard";

// Reihenfolge: Neueste zuerst.
// Format: Kategorie · Datum
const FILME = [
  {
    title: "Kolloidales Silber — Natürliches Antibiotikum oder gefährlicher Trend?",
    category: "Kolloidales Silber",
    dateLabel: "Erfahrungsmedizin",
    text: "Natürliche Alternativen — Kolloidales Silber und Borax als wirksame Heilmittel mit Werner Kühni und Manuel Litschi.",
    youtubeId: "eQJLyqcu008",
    shop: "https://heilstein-shop.com/koll_silber/",
  },
  {
    title: "Steine und Düfte — Die Kraft der Natur in der psychischen Gesundheit",
    category: "Heilsteine & ätherische Öle",
    dateLabel: "Back to School",
    text: "Werner Kühni und Julia Barthelmes über die transformative Wirkung von Heilsteinen und Ätherischen Ölen auf mentale Gesundheitszustände wie Depressionen, Burnout, Hormonprobleme und Stimmungsschwankungen.",
    youtubeId: "7-eSZqctYK8",
  },
  {
    title: "Schutzsteine für den Wandel: Halit mit Baryt",
    category: "Schutzsteine",
    dateLabel: "Back to School",
    text: "Bruno Vogler Pfeiffer und Joe Schnarwiler haben gemeinsam ein Oktaeder entwickelt. Besonders die Wirkung von Halit mit Baryt kann die Energie im Raum deutlich verändern.",
    youtubeId: "4uqW44apK-M",
  },
  {
    title: "Neuer Lebensweg mit Heilsteinen",
    category: "Porträt",
    dateLabel: "Back to School",
    text: "Menschen, die die Steinheilkunde in ihren Alltag und Beruf integrieren — über persönliche Entwicklungsprozesse mit Heilsteinen.",
    youtubeId: "zN1ng_YFa88",
  },
  {
    title: "Energiesteine reinigen und aufladen",
    category: "Heilsteine",
    dateLabel: "Back to School",
    text: "Viele Steine haben besondere Eigenschaften. Es gibt Edelsteine, die andere reinigen können und die selbst Energie aufnehmen. Effektive und unnötige Methoden.",
    youtubeId: "LncqB-eUTb4",
  },
  {
    title: "Die Heilsteinschule in der Schweiz",
    category: "Schulporträt",
    dateLabel: "QS24",
    text: "Ein Einblick in die Heilsteinschule Schweiz: Ausbildung, Werte und die Arbeit mit Heilsteinen nach der analytischen Steinheilkunde.",
    youtubeId: "3qsVje-bcZU",
  },
];

const YOUTUBE_PLAYLIST = "https://www.youtube.com/playlist?list=PLWzccsezPgzawwP81l_QXpmDPzDwnoQxU";

export default function Lehrfilme() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/teasers-pictures/kuehni4.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Film className="h-3.5 w-3.5" /> Back to School
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Lehrfilme</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Unsere Weiterbildungs-Videos ausgestrahlt auf{" "}
              <a href="https://qs24.tv/" target="_blank" rel="noopener noreferrer" className="font-semibold text-citrine-light underline">
                QS24.TV
              </a>{" "}
              — Schweizer Gesundheitsfernsehen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Wissensfilme" title="Die Kraft der Natur verstehen" subtitle="Vertiefen Sie Ihr Wissen über Heilsteine, ätherische Öle und deren Anwendung." />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {FILME.map((f, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <VideoCard {...f} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* QR-Code: YouTube-Playlist */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-8 rounded-3xl border border-border bg-white p-8 shadow-soft sm:flex-row sm:p-10">
              <a
                href={YOUTUBE_PLAYLIST}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-2xl border border-border bg-white p-3 shadow-soft transition hover:shadow-lift"
                title="Alle Youtube Filme - Heilsteinschule Schweiz"
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=480x480&margin=10&data=${encodeURIComponent(YOUTUBE_PLAYLIST)}`}
                  onError={(e) => {
                    e.currentTarget.src = `https://quickchart.io/qr?size=480&margin=1&text=${encodeURIComponent(YOUTUBE_PLAYLIST)}`;
                  }}
                  alt="QR Code für Youtube Filme der Heilsteinschule Schweiz"
                  className="h-40 w-40 object-contain sm:h-48 sm:w-48"
                />
              </a>
              <div className="text-center sm:text-left">
                <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
                  <span className="h-px w-8 bg-citrine" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">Youtube</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-amethyst sm:text-3xl">
                  Weitere über 70ig Lehrfilme auf YouTube
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Klick auf QR Code funktioniert — scannen Sie den Code mit dem Smartphone oder klicken Sie
                  darauf, um direkt zur YouTube-Playlist der Heilsteinschule Schweiz zu gelangen.
                </p>
                <a
                  href={YOUTUBE_PLAYLIST}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
                >
                  Zur YouTube-Playlist <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}