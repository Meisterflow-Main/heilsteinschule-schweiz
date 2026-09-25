import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const SECTIONS = [
  {
    t: "1. Prinzip und Anwendungsbereich",
    c: "Um unsere Websites und die damit verbundenen Online-Dienstleistungen oder Online-Anwendungen (zusammenfassend Services genannt) nutzen zu können, verarbeiten wir Ihre personenbezogenen Daten. Personenbezogene Daten beziehen sich auf Informationen, die sich auf eine bestimmte oder bestimmbare natürliche Person beziehen. Bestimmte Kategorien von besonders sensiblen personenbezogenen Daten, wie beispielsweise Gesundheitsdaten, werden durch spezielle gesetzliche Bestimmungen besonders geschützt. Unter dem Begriff Bearbeitung fallen sämtliche Vorgänge im Zusammenhang mit Ihren Daten, einschliesslich Erhebung, Speicherung, Nutzung, Weitergabe, Archivierung oder Löschung. Bei der Datenverarbeitung halten wir uns an das Bundesgesetz über den Datenschutz (DSG), die entsprechende Durchführungsverordnung (DSGV) sowie an andere geltende Datenschutzgesetze (z. B. die Europäische Datenschutz-Grundverordnung, DSGVO), sofern diese anwendbar sind. Unsere Mitarbeiter werden regelmässig in Datenschutzfragen geschult und unterliegen der Geheimhaltungspflicht.",
  },
  {
    t: "2. Verantwortliche Stellen und Kontakt",
    c: "Verantwortlich für die in dieser Datenschutzerklärung beschriebene Verarbeitung ist: Heilsteinschule Schweiz, Heilsteinshop-Asp, Bruno Vogler Pfeiffer, Dorfstrasse 22, 5025 Asp. Bei Fragen und Anliegen rund um die Verarbeitung Ihrer Daten sowie Ihrer datenschutztechnischen Rechte uns gegenüber wenden Sie sich bitte an: Heilsteinschule Schweiz, Heilsteinshop-Asp, Bruno Vogler Pfeiffer, Dorfstrasse 22, 5025 Asp, E-Mail: anfragen(at)heilsteinschule(dot)ch.",
  },
  {
    t: "3. Bearbeitete Daten",
    c: "Wir legen grossen Wert auf den Schutz Ihrer personenbezogenen Daten. Bei der Nutzung unserer Webseite und Services verarbeiten wir in erster Linie die für die Nutzung notwendigen Daten, die Sie an uns übermitteln sowie die von uns direkt erhobenen Informationen. Im Zuge der Nutzung erfassen wir Metadaten, wie zum Beispiel Informationen zu Ihrem Browser (Typ und Version), Ihrem Gerätetyp und Ihrer IP-Adresse. Des Weiteren erheben wir Zugriffsdaten (Protokolldaten) mit Name der aufgerufenen Website, Datum und Uhrzeit des Zugriffs, übertragene Datenmenge und Angaben zur zuletzt besuchten Website. Weitere Daten zu Ihrer Person speichern und verarbeiten wir nur, wenn Sie diese im Zuge von Services und Tools (z.B. Kontaktformular) an uns übermitteln.",
  },
  {
    t: "4. Zweck",
    c: "Wir verarbeiten Ihre Daten ausschliesslich für die Zwecke, die wir Ihnen bei der Erhebung mitgeteilt haben, sowie für andere mit diesen Zielen vereinbarte Zwecke.",
  },
  {
    t: "5. Verarbeitung der Daten",
    c: "Wir verarbeiten Ihre Daten für verschiedene Zwecke im Zusammenhang mit der Kommunikation mit Ihnen. Dies umfasst insbesondere die Bearbeitung von Anfragen, die Geltendmachung Ihrer Rechte und die Kontaktaufnahme bei Rückfragen. Dabei nutzen wir vor allem Kommunikationsdaten und Stammdaten sowie Registrierungsdaten. Diese Daten können für Dokumentationszwecke, Schulungen, Qualitätssicherung und Nachfragen gespeichert werden. Des Weiteren verarbeiten wir Daten für Marketingzwecke und zur Pflege der Kundenbeziehung. Sie haben jederzeit die Möglichkeit, solche Kontakte abzulehnen oder Ihre Einwilligung zu widerrufen.",
  },
  {
    t: "6. Logfiles",
    c: "Wir nutzen hauptsächlich Daten zur Erstellung von Server-Logfiles, um statistische Auswertungen für den Betrieb der Webseite durchzuführen, die Sicherheit der IT-Systeme zu gewährleisten und die Webseite zu optimieren. Hierbei verwenden wir vorrangig Protokolldaten. Die rechtliche Grundlage ist unser berechtigtes Interesse, Ihnen jederzeit eine sichere und reibungslose Nutzungserfahrung zu bieten.",
  },
  {
    t: "7. Daten Erhebung",
    c: "7.1 Kontaktformular: Wenn Sie uns über das Kontaktformular kontaktieren, erfassen wir Ihre Kontaktdaten, um Ihre Anfrage zu bearbeiten und eventuelle Nachfragen zu beantworten. Die Übermittlung erfolgt in verschlüsselter Form. 7.2 Termine online buchen: Wir können Services anbieten, bei denen die Angabe von Personendaten obligatorisch ist, z.B. die Online-Vereinbarung von Beratungsterminen. 7.3 Formulare und Umfragen: Wir können Formulare nutzen, dessen Daten bei Drittanbietern gespeichert werden (z.B. Restly/Airtable/DocsAutomator).",
  },
  {
    t: "8. Cookie Präferenzen",
    c: "Wir stellen Ihnen die Möglichkeit zur Verfügung, die Verwendung von Cookies auf unserer Webseite anzupassen oder Ihre Zustimmung zu widerrufen. Zudem besteht bei den meisten Browsern die Möglichkeit, sich beim Setzen von Cookies warnen zu lassen oder Cookies komplett zu verbieten. Unsere Webseite kann Inhalte Dritter einbinden, beispielsweise Karten, Schriften oder Videos. Daraus ergibt sich, dass Ihre IP-Adresse diesen Anbietern kommuniziert wird.",
  },
];

export default function Datenschutz() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading center={false} eyebrow="DSGVO / revDSG" title="Datenschutzrichtlinien" />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 space-y-4">
          {SECTIONS.map((s, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-white p-5 shadow-soft">
              <summary className="flex cursor-pointer items-center justify-between font-heading text-base font-semibold text-amethyst">
                {s.t}
                <span className="text-citrine-deep transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.c}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}