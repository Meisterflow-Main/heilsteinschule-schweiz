import React from "react";
import { ExternalLink, Phone, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const SCHUELER = [
  {
    name: "Samantha Jung",
    practice: "Girasol - Natural Energy",
    logo: "https://heilsteinschule.swiss/media/wunderblock/logo-frei-wenigrand.webp",
    img: "https://heilsteinschule.swiss/media/ex_schueler/Samantha_Jung.jpeg",
    phone: "+41 78 600 62 01",
    web: "https://www.girasol-energy.ch",
    webLabel: "www.girasol-energy.ch",
    instagram: "https://www.instagram.com/girasol.natural.energy/",
    instagramLabel: "girasol.natural.energy",
    text: "Mein Name ist Samantha, geboren bin ich im Jahr 1989 und ich lebe mit meinem Lebenspartner und meinem Hund, ausserhalb von Amriswil in der schönen Ostschweiz. Steine begleiten mich schon seit meinen frühesten Kindstagen. Diese Faszination und Leidenschaft, hat mich bis heute nie losgelassen. Es ist völlig egal, ob es eine glitzernde Calcit-Brekzie auf dem Spazierweg ist, oder ob es klare Bergkristalle, Rauchquarze oder Fluorite von hoch oben in den Bergen sind. Alle haben auf mich eine fesselnde Anziehungskraft und ich sehe sie, als ein grosses Geschenk unserer Natur. Im Jahr 2023 wurde ein Traum von mir wahr, ich durfte mein Wissen über die Steinwelt noch weiter vertiefen und habe 2024 die Ausbildung in der analytischen Steinheilkunde nach Michael Gienger, abgeschlossen. Im Jahr 2025 kam noch der Abschluss zur diplomierten Stimmgabel, Klang- und Schwingungspraktikerin dazu. In den letzten Jahren habe ich mich intensiv mit den Themen Energiearbeit, Frequenzarbeit, Bewusstseinsentwicklung und der Verbindung von Körper, Geist und Seele beschäftigt. Ebenfalls verschiedene Weiterbildungen zu den Themen Quantenheilung, Energieheilen und Klang- und Frequenzarbeit abgeschlossen. Seither arbeite ich in meiner Praxisräumlichkeit mit den Schätzen der Natur, vorwiegend mit Heilsteinen und Stimmgabeln - in einer sanften Art von Klang- & Frequenztherapie.",
  },
  {
    name: "Nicole Tschumi",
    practice: "Nicole's Heilsteinreich",
    logo: "https://heilsteinschule.swiss/media/wunderblock/logo-nicoles-heilsteinreich.png",
    img: "https://heilsteinschule.swiss/media/ex_schueler/Nicole_Tschumi_Chur.jpeg",
    address: "Ringstrasse 35c, 7000 Chur",
    web: "https://www.nicoles-heilsteinreich.ch",
    webLabel: "www.nicoles-heilsteinreich.ch",
    text: "Mein Name ist Nicole Tschumi und ich wohne in Chur. Seit meiner Kindheit faszinieren mich Steine aller Art. Aus diesem Grund absolvierte ich im Jahr 2022 die Ausbildung zur diplomierten Heilstein-Therapeutin für Mensch & Tier. Um mein Wissen noch mehr zu vertiefen, absolvierte ich im Jahr 2024 erfolgreich den Lehrgang der Heilsteinschule Schweiz. Dies ist für mich eine grosse Bereicherung! Seit 2022 führe ich Nicole's Heilsteinreich, mit dem Ziel möglichst vielen Menschen Freude mit meinen handgefertigten, und aus echten Heilsteinen, hergestellten Schmuckstücken zu bereiten. In meinem Online-Shop präsentiere ich meine Produkte, grösstenteils in Form von Schmuck, aber auch als Steinschätze für Zuhause, als Gesundheitsprodukte oder als Handschmeichler. Ebenfalls biete ich Beratungen, Reparaturen & Workshops an. Seit dem 1. Dezember 2023 bin ich zu 100% selbständig. Es freut mich, wenn ich Kundinnen und Kunden mit meinen Produkten überzeugen kann, und sie langfristig qualitativ hochwertige Schmuckstücke tragen können. Auch Schmuckstücke auf persönliche Bedürfnisse oder Wünsche sind bei mir möglich. Es ist mir eine grosse Freude mein Wissen in die Kreationen meiner Schmuckstücke miteinfliessen zu lassen.",
  },
  {
    name: "Stephanie Keller",
    practice: "woelfinbalance.ch",
    logo: "https://heilsteinschule.swiss/media/wunderblock/woelfin-balance1.jpg",
    img: "https://heilsteinschule.swiss/media/ex_schueler/Woelfin_balance2.jpeg",
    phone: "+41 76 501 95 12",
    address: "Dorf 14, Altishofen",
    web: "https://woelfinbalance.ch",
    webLabel: "www.woelfinbalance.ch",
    text: "Die Heilsteine sind für mich weit mehr als nur wunderschöne Geschenke der Erde – sie sind Träger von Bewusstsein, Schwingung und Licht. Durch die Ausbildung in Analytischer Steinheilkunde nach Michael Gienger an der Heilsteinschule Schweiz bei Bruno Vogler-Pfeiffer und Ruth Rios durfte ich lernen, diese feinen Energien bewusst wahrzunehmen, zu verstehen und gezielt einzusetzen. Dieses Wissen hat meine Sicht auf das Leben und die tiefe Verbindung zwischen Mensch, Tier und Natur nachhaltig vertieft. Die Heilsteine begleiten mich täglich – sie erinnern mich daran, dass alles in und um uns in Schwingung ist. In meinem Herzensprojekt woelfinbalance.ch vereine ich meine Arbeit als Mensch-Hund-Coach mit der Steinheilkunde, Kinesiologie und Energiearbeit. So ist eine einzigartige Methode entstanden, die Mensch und Hund in ihrer Partnerschaft stärkt, Vertrauen vertieft und Harmonie in ihr gemeinsames Feld bringt. Darüber hinaus kreiere ich individuelle Heilsteinschmuckstücke für Mensch und Tier, die mithilfe der Kinesiologie zu meinen beliebten Kine-Heilstein-Kombinationen zusammengestellt werden. Jedes Stück entsteht in Achtsamkeit und trägt jene Energie, die der Träger braucht – als liebevoller Begleiter auf dem Weg zu innerer Balance, Bewusstsein und Verbundenheit.",
  },
];

export default function SchuelerBerichte() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/ex_schueler/Samantha_Jung.jpeg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Heart className="h-3.5 w-3.5" /> Hier feiern wir unsere Schüler
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Schüler-Berichte</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Es ist Brunos grösste Freude, dass die Steinheilkunde durch euch weiterlebt, sich entwickelt
              und zum Wohle für Alle wird.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Schüler-Karten */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="space-y-12">
          {SCHUELER.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
                <div className="grid gap-0 lg:grid-cols-[300px_1fr]">
                  <div className="relative aspect-square overflow-hidden bg-muted lg:aspect-auto">
                    <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      {s.logo && (
                        <img src={s.logo} alt={s.practice} className="h-12 w-12 rounded-lg object-contain" />
                      )}
                      <div>
                        <h2 className="font-heading text-xl font-bold text-amethyst">{s.name}</h2>
                        <p className="text-sm font-medium text-citrine-deep">{s.practice}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {s.web && (
                        <a
                          href={s.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-amethyst px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amethyst-deep"
                        >
                          <ExternalLink className="h-4 w-4" /> {s.webLabel}
                        </a>
                      )}
                      {s.instagram && (
                        <a
                          href={s.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-citrine px-5 py-2.5 text-sm font-semibold text-citrine-deep transition hover:bg-citrine/10"
                        >
                          Instagram: {s.instagramLabel}
                        </a>
                      )}
                      {s.phone && (
                        <a
                          href={`tel:${s.phone.replace(/\s/g, "")}`}
                          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground/80 transition hover:border-citrine"
                        >
                          <Phone className="h-4 w-4" /> {s.phone}
                        </a>
                      )}
                    </div>
                    {s.address && (
                      <p className="mt-4 text-xs text-muted-foreground">{s.address}</p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-amethyst sm:text-3xl">
              Auch Sie möchten Ihr Wissen weitergeben?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Werden Sie Teil der Heilsteinschule Schweiz und beginnen Sie Ihre Ausbildung zur
              Heilsteinberaterin oder zum Heilsteinberater.
            </p>
            <Link
              to="/ausbildung"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-3.5 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
            >
              Ausbildung entdecken <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}