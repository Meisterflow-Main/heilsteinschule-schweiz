import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Compass, Mountain } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { Image } from "@/components/ui/image";
import OptimizedImage from "@/components/site/OptimizedImage";

const ACTIVITIES = [
  {
    icon: BookOpen,
    label: "Im Unterricht",
    text: "Ruth Rios und Bruno Vogler Pfeiffer lehren mit Kopf, Hand, Fuss und Herz — analytisches Wissen und praktische Anwendung in Asp, Wallbach und Bern.",
    img: "https://heilsteinschule.swiss/media/Ruth_Bruno_Aug_25_2.jpg",
    hd: false,
  },
  {
    icon: Compass,
    label: "Geologische Exkursionen",
    text: "Jura, Zentralalpen, Vogesen und mehr — wir erleben die Steine in der Natur und erfahren ihre Herkunft unmittelbar.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/718ef1e15_WhatsAppImage2026-09-22at02053610.jpeg",
    hd: true,
  },
  {
    icon: Mountain,
    label: "Alpenseminar",
    text: "Fünf Tage Hochalpen-Exkursion als praktischer Ausbildungsteil — vom Dozenten-Team begleitet, von der Rosenlaui-Gletscherschlucht bis zum Oberalppass.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/ffaf18a07_WhatsAppImage2026-09-23at105952.jpeg",
    hd: true,
  },
];

export default function LearningActivities() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Schule & Lernen"
          title="Lernen bei uns — Schule, Menschen & Naturerlebnis"
          subtitle="Unterricht, geologische Exkursionen und das Alpenseminar: bei uns wird Heilsteinkraft mit Kopf, Hand, Fuss und Herz erfahren."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {ACTIVITIES.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.1}>
            <Link
              to="/ausbildung#exkursionen"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {a.hd ? (
                  <Image
                    src={a.img}
                    alt={a.label}
                    className="h-full w-full transition duration-700 group-hover:scale-105"
                    fittingType="fill"
                  />
                ) : (
                  <OptimizedImage
                    src={a.img}
                    alt={a.label}
                    width={800}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-amethyst-deep/75 via-amethyst-deep/10 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2.5 text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-citrine text-amethyst-deep">
                    <a.icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{a.label}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-citrine-deep">
                  Mehr erfahren <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}