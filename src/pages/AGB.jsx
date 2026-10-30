import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const SECTIONS = [
  {
    n: "1.",
    t: "Allgemeines",
    p: [
      "Für die Geschäftsbeziehung zwischen dem Kunden und Heilsteinschule Schweiz (nachstehend auch Veranstalter genannt) gelten diese Allgemeinen Geschäftsbedingungen.",
    ],
  },
  {
    n: "2.",
    t: "Vertragsabschluss",
    p: [
      "Der Vertrag zwischen dem Kunden und der Heilsteinschule kommt durch die Anmeldung des Kunden und dessen Bestätigung durch die Schule zustande. Der Auftrag des Kunden erfolgt schriftlich, per E-Mail oder online durch Ausfüllen des im Internet durch den Veranstalter bereitgestellten Anmeldeformulars. Die Schule nimmt den Auftrag an durch Zusenden einer Bestätigung per E-Mail und der Rechnung für eine mögliche Anmeldegebühr. Mit der Zahlung der Anmeldegebühr anerkennt der Kunde die vorliegenden allgemeinen Geschäftsbedingungen (AGB).",
    ],
  },
  {
    n: "3.",
    t: "Veranstaltungen, Seminare und Ausbildungen",
    p: [],
  },
  {
    n: "3.1",
    t: "Anmeldung",
    p: [
      "Für Veranstaltungen, Seminare und Ausbildungen ist eine Anmeldung erforderlich. Diese ist verbindlich. Die Anmeldungen werden in der Reihenfolge ihres Eingangs berücksichtigt. Die Heilsteinschule kann eine Anmeldegebühr verlangen. Diese wird jeweils in den Ausschreibungsunterlagen vereinbart.",
      "Die Teilnahme an einem Ausbildungslehrgang wird zusätzlich zur schriftlichen Anmelde-Bestätigung vertraglich geregelt.",
    ],
  },
  {
    n: "3.2",
    t: "Bezahlung",
    p: [
      "Nach Eingang der Anmeldung erhält der Kunde eine Anmeldebestätigung zusammen mit der Rechnung für die Seminar- oder Ausbildungskosten. Diese müssen bis spätestens 30 Tage vor Beginn der Veranstaltung oder dem Schulbeginn überwiesen werden. In den jeweiligen Ausschreibungsunterlagen können anderweitige Zahlungsbedingungen vereinbart werden.",
    ],
  },
  {
    n: "3.3",
    t: "Annullation",
    p: [
      "Bei Abmeldung bis 30 Tage vor Veranstaltungsbeginn werden keine Stornierungsgebühren erhoben. Bei Abmeldung von 29 bis 14 Tagen vor Veranstaltungsbeginn werden 50% der Seminar- oder Ausbildungskosten in Rechnung gestellt. Bei späterem Rücktritt oder Nichterscheinen wird die volle Seminargebühr in Rechnung gestellt. Es ist möglich, die Anmeldung auf eine Ersatzperson zu übertragen.",
    ],
  },
  {
    n: "3.4",
    t: "Fernbleiben / Verschiebung von Schultagen / Diverses",
    p: [
      "Forderungen auf Rückerstattungen sind bei Fernbleiben vom vereinbarten Angebot ausgeschlossen.",
      "Schule: Eine Verschiebung von 2 Schultagen ist möglich und kostenlos. Alle weiteren Verschiebungen kosten CHF 30.00 pro Schultag, also CHF 60.00 pro Schulwochenende. Bei längerem Schulunterbruch und Weiterführung wird der administrative Aufwand mit CHF 120.00 verrechnet.",
      "Nach Abschluss der Schule können auf Wunsch einzelne Schultage wiederholt werden. Kosten CHF 150.00 pro Tag. Ausnahme sind Tage welche als Weiterbildungsseminare angeboten werden.",
      "An Schultagen ist es Schülern nicht gestattet, mit eigenen Mineralien zu handeln.",
    ],
  },
  {
    n: "3.5",
    t: "Krankheit oder Unfall",
    p: [
      "Bei Krankheit oder Unfall mit Arztzeugnis können Seminare und Ausbildungen unterbrochen bzw. zu einem späteren Zeitpunkt nachgeholt werden. Es besteht kein Anspruch auf Rückerstattung der Seminar- oder Ausbildungskosten.",
    ],
  },
  {
    n: "3.6",
    t: "Absage durch den Veranstalter",
    p: [
      "Der Veranstalter behält sich vor, Veranstaltungen, Seminare oder Ausbildungslehrgänge bei ungenügender Teilnehmerzahl abzusagen oder zu verschieben. In diesem Falle werden die Kosten zurückerstattet.",
    ],
  },
  {
    n: "3.7",
    t: "Ausschlusskriterien",
    p: [
      "Veranstaltungen, Seminare und Ausbildungen an der Heilsteinschule sind keine Therapien und auch kein Ersatz für eine medizinische Behandlung oder Therapie. Voraussetzung für eine Teilnahme ist ein stabiler psychischer und physischer Zustand.",
      "Wer sich in einer Therapie befindet, muss unter Einbezug aller Beteiligten abklären, ob eine Teilnahme in dieser Lebensphase sinnvoll ist. Wer drogenabhängig ist, muss auf eine Teilnahme verzichten. Bei Einnahme von Psychopharmaka muss die Situation mit der Lehrperson besprochen werden.",
      "Unwahre Angaben oder Verheimlichung obgenannter Tatsachen führen zum Ausschluss aus Veranstaltung, Seminar oder Ausbildung, ohne Rückerstattung der Kosten.",
    ],
  },
  {
    n: "3.8",
    t: "Haftungsausschluss",
    p: [
      "Für die Ergebnisse allfälliger Behandlungen sowie für Hinweise und Ratschläge, die den Teilnehmenden während einer Veranstaltung, eines Seminars oder einer Ausbildung gegeben werden, kann keine Garantie übernommen werden. Es liegt voll in der Verantwortung der Teilnehmenden, wie sie mit Erlebnissen, Hinweisen und Ratschlägen umgehen. Sämtliche Versicherungen (Krankheit, Unfall, Haftpflicht, Annullation) sind Sache der Teilnehmenden.",
    ],
  },
  {
    n: "3.9",
    t: "Garantien und Heilversprechen",
    p: [
      "Wir sind verpflichtet, darauf hinzuweisen, dass die Wirkung der angewendeten Mittel und Verfahren weder wissenschaftlich nachweisbar noch medizinisch anerkannt sind. Der Einsatz dieser Mittel und Verfahren ersetzt auf keinen Fall ärztlichen Rat oder ärztliche Hilfe.",
    ],
  },
  {
    n: "4.",
    t: "Inhalt des Online-Angebotes",
    p: [
      "Der Veranstalter übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.",
      "Haftungsansprüche gegen den Verkäufer wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden seitens des Veranstalters vorliegt.",
      "Alle Angebote sind freibleibend und unverbindlich. Der Veranstalter behält es sich ausdrücklich vor, Teile der Seiten der Website oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.",
    ],
  },
  {
    n: "5.",
    t: "Verweise und Links",
    p: [
      "Direkte und indirekte Verweise (Hyperlinks) auf fremde Webseiten liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.",
      "Der Veranstalter erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Verkäufer keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten / verknüpften Seiten, die nach der Linksetzung verändert wurden.",
      "Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind.",
      "Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.",
    ],
  },
  {
    n: "6.",
    t: "Urheberrechte",
    p: [
      "Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören dem Veranstalter oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.",
      "Der Veranstalter ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.",
      "Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der blossen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind!",
    ],
  },
  {
    n: "7.",
    t: "Verletzung von Rechten Dritter",
    p: [
      "Sollte der Inhalt oder die Aufmachung dieser Seiten Rechte Dritter oder gesetzliche Bestimmungen verletzen, bitten wir um eine entsprechende Nachricht. Wir garantieren hiermit, dass zu Recht beanstandete Passagen unverzüglich entfernt werden, ohne dass die Einschaltung eines Rechtsbeistandes erforderlich ist. Es gilt das Prinzip der Schadensminimierung.",
    ],
  },
  {
    n: "8.",
    t: "Gerichtsstand",
    p: ["Gerichtsstand und Erfüllungsort ist Aarau."],
  },
  {
    n: "9.",
    t: "Schlussbestimmungen",
    p: [
      "Sollten eine oder mehrere Regelungen dieser AGB unwirksam sein, so zieht dies nicht die Unwirksamkeit der gesamten AGB nach sich. Unwirksame Regelungen werden durch einschlägige gesetzliche Regelungen ersetzt.",
    ],
  },
];

export default function AGB() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading
          center={false}
          eyebrow="Verbindliche Grundlagen"
          title="Allgemeine Geschäftsbedingungen (AGB)"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-10">
          <div className="space-y-8">
            {SECTIONS.map((s) => {
              const isMain = /^\d+\.$/.test(s.n);
              return (
                <div key={s.n} id={`agb-${s.n.replace(".", "-")}`} className="scroll-mt-28">
                  <h2
                    className={`font-heading font-semibold text-amethyst ${
                      isMain ? "text-lg sm:text-xl" : "text-base"
                    }`}
                  >
                    <span className="mr-2 text-citrine-deep">{s.n}</span>
                    {s.t}
                  </h2>
                  {s.p.length > 0 && (
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {s.p.map((par, i) => (
                        <p key={i}>{par}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-foreground/80">
            <p className="font-medium text-amethyst">5025 Asp, Januar 2023</p>
            <p className="mt-3">Heilsteinschule Schweiz</p>
            <p>Heilsteinshop-Asp</p>
            <p>Bruno Vogler Pfeiffer</p>
            <p>Dorfstrasse 22</p>
            <p>5025 Asp</p>
            <p>Tel. 079 389 66 22</p>
            <p>E-Mail info(at)heilsteinschule(dot)ch</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}