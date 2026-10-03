import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ExcursionHero from "@/components/site/ExcursionHero";
import Reveal from "@/components/site/Reveal";
import OptimizedImage from "@/components/site/OptimizedImage";

const IMG = "https://heilsteinschule.swiss/media/Heilstein_Museum/";

const PHOTOS = [
  { src: `${IMG}IMG_1946.JPG`, alt: "Werner erzählt und erklärt fantastisch interessant", caption: "Das ist seine Welt — Werner erzählt, erklärt fantastisch interessant." },
  { src: `${IMG}IMG_1956.JPG`, alt: "Werner erzählt im Heilstein-Museum", caption: "Das ist seine Welt — Werner erzählt, erklärt fantastisch interessant." },
  { src: `${IMG}IMG_1899.JPG`, alt: "Heilstein-Museum Eingang in Stockheim", caption: "Heilstein-Museum — Eingang in Stockheim" },
  { src: `${IMG}IMG_1891.JPG`, alt: "Werner in seinem Museumsgarten", caption: "Werner in seinem Museumsgarten" },
  { src: `${IMG}IMG_1973.JPG`, alt: "Heilsteine und ätherische Öle", caption: "Ein einzigartiger Wurf als Autor — Heilsteine und ätherische Öle. Das unterrichten wir auch an der Schule." },
  { src: `${IMG}IMG_1997.JPG`, alt: "Einwirkung der Mineralien auf die Organe", caption: "Einwirkung der Mineralien, ätherischen Öle und Kolloidales Silber auf die Organe" },
  { src: `${IMG}IMG_1961.JPG`, alt: "Mögliche Ängste können eliminiert werden", caption: "Mögliche Ängste können so eliminiert werden." },
  { src: `${IMG}IMG_2005.JPG`, alt: "Rhodonit — Angst vor Verlust / Aquamarin", caption: "Rhodonit — Angst vor Verlust, oder Aquamarin." },
  { src: `${IMG}IMG_2018.JPG`, alt: "Viele Fälschungen aus Marokko im Umlauf", caption: "Viele Fälschungen aus Marokko im Umlauf." },
  { src: `${IMG}IMG_2022.JPG`, alt: "Synthetische Mineralien bringen grossen Erfolg und Geld", caption: "Synthetische Mineralien kommen immer mehr unters Volk und bringen leider grossen Erfolg und Geld." },
  { src: `${IMG}IMG_2103.JPG`, alt: "Das UV-Licht verrät die Echtheit", caption: "Das UV-Licht verrät die Echtheit." },
  { src: `${IMG}IMG_1897.JPG`, alt: "Anna, Werner, Judith", caption: "Anna | Werner | Judith" },
];

export default function HeilsteinMuseum2022() {
  return (
    <>
      <ExcursionHero
        eyebrow="2022 · 3 Tage"
        title="Das Heilstein-Museum in Stockheim"
        subtitle="In 4 grossen Schauräumen mit insgesamt 106 Vitrinen kann man die Privatsammlung an Heilsteinen von Werner Kühni bewundern. Der Eintritt zum Museum ist frei!"
        image={`${IMG}IMG_1946.JPG`}
        alt="Werner erzählt und erklärt im Heilstein-Museum"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Im Heilstein-Museum in Stockheim kann man in 4 grossen Schauräumen mit insgesamt 106 Vitrinen die
            Privatsammlung an Heilsteinen von Werner Kühni bewundern. Die Schauräume und Vitrinen sind in 4
            Schwerpunkte unterteilt: Ästhetik, Mineralienraum, Medizinraum und Medizingeschichts- und
            Fundstellenraum. Der Eintritt zum Museum ist frei!
          </p>
          <p>
            Heilsteine sind Mineralien und Gesteine, deren Wirkung auf Körper, Seele und Geist des Menschen durch
            Erfahrungswissen über viele Jahrtausende bestätigt wurde. Im Heilstein-Museum kann man dazu viel
            erfahren: Anwendung von Heilsteinen, Bedeutung der geografischen Herkunft der Mineralien und Steine,
            Grundlagen der Mineralogie, sowie einen Überblick über die geschichtliche Verwendung von Heilsteinen in
            verschiedenen Kulturen der letzten 5.000 Jahre.
          </p>
          <p>
            Man bekommt auch einen Überblick über die verschiedenen Anwendungen der Mineralien in verschiedenen
            Bereichen wie der Hildegard-Medizin, Homöopathie, Anthroposophischen Medizin, traditionelle chinesische
            Medizin, physiologischen und modernen Steinheilkunde.
          </p>
          <p>
            Im Museums-Garten werden viele Heilpflanzen angebaut und können auf Schautafeln besichtigt werden. Werner
            Kühni, der Heilpraktiker und Medizinhistoriker, und Julia Barthelmes, die Aromatherapeutin und Kuratorin
            des Heilstein-Museums, kombinieren zusammen zu den Heilsteinen ätherische Öle, die aus Pflanzen aus dem
            Museums-Garten hergestellt werden. Für Kinder gibt es einige Überraschungen zu entdecken — vorbeischauen
            lohnt sich auf jeden Fall!
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src + i} delay={(i % 3) * 0.05}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-lift">
                <div className="aspect-square overflow-hidden bg-muted">
                  <OptimizedImage src={p.src} alt={p.alt} width={600} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">{p.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/geologische-reisen" className="inline-flex items-center gap-2 text-sm font-semibold text-amethyst underline underline-offset-4 hover:text-citrine-deep">
            <ArrowLeft className="h-4 w-4" /> Zurück zu Geologische Reisen
          </Link>
        </div>
      </section>
    </>
  );
}