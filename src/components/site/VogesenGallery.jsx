import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const BASE = "https://heilsteinschule.swiss/media/rfg-folders/geologische-reisen-gallery/";

const LEGEND = [
  { key: "A", text: "Kloster Odilienberg, 40 km ab Strasbourg, auf den Vogesen El Gran, 650 m hoch, erbaut 1318" },
  { key: "B", text: "Beckenfels" },
  { key: "B1", text: "Heidenmauer, 4000 Jahre alt" },
  { key: "C", text: "Wald Mandalas" },
  { key: "D", text: "Sonnenaufgang auf Vogesen" },
  { key: "E", text: "Wasserbecken auf Beckenfels" },
  { key: "F", text: "Druide" },
];

const PHOTOS = [
  { src: "20180726_101600.jpg", caption: "A: Kloster Odilienberg" },
  { src: "thumbnail_IMG_1942.jpg", caption: "A" },
  { src: "thumbnail_IMG_1943.jpg", caption: "A" },
  { src: "42274287_1537385089740245_723710888548237312_n.jpg", caption: "B: Beckenfels" },
  { src: "42351460_1537385569740197_5451267724393054208_n.jpg", caption: "B: Beckenfels" },
  { src: "20180726_104227.jpg", caption: "B: Beckenfels" },
  { src: "42208833_1537385529740201_1629538453555249152_n.jpg", caption: "B: Beckenfels" },
  { src: "20180919_145520.jpg", caption: "B1: Heidenmauer" },
  { src: "20180919_172151.jpg", caption: "B1: Heidenmauer" },
  { src: "20180726_131812.jpg", caption: "B: Beckenfels" },
  { src: "thumbnail_IMG_2010.jpg", caption: "B1: Heidenmauer" },
  { src: "thumbnail_IMG_2005.jpg", caption: "C: Wald Mandalas" },
  { src: "42260153_1537307449748009_1034706421024817152_n.jpg", caption: "C: Wald Mandalas" },
  { src: "42227710_1537307033081384_8519757991774257152_n.jpg", caption: "C: Wald Mandalas" },
  { src: "42206926_1537307323081355_3330859460032724992_n.jpg", caption: "C: Wald Mandalas" },
  { src: "42257191_1537408289737925_5422458587010039808_n.jpg", caption: "E: Wasserbecken auf Beckenfels" },
  { src: "thumbnail_IMG_1987.jpg", caption: "D: Sonnenaufgang, Vogesen" },
  { src: "42206876_1537306949748059_7403800891272200192_n.jpg", caption: "D: Sonnenaufgang, Vogesen" },
  { src: "42319623_1537307909747963_2981257424310108160_n.jpg", caption: "F: Druide" },
];

export default function VogesenGallery() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Bildergalerie"
            title="Vogesen / Odilienberg"
            subtitle="Geologische Reise 2013 – 2018 · 6 Tage. Die Buchstaben in den Bildlegenden verweisen auf die Fund- und Kraftorte dieser Reise."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {LEGEND.map((l) => (
              <li key={l.key} className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs text-muted-foreground shadow-soft">
                <span className="font-mono font-semibold text-citrine-deep">{l.key}</span>
                {l.text}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src + i} delay={(i % 3) * 0.05} className="mb-4 break-inside-avoid">
              <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <OptimizedImage src={`${BASE}${p.src}`} alt={p.caption} width={800} loading="lazy" className="h-auto w-full" />
                <figcaption className="px-4 py-2 text-center text-xs text-muted-foreground">{p.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}