import React, { useRef, useState } from "react";
import { Download, Printer, Loader2 } from "lucide-react";

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

const QR_URL =
  "https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fheilsteinschule.swiss&size=1000x1000&color=2B1B4D&margin=0";
const LOGO_URL = "https://heilsteinschule.swiss/media/LogoName.png";

export default function Banner() {
  const bannerRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!bannerRef.current) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");
      const canvas = await html2canvas(bannerRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: [1200, 850] });
      pdf.addImage(imgData, "JPEG", 0, 0, 1200, 850);
      pdf.save("heilsteinschule-banner-120x85.pdf");
    } catch (err) {
      console.error("PDF-Export fehlgeschlagen:", err);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-200">
      {/* Toolbar */}
      <div className="sticky top-0 z-20 border-b border-neutral-300 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div>
            <h1 className="font-heading text-lg font-bold text-amethyst">Werbung Banner</h1>
            <p className="text-xs text-muted-foreground">120 × 85 cm · Heilsteinschule Schweiz</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-neutral-100"
            >
              <Printer className="h-4 w-4" /> Drucken
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2 rounded-full bg-amethyst px-5 py-2 text-sm font-semibold text-white transition hover:bg-amethyst-deep disabled:opacity-60"
            >
              {downloading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
              {downloading ? "Erstelle PDF…" : "Als PDF herunterladen"}
            </button>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div
          ref={bannerRef}
          className="banner-print aspect-[120/85] w-full overflow-hidden bg-white shadow-2xl"
        >
          <div className="flex h-full w-full">
            {/* Mosaic */}
            <div className="grid flex-[1.6] grid-cols-4 grid-rows-3 gap-1 p-1.5">
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
                    crossOrigin="anonymous"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Panel */}
            <div
              className="flex flex-[1] flex-col items-center justify-center px-6 py-8 text-center"
              style={{ background: "#2B1B4D" }}
            >
              <div className="mb-4 flex items-center rounded-full bg-white/10 px-3 py-1.5">
                <svg viewBox="0 0 32 32" className="h-5 w-5" aria-label="Schweizer Flagge" role="img">
                  <rect width="32" height="32" rx="4" fill="#D52B1E" />
                  <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
                  <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
                <img
                  src={LOGO_URL}
                  alt="Heilsteinschule Schweiz"
                  className="h-12 w-auto sm:h-14 xl:h-16"
                />
              </div>

              <div className="mt-6 h-px w-14" style={{ background: "#C19A3B" }} />

              <h2
                className="mt-5 font-heading text-xl font-bold leading-tight sm:text-2xl xl:text-3xl"
                style={{ color: "#FFFFFF" }}
              >
                Heilsteine
                <br />
                aus der Schweiz
              </h2>

              <p
                className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.15em] sm:text-xs"
                style={{ color: "#C19A3B" }}
              >
                SVNH zertifiziert · Seit 2011
              </p>

              <div className="mt-6 rounded-2xl bg-white p-2.5 shadow-lg">
                <img
                  src={QR_URL}
                  alt="QR Code – heilsteinschule.swiss"
                  crossOrigin="anonymous"
                  className="h-24 w-24 sm:h-28 xl:h-32 xl:w-32"
                />
              </div>

              <p
                className="mt-3 font-mono text-xs sm:text-sm"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                heilsteinschule.swiss
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-neutral-500">
          Banner-Format: 120 × 85 cm · Alle Steine aus der Schweiz · GKS kontrolliert
        </p>
      </div>
    </div>
  );
}