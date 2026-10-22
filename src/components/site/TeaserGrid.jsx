import React from "react";
import { Link } from "react-router-dom";

const TEASERS = [
  {
    title: "Info-Nachmittag/-Abend",
    text: "Asp / Münsingen — Interessiert mehr zu erfahren?",
    img: "https://heilsteinschule.swiss/media/teasers-pictures/info-tag.png",
    to: "/info-nachmittag",
  },
  {
    title: "Online Shop",
    text: "Aktion bis 30. Sep. 2026 — Porto nur sFr. 6.60.-",
    img: "https://heilsteinschule.swiss/media/teasers-pictures/online-shop.jpg",
    href: "https://heilstein-shop.com/",
  },
  {
    title: "Laden Asp",
    text: "Verkauf / Beratung — Dreimal im Monat geöffnet",
    img: "https://heilsteinschule.swiss/media/Laden/20240226_101223.jpg",
    to: "/laden-praxis",
  },
  {
    title: "Unsere Standorte",
    text: "Schulen in: Asp, Wallbach und Münsingen",
    img: "https://heilsteinschule.swiss/media/teasers-pictures/uebersicht-alle-standorte.png",
    to: "/ausbildung",
  },
  {
    title: "Themenübersicht",
    text: "Alle Seiten schnell gefunden!",
    img: "https://heilsteinschule.swiss/media/teasers-pictures/bildschirmfoto-vom-2025-09-23-14-43-52.png",
    to: "/news",
  },
  {
    title: "Werner Kühni",
    text: "Zur Erinnerung — Die Kraft der Natur in der psychischen Gesundheit",
    img: "https://heilsteinschule.swiss/media/teasers-pictures/kuehni4.jpg",
    to: "/lehrfilme",
  },
];

export default function TeaserGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEASERS.map((t, i) => {
          const inner = (
            <>
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amethyst/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-amethyst">{t.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{t.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-citrine-deep">
                  Mehr erfahren
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </>
          );
          const cls =
            "group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift";
          return t.href ? (
            <a key={i} href={t.href} target="_blank" rel="noopener noreferrer" className={cls}>
              {inner}
            </a>
          ) : (
            <Link key={i} to={t.to} className={cls}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}