import React from "react";
import { Film, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import VideoCard from "@/components/site/VideoCard";

// Reihenfolge: Neueste zuerst.
// Format: Kategorie · Datum
const FILME = [
  {
    title: "Kolloidales Silber — Film vom 07. Juni 2024",
    category: "Kolloidales Silber",
    date: "2024-06",
    dateLabel: "Juni 2024",
    text: "Natürliche Alternativen — Kolloidales Silber und Borax als wirksame Heilmittel mit Werner Kühni und Manuel Litschi.",
    img: "https://heilsteinschule.swiss/media/Filme/Silber.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Silber.m4v",
    shop: "https://heilstein-shop.com/koll_silber/",
  },
  {
    title: "Steine und Düfte — Die Kraft der Natur in der psychischen Gesundheit",
    category: "Heilsteine & ätherische Öle",
    date: "2024-05",
    dateLabel: "Mai 2024",
    text: "Werner Kühni und Julia Barthelmes über die transformative Wirkung von Heilsteinen und Ätherischen Ölen auf mentale Gesundheitszustände wie Depressionen, Burnout, Hormonprobleme und Stimmungsschwankungen.",
    img: "https://heilsteinschule.swiss/media/Filme/Steine_und_Duefte_09-05-2024.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Steine_und_Duefte.mp4",
  },
  {
    title: "Wirkung: Halit mit Baryt",
    category: "Schutzsteine",
    date: "2023-01",
    dateLabel: "Datum folgt",
    text: "Bruno Vogler Pfeiffer und Joe Schnarwiler haben gemeinsam ein Oktaeder entwickelt. Besonders die Wirkung von Halit mit Baryt kann die Energie im Raum deutlich verändern.",
    img: "https://heilsteinschule.swiss/media/Filme/Schutzsteine_Halit_Baryt.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Schutzsteine_Halit_Baryt.mp4",
  },
  {
    title: "Persönlicher Entwicklungsprozess — Ruth und ihre Lieblingssteine",
    category: "Porträt",
    date: "2022-01",
    dateLabel: "Datum folgt",
    text: "Ruth Rios ist Heilsteinberaterin und Schöpferin der Kreation diopteia. Seit über 30 Jahren begleitet sie Menschen in ihren persönlichen Entwicklungsprozessen.",
    img: "https://heilsteinschule.swiss/media/Filme/Wirkung_Heilsteine.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Wirkung_Heilsteine.mp4",
  },
  {
    title: "Energiesteine reinigen und aufladen",
    category: "Heilsteine",
    date: "2021-01",
    dateLabel: "2021",
    text: "Viele Steine haben besondere Eigenschaften. Es gibt Edelsteine, die andere reinigen können und die selbst Energie aufnehmen. Effektive und unnötige Methoden.",
    img: "https://heilsteinschule.swiss/media/Filme/Energie.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Energiesteine_reinigen_und_aufladen.mp4",
  },
  {
    title: "Kolloidales Silber — Film vom 11. Juli 2019",
    category: "Kolloidales Silber",
    date: "2019-07",
    dateLabel: "Juli 2019",
    text: "Kolloidales Silber selber herstellen. Natürliche Alternativen und wirksame Heilmittel.",
    img: "https://heilsteinschule.swiss/media/Filme/zhHkDcsauRg-HD.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Kolloidales_Silber_selber_herstellen.m4v",
    shop: "https://heilstein-shop.com/koll_silber/",
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
                  src="https://heilsteinschule.swiss/media/QR_back_to_school.png"
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