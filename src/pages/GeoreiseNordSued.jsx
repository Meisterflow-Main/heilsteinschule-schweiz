import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ExcursionHero from "@/components/site/ExcursionHero";
import Reveal from "@/components/site/Reveal";
import OptimizedImage from "@/components/site/OptimizedImage";

const GALLERY = [
  { src: "Geo_2021_nor-süed7.png", caption: "Aussicht auf den Leg Grevasalvas" },
  { src: "Geo_2021_nor-süed8.png", caption: "Suche nach Radiolarit oberhalb des Leg Grevasalvas" },
  { src: "Geo_2021_nor-süed6.png", caption: "Andreas Stucki erläutert die Fundstelle Gruba" },
  { src: "Geo_2021_nor-süed10.png", caption: "Aussicht im Nationalpark" },
  { src: "Geo_2021_nor-süed9.png", caption: "Rast im Nationalpark" },
];

const GALLERY_BASE = "https://heilsteinschule.swiss/media/rfg-folders/georeise-nord---sued-2021-gallery/";

const SECTIONS = [
  {
    img: "https://heilsteinschule.swiss/media/wunderblock/geo-2021-nor-sueed1.png",
    alt: "Im Innern des Schieferbergwerks Engi",
    title: "Reise zurück zur Entstehung der Alpen",
    text: "Der Beginn des Alpenseminars ist gleichzeitig eine Reise zurück zur Entstehung der Alpen. An den Lochsiten in der Nähe von Elm führt uns eine schmale Brücke zu einem Pfad an einer Stelle am steilen Hang, wo die geologische Geschichte zu Tage tritt. Eine schnurgerade Spalte zieht sich quer durch den Felsen. Sie markiert die Grenze zwischen 250 bis 300 Millionen Jahren altem Verrucano-Gestein, das sich über 30 bis 50 Millionen Jahr junges Flysch-Gesteine geschoben hat. Die Lochsiten trug dazu bei, dass sich die Erkenntnis durchsetzte, wonach Überschiebungen für die Alpenbildung verantwortlich sind.",
  },
  {
    img: "https://heilsteinschule.swiss/media/wunderblock/geo-2021-nor-sueed2.png",
    alt: "Spuren von Eisenerz im Bergwerk Gonzen",
    title: "Schiefer und Eisenerz",
    text: "Später am Tag wechseln wir die Perspektive und tauchen ins Innere der Glarner Entstehungsgeschichte ein. Die Führung im Schieferbergwerk Engi offenbarte, welche Kräfte an dieser Stelle im Gebirge wirken und welche Rolle das Gestein für die Menschen in der Region spielte. Noch tiefer in den Berg hinein lockt uns danach die geführte Tour durch das Eisenbergwerk Gonzen am Nachmittag. War das Schieferbergwerk noch hell ausgeleuchtet und luftig, leuchtet uns hier nur das magere Licht unserer Lampen den Weg durch die klobigen Gänge. Nach dem Besuch im Gonzen schlagen wir in Bivio Quartier auf, wo Andreas Stucki den Tag mit einem Workshop über die geologische Beschaffenheit der Region um den Julier beschliesst.",
  },
  {
    img: "https://heilsteinschule.swiss/media/wunderblock/geo-2021-nor-sueed3.png",
    alt: "Rund um den Lai da Marmorera zeugen Fundstellen von der ozeanischen Vergangenheit",
    title: "Steinerne Zeugen vom Meeresboden",
    text: "Dreh- und Angelpunkt für die Ausflüge zu den Fundstellen bei Bivio ist der Lai da Marmorera. Riesige Steinquader in der mit Gras überzogenen Staumauer zeugen von den verschiedenen Vorkommen rund um den See. An einer Abbruchstelle erläutert Dr. Andreas Stucki weitaus handlichere Exemplare von grün-schwarz schimmerndem Serpentin. Früher bildete dieses Gestein den Boden des Jura-Ozeans, heute säumt es vergleichsweise bescheiden das Ufer des Lai da Marmorera. Locker verstreut finden sich auch kleinere Exemplare von Radiolariten, der Schweizer Variante des roten Jaspis. Weitere Zeugen des früheren Ozeans sind die Pillow-Strukturen auf der nahen Alp Flix, die wir kurz darauf aufsuchen.",
  },
  {
    img: "https://heilsteinschule.swiss/media/wunderblock/geo-2021-nor-sueed4.png",
    alt: "Die Gruppe auf der malerischen Alp Flix",
    title: "Diallag-Gabbro am Wegrand",
    text: "Zurück am Lai da Marmorera erkunden wir am Morgen darauf eine weitere Fundstelle, gleich neben dem gleichnamigen Dorf. Ein Kiesweg führt an massiven Brocken von Diallag- oder Marmorera-Gabbro vorbei, die sich am Hang auftürmen. Die Schönheit dieser Steine offenbart sich erst nach der Bearbeitung mit einem Hammer: In einer Grundmasse aus grünlichem Feldspat schimmern braun glänzende Pyroxen-Kristalle. Der Gabbro ist wie die Basalte vor rund 160 Mio. Jahren entstanden, kristallisierte sich aber in grösserer Tiefe. Später am Abend arbeiten die Teilnehmer am therapeutischen Workshop mit den gefundenen Mineralien, begleitet von Bruno Vogler Pfeiffer, Manuel Litschi und Daniel Lüscher von der Heilsteinschule.",
  },
  {
    img: "https://heilsteinschule.swiss/media/wunderblock/geo-2021-nor-sueed5.png",
    alt: "Aufgebrochener Diallag- oder Marmorera-Gabbro",
    title: "Magmatisches Gestein am Julierpass",
    text: "Am frühen Morgen des dritten Tages führt uns ein schmaler Weg durch den Wald über dem Lai da Marmorera. Bei der «Gruba» finden sich Hinweise auf den Erzabbau, der mutmasslich in die Bronzezeit zurückreicht. Nach dem Abstieg machen wir uns auf zum Julierpass. Oberhalb von Bivio sammeln wir Haupt-Dolomit. Auf der Passhöhe wandern wir zum nächsten See, dem Leg Grevasalvas. Hier stossen wir auf eine Vielfalt von magmatischem Gestein: Julier-Granit, Diorit und ehemalige Vulkanite. Im Nationalparkmuseum in Zernez endet der Seminarteil des dritten Tages. Am nächsten Tag erkunden wir Geologie, Flora und Fauna bei der Wanderung durch den Park. Gerade als wir die letzte Wegmarke erreichen, ziehen zwei Bartgeier ihre Kreise über den Baumwipfeln.",
  },
];

export default function GeoreiseNordSued() {
  return (
    <>
      <ExcursionHero
        eyebrow="August 2021"
        title="Georeise Nord – Süd 2021"
        subtitle="Die Alpenseminare der Heilsteinschule Schweiz verbinden geologisches Sightseeing mit wissenschaftlichen Hintergründen, Fachwissen in der Steinkunde und unvergesslichen Naturerlebnissen."
        image="https://heilsteinschule.swiss/media/wunderblock/geo-2021-nor-sueed1.png"
        alt="Im Innern des Schieferbergwerks Engi"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
          Ende August waren wir gemeinsam mit Dr. Andreas Stucki unterwegs. Der Inhaber von Siber + Siber und
          leidenschaftliche Strahler führte uns an verschiedene Fundstellen rund um den Julierpass.
        </p>

        <div className="mt-12 space-y-14">
          {SECTIONS.map((s, i) => (
            <Reveal key={i}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="font-heading text-2xl font-bold text-amethyst">{s.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
                <figure className={`overflow-hidden rounded-2xl border border-border bg-white shadow-soft ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <OptimizedImage src={s.img} alt={s.alt} width={700} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-2 text-xs text-muted-foreground">{s.alt}</figcaption>
                </figure>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Galerie */}
        <Reveal>
          <h2 className="mt-16 text-center font-heading text-2xl font-bold text-amethyst">Leg Grevasalvas & Nationalpark</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src + i} delay={(i % 3) * 0.05}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <OptimizedImage src={`${GALLERY_BASE}${g.src}`} alt={g.caption} width={600} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="px-4 py-3 text-xs text-muted-foreground">{g.caption}</figcaption>
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