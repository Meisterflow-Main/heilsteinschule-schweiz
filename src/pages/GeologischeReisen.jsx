import React from "react";
import { Mountain, MapPin, Calendar } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

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
    </>
  );
}