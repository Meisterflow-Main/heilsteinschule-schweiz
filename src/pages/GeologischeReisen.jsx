import React from "react";
import { Link } from "react-router-dom";
import { Mountain, MapPin, Calendar, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";
import AlpenseminarReport from "@/components/site/AlpenseminarReport";

const REISEBERICHTE = [
  {
    year: "2025",
    title: "Alpenseminar 2025",
    detail: "Alpines Seminar in den Schweizer Alpen",
    to: "/alpenseminar-2025",
  },
  {
    year: "2022",
    title: "Zermatt 2022",
    detail: "Geologische Reise Umgebung Zermatt — 6 Tage",
    to: "/zermatt-2022",
  },
  {
    year: "2022",
    title: "Heilstein Museum 2022",
    detail: "Besuch im Heilstein Museum — 3 Tage",
    to: "/heilstein-museum-2022",
  },
  {
    year: "2021",
    title: "Glarnerland – Unterengadin 2021",
    detail: "Geologische Reise durch Glarnerland und Unterengadin — 8 Tage",
    to: "/glarnerland-engadin",
  },
  {
    year: "2021",
    title: "Georeise Nord – Süd 2021",
    detail: "Georeise von Nord nach Süd — 8 Tage",
    to: "/georeise-nord-sued-2021",
  },
];

const EXKURSIONEN = [
  { years: "2011 – 2021", title: "Zentralalpen", detail: "13 Exkursionen · 65 Tage" },
  { years: "2015 – 2022", title: "Jura Exkursionen", detail: "12 Tage" },
  { years: "2016", title: "Portugal / Auroca", detail: "7 Tage" },
  { years: "2017", title: "Azoren", detail: "7 Tage" },
  { years: "2013 – 2018", title: "Vogesen / Odilienberg", detail: "6 Tage" },
  { years: "2018", title: "Idar-Oberstein", detail: "8 Tage" },
  { years: "2020", title: "Berchtesgaden", detail: "4 Tage" },
  { years: "2021", title: "Tessin", detail: "8 Tage" },
  { years: "2021", title: "Engadin", detail: "8 Tage" },
  { years: "2022", title: "Zermatt", detail: "6 Tage" },
  { years: "2022", title: "Heilsteinmuseum", detail: "3 Tage" },
];

const LEGEND = [
  { key: "A", title: "Kloster Odilienberg", text: "40 km ab Strasbourg, auf den Vogesen El Gran, 650 m hoch, erbaut 1318." },
  { key: "B", title: "Beckenfels", text: "" },
  { key: "B1", title: "Heidenmauer", text: "4000 Jahre alt." },
  { key: "C", title: "Wald Mandalas", text: "" },
  { key: "D", title: "Sonnenaufgang auf Vogesen", text: "" },
  { key: "E", title: "Wasserbecken auf Beckenfels", text: "" },
  { key: "F", title: "Druide", text: "" },
];

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

const GALLERY = [
  { src: "20180726_101600.jpg", label: "A", caption: "Kloster Odilienberg" },
  { src: "thumbnail_IMG_1942.jpg", label: "A" },
  { src: "thumbnail_IMG_1943.jpg", label: "A" },
  { src: "42274287_1537385089740245_723710888548237312_n.jpg", label: "B" },
  { src: "42351460_1537385569740197_5451267724393054208_n.jpg", label: "B" },
  { src: "20180726_104227.jpg", label: "B" },
  { src: "42208833_1537385529740201_1629538453555249152_n.jpg", label: "B" },
  { src: "20180919_145520.jpg", label: "B1" },
  { src: "20180919_172151.jpg", label: "B1" },
  { src: "20180726_131812.jpg", label: "B" },
  { src: "thumbnail_IMG_2010.jpg", label: "B1" },
  { src: "thumbnail_IMG_2005.jpg", label: "C", caption: "Wald Mandalas" },
  { src: "42260153_1537307449748009_1034706421024817152_n.jpg", label: "C" },
  { src: "42227710_1537307033081384_8519757991774257152_n.jpg", label: "C" },
  { src: "42206926_1537307323081355_3330859460032724992_n.jpg", label: "C" },
  { src: "42257191_1537408289737925_5422458587010039808_n.jpg", label: "E" },
  { src: "thumbnail_IMG_1987.jpg", label: "D", caption: "Sonnenaufgang, Vogesen" },
  { src: "42206876_1537306949748059_7403800891272200192_n.jpg", label: "D" },
  { src: "42319623_1537307909747963_2981257424310108160_n.jpg", label: "F", caption: "Druide" },
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
              <Mountain className="h-3.5 w-3.5" /> Diverses
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Geologische Reisen
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Geologische Exkursionen der Heilsteinschule Schweiz — unterwegs in den Alpen, im Jura
              und darüber hinaus. Ein Rückblick in Bildern.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Exkursionen Übersicht */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Rückblick"
            title="Geologische Exkursionen"
            subtitle="Von 2011 bis 2022 begleiteten Exkursionen die Ausbildung — in den Zentralalpen, dem Jura, auf den Azoren und bis nach Idar-Oberstein."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXKURSIONEN.map((e, i) => (
            <Reveal key={e.title + e.years} delay={(i % 3) * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                    <Calendar className="h-3.5 w-3.5" /> {e.years}
                  </div>
                  <h3 className="mt-1 font-heading text-base font-semibold text-amethyst">{e.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{e.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reiseberichte — Links zu Einzelberichten */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Einzelberichte"
              title="Reiseberichte"
              subtitle="Ausführliche Bildberichte ausgewählter geologischer Reisen — von Glarnerland bis Zermatt."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REISEBERICHTE.map((r, i) => (
              <Reveal key={r.to} delay={(i % 3) * 0.06}>
                <Link
                  to={r.to}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                      <Calendar className="h-3.5 w-3.5" /> {r.year}
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-amethyst">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.detail}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep transition group-hover:gap-2.5">
                    Zum Bericht <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vogesen / Odilienberg Galerie */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="2013 – 2018 · 6 Tage"
              title="Vogesen / Odilienberg"
              subtitle="Kloster Odilienberg, Beckenfels, Heidenmauer, Wald-Mandalas, Sonnenaufgang und ein Druide — Eindrücke von der Exkursion in die Vogesen."
            />
          </Reveal>

          {/* Legende */}
          <Reveal delay={0.05}>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white p-6 shadow-soft">
              <div className="grid gap-3 sm:grid-cols-2">
                {LEGEND.map((l) => (
                  <div key={l.key} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amethyst text-xs font-bold text-white">
                      {l.key}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-amethyst">{l.title}</p>
                      {l.text && <p className="text-xs leading-relaxed text-muted-foreground">{l.text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Galerie */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src + i} delay={(i % 3) * 0.05}>
                <figure className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-lift">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <OptimizedImage
                      src={`${GALLERY_BASE}${g.src}`}
                      alt={g.caption || `Vogesen / Odilienberg — ${g.label}`}
                      width={600}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="flex items-center gap-2 px-4 py-3 text-xs">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-citrine/15 text-[0.65rem] font-bold text-citrine-deep">
                      {g.label}
                    </span>
                    <span className="text-muted-foreground">{g.caption || LEGEND.find((l) => l.key === g.label)?.title}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Alpen-Seminare (Sub-Option) */}
      <section id="alpen-seminare" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="5 Jahre u. älter"
            title="Alpen-Seminare"
            subtitle="Wir wandern und erforschen unser Gebirge. Unser Alpen-Seminar ist aufgebaut für jedermann/frau — wir machen keine Extremtouren."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
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
            <p className="mt-6 rounded-2xl border border-citrine/30 bg-citrine/5 p-4 text-sm font-medium text-amethyst">
              5 Tage mit 4 Übernachtungen im alpinen Bereich. Wir sind mehrheitlich auf KALK, GRANIT und GNEIS unterwegs.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <OptimizedImage
                  src="https://heilsteinschule.swiss/media/backgrounds/156/Bruno_beim_kalk_pickeln.jpg"
                  alt="Bruno beim Kalk pickeln"
                  width={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <OptimizedImage
                  src="https://heilsteinschule.swiss/media/backgrounds/156/Nebelsee.jpg"
                  alt="Nebelsee in den Alpen"
                  width={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            </div>
          </Reveal>
        </div>

        {/* Galerie 2015 – 2019 */}
        <Reveal>
          <h3 className="mt-16 text-center font-heading text-2xl font-bold text-amethyst">
            Alpen-Seminare 2015 – 2019
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ALPEN_GALLERY.map((g, i) => (
            <Reveal key={g.src + i} delay={(i % 4) * 0.05}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={`${ALPEN_BASE}${g.src}`}
                    alt={`Alpen-Seminar ${g.year}`}
                    width={500}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-3 py-2 text-center text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  {g.year}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Alpenseminar 2025 — Rückblick von Pascal Bossard */}
      <div id="alpenseminar" className="scroll-mt-24">
        <AlpenseminarReport />
      </div>
    </>
  );
}