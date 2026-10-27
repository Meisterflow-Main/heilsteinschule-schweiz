import React from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const BOOKS = [
  {
    title: "Die Heilsteine der Hildegard von Bingen",
    price: "sFr 27,00",
    img: "https://heilstein-shop.com/media/bakery/images/item41/Hildegard-von-Bingen-22.png",
    text: "Vor 850 Jahren verfasst, bis heute aktuell: das Lapis lapidarum, Hildegard von Bingens Buch von den Steinen. Erstmals werden alle Heilsteine Hildegards mineralogisch exakt definiert und Fehler der bisherigen Literatur korrigiert.",
    url: "https://heilstein-shop.com/bakery/die-heilsteine-der-hildegard-von-bingen-41/",
  },
  {
    title: "Die Heilsteine Hausapotheke",
    price: "sFr 30,00",
    img: "https://heilstein-shop.com/media/bakery/images/item59/die-hausapotheke.jpg",
    text: "Der zuverlässige, praxiserprobte Ratgeber für die Behandlung häufiger Krankheiten und Beschwerden — übersichtlich, alltagstauglich und das Ergebnis jahrelanger Erfahrung. Stark erweitert und vollständig neu durchgesehen.",
    url: "https://heilstein-shop.com/bakery/die-heilsteine-haus-apotheke-59/",
  },
  {
    title: "Die Heilsteine Taschenapotheke",
    price: "sFr 13,00",
    img: "https://heilstein-shop.com/media/bakery/images/item60/Heilsteine-Taschenapotheke.png",
    text: "Zwölf Heilsteine für die Tasche: Von Allergien bis Zahnschmerzen finden Sie für Anliegen aller Art den richtigen Stein. Das handliche Büchlein bietet die Essenz der modernen Steinheilkunde.",
    url: "https://heilstein-shop.com/bakery/die-heilsteine-taschenapotheke-60/",
  },
  {
    title: "Die Steinheilkunde – das Handbuch",
    price: "sFr 45,00",
    img: "https://heilstein-shop.com/media/bakery/images/item61/Die-Steinheilkunde.png",
    text: "Das massgebliche, umfassende Handbuch zur Steinheilkunde als eigenständige naturheilkundliche Methode: Grundlagen und ausführliche Beschreibungen von mehr als einhundert gut erforschten Heilsteinen. Vom Autor von letzter Hand durchgesehen.",
    url: "https://heilstein-shop.com/bakery/die-steinheilkunde-das-handbuch-61/",
  },
  {
    title: "Heilsteine – 555 Steine von A–Z",
    price: "sFr 13,00",
    img: "https://heilstein-shop.com/media/bakery/images/item44/Heilsteine-555-Stein-von-a-z.png",
    text: "Die wichtigsten Informationen zu 555 Heilsteinen: knapp und übersichtlich und doch sorgfältig und genau wird jeder Stein in Wort und Bild dargestellt. Ein umfassendes Verzeichnis aktueller Heilsteine.",
    url: "https://heilstein-shop.com/bakery/heilsteine-555-steine-von-a-z-michael-gienger-44/",
  },
];

export default function GiengerBooks() {
  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Bücher"
            title="Bücher von Michael Gienger"
            subtitle="Sein Wissen lebt in seinen Büchern weiter — erhältlich im Heilstein-Shop."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BOOKS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex h-56 items-center justify-center rounded-2xl bg-quartz p-4">
                  <img
                    src={b.img}
                    alt={`${b.title} — Michael Gienger`}
                    loading="lazy"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">Michael Gienger</span>
                  <span className="ml-auto rounded-full bg-citrine/15 px-3 py-1 text-xs font-semibold text-citrine-deep">
                    {b.price}
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-amethyst">{b.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-amethyst transition hover:bg-muted"
                >
                  Im Shop ansehen <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}