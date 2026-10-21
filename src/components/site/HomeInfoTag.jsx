import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, MapPin, Clock, Gift } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

export default function HomeInfoTag() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            center={false}
            eyebrow="Kostenlos & unverbindlich"
            title="Info-Nachmittag"
          />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Lernen Sie die Heilsteinschule Schweiz, das Dozententeam und die faszinierende Welt
            der Heilsteine kennen — ohne Verpflichtung. Der Info-Nachmittag findet in{" "}
            <strong className="text-amethyst">Asp</strong> und <strong className="text-amethyst">Münsingen</strong> statt.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" />
              <p className="text-sm text-muted-foreground">Kostenlos und völlig unverbindlich — einfach Schnuppern.</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" />
              <p className="text-sm text-muted-foreground">In Asp (Fricktal, AG) und Münsingen (Kapellenstrasse 5).</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" />
              <p className="text-sm text-muted-foreground">13:00–17:00 Uhr — ein Nachmittag voller Eindrücke.</p>
            </div>
          </div>
          <Link to="/info-nachmittag" className="mt-8 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light">
            <Calendar className="h-4 w-4" /> Zum Info-Nachmittag <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
            <img
              src="https://heilsteinschule.swiss/media/Info-Tag/Info-Tag.png"
              alt="Info-Nachmittag der Heilsteinschule Schweiz"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}