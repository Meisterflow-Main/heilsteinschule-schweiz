import React from "react";
import { Film } from "lucide-react";
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
    </>
  );
}