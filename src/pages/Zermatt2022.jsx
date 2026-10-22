import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import ExcursionHero from "@/components/site/ExcursionHero";
import Reveal from "@/components/site/Reveal";
import OptimizedImage from "@/components/site/OptimizedImage";

const DAYS = [
  {
    day: "Anreise",
    title: "Stausee Mattmark VS",
    text: "Wir treffen uns beim Stausee in Mattmark VS. Dort sammeln wir den berühmten Allalin-Gabbro und weitere interessante metamorphe Gesteine direkt am Fusse des Allalinhorns. Danach verschieben wir nach Täsch, wo wir unser Auto für den Rest der Reise abstellen werden (Zermatt ist autofrei). Von Täsch geht es mit der Bahn nach Zermatt. Nach dem Bezug der Zimmer und dem Nachtessen in der Unterkunft, folgt eine Einführung in die Geologie der Gegend durch Dr. Andreas Stucki.",
  },
  {
    day: "Freitag, 26.08.2022",
    title: "Richtung Schwarzsee",
    text: "Am Freitagmorgen fahren wir mit der Gondelbahn auf knapp 3000 m.ü.M. Dort beginnt unsere Wanderung Richtung Schwarzsee. Wir bewegen uns in einer riesigen Steinwüste, die noch vor einigen Jahrzehnten der Gletscher bedeckte. Die Wanderung geht mehrheitlich, bis auf eine Gegensteigung, den Berg hinunter. Die reine Wanderdauer wird mit 2 Stunden angegeben. Wir werden viel länger in diesem Gebiet verweilen und es ausgiebig erkunden können. Die Sicht auf das Matterhorn ist beeindruckend und wir kommen sehr nahe an dessen Fuss heran. In dieser Gegend finden wir Eklogite, Serpentinit, Rodingite (Epidot-Hessonit-Felsen), Glimmerschiefer mit Granat und weiteres. Von der Bergstation Schwarzsee geht es dann wieder hinunter nach Zermatt.",
  },
  {
    day: "Samstag, 27.08.2022",
    title: "Pfulwepass & Stellisee",
    text: "Am Samstagmorgen nehmen wir die Bahn nach Blauherd auf 2570 m.ü.M. Von dort wandern wir Richtung Pfulwepass, welcher auf 3155 m.ü.M. liegt. In ca. 2.5 h überwinden wir 600 Höhenmeter. Als Belohnung erwartet uns ein Aufschluss mit den schönsten, ehemals ozeanischen Pillow-Laven der Alpen. Der Pfulwepass ist auch bekannt für die schönen Magnetitkristalle, welche im Serpentinit gefunden werden. Des Weiteren können wir Eklogite, Blauschiefer und vielleicht den Schweizerit (eine Art «Edelserpentin») finden. Wer weniger bergtüchtig unterwegs ist, kann von der Bergstation Blauherd in kurzer Zeit den berühmten Stellisee erreichen, der das Matterhorn spiegelt. Interessante Steinfunde in der Nähe können in der Moräne des Findelgletschers gemacht werden.",
  },
  {
    day: "Sonntag, 28.08.2022",
    title: "Gornergrat",
    text: "Am Sonntag wollen wir uns zum Abschluss den berühmten Gornergrat gönnen. Der Gornergrat gehört zu den Orten, die man einmal im Leben besucht haben muss. Das Bergpanorama und der einmalige Blick auf das Matterhorn bleiben unvergesslich. Mit seiner sonnigen, ganzjährig erreichbaren Aussichtsplattform zählt der Gornergrat auf 3'089 m seit 1898 zu den Top-Ausflugszielen der Schweiz. Die Gornergrat Bahn war die erste, voll elektrifizierte Zahnradbahn der Schweiz. 13:00 Abschluss der Reise in Zermatt mit individueller Heimreise oder Verlängerung.",
  },
];

export default function Zermatt2022() {
  return (
    <>
      <ExcursionHero
        eyebrow="25. – 28. August 2022"
        title="Geologische Reise nach Zermatt"
        subtitle="Dieses Gebiet rund um das Matterhorn ist wahrhaftig ein Juwel für die Sinne. Nicht nur für das Auge, sondern auch geologisch hat die Gegend einiges zu bieten."
        image="https://heilsteinschule.swiss/media/vslider/Stausee_breitformat.JPG"
        alt="Stausee Mattmark VS"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
          Zermatt bietet durch das dichte Netz an Bergbahnen gute Möglichkeiten, schnell und einfach in grosse Höhen zu
          kommen, wodurch auch weniger geübte Wanderer in interessante Gebiete gelangen. Wir freuen uns, Dr. Andreas
          Stucki auch dieses Jahr wieder als Führer dabei zu haben. Wichtig zu erwähnen ist, dass wir uns auf unseren
          Ausflügen in Höhen von bis zu 3000 m.ü.M. befinden. Es wird jedoch für jeden Ausflug auch eine alternative
          Variante geben. Die ganze Durchführung ist auch witterungsabhängig, für ein Schlecht-Wetterprogramm ist
          gesorgt.
        </p>

        <Reveal delay={0.05}>
          <figure className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
            <OptimizedImage
              src="https://heilsteinschule.swiss/media/vslider/Stausee_breitformat.JPG"
              alt="Stausee Mattmark VS — früher ein guter Schmugglerpfad über den Pass nach Italien"
              width={1280}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-center text-sm text-muted-foreground">
              Stausee Mattmark VS — früher ein guter Schmugglerpfad über den Pass nach Italien
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-14 space-y-8">
          {DAYS.map((d, i) => (
            <Reveal key={i}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-citrine/15 px-3 py-1 text-xs font-mono uppercase tracking-wider text-citrine-deep">
                  <Calendar className="h-3.5 w-3.5" /> {d.day}
                </div>
                <h2 className="font-heading text-2xl font-bold text-amethyst">{d.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/geologische-reisen" className="inline-flex items-center gap-2 text-sm font-semibold text-amethyst underline underline-offset-4 hover:text-citrine-deep">
            <ArrowLeft className="h-4 w-4" /> Zurück zu Exkursionen &amp; Alpenseminar
          </Link>
        </div>
      </section>
    </>
  );
}