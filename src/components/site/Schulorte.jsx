import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, GraduationCap, Mountain, ExternalLink } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

export const STANDORTE = [
  {
    name: "Asp — Hauptsitz",
    ort: "Dorfstrasse 22, 5025 Asp",
    img: "https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg",
    rolle: "Hauptsitz · Heilsteinshop · Praxis · Info-Nachmittag/-Abend",
    tage: "Klasse Asp 8: Do, 09:00–17:00, 2× monatlich",
    leitung: "Ruth Rios",
    hinweis: "Hauptsitz der Heilsteinschule mit Heilsteinshop und Praxis. Info-Nachmittage/-Abende finden hier statt. Parkplätze beim Haus vorhanden.",
    mapsQuery: "Dorfstrasse 22, 5025 Asp",
  },
  {
    name: "Wallbach AG — Grundausbildung",
    ort: "Rheinstrasse 29, 4323 Wallbach AG",
    img: "https://heilsteinschule.swiss/media/wunderblock/wallbach-ag.jpg",
    rolle: "Grundausbildung · Klassengrösse min. 5, max. 8 Personen",
    tage: "Donnerstag 09:00–17:00 Uhr, 2× monatlich — oder Samstag/Sonntag 09:00–17:00 Uhr, 1× monatlich. Pro Klasse gilt eine dieser Varianten, nicht beide.",
    leitung: "Ruth Rios",
    hinweis: "Standard-Standort für die Grundausbildung. Parkplätze beim Haus vorhanden.",
    mapsQuery: "Rheinstrasse 29, 4323 Wallbach",
  },
  {
    name: "Münsingen — Grundausbildung & Info",
    ort: "Sägegasse 2 (2. Stock), 3110 Münsingen",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/f5d7917fb_20260908_134212.jpg",
    imgs: [
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/6c3a3e993_20260908_134227.jpg",
      "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/cea421d21_20261027_175231.jpg",
    ],
    rolle: "Grundausbildung & Info-Nachmittag/-Abend · Klassengrösse min. 5, max. 8 Personen",
    tage: "Wochenende, 09:00–17:00 Uhr, 1× monatlich",
    leitung: "Bluette Caruso",
    hinweis: "2 Min. ab Bahnhof Münsingen · Parkplätze vor dem Haus",
    weg: "ÖV: Vom Bahnhof Münsingen ca. 2 Min. zu Fuss. Auto: Parkplätze vor dem Haus vorhanden.",
    mapsQuery: "Sägegasse 2, 3110 Münsingen",
  },
];

export default function Schulorte({ withHeading = true }) {
  return (
    <div>
      {withHeading && (
        <Reveal>
          <SectionHeading
            eyebrow="Schulorte"
            title="Asp · Wallbach · Münsingen"
            subtitle="Drei Schulstandorte in der Schweiz — dazu das Alpenseminar in den Schweizer Alpen."
          />
        </Reveal>
      )}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {STANDORTE.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <div className="group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amethyst/75 via-amethyst/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-4 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <h3 className="font-heading text-xl font-semibold text-white">{s.name}</h3>
                  {s.rolle && (
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium leading-snug text-white ring-1 ring-white/30 backdrop-blur-sm">
                      {s.rolle}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                {s.imgs?.length > 0 && (
                  <div className="mb-4 flex gap-3">
                    {s.imgs.map((src, idx) => (
                      <div key={src} className="flex-1 overflow-hidden rounded-xl border border-border">
                        <img
                          src={src}
                          alt={`${s.name} — Ansicht ${idx + 1}`}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-start gap-2 text-sm text-foreground/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {s.ort}
                </div>
                <div className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {s.tage}
                </div>
                <div className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> Leitung: {s.leitung}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">{s.hinweis}</p>
                {s.weg && (
                  <div className="mt-3 rounded-lg bg-quartz p-3 text-xs leading-relaxed text-muted-foreground">
                    <strong className="text-amethyst">Wegbeschreibung:</strong> {s.weg}
                  </div>
                )}
                {s.mapsQuery && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-citrine/40 bg-citrine/10 px-3.5 py-2 text-xs font-semibold text-citrine-deep transition hover:bg-citrine/20"
                  >
                    <MapPin className="h-3.5 w-3.5" /> Auf Google Maps öffnen
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-citrine/30 bg-citrine/5 p-5 text-sm leading-relaxed text-foreground/80">
          <Mountain className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" />
          <span>
            <strong className="text-amethyst">Alpenseminar in den Schweizer Alpen:</strong>{" "}
            Das Alpenseminar ist ein obligatorischer praktischer Ausbildungsteil und findet
            in den Schweizer Alpen statt — nicht an den regulären Schulstandorten.
            <Link to="/geologische-reisen" className="ml-1 text-citrine-deep underline underline-offset-2 hover:text-citrine">
              Mehr erfahren
            </Link>.
          </span>
        </div>
      </Reveal>
    </div>
  );
}