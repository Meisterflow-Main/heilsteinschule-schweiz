import React from "react";
import { Link } from "react-router-dom";
import { Quote, BookOpen, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const GALLERY = [
  { img: "https://heilsteinschule.swiss/media/rfg-folders/michael-gienger-gallery/Copacabana1.jpg", alt: "Copacabana Rio de Janeiro" },
  { img: "https://heilsteinschule.swiss/media/rfg-folders/michael-gienger-gallery/Michael_Petalith_roh_gefunden.jpg", alt: "Michael hat ein Petalith roh gefunden" },
  { img: "https://heilsteinschule.swiss/media/rfg-folders/michael-gienger-gallery/Michael_Smaragdmine.jpg", alt: "Vor der Smaragdmine in Minas Gerais" },
  { img: "https://heilsteinschule.swiss/media/rfg-folders/michael-gienger-gallery/Foto_durch_Bergkristall.jpg", alt: "Eingefangen durch eine 24 phasigen Bergkristall" },
  { img: "https://heilsteinschule.swiss/media/rfg-folders/michael-gienger-gallery/Michael_Ginger_Pedro.jpg", alt: "Michael Ginger im Pegmatit" },
  { img: "https://heilsteinschule.swiss/media/rfg-folders/michael-gienger-gallery/Michael_Buchseite_555.jpg", alt: "Michael schlägt in seinem Buch 555 nach" },
  { img: "https://heilsteinschule.swiss/media/rfg-folders/michael-gienger-gallery/Michael_Bergkristall_Waschen.jpg", alt: "Michael beim Abwaschen eines Bergkristalls" },
];

export default function MichaelGienger() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/Michael_Gienger/Michael%20Gienger.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <BookOpen className="h-3.5 w-3.5" /> Naturforscher
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
              Wer ist eigentlich <span className="text-gradient-gold">Michael Gienger?</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Michael Gienger versteht sich selbst als Naturforscher. Für ihn ist die Natur ein grosses
              Buch, in dem sich durch die beobachtende Wahrnehmung viele Geheimnisse des Lebens erkennen
              und verstehen lassen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Biografie */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src="https://heilsteinschule.swiss/media/Michael_Gienger/Michael%20Gienger.jpg"
                alt="Michael Gienger (1964-2014)"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">Michael Gienger (1964–2014)</p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading center={false} eyebrow="Steinheilkunde" title="Ein Autodidakt mit internationalem Ansehen" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Michael Gienger versteht sich selbst als Naturforscher. Für ihn ist die Natur ein grosses
              Buch, in dem sich durch die beobachtende Wahrnehmung viele Geheimnisse des Lebens erkennen
              und verstehen lassen. Er ist Autodidakt und hat insbesondere mit seinen Beiträgen zur
              Steinheilkunde internationales Ansehen erworben.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Seine Forschungstätigkeit erstreckt sich jedoch auf den gesamten Bereich der Naturkunde und
              Naturheilkunde. Vor allem die Themen Steine und Wasser begleiten ihn seit seiner Jugendzeit.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              In allen Aspekten seiner Arbeit als Autor, Herausgeber, Seminarleiter, Referent und
              Initiator von «Fair Trade Minerals» beseelt Michael Gienger derselbe Wunsch: Beizutragen zu
              einer lebenswerten Welt voller Glück und Erfüllung sowie zum Wohle aller Wesen!
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gedenken */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-10">
              <div className="flex items-start gap-4">
                <img
                  src="https://heilsteinschule.swiss/media/Michael_Gienger/Michael%20Gienger.jpg_klein_format.jpg"
                  alt="Michael Gienger"
                  className="h-24 w-24 rounded-2xl object-cover shadow-soft"
                />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-amethyst">
                    Michael Gienger ist gegangen, aber seine Ideen bleiben.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Am Sonntag, den 16. November 2014 hat Michael nach kurzer schwerer Krankheit seinen
                    Körper hinter sich gelassen. Wir, die ihn gekannt und geschätzt haben, sind unfassbar
                    traurig – für ihn war es eine Erlösung. Er ist gegangen, aber seine Ideen bleiben. Sie
                    leben fort in seinen Büchern und all den Menschen, die sie weitertragen.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-quartz p-6">
                <Quote className="h-6 w-6 text-citrine-deep" />
                <p className="mt-3 font-heading text-base italic leading-relaxed text-amethyst">
                  Wenn da Stille ist, Ruhe, die nicht durchbrochen werden muss, weil es nichts zu tun gibt,
                  weil da nicht einmal ein Gedanke an „Tun" ist, wenn da Stille ist, dann fühle ich – mich.
                  Wenn da Stille ist, dann begegne ich mir, wie einem Freund nach langer Zeit, wortlos die
                  Anwesenheit geniessend, weil es nichts zu sagen gibt, wenn da Stille ist.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">— Michael Gienger, im Februar 2001</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brasilien 2008 Galerie */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Brasilien 2008"
            title="Heilsteinschule Schweiz mit Michael Gienger"
            subtitle="Eine Reise nach Brasilien — Eindrücke und Begegnungen."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <p className="p-3 text-xs leading-relaxed text-muted-foreground">{g.alt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Lernen Sie die analytische Steinheilkunde
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Die Heilsteinschule Schweiz lehrt das Wissen von Michael Gienger — unverfälscht und
              zertifiziert.
            </p>
            <Link
              to="/ausbildung"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-3.5 text-sm font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
            >
              Ausbildung entdecken <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}