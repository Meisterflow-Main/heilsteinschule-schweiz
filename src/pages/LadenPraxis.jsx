import React from "react";
import { Clock, MapPin, Phone, Gem, ShieldCheck } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import ContactForm from "@/components/site/ContactForm";

const KATEGORIEN = [
  { name: "Armbänder", img: "https://heilsteinschule.swiss/media/Laden/armbaender/Armbaender006.jpg" },
  { name: "Heilsteine Auswahl", img: "https://heilsteinschule.swiss/media/Laden/20240226_102525.jpg" },
];

const GALERIE = [
  { img: "https://heilsteinschule.swiss/media/Laden/20240226_100437.jpg", alt: "Heilsteinshop Asp" },
  { img: "https://heilsteinschule.swiss/media/Laden/20240226_100059.jpg", alt: "Heilsteinshop Asp - Amethyst" },
  { img: "https://heilsteinschule.swiss/media/Laden/20240226_100121.jpg", alt: "Heilsteinshop Asp - Kristalle" },
  { img: "https://heilsteinschule.swiss/media/Laden/20240226_100013.jpg", alt: "Heilsteinshop Asp - Pyrit" },
  { img: "https://heilsteinschule.swiss/media/Laden/20240226_100246.jpg", alt: "Heilsteinshop Asp - Halit Salz" },
  { img: "https://heilsteinschule.swiss/media/Laden/20240226_100049.jpg", alt: "Heilsteinshop Asp - Kristalle Schweiz" },
  { img: "https://heilsteinschule.swiss/media/Laden/20240226_101052.jpg", alt: "Anhänger - Heilsteinshop Asp" },
  { img: "https://heilsteinschule.swiss/media/Laden/20240226_101124.jpg", alt: "Kunstwerke - Handarbeiten" },
];



export default function LadenPraxis() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-25">
          <img src="https://heilsteinschule.swiss/media/wunderblock/Kristalle_640x360.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Gem className="h-3.5 w-3.5" /> Heilsteinshop-Asp
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Laden & Praxis</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Verkaufsladen für Rohsteine, Trommelsteine, Anhänger, Armbänder, Halsketten und vieles mehr.
              Alle Steine sind GKS kontrolliert, durch einen Gemmologen geprüft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Öffnungszeiten + Info */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading center={false} eyebrow="Öffnungszeiten" title="Wann wir für Sie da sind" />
            <div className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <p className="flex items-center gap-2 font-medium text-amethyst">
                <Clock className="h-4 w-4 text-citrine-deep" /> Dreimal pro Monat geöffnet
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Der Heilsteinshop-Asp ist jeweils dreimal im Monat geöffnet. Die genauen Daten und Zeiten
                erfahren Sie auf Anfrage — gerne per Telefon oder E-Mail.
              </p>
            </div>
            <div className="mt-6 rounded-2xl bg-citrine/10 p-5 text-sm text-amethyst">
              Ausserhalb der Öffnungszeiten: bitte rufen Sie uns an oder schreiben Sie eine E-Mail.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+41793896622" className="inline-flex items-center justify-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white transition hover:bg-amethyst-deep">
                <Phone className="h-4 w-4" /> 079 389 66 22
              </a>
              <a
                href="https://heilstein-shop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-citrine px-6 py-3 text-sm font-semibold text-citrine-deep transition hover:bg-citrine/10"
              >
                Zum Online Shop
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img src="https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg" alt="Heilsteinshop Asp" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Wir führen ein grosses Sortiment und alle Steine sind <strong className="text-amethyst">GKS kontrolliert</strong>,
                durch einen Gemmologen geprüft. Wir führen Baryt als Strahlenschutz in verschiedensten Variationen
                und beraten Sie zu kolloidalem Silber, ätherischen Ölen und Steinanwendungen.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kategorien */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Sortiment" title="Im Laden findet Ihr Herz, was es begehrt" subtitle="Rohsteine, Trommelsteine, Anhänger, Armbänder, Halsketten, Strahlenschutz etc." />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KATEGORIEN.concat(GALERIE.slice(0, 2)).map((k, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={k.img} alt={k.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <p className="p-4 text-center font-heading text-sm font-semibold text-amethyst">{k.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Eindrücke" title="Ein Blick in unseren Laden" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {GALERIE.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group overflow-hidden rounded-xl border border-border bg-muted shadow-soft">
                <img src={g.img} alt={g.alt} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Beratung" title="Termin oder Beratung anfragen" subtitle="Wir beraten Sie gerne persönlich — im Laden in Asp oder ausserhalb der Öffnungszeiten per Telefon und E-Mail." />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
              <ContactForm defaultDescription="Beratung / Termin im Heilsteinshop-Asp" idPrefix="laden" compact />
            </div>
          </Reveal>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-citrine-deep" /> Dorfstrasse 22, 5025 Asp
          </div>
        </div>
      </section>
    </>
  );
}