import React from "react";
import { Film, ExternalLink } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const FILME = [
  {
    title: "Steine und Düfte — Die Kraft der Natur in der psychischen Gesundheit",
    date: "Mai 2024",
    text: "Werner Kühni und Julia Barthelmes über die transformative Wirkung von Heilsteinen und Ätherischen Ölen auf mentale Gesundheitszustände wie Depressionen, Burnout, Hormonprobleme und Stimmungsschwankungen.",
    img: "https://heilsteinschule.swiss/media/Filme/Steine_und_Duefte_09-05-2024.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Steine_und_Duefte.mp4",
  },
  {
    title: "Kolloidales Silber — Film vom 07. Juni 2024",
    date: "Juni 2024",
    text: "Natürliche Alternativen — Kolloidales Silber und Borax als wirksame Heilmittel mit Werner Kühni und Manuel Litschi.",
    img: "https://heilsteinschule.swiss/media/Filme/Silber.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Silber.m4v",
    shop: "https://heilstein-shop.com/koll_silber/",
  },
  {
    title: "Kolloidales Silber — Film vom 11. Juli 2019",
    date: "Juli 2019",
    text: "Kolloidales Silber selber herstellen. Natürliche Alternativen und wirksame Heilmittel.",
    img: "https://heilsteinschule.swiss/media/Filme/zhHkDcsauRg-HD.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Kolloidales_Silber_selber_herstellen.m4v",
    shop: "https://heilstein-shop.com/koll_silber/",
  },
  {
    title: "Energiesteine reinigen und aufladen",
    date: "2021",
    text: "Viele Steine haben besondere Eigenschaften. Es gibt Edelsteine, die andere reinigen können und die selbst Energie aufnehmen. Effektive und unnötige Methoden.",
    img: "https://heilsteinschule.swiss/media/Filme/Energie.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Energiesteine_reinigen_und_aufladen.mp4",
  },
  {
    title: "Ein Stein als Herzöffner — Zermatt",
    date: "Sonderbeitrag",
    text: "Zermatt begeistert durch die Vielfalt der Gesteine. Das Kronjuwel der Schweiz ist der wunderschöne Allalin Gabbro — wirkt besonders als Herzöffner.",
    img: "https://heilsteinschule.swiss/media/Filme/Zermatt.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Zermatt_Geologie.mp4",
    shop: "https://heilstein-shop.com/bakery/allalin-gabbro-ts-10/?searchresult=1&sstring=Allalin+Gabbro#wbce_14",
  },
  {
    title: "Persönlicher Entwicklungsprozess — Ruth und ihre Lieblingssteine",
    date: "Porträt",
    text: "Ruth Rios ist Heilsteinberaterin und Schöpferin der Kreation diopteia. Seit über 30 Jahren begleitet sie Menschen in ihren persönlichen Entwicklungsprozessen.",
    img: "https://heilsteinschule.swiss/media/Filme/Wirkung_Heilsteine.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Wirkung_Heilsteine.mp4",
  },
  {
    title: "Wirkung: Halit mit Baryt",
    date: "Sonderbeitrag",
    text: "Bruno Vogler Pfeiffer und Joe Schnarwiler haben gemeinsam ein Oktaeder entwickelt. Besonders die Wirkung von Halit mit Baryt kann die Energie im Raum deutlich verändern.",
    img: "https://heilsteinschule.swiss/media/Filme/Schutzsteine_Halit_Baryt.jpg",
    src: "https://heilsteinschule.swiss/media/Filme/Schutzsteine_Halit_Baryt.mp4",
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
        <div className="mt-12 space-y-10">
          {FILME.map((f, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-lift">
                <div className="aspect-video w-full overflow-hidden bg-black">
                  <video
                    controls
                    preload="none"
                    poster={f.img}
                    className="h-full w-full object-cover"
                  >
                    <source src={f.src} type="video/mp4" />
                  </video>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-citrine-deep">{f.date}</span>
                  <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug text-amethyst">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  {f.shop && (
                    <a
                      href={f.shop}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep underline underline-offset-2 hover:text-citrine"
                    >
                      <ExternalLink className="h-4 w-4" /> Zum Online Shop
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}