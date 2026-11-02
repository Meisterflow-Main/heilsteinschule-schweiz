import React from "react";
import { Mountain } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";
import AlpenseminarReport from "@/components/site/AlpenseminarReport";

const GALLERY_BASE = "https://heilsteinschule.swiss/media/rfg-folders/geologische-reisen-gallery/";

const ALPEN_BASE = "https://heilsteinschule.swiss/media/rfg-folders/alpen-seminare-gallery/";

const ALPEN_GALLERY = [
  { src: "rhone_gletscher_aussen_1024x768.jpg", year: "2019" },
  { src: "rhone_gletscher-innen.jpg", year: "2019" },
  { src: "Alpenseminar_2016_7.png", year: "2016" },
  { src: "Alpenseminar_2016_6.png", year: "2016" },
  { src: "Alpenseminar_2016_5.png", year: "2016" },
  { src: "Alpenseminar_2016_4.png", year: "2016" },
  { src: "Alpenseminar_2016_3.png", year: "2016" },
  { src: "Alpenseminar_2016_2.png", year: "2016" },
  { src: "Alpenseminar_2016_1.png", year: "2016" },
  { src: "Bruno_2015_8.png", year: "2015" },
  { src: "Bruno_2015_7.png", year: "2015" },
  { src: "Bruno_2015_6.png", year: "2015" },
  { src: "Bruno_2015_4.png", year: "2015" },
  { src: "rhone-gletscher-2019_August_1024x768-1.jpg", year: "2015" },
];

export default function GeologischeReisen() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <OptimizedImage
            src={`${GALLERY_BASE}20180726_101600.jpg`}
            alt=""
            width={1600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Mountain className="h-3.5 w-3.5" /> Ausbildung
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Exkursionen &amp; Alpenseminar
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Exkursionen und Alpenseminare der Heilsteinschule Schweiz — unterwegs in den Alpen, im Jura
              und darüber hinaus. Ein Rückblick in Bildern.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Alpenseminar 2025 — vollständiger Rückblick von Pascal Bossard */}
      <div id="alpenseminar" className="scroll-mt-24">
        <AlpenseminarReport />
      </div>

      {/* Alpen-Seminare (Sub-Option) */}
      <section id="alpen-seminare" className="scroll-mt-24 bg-quartz py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-10">
        <div>
          <SectionHeading
            eyebrow="5 Jahre u. älter"
            title="Alpen-Seminare"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-amethyst sm:text-lg">
            Wir wandern und erforschen unser Gebirge. Unser Alpen-Seminar ist aufgebaut für jedermann/frau — wir machen keine Extremtouren.
          </p>
        </div>

        <div className="mt-12 grid max-w-3xl gap-10">
          <div>
            <ul className="space-y-3">
              {[
                'Die 5 Tage in den Alpen bringen uns viele Erkenntnisse über das Vorhandensein von verschiedenen einheimischen Heilsteinen: Marmor, Serpentin, „Siderit“, Opalinuston, Pyrit, Kalkschiefer, Speckstein, Nephrit-Jade, Schneequarz, Magnetit und mehr.',
                'Wir lernen dich, die Alpen zu lesen in ihrer Beschaffenheit wie Entstehung.',
                'Wir dir zeigen Überschiebungen, Verwerfungen, Metamorphosen sowie Sedimentierungen (Bildungsprinzipien).',
                'Du erlernst das Auffinden unserer Natur-Medizin unter freiem Himmel. Andere finden Kräuter, wir Heilsteine, sprich Mineralien — gerne als „Lebewesen“ bezeichnet.',
                'Wir sind zu Fuss in Grindelwald, Grosse Scheidegg, Göschener-Alp und Oberalp unterwegs.',
                'Wir nächtigen in einfachen Hotels mit einfachen Zimmern, werden jedoch genüsslich versorgt.',
                'Wir verschieben uns mit dem Postauto und unseren Privat-PWs.',
                'Es sind immer 2 ReisebegleiterInnen von uns mit dabei.',
                'Wir organisieren an diesen 5 Tagen das Essen, reservieren die Unterkünfte und Postautofahrten.',
                'Wir begleiten dich über alle Wanderungen und übernehmen sämtliche Eintritte.',
                'Wir führen euch zu interessanten alpinen Nebenplätzen und wollen damit fesselnde Eindrücke schaffen.',
                'Wir besuchen Natur-Schönheiten und werden Mutter Natur eindrücklich erleben.',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-citrine" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl border border-citrine/40 bg-secondary p-4 text-sm font-medium text-amethyst">
              5 Tage mit 4 Übernachtungen im alpinen Bereich. Wir sind mehrheitlich auf KALK, GRANIT und GNEIS unterwegs.
            </p>
          </div>

        </div>

        {/* Galerie 2015 – 2019 */}
        <div>
          <h3 className="mt-16 text-center font-heading text-2xl font-bold text-amethyst">
            Alpen-Seminare 2015 – 2019
          </h3>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ALPEN_GALLERY.map((g, i) => (
            <div key={g.src + i}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={`${ALPEN_BASE}${g.src}`}
                    alt={`Alpen-Seminar ${g.year}`}
                    width={1000}
                    loading="lazy"
                    className="h-full w-full bg-white object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-3 py-2 text-center text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  {g.year}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        </div>
        </div>
      </section>

    </>
  );
}