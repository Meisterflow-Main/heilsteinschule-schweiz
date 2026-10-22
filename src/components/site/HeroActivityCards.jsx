import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Compass, Mountain } from "lucide-react";
import { Image } from "@/components/ui/image";
import OptimizedImage from "@/components/site/OptimizedImage";

const ACTIVITIES = [
  {
    icon: BookOpen,
    label: "Im Unterricht",
    text: "Ruth Rios und Bruno Vogler Pfeiffer lehren mit Kopf, Hand, Fuss und Herz — analytisches Wissen und praktische Anwendung in Asp, Wallbach und Münsingen.",
    img: "https://heilsteinschule.swiss/media/Ruth_Bruno_Aug_25_2.jpg",
    hd: false,
    to: "/ausbildung",
  },
  {
    icon: Compass,
    label: "Juratag im Fricktal",
    text: "Jura, Zentralalpen, Vogesen und mehr — wir erleben die Steine in der Natur und erfahren ihre Herkunft unmittelbar.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/718ef1e15_WhatsAppImage2026-09-22at02053610.jpeg",
    hd: true,
    to: "/ausbildung#exkursionen",
  },
  {
    icon: Mountain,
    label: "Alpenseminar",
    text: "Fünf Tage Hochalpen-Exkursion als praktischer Ausbildungsteil — vom Dozenten-Team begleitet, von der Rosenlaui-Gletscherschlucht bis zum Oberalppass.",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/ffaf18a07_WhatsAppImage2026-09-23at105952.jpeg",
    hd: true,
    to: "/ausbildung#exkursionen",
  },
];

export default function HeroActivityCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-2 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {ACTIVITIES.map((a) => (
          <Link
            key={a.label}
            to={a.to}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
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
              <div className="absolute bottom-3 left-4 flex items-center gap-2.5 text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-citrine text-amethyst-deep">
                  <a.icon className="h-4 w-4" />
                </span>
                <h3 className="font-heading text-base font-semibold">{a.label}</h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-citrine-deep">
                Mehr erfahren <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}