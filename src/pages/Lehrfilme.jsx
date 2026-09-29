import React from "react";
import { Play, Film } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const FILME = [
  {
    title: "Steine und Düfte — Die Kraft der Natur in der psychischen Gesundheit",
    date: "Mai 2024",
    text: "Werner Kühni und Julia Barthelmes über die transformative Wirkung von Heilsteinen und Ätherischen Ölen auf mentale Gesundheitszustände wie Depressionen, Burnout, Hormonprobleme und Stimmungsschwankungen.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/6b628a3bb_ChatGPTImageSep29202610_09_59PM.png",
    href: "https://qs24.tv/",
  },
  {
    title: "Kolloidales Silber — Film vom 07. Juni 2024",
    date: "Juni 2024",
    text: "Natürliche Alternativen — Kolloidales Silber und Borax als wirksame Heilmittel mit Werner Kühni und Manuel Litschi.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/215017265_ChatGPTImageSep30202601_52_21AM.png",
    href: "https://heilstein-shop.com/koll_silber/",
  },
  {
    title: "Kolloidales Silber — Film vom 11. Juli 2019",
    date: "Juli 2019",
    text: "Kolloidales Silber selber herstellen. Natürliche Alternativen und wirksame Heilmittel.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/58f24b979_ChatGPTImageSep29202610_14_46PM.png",
    href: "https://heilstein-shop.com/koll_silber/",
  },
  {
    title: "Energiesteine reinigen und aufladen",
    date: "2021",
    text: "Viele Steine haben besondere Eigenschaften. Es gibt Edelsteine, die andere reinieren können und die selbst Energie aufnehmen. Effektive und unnötige Methoden.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/cba69f5b4_ChatGPTImageSep29202610_16_52PM.png",
    href: "https://qs24.tv/",
  },
  {
    title: "Ein Stein als Herzöffner — Zermatt",
    date: "Sonderbeitrag",
    text: "Zermatt begeistert durch die Vielfalt der Gesteine. Das Kronjuwel der Schweiz ist der wunderschöne Allalin Gabbro — wirkt besonders als Herzöffner.",
    img: "https://heilsteinschule.swiss/media/.news_img/irene_marty_1.jpg",
    href: "https://heilstein-shop.com/bakery/allalin-gabbro-ts-10/?searchresult=1&sstring=Allalin+Gabbro#wbce_14",
  },
  {
    title: "Persönlicher Entwicklungsprozess — Ruth und ihre Lieblingssteine",
    date: "Porträt",
    text: "Ruth Rios ist Heilsteinberaterin und Schöpferin der Kreation diopteia. Seit über 30 Jahren begleitet sie Menschen in ihren persönlichen Entwicklungsprozessen.",
    img: "https://heilsteinschule.swiss/media/.news_img/zertifizierung_lehrgang_asp6_39.jpg",
    href: "https://heilsteinschule.swiss/topics/ruth-rios/",
  },
  {
    title: "Wirkung: Halit mit Baryt",
    date: "Sonderbeitrag",
    text: "Bruno Vogler Pfeiffer und Joe Schnarwiler haben gemeinsam ein Oktaeder entwickelt. Besonders die Wirkung von Halit mit Baryt kann die Energie im Raum deutlich verändern.",
    img: "https://heilsteinschule.swiss/media/.news_img/wallbach_innen.jpeg",
    href: "https://qs24.tv/",
  },
];

export default function Lehrfilme() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/teasers-pictures/kuehni4.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Film className="h-3.5 w-3.5" /> Back to School
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Lehrfilme</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Unsere Weiterbildungs-Videos ausgestrahlt auf{" "}
              <a href="https://qs24.tv/" target="_blank" rel="noopener noreferrer" className="font-semibold text-citrine-light underline">
                QS24.TV
              </a>{" "}
              — Schweizer Gesundheitsfernsehen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Wissensfilme" title="Die Kraft der Natur verstehen" subtitle="Vertiefen Sie Ihr Wissen über Heilsteine, ätherische Öle und deren Anwendung." />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {FILME.map((f, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <a
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift sm:flex-row"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted sm:aspect-square sm:w-40 sm:shrink-0">
                  <img src={f.img} alt={f.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-amethyst/30 opacity-0 transition group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-amethyst">
                      <Play className="h-5 w-5" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-citrine-deep">{f.date}</span>
                  <h3 className="mt-1.5 font-heading text-base font-semibold leading-snug text-amethyst">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep">
                    Film ansehen <Play className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}