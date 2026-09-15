import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const NEWS = [
  {
    date: "03.09.2026",
    title: "Werner Kühni in Erinnerung",
    img: "https://heilsteinschule.swiss/media/.news_img/werner_kuehni_news.png",
    text: "R.I.P. Werner Kühni! Unser letztes Treffen — Heilstein Museum in Stockholm mit Werner Kühni.",
  },
  {
    date: "11.07.2026",
    title: "Neuer Standort Wallbach AG",
    img: "https://heilsteinschule.swiss/media/.news_img/wallbach_innen.jpeg",
    text: "Neuer Ausbildungsstandort der Heilsteinschule Schweiz im Fricktal. Geplanter Lehrgangsstart: Donnerstag, 15. Oktober 2026.",
  },
  {
    date: "15.04.2026",
    title: "Im Bann der Quarz-Kristalle (Irene Marty)",
    img: "https://heilsteinschule.swiss/media/.news_img/irene_marty_1.jpg",
    text: "In welchen Kinos läuft der Film? Vorführung Buchen ab 23. April. Trailer anschauen und Flyer herunterladen.",
  },
  {
    date: "07.03.2026",
    title: "Rückblick der Gesundheitsmesse",
    img: "https://heilsteinschule.swiss/media/.news_img/svnh-logo.jpg",
    text: "Wir waren Aussteller an der Gesundheitsmesse der SVNH in Sempach 7.3.26 — interessante Begegnungen und freudvolle Gespräche.",
  },
  {
    date: "01.03.2026",
    title: "Aktion 40% auf ausgewählte Armbänder",
    img: "https://heilsteinschule.swiss/media/.news_img/20240226_100437.jpg",
    text: "Auf ausgewählte Armbänder der Kreation diopteia. Diese Armbänder möchten DIR gerne Unterstützung und Schönheit bringen.",
  },
  {
    date: "16.02.2026",
    title: "Ein Info-Nachmittag in Uster",
    img: "https://heilsteinschule.swiss/media/.news_img/info-tag_1_1.jpg",
    text: "Bewegte uns alle, weckte grosse Freude am Wesen der Heilsteine und ihrer verborgenen Energie. Steinherzlichen Dank an alle.",
  },
  {
    date: "12.11.2025",
    title: "Reise zu mir selbst — Buch ISBN 9798269951614",
    img: "https://heilsteinschule.swiss/media/.news_img/brunos_buch_isbn_no.png",
    text: "Jetzt erhältlich. Das neue Buch von Bruno Vogler Pfeiffer — nur per Vorkasse erhältlich.",
  },
  {
    date: "17.10.2025",
    title: "Zertifizierung Lehrgang Asp6",
    img: "https://heilsteinschule.swiss/media/.news_img/zertifizierung_lehrgang_asp6_39.jpg",
    text: "Steinheilkunde Grundausbildung — herzliche Gratulation! Klassendurchschnitt mit grandiosen 84 Punkten.",
  },
];

const NEWSLETTER = [
  { d: "Oktober 2025", l: "Newsletter Oktober" },
  { d: "September 2025", l: "Newsletter September 2025" },
  { d: "März 2025", l: "Newsletter März 2025" },
  { d: "Januar 2025", l: "Newsletter Januar 2025" },
  { d: "Dezember 2024", l: "Newsletter Dezember 2024" },
  { d: "November 2024", l: "Newsletter November 2024" },
  { d: "Juni 2024", l: "Newsletter Juni 2024" },
  { d: "April 2024", l: "Newsletter April 2024" },
  { d: "März 2024", l: "Newsletter März 2024" },
  { d: "Februar 2024", l: "Newsletter Februar 2024" },
];

export default function News() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/Info-Tag_Uster_14-02-26.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Newspaper className="h-3.5 w-3.5" /> Aktuelles
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">News & „Nius Lätter"</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Bleiben Sie auf dem Laufenden — Neuigkeiten aus der Heilsteinschule, neue Standorte,
              Aktionen und Veranstaltungen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={n.img} alt={n.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {n.date}
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-amethyst">{n.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter History */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="„Nius Lätter" title="Newsletter History" subtitle="Für Ansicht bitte jeweils auf das Symbol klicken." />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {NEWSLETTER.map((nl) => (
                <a
                  key={nl.l}
                  href="https://heilsteinschule.swiss/kontaktaufnahme/spezielles/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-soft transition hover:border-citrine hover:shadow-lift"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-citrine-deep">{nl.d}</p>
                    <p className="mt-0.5 font-medium text-amethyst">{nl.l}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </Reveal>
          <div className="mt-10 text-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white transition hover:bg-amethyst-deep"
            >
              Newsletter anmelden <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}