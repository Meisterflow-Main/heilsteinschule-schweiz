import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import ExcursionHero from "@/components/site/ExcursionHero";
import Reveal from "@/components/site/Reveal";
import OptimizedImage from "@/components/site/OptimizedImage";

const BASE = "https://heilsteinschule.swiss/media/Alpenseminar_2025/";

const DAYS = [
  {
    day: "1. Tag · 25.06.2025",
    title: "Innertkirchen & Rosenlaui Gletscherschlucht",
    text: "Die Exkursion startet in Innertkirchen, am Gadmerwasser-Fluss. Hier finden wir Gneis, Calcit und interessante Heilsteine wie zum Beispiel Amphibolit, ein metamorphes Gestein, das aus Hornblende (dunkel) und Plagioklas-Feldspat (hell) besteht. Dieses beliebte Gestein wird auch «Salz und Pfeffer» Stein genannt. Anschliessend besuchen wir auf 1370 m ü. M. die Rosenlaui Gletscherschlucht. Eine imposante Schlucht mit wuchtigen Wasserfällen und fantastischen Felsformationen, aus tosend, sprudelnd, schäumendem Gletscherwasser geformt. Wir erkunden begeistert, auf dem gut gesicherten, 573 Meter langen Weg mit 12 Tunneln und 215 Treppenstufen, diese Sehenswürdigkeit inmitten prächtiger Bergwelt. Danach Weiterfahrt Richtung Schwarzwaldalp.",
  },
  {
    day: "2. Tag · 26.06.2025",
    title: "Grindelwald & Rosenlaui-Marmor",
    text: "Fahrt mit dem Bus über die Grosse Scheidegg nach Grindelwald. Am Ufer des Quellfluss Weisse Lütschine finden wir die unterschiedlichsten Variationen des Rosenlaui-Marmor, Handelsname für Kalkbrekzie. Vorbei an der Gletscherschlucht wandern wir zum Marmorsteinbruch. Beim Oberen Gletscher suchen und finden wir Pyrit in Tonschiefer. Ein kräftiger Donnerschlag gibt uns den Impuls, rechtzeitig dem Regenguss zu entkommen.",
  },
  {
    day: "3. Tag · 27.06.2025",
    title: "Grosse Scheidegg & Rhonegletscher",
    text: "Geologische Wanderung von der grossen Scheidegg zur Schwarzwaldalp. Finden von Konkretionen (harte, mineralische Gebilde, die in Sedimenten und Sedimentgesteinen entstehen). Besichtigung des Rhonegletschers, Granit sehen und spüren. Danach Weiterfahrt Richtung Göscheneralp.",
  },
  {
    day: "4. Tag · 28.06.2025",
    title: "Oberalppass & Strahler Legende Peter Indergand",
    text: "Geologische Exkursion: Wanderung zum Steinbruch oberhalb der Passhöhe des Oberalppass. Beim Aufstieg zum Steinbruch treffen wir auf eine verlassene Kluft. Daneben liegen vereinzelt kleine Bergkristalle für glückliche Finder. Wir finden Serpentinit, Talk, Schneequarz, Aktinolith und zu unserer grossen Freude: Magnetit Kristallin. Die Sonne strahlt, so auch unsere Augen. Am Nachmittag besuchen wir die Strahler-Legende Peter Indergand, seine Schwester und seinen Sohn, in ihrem Laden in Göschenen, den sie für uns geöffnet haben.",
    images: [
      { src: `${BASE}Bild_Tag_4-1.jpg`, alt: "Aufstieg zum Steinbruch am Oberalppass" },
      { src: `${BASE}Bild_Tag_4-2.jpg`, alt: "Verlassene Kluft mit kleinen Bergkristallen" },
      { src: `${BASE}Bild_Tag_4-3.jpg`, alt: "Magnetit Kristallin mit dem Magnet getestet" },
    ],
  },
  {
    day: "5. Tag · 29.06.2025",
    title: "Zertifikatübergabe",
    text: "Feierliche Übergabe der Zertifikate an die Schüler/-innen der Heilsteinschule, welche bereits abgeschlossen haben. Rückblickend wurde ich nach dem/den Highlights an diesem Alpenseminar gefragt. Es waren in meiner Betrachtung die Teilnehmer, mit Begeisterung für die Natur und die Steine. Des Weiteren durfte ich grosse Freude und eine harmonische Zusammenarbeit im Leiterteam erfahren. Wir freuen uns schon heute auf ein weiteres Alpenseminar 2026.",
    images: [
      { src: `${BASE}Zertifikate_%C3%BCbergabe1.jpg`, alt: "Zertifikatübergabe" },
      { src: `${BASE}Zertifikate_%C3%BCbergabe2.jpg`, alt: "Zertifikatübergabe" },
      { src: `${BASE}Zertifikate_%C3%BCbergabe3.jpg`, alt: "Zertifikatübergabe" },
      { src: `${BASE}Zertifikate_%C3%BCbergabe4.jpg`, alt: "Zertifikatübergabe" },
      { src: `${BASE}Zertifikate_%C3%BCbergabe5.jpg`, alt: "Zertifikatübergabe" },
      { src: `${BASE}Zertifikate_%C3%BCbergabe6.jpg`, alt: "Zertifikatübergabe" },
    ],
  },
];

export default function Alpenseminar2025() {
  return (
    <>
      <ExcursionHero
        eyebrow="25. – 29. Juni 2025"
        title="Alpenseminar 2025"
        subtitle="Exkursion der Heilsteinschule Schweiz zu den Heilsteinen der Schweizer Hochalpen."
        image={`${BASE}Alpenseminar_2025_Titelbild.jpg`}
        alt="Alpenseminar 2025"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal delay={0.05}>
          <figure className="overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
            <OptimizedImage
              src={`${BASE}Alpenseminar_2025_Titelbild.jpg`}
              alt="Alpenseminar 2025 Titelbild"
              width={1280}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </figure>
        </Reveal>

        <div className="mt-14 space-y-10">
          {DAYS.map((d, i) => (
            <Reveal key={i}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-citrine/15 px-3 py-1 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  <Calendar className="h-3.5 w-3.5" /> {d.day}
                </div>
                <h2 className="font-heading text-2xl font-bold text-amethyst">{d.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                {d.images && (
                  <div className={`mt-6 grid gap-4 ${d.images.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-3"}`}>
                    {d.images.map((img, j) => (
                      <figure key={j} className="overflow-hidden rounded-xl border border-border bg-muted shadow-soft">
                        <OptimizedImage src={img.src} alt={img.alt} width={500} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="mt-12 overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
            <OptimizedImage
              src={`${BASE}Backview.jpg`}
              alt="Rückblick und Vorfreude auf das Alpenseminar 2026"
              width={1280}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-center text-sm text-muted-foreground">
              Rückblick und Vorfreude auf das Alpenseminar 2026 — Pascal Bossard
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-14 text-center">
          <Link to="/geologische-reisen" className="inline-flex items-center gap-2 text-sm font-semibold text-amethyst underline underline-offset-4 hover:text-citrine-deep">
            <ArrowLeft className="h-4 w-4" /> Zurück zu Exkursionen &amp; Alpenseminar
          </Link>
        </div>
      </section>
    </>
  );
}