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
    rolle: "Hauptsitz · Heilsteinshop · Praxis · Info-Nachmittag",
    tage: "Klasse Asp 8: Do, 09:00–17:00, 2× monatlich",
    leitung: "Ruth Rios",
    hinweis: "Hauptsitz der Heilsteinschule mit Heilsteinshop und Praxis. Info-Nachmittage finden hier statt. Parkplätze beim Haus vorhanden.",
  },
  {
    name: "Wallbach AG — Grundausbildung",
    ort: "Rheinstrasse 29, 4323 Wallbach AG",
    img: "https://heilsteinschule.swiss/media/wunderblock/wallbach-ag.jpg",
    rolle: "Grundausbildung · Klassengrösse min. 5, max. 8 Personen",
    tage: "Do 09–17h (2×/Monat), Sa/So 1×/Monat",
    leitung: "Ruth Rios",
    hinweis: "Standard-Standort für die Grundausbildung — keine Seminare. Parkplätze beim Haus vorhanden.",
    lat: 47.5583689,
    lng: 7.9050883,
  },
  {
    name: "Bern — Grundausbildung & Info",
    ort: "Kapellenstrasse 5 (4. Stock), 3011 Bern",
    img: "https://heilsteinschule.swiss/media/wunderblock/svnh-gebaeude.jpg",
    rolle: "Grundausbildung & Info-Nachmittag · Klassengrösse min. 5, max. 8 Personen",
    tage: "Wochenende, 09:00–17:00 Uhr, 1× monatlich",
    leitung: "Ruth Rios",
    hinweis: "Im selben Gebäude wie SVNH · 5 Min. ab HB",
    weg: "ÖV: Vom Hauptbahnhof Bern ca. 5 Min. zu Fuss — Richtung Süden zum Hirschengraben, weiter auf die Monbijoustrasse, dann rechts in die Kapellenstrasse. Hausnummer 5 links. Auto: Nur blaue Zone (1 Std.) und City West Parking. Keine eigenen Parkplätze.",
  },
];

export default function Schulorte({ withHeading = true }) {
  return (
    <div>
      {withHeading && (
        <Reveal>
          <SectionHeading
            eyebrow="Schulorte"
            title="Asp · Wallbach · Bern"
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
                <div className="absolute inset-0 bg-gradient-to-t from-amethyst/60 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-heading text-xl font-semibold text-white">
                  {s.name}
                </h3>
              </div>
              <div className="p-6">
                {s.rolle && (
                  <div className="mb-3 inline-flex rounded-full bg-citrine/10 px-3 py-1 text-xs font-medium text-citrine-deep">
                    {s.rolle}
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
                {s.lat && s.lng && (
                  <a
                    href={`https://www.google.com/maps?q=${s.lat},${s.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-citrine-deep hover:underline"
                  >
                    <MapPin className="h-3.5 w-3.5" /> Auf Karte ansehen
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
            <Link to="/alpenseminar-2025" className="ml-1 text-citrine-deep underline underline-offset-2 hover:text-citrine">
              Mehr erfahren
            </Link>.
          </span>
        </div>
      </Reveal>
    </div>
  );
}