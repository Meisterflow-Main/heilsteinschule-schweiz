import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const STONES = [
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/69cd20212_20260712_124820.jpg", alt: "Bergkristall mit Einschlüssen", span: "tall" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/1edbdc4d6_2Farbsteine_DSC01954.jpg", alt: "Farbsteine", span: "wide" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/9b51048f6_20260823_145828.jpg", alt: "Versteinerung" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/08ae688ee_IMG-20260627-WA0115.jpg", alt: "Bergkristall-Gruppe" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/ad3650a45_IMG-20260627-WA0116.jpg", alt: "Bergkristall-Cluster" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/56966242c_20260823_145230.jpg", alt: "Fossilien mit Kristallen" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/16a773336_20260723_121611.jpg", alt: "Kristall mit grünem Apex" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/7c73f5092_20260813_112649.jpg", alt: "Ammonit im Gestein" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/1447fd1c8_20260823_152412.jpg", alt: "Fossil im Kalkstein" },
  { src: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/59ea73f0e_20260823_145411.jpg", alt: "Fossil in Hand" },
];

const QR_URL = "https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fheilsteinschule.swiss&size=400x400&color=2B1B4D&margin=0";
const LOGO_URL = "https://heilsteinschule.swiss/media/LogoName.png";

export default function StoneCollage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Schweizer Heilsteine"
          title="Unsere Steine im Porträt"
          subtitle="Eine Auswahl unserer geprüften Schweizer Heilsteine — vom Bergkristall bis zum Ammonit."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
          <div className="flex aspect-[16/10] w-full sm:aspect-[2/1]">
            {/* Mosaic */}
            <div className="grid flex-[1.6] grid-cols-4 grid-rows-3 gap-1 p-1 sm:gap-1.5 sm:p-1.5">
              {STONES.map((stone, i) => (
                <div
                  key={i}
                  className={`overflow-hidden ${
                    stone.span === "tall" ? "row-span-2" : stone.span === "wide" ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={stone.src}
                    alt={stone.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Panel */}
            <div
              className="flex flex-[1] flex-col items-center justify-center px-4 py-5 text-center sm:px-6"
              style={{ background: "#2B1B4D" }}
            >
              <div className="rounded-xl bg-white px-3 py-2 sm:px-4 sm:py-2.5">
                <img
                  src={LOGO_URL}
                  alt="Heilsteinschule Schweiz"
                  className="h-8 w-auto sm:h-10"
                />
              </div>

              <div className="mt-4 h-px w-10" style={{ background: "#C19A3B" }} />

              <h3
                className="mt-3 font-heading text-base font-bold leading-tight sm:text-lg"
                style={{ color: "#FFFFFF" }}
              >
                Heilsteine
                <br />
                aus der Schweiz
              </h3>

              <p
                className="mt-2 text-[0.55rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.65rem]"
                style={{ color: "#C19A3B" }}
              >
                SVNH zertifiziert · Seit 2011
              </p>

              <div className="mt-4 rounded-xl bg-white p-1.5 sm:p-2">
                <img
                  src={QR_URL}
                  alt="QR Code – heilsteinschule.swiss"
                  className="h-16 w-16 sm:h-20 sm:w-20"
                />
              </div>

              <p
                className="mt-2 font-mono text-[0.6rem] sm:text-xs"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                heilsteinschule.swiss
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}