import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const STONES = [
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Alpenseminar_2025_Titelbild.jpg", alt: "Alpenseminar in den Schweizer Alpen", span: "tall" },
  { src: "https://heilsteinschule.swiss/media/Ruth_Bruno_Aug_25_2.jpg", alt: "Unterricht mit Ruth Rios und Bruno Vogler Pfeiffer", span: "wide" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Bild_Tag_4-1.jpg", alt: "Geologische Exkursion am Oberalppass" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Zertifikate_%C3%BCbergabe1.jpg", alt: "Zertifikatsübergabe an die Absolventinnen und Absolventen" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Bild_Tag_4-2.jpg", alt: "Heilsteine sammeln in den Alpen" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Backview.jpg", alt: "Leiterteam des Alpenseminars" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Bild_Tag_4-3.jpg", alt: "Mineralien am Oberalppass" },
  { src: "https://heilsteinschule.swiss/media/Alpenseminar_2025/Zertifikate_%C3%BCbergabe2.jpg", alt: "Zertifikatsübergabe im Kreis der Absolventen" },
  { src: "https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg", alt: "Schul- und Ladenstandort Asp" },
  { src: "https://heilsteinschule.swiss/media/Laden/20240226_100437.jpg", alt: "Heilsteinshop Asp — Beratung im Laden" },
];

const QR_URL = "https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fheilsteinschule.swiss&size=400x400&color=2B1B4D&margin=0";
const LOGO_URL = "https://heilsteinschule.swiss/media/LogoName.png";

export default function StoneCollage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Schule in Aktion"
          title="Unterricht, Exkursionen und Menschen"
          subtitle="Eindrücke aus dem Alpenseminar, den geologischen Exkursionen und dem Schulalltag — mit Kopf, Herz, Hand und Fuss."
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
                  <OptimizedImage
                    src={stone.src}
                    alt={stone.alt}
                    width={500}
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
                Heilsteinschule
                <br />
                Schweiz
              </h3>

              <p
                className="mt-2 text-[0.55rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.65rem]"
                style={{ color: "#C19A3B" }}
              >
                SVNH zertifiziert · Seit 2008
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