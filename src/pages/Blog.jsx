import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Tag, ArrowRight, CalendarDays, PenLine } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const CATEGORIES = [
  "Alle",
  "Heilsteine",
  "Ausbildung",
  "Anwendung",
  "Wissen",
];

const ARTICLES = [
  // Artikel werden hier erscheinen, sobald sie veröffentlicht sind.
];

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Alle");

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchesCat = category === "Alle" || a.category === category;
      const matchesQuery =
        !query ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://heilsteinschule.swiss/media/wunderblock/SchuleWeb72x.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <PenLine className="h-3.5 w-3.5" /> Wissen & Geschichten
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Blog der <span className="text-gradient-gold">Heilsteinschule Schweiz</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Fachwissen, Anwendungstipps und Geschichten rund um die Heilsteine —
              von Kopf, Herz, Hand und Fuss.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Artikel durchsuchen..."
                className="w-full rounded-full border border-border bg-quartz/40 py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-citrine focus:bg-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                    category === c
                      ? "bg-amethyst text-white"
                      : "bg-quartz/60 text-foreground/70 hover:bg-quartz"
                  }`}
                >
                  {c !== "Alle" && <Tag className="h-3.5 w-3.5" />}
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Link
                  to={`/blog/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 rounded-full bg-citrine/15 px-2.5 py-1 font-medium text-citrine-deep">
                        {a.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" /> {a.date}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-amethyst">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {a.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-citrine-deep">
                      Weiterlesen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-lg rounded-3xl border border-dashed border-border bg-quartz/40 p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-citrine/15 text-citrine-deep">
                <PenLine className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-amethyst">
                Blog erscheint in Kürze
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hier entsteht unsere Wissensplattform rund um die Heilsteine.
                Schauen Sie bald wieder vorbei — wir freuen uns auf Sie.
              </p>
              <Link
                to="/kontakt"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white transition hover:bg-amethyst-deep"
              >
                Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        )}
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Bleiben Sie auf dem <span className="text-gradient-gold">Laufenden</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
              Besuchen Sie unseren Info-Nachmittag/-Abend oder abonnieren Sie unsere News,
              um keine Neuigkeiten der Heilsteinschule Schweiz zu verpassen.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/info-nachmittag"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
              >
                Info-Nachmittag/-Abend besuchen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/news"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Zu den News
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}