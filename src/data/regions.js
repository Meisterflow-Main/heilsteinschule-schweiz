// SEO-Landingpages für die Heilsteinschule Schweiz.
// Hauptleistung: Heilsteinberater Ausbildung (SVNH-zertifizierte Grundausbildung).
// Schulstandort Grundausbildung: Wallbach (alle nicht-Bern-Regionen) bzw. Bern (Bern-Raum).
// Asp bleibt Hauptsitz mit Heilsteinshop; die Grundausbildung findet ausser für Asp in Wallbach statt.

const PHONE = "+41 79 389 66 22";
const EMAIL = "anfragen@heilsteinschule.ch";

const WALLBACH_ADDRESS = "Rheinstrasse 29, 4323 Wallbach AG";

const KLASSENGROESSE = "Klassengrösse: min. 5, max. 8 Personen.";

const COSTS_ITEMS = [
  "CHF 4250.– inkl. Unterlagen und Zertifikat",
  "Zahlbar in 2 Raten (erste Rate 4 Wochen vor Kursbeginn)",
  "Anzahlung CHF 250.– zur Platzreservation",
  "Alpenseminar ca. CHF 490.– für Übernachtungen",
];

const OTHER_SERVICES = [
  { label: "Steinheilkunde-Anwendungen", to: "/laden-praxis" },
  { label: "Heilsteinberatung", to: "/kontakt" },
  { label: "Heilsteinshop Asp", to: "/laden-praxis" },
  { label: "Lehrfilme", to: "/lehrfilme" },
  { label: "News & Themen", to: "/news" },
];

export const REGIONS = [
  {
    slug: "asp",
    city: "Asp",
    region: "Fricktal, Aargau",
    metaTitle: "Heilsteinberater Ausbildung Asp | Heilsteinschule Schweiz",
    metaDescription: "SVNH-zertifizierte Heilsteinberater Ausbildung in Asp AG. Praxisnahe Steinheilkunde lernen – mit erfahrenem Dozententeam der Heilsteinschule Schweiz.",
    hero: {
      eyebrow: "Heilsteine in Asp",
      h1: "Heilsteinschule Schweiz in Asp – Hauptsitz mit Heilsteinshop und Praxis",
      description:
        "Asp ist der Hauptsitz der Heilsteinschule Schweiz: Hier finden Sie den Heilsteinshop, die Praxis und die Schulungsräume. Kostenlose Info-Nachmittage finden hier statt. Die Grundausbildung wird standardmässig in Wallbach und Bern durchgeführt – Asp ist der Ursprungsort, an dem die Schule 2011 gegründet wurde.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Über 250 ausgebildete Heilsteinberater" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Anerkannte Qualität in Steinheilkunde" },
      { icon: "Users", title: "Erfahrenes Team", description: "Dozenten mit Praxiserfahrung" },
      { icon: "Hand", title: "Praxisnah", description: "Lernen mit Kopf, Hand und Herz" },
    ],
    contact: {
      intro:
        "Der Hauptsitz in Asp ist zugleich Heilsteinshop und Praxis. Persönliche Beratung erhalten Sie nach Vereinbarung. Die Grundausbildung wird standardmässig in Wallbach und Bern durchgeführt.",
      address: "Dorfstrasse 22, 5025 Asp",
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "Asp ist der Hauptsitz der Heilsteinschule Schweiz mit Heilsteinshop, Praxis und Schulungsräumen. Hier finden kostenlose Info-Nachmittage statt. Die Grundausbildung wird standardmässig in Wallbach und Bern durchgeführt (die laufende Klasse Asp 8 bildet eine Ausnahme). Das Alpenseminar findet in den Schweizer Alpen statt. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "Die SVNH-zertifizierte Ausbildung dauert mindestens drei Vierteljahre und vermittelt Steinheilkunde fundiert und praxisnah. Asp ist der Hauptsitz der Schule; die Grundausbildung findet standardmässig in Wallbach und Bern statt. Schulungsunterlagen und Zertifizierung sind im Preis von CHF 4250 enthalten. Zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar",
          description:
            "Das Alpenseminar ist der praktische Ausbildungsteil und obligatorisch für das Schulzertifikat. Vier Übernachtungen mit Frühstück und Abendessen vertiefen das Erlernte in den Schweizer Alpen.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag Asp",
          description:
            "Kostenlos und unverbindlich: Am Info-Nachmittag in Asp lernen Sie die Schule, das Dozententeam und die Steinheilkunde kennen – ideal, bevor Sie sich für die Ausbildung entscheiden.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Asp ist der Ursprungsort der Heilsteinschule Schweiz. Hier begann 2011 alles, hier steht bis heute der Heilsteinshop mit Praxis und Schulungsräumen.",
      reasons: [
        { headline: "Gründungsort seit 2011", description: "Über 14 Jahre Ausbildungserfahrung im Fricktal." },
        { headline: "Heilsteinshop vor Ort", description: "Laden und Praxis direkt an der Schule in Asp." },
        { headline: "Zentrale Lage im Aargau", description: "Gut erreichbar aus dem ganzen Fricktal." },
        { headline: "SVNH-zertifizierte Ausbildung", description: "Anerkannter Abschluss in Steinheilkunde." },
        { headline: "Persönliche Beratung", description: "Dozenten nehmen sich Zeit für jede Frage." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Die Ausbildungskosten in Asp betragen CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in zwei Raten. Schüler erhalten im Heilsteinshop Asp 20% Rabatt.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Über 250 Personen haben die Heilsteinschule Schweiz in Asp absolviert. Ihre Erfahrungen zeigen, wie praxisnah und herzig die Ausbildung ist.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung in Asp?", a: "Die SVNH-zertifizierte Grundausbildung in Asp kostet CHF 4250 inklusive Schulungsunterlagen und Zertifizierung. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung in Asp?", a: "Die Ausbildung in Asp erstreckt sich über mindestens drei Vierteljahre. Maximal zwei Fehltage sind erlaubt, ausgefallene Schultage lassen sich in einer Parallelklasse nachholen." },
      { q: "Kann ich mich online anmelden?", a: "Ja, die Anmeldung zur Heilsteinschule in Asp erfolgt online, schriftlich oder per E-Mail. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung verbindlich und Ihr Platz reserviert." },
      { q: "Brauche ich Vorkenntnisse für die Steinheilkunde?", a: "Neu im Fricktal starten Sie ohne Vorkenntnisse. Wichtig sind Freude an Steinen, Offenheit für die Natur und ein offenes Herz – alles Weitere vermitteln Ihnen die Dozenten in Asp." },
      { q: "Wo finden die Schultage in Asp statt?", a: "Die Schultage finden im Hauptsitz der Heilsteinschule in Asp statt, direkt mit Heilsteinshop und Praxis. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar in Asp inbegriffen?", a: "Das Alpenseminar ist obligatorisch für das Zertifikat, jedoch nicht im Ausbildungsbetrag enthalten. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Von Asp aus erreichen Sie die ganze Region Fricktal in kurzer Zeit. Unser Einzugsgebiet umfasst Orte im Aargau und darüber hinaus.",
      places: ["Asp", "Möhlin", "Stein", "Mumpf", "Obermumpf", "Wallbach", "Bad Zurzach", "Frick", "Rheinfelden", "Laufenburg"],
    },
    finalCta: {
      title: "Bereit für die Steinheilkunde in Asp?",
      text: "Sichern Sie sich Ihren Platz an der Heilsteinschule Schweiz in Asp und starten Sie Ihre Ausbildung zum Heilsteinberater.",
      button: "Termin buchen",
    },
  },
  {
    slug: "wallbach",
    city: "Wallbach",
    region: "Fricktal, Aargau",
    metaTitle: "Heilsteinberater Ausbildung Wallbach | Heilsteinschule Schweiz",
    metaDescription: "Heilsteinberater Ausbildung in Wallbach AG: SVNH-zertifiziert, praxisnah und mit erfahrenem Dozententeam der Heilsteinschule Schweiz. Jetzt informieren.",
    hero: {
      eyebrow: "Heilsteine in Wallbach",
      h1: "Heilsteinberater Ausbildung in Wallbach – Steinheilkunde im Fricktal erleben",
      description:
        "In Wallbach verbindet die Heilsteinschule Schweiz fundierte Steinheilkunde mit persönlicher Atmosphäre. Die SVNH-zertifizierte Ausbildung zum Heilsteinberater verläuft praxisnah und ist ideal für Interessierte aus dem ganzen Fricktal.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Langjährige Erfahrung in Steinheilkunde" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Anerkannter Ausbildungszweig" },
      { icon: "Users", title: "Dozententeam", description: "Kleine Klassen mit 5 bis 8 Personen" },
      { icon: "Hand", title: "Praxisnah", description: "Steine direkt in die Hand nehmen" },
    ],
    contact: {
      intro:
        "Der Schulstandort Wallbach liegt an der Rheinstrasse 29 im Fricktal, im Kanton Aargau nahe der deutschen Grenze und des Rheins. Hier findet ausschliesslich die Grundausbildung statt – keine Seminare. Beratung und Anmeldung laufen über den Hauptsitz der Heilsteinschule Schweiz in Asp.",
      address: WALLBACH_ADDRESS,
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "Am Standort Wallbach führen wir ausschliesslich die Grundausbildung durch – keine Seminare. Eng abgestimmt mit dem Hauptsitz in Asp. Info-Nachmittage finden in Asp und Bern statt. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "In Wallbach erlernen Sie die Steinheilkunde in mindestens drei Vierteljahren. SVNH-zertifiziert, inklusive Unterlagen und Zertifikat zum Gesamtpreis von CHF 4250, zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar in den Bergen",
          description:
            "Das praktische Alpenseminar vertieft das Wissen aus Wallbach mit vier Übernachtungen in den Alpen. Es ist obligatorisch für das Schulzertifikat der Heilsteinschule.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag in Asp oder Bern",
          description:
            "Kostenlose Info-Nachmittage finden in Asp und Bern statt – ideal, um vor der Anmeldung die Schule, das Dozententeam und die Steinheilkunde unverbindlich kennenzulernen.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Wallbach liegt im Kanton Aargau, nahe der deutschen Grenze und des Rheins, und ist für Schüler aus dem Fricktal und dem Baselbiet schnell erreichbar.",
      reasons: [
        { headline: "Gute Anbindung im Fricktal", description: "Schnell erreichbar aus Wallbach und Umgebung." },
        { headline: "Kleine Klassen", description: "5 bis 8 Personen für persönliche Betreuung." },
        { headline: "SVNH-zertifiziert", description: "Anerkannter Abschluss in Steinheilkunde." },
        { headline: "Praxiserprobtes Team", description: "Dozenten mit eigener Heilsteinpraxis." },
        { headline: "Individuelle Verschiebung", description: "Schultage lassen sich flexibel nachholen." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Auch in Wallbach beträgt die Ausbildung CHF 4250 inklusive Unterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 reserviert Ihren Platz an der Schule.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Viele Absolventen aus Wallbach und dem Fricktal schätzen die Praxisnähe und die herzige Atmosphäre der Heilsteinschule Schweiz.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung in Wallbach?", a: "In Wallbach kostet die SVNH-zertifizierte Grundausbildung CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung in Wallbach?", a: "Die Ausbildung in Wallbach dauert mindestens drei Vierteljahre. Maximal zwei Fehltage sind erlaubt, Nachholtermine in einer Parallelklasse sind jederzeit möglich." },
      { q: "Kann ich mich online für Wallbach anmelden?", a: "Ja, die Anmeldung erfolgt online, schriftlich oder per E-Mail über den Hauptsitz in Asp. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung für Wallbach verbindlich." },
      { q: "Brauche ich Vorkenntnisse in Steinheilkunde?", a: "Nein, in Wallbach starten Sie ohne Vorkenntnisse. Freude an Steinen und Offenheit für die Natur genügen – das Dozententeam führt Sie Schritt für Schritt in die Steinheilkunde ein." },
      { q: "Wo finden die Schultage in Wallbach statt?", a: "Die Schultage finden am Schulstandort Wallbach an der Rheinstrasse 29 statt, organisiert über den Hauptsitz in Asp. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar für Wallbach verpflichtend?", a: "Ja, das Alpenseminar ist obligatorisch für das Zertifikat. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Wallbach liegt im Kanton Aargau, nahe der deutschen Grenze und des Rheins. Unser Einzugsgebiet erstreckt sich über das Fricktal und die angrenzenden Regionen.",
      places: ["Wallbach", "Mumpf", "Obermumpf", "Stein", "Bad Zurzach", "Kaiserstuhl", "Fisibach", "Zurzach", "Böttstein", "Döttingen"],
    },
    finalCta: {
      title: "Starten Sie Ihre Steinheilkunde in Wallbach",
      text: "Melden Sie sich jetzt für die Heilsteinberater Ausbildung in Wallbach an und entdecken Sie die Kraft der Heilsteine.",
      button: "Termin buchen",
    },
  },
  {
    slug: "bern",
    city: "Bern",
    region: "Bern / Seeland",
    metaTitle: "Heilsteinberater Ausbildung Bern | Heilsteinschule Schweiz",
    metaDescription: "Heilsteinberater Ausbildung in Bern: SVNH-zertifiziert und praxisnah bei der Heilsteinschule Schweiz. Lernen Sie Steinheilkunde im Herzen der Bundesstadt.",
    hero: {
      eyebrow: "Heilsteine in Bern",
      h1: "Heilsteinberater Ausbildung in Bern – Steinheilkunde in der Bundesstadt lernen",
      description:
        "In Bern vermittelt die Heilsteinschule Schweiz die SVNH-zertifizierte Ausbildung zum Heilsteinberater mitten in der Bundesstadt. Praxisnah, fundiert und mit Dozenten, die selbst in der Steinheilkunde tätig sind.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Bewährte Steinheilkunde-Ausbildung" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Offiziell anerkannter Abschluss" },
      { icon: "Users", title: "Praxiserfahrene Dozenten", description: "Unterricht aus der eigenen Praxis" },
      { icon: "Hand", title: "Praxisnah", description: "Steine begreifen, nicht nur lesen" },
    ],
    contact: {
      intro:
        "Der Schulstandort Bern liegt zentral in der Bundesstadt an der Kapellenstrasse 5, im selben Gebäude wie der Schweizerische Verband für Natürliches Heilen (SVNH). Beratung und Anmeldung laufen über den Hauptsitz der Heilsteinschule Schweiz in Asp.",
      address: "Kapellenstrasse 5 (4. Stock), 3011 Bern",
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "In Bern bieten wir die vollständige Grundausbildung sowie Info-Nachmittage an – eng vernetzt mit dem Hauptsitz in Asp. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "Die SVNH-zertifizierte Ausbildung in Bern dauert mindestens drei Vierteljahre und umfasst Schulungsunterlagen und Zertifikat zum Preis von CHF 4250, zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar",
          description:
            "Das Alpenseminar ergänzt die Berner Ausbildung mit vier Übernachtungen in den Bergen. Dieser praktische Teil ist obligatorisch für das Schulzertifikat.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag Bern",
          description:
            "Am kostenlosen Info-Nachmittag in Bern lernen Sie die Heilsteinschule, das Dozententeam und die Steinheilkunde unverbindlich kennen – ideal zum Schnuppern.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Bern als Ausbildungsstandort verbindet städtische Erreichbarkeit mit der langen Tradition der Heilsteinschule Schweiz. Vom Hauptbahnhof Bern sind es nur rund 5 Gehminuten zum Schulort.",
      reasons: [
        { headline: "Zentral in der Bundesstadt", description: "5 Gehminuten ab Hauptbahnhof Bern." },
        { headline: "Erfahrene Dozenten", description: "Lehrpersonen mit eigener Heilsteinpraxis." },
        { headline: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss." },
        { headline: "Kleine Klassen", description: "Persönliche Betreuung in Bern – min. 5, max. 8 Personen." },
        { headline: "Flexible Schultage", description: "Nachholen an anderen Standorten möglich." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Die Ausbildung in Bern kostet CHF 4250 inklusive Unterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 reserviert Ihren Platz in der Bundesstadt.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Absolventinnen und Absolventen aus Bern und dem Seeland schätzen die fundierte und herziggeführte Ausbildung der Heilsteinschule Schweiz.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung in Bern?", a: "Die SVNH-zertifizierte Grundausbildung in Bern kostet CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung in Bern?", a: "In Bern erstreckt sich die Ausbildung über mindestens drei Vierteljahre. Maximal zwei Fehltage sind erlaubt, ausgefallene Tage lassen sich in einer Parallelklasse nachholen." },
      { q: "Kann ich mich online für Bern anmelden?", a: "Ja, die Anmeldung erfolgt online, schriftlich oder per E-Mail über den Hauptsitz in Asp. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung für den Standort Bern verbindlich." },
      { q: "Brauche ich Vorkenntnisse in Steinheilkunde?", a: "Nein, in Bern starten Sie ohne Vorkenntnisse. Wichtig sind Freude an Steinen und Offenheit – das Dozententeam führt Sie Schritt für Schritt in die Steinheilkunde ein." },
      { q: "Wo finden die Schultage in Bern statt?", a: "Die Schultage finden am Schulstandort Bern an der Kapellenstrasse 5 statt, organisiert über den Hauptsitz in Asp. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar für Bern verpflichtend?", a: "Ja, das Alpenseminar ist obligatorisch für das Zertifikat. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Bern ist gut aus dem gesamten Kanton und dem Seeland erreichbar. Unser Einzugsgebiet umfasst die Bundesstadt und die umliegenden Gemeinden.",
      places: ["Bern", "Ostermundigen", "Bümpliz", "Köniz", "Muri", "Belp", "Ittigen", "Zollikofen", "Steffisburg", "Thun"],
    },
    finalCta: {
      title: "Steinheilkunde in Bern entdecken",
      text: "Melden Sie sich jetzt für die Heilsteinberater Ausbildung in Bern an und lernen Sie die Kraft der Heilsteine kennen.",
      button: "Termin buchen",
    },
  },
  {
    slug: "zuerich",
    city: "Zürich",
    region: "Zürich",
    metaTitle: "Heilsteinberater Ausbildung Zürich | Heilsteinschule Schweiz",
    metaDescription: "Heilsteinberater Ausbildung für Zürich: SVNH-zertifiziert und praxisnah bei der Heilsteinschule Schweiz. Steinheilkunde lernen am Schulstandort Wallbach im Fricktal.",
    hero: {
      eyebrow: "Heilsteine für Zürich",
      h1: "Heilsteinberater Ausbildung für Zürich – Steinheilkunde hautnah erleben",
      description:
        "Für Interessierte aus Zürich führt die Heilsteinschule Schweiz die SVNH-zertifizierte Ausbildung zum Heilsteinberater am nahen Standort Wallbach im Fricktal durch. Praxisnah, fundiert und mit Dozenten, die selbst in der Steinheilkunde arbeiten.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Über 250 ausgebildete Berater" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss" },
      { icon: "Users", title: "Erfahrenes Team", description: "Dozenten mit Praxiserfahrung" },
      { icon: "Hand", title: "Praxisnah", description: "Steine begreifen, nicht nur lesen" },
    ],
    contact: {
      intro:
        "Für Interessierte aus Zürich ist der nächste Ausbildungsstandort Wallbach im Fricktal. Beratung und Anmeldung laufen über den Hauptsitz der Heilsteinschule Schweiz in Asp.",
      address: WALLBACH_ADDRESS,
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "Im Raum Zürich bieten wir die Grundausbildung am Standort Wallbach an. Info-Nachmittage finden in Asp und Bern statt, das Alpenseminar in den Schweizer Alpen. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "Die SVNH-zertifizierte Ausbildung für Zürich findet in Wallbach statt und dauert mindestens drei Vierteljahre. Unterlagen und Zertifikat sind im Preis von CHF 4250 enthalten. Zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar",
          description:
            "Das Alpenseminar vertieft die Ausbildung mit vier Übernachtungen in den Bergen und ist obligatorisch für das Schulzertifikat der Heilsteinschule.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag für Zürich",
          description:
            "Kostenlose Info-Nachmittage finden in Asp und Bern statt – ideal für Interessierte aus Zürich, um die Heilsteinschule und die Steinheilkunde unverbindlich kennenzulernen.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Zürich ist über die A1 und mit der S-Bahn gut ins Fricktal erreichbar. Der Schulstandort Wallbach liegt von Zürich aus in rund 50 Autominuten, mit dem öffentlichen Verkehr etwa eine Stunde. So profitieren Sie von der Grossstadt aus dennoch von persönlicher Betreuung und kleinen Klassen.",
      reasons: [
        { headline: "Schnell ab Zürich", description: "Wallbach im Fricktal in rund 50 Minuten." },
        { headline: "Ruhiger Lernort", description: "Wallbach liegt idyllisch an der Rheinstrasse im Fricktal." },
        { headline: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss." },
        { headline: "Kleine Klassen", description: "Persönliche Betreuung statt Anonymität." },
        { headline: "Flexible Schultage", description: "Nachholen an anderen Standorten möglich." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Die Ausbildung für Zürich kostet CHF 4250 inklusive Unterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 reserviert Ihren Platz am Standort Wallbach.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Viele Teilnehmende aus der Stadt Zürich schätzen die ruhige, praxisnahe Ausbildung am Standort Wallbach im Fricktal.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung für Zürich?", a: "Die SVNH-zertifizierte Grundausbildung am Standort Wallbach kostet CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung ab Zürich?", a: "Ab Zürich dauert die Ausbildung mindestens drei Vierteljahre am Standort Wallbach. Maximal zwei Fehltage sind erlaubt, Nachholtermine in einer Parallelklasse sind möglich." },
      { q: "Kann ich mich online für Zürich anmelden?", a: "Ja, die Anmeldung erfolgt online, schriftlich oder per E-Mail über den Hauptsitz in Asp. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung für den Raum Zürich verbindlich." },
      { q: "Brauche ich Vorkenntnisse in Steinheilkunde?", a: "Nein, ab Zürich starten Sie ohne Vorkenntnisse. Freude an Steinen und ein offenes Herz genügen – das Dozententeam führt Sie Schritt für Schritt in die Steinheilkunde ein." },
      { q: "Wo finden die Schultage für Zürich statt?", a: "Die Schultage finden am Standort Wallbach im Fricktal statt, organisiert über den Hauptsitz. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar für Zürich verpflichtend?", a: "Ja, das Alpenseminar ist obligatorisch für das Zertifikat. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Zürich ist über die A1 und mit der S-Bahn hervorragend ins Fricktal erreichbar. Unser Einzugsgebiet umfasst die Stadt und den ganzen Kanton.",
      places: ["Zürich", "Winterthur", "Dübendorf", "Dietikon", "Wetzikon", "Thalwil", "Horgen", "Meilen", "Bülach", "Schlieren"],
    },
    finalCta: {
      title: "Steinheilkunde ab Zürich erleben",
      text: "Melden Sie sich jetzt für die Heilsteinberater Ausbildung am Standort Wallbach an – ideal für Teilnehmer aus dem Raum Zürich.",
      button: "Termin buchen",
    },
  },
  {
    slug: "basel",
    city: "Basel",
    region: "Basel / Nordwestschweiz",
    metaTitle: "Heilsteinberater Ausbildung Basel | Heilsteinschule Schweiz",
    metaDescription: "Heilsteinberater Ausbildung für Basel: SVNH-zertifiziert und praxisnah bei der Heilsteinschule Schweiz. Steinheilkunde am Schulstandort Wallbach im Fricktal erlernen.",
    hero: {
      eyebrow: "Heilsteine für Basel",
      h1: "Heilsteinberater Ausbildung für Basel – Steinheilkunde in der Nordwestschweiz",
      description:
        "Für Interessierte aus Basel führt die Heilsteinschule Schweiz die SVNH-zertifizierte Ausbildung zum Heilsteinberater am nahen Standort Wallbach im Fricktal durch. Praxisnah, fundiert und mit Dozenten aus eigener Heilsteinpraxis.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Langjährige Ausbildungstradition" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss" },
      { icon: "Users", title: "Erfahrenes Team", description: "Dozenten mit Praxiserfahrung" },
      { icon: "Hand", title: "Praxisnah", description: "Steine direkt in die Hand nehmen" },
    ],
    contact: {
      intro:
        "Für Interessierte aus Basel ist der nächste Ausbildungsstandort Wallbach im Fricktal. Beratung und Anmeldung erfolgen über den Hauptsitz der Heilsteinschule Schweiz in Asp.",
      address: WALLBACH_ADDRESS,
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "Im Raum Basel bieten wir die Grundausbildung am Standort Wallbach an – ergänzt durch Info-Nachmittage und das Alpenseminar in den Bergen. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "Die SVNH-zertifizierte Ausbildung für Basel findet in Wallbach statt und dauert mindestens drei Vierteljahre. Unterlagen und Zertifikat sind im Preis von CHF 4250 enthalten. Zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar",
          description:
            "Das Alpenseminar vertieft die Basler Ausbildung mit vier Übernachtungen in den Bergen und ist obligatorisch für das Schulzertifikat der Heilsteinschule.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag für Basel",
          description:
            "Am kostenlosen Info-Nachmittag in Asp oder Bern lernen Sie die Heilsteinschule und die Steinheilkunde unverbindlich kennen – ideal für Interessierte aus Basel.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Basel ist über die A3 und das Rheintal schnell im Fricktal. Der Schulstandort Wallbach liegt von Basel aus in rund 40 Autominuten. So profitieren Sie von der Stadt aus dennoch von persönlicher Betreuung.",
      reasons: [
        { headline: "Schnell ab Basel", description: "Wallbach im Fricktal in rund 40 Minuten." },
        { headline: "Ruhiger Lernort", description: "Wallbach liegt idyllisch an der Rheinstrasse im Fricktal." },
        { headline: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss." },
        { headline: "Kleine Klassen", description: "Persönliche Betreuung in Wallbach." },
        { headline: "Flexible Schultage", description: "Nachholen an anderen Standorten möglich." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Die Ausbildung für Basel kostet CHF 4250 inklusive Unterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 reserviert Ihren Platz am Standort Wallbach.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Viele Absolventen aus Basel und dem Baselbiet schätzen die fundierte, praxisnahe Ausbildung am Standort Wallbach im Fricktal.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung für Basel?", a: "Die SVNH-zertifizierte Grundausbildung am Standort Wallbach kostet CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung ab Basel?", a: "Ab Basel dauert die Ausbildung mindestens drei Vierteljahre am Standort Wallbach. Maximal zwei Fehltage sind erlaubt, ausgefallene Tage lassen sich in einer Parallelklasse nachholen." },
      { q: "Kann ich mich online für Basel anmelden?", a: "Ja, die Anmeldung erfolgt online, schriftlich oder per E-Mail über den Hauptsitz in Asp. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung für den Raum Basel verbindlich." },
      { q: "Brauche ich Vorkenntnisse in Steinheilkunde?", a: "Nein, ab Basel starten Sie ohne Vorkenntnisse. Freude an Steinen und ein offenes Herz genügen – das Dozententeam führt Sie Schritt für Schritt in die Steinheilkunde ein." },
      { q: "Wo finden die Schultage für Basel statt?", a: "Die Schultage finden am Standort Wallbach im Fricktal statt, organisiert über den Hauptsitz. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar für Basel verpflichtend?", a: "Ja, das Alpenseminar ist obligatorisch für das Zertifikat. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Basel ist über die A3 schnell im Fricktal. Unser Einzugsgebiet umfasst die Stadt Basel und die umliegenden Gemeinden beider Baselbieter Halbkantone.",
      places: ["Basel", "Basel-Landschaft", "Allschwil", "Binningen", "Liestal", "Pratteln", "Muttenz", "Reinach", "Oberwil", "Birsfelden"],
    },
    finalCta: {
      title: "Steinheilkunde ab Basel entdecken",
      text: "Melden Sie sich jetzt für die Heilsteinberater Ausbildung am Standort Wallbach an – ideal für Teilnehmer aus dem Raum Basel.",
      button: "Termin buchen",
    },
  },
  {
    slug: "aarau",
    city: "Aarau",
    region: "Aargau",
    metaTitle: "Heilsteinberater Ausbildung Aarau | Heilsteinschule Schweiz",
    metaDescription: "Heilsteinberater Ausbildung für Aarau AG: SVNH-zertifiziert und praxisnah bei der Heilsteinschule Schweiz. Steinheilkunde am Schulstandort Wallbach im Fricktal erlernen.",
    hero: {
      eyebrow: "Heilsteine für Aarau",
      h1: "Heilsteinberater Ausbildung für Aarau – Steinheilkunde im Aargau erleben",
      description:
        "Für Interessierte aus Aarau führt die Heilsteinschule Schweiz die SVNH-zertifizierte Ausbildung zum Heilsteinberater am nahen Standort Wallbach im Fricktal durch. Praxisnah, fundiert und mit Dozenten aus eigener Heilsteinpraxis.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Bewährte Steinheilkunde-Schule" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss" },
      { icon: "Users", title: "Erfahrenes Team", description: "Dozenten mit Praxiserfahrung" },
      { icon: "Hand", title: "Praxisnah", description: "Steine begreifen, nicht nur lesen" },
    ],
    contact: {
      intro:
        "Für Interessierte aus Aarau ist der nächste Ausbildungsstandort Wallbach im Fricktal. Beratung und Anmeldung erfolgen über den Hauptsitz der Heilsteinschule Schweiz in Asp.",
      address: WALLBACH_ADDRESS,
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "Im Raum Aarau bieten wir die Grundausbildung am Standort Wallbach an – ergänzt durch Info-Nachmittage und das Alpenseminar. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "Die SVNH-zertifizierte Ausbildung für Aarau findet in Wallbach statt und dauert mindestens drei Vierteljahre. Unterlagen und Zertifikat sind im Preis von CHF 4250 enthalten. Zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar",
          description:
            "Das Alpenseminar vertieft die Aarauer Ausbildung mit vier Übernachtungen in den Bergen und ist obligatorisch für das Schulzertifikat der Heilsteinschule.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag für Aarau",
          description:
            "Am kostenlosen Info-Nachmittag in Asp oder Bern lernen Sie die Heilsteinschule und die Steinheilkunde unverbindlich kennen – ideal für Interessierte aus Aarau.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Aarau liegt als Kantonshauptstadt zentral und ist über die A1 schnell im Fricktal. Der Schulstandort Wallbach liegt von Aarau aus in rund 30 Autominuten. So verbinden Sie städtisches Leben mit naturverbundener Steinheilkunde.",
      reasons: [
        { headline: "Schnell ab Aarau", description: "Wallbach im Fricktal in rund 30 Minuten." },
        { headline: "Ruhiger Lernort", description: "Wallbach liegt idyllisch an der Rheinstrasse im Fricktal." },
        { headline: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss." },
        { headline: "Kleine Klassen", description: "Persönliche Betreuung in Wallbach." },
        { headline: "Flexible Schultage", description: "Nachholen an anderen Standorten möglich." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Die Ausbildung für Aarau kostet CHF 4250 inklusive Unterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 reserviert Ihren Platz am Standort Wallbach.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Viele Absolventen aus Aarau und dem Aargau schätzen die fundierte, praxisnahe Ausbildung am Standort Wallbach im Fricktal.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung für Aarau?", a: "Die SVNH-zertifizierte Grundausbildung am Standort Wallbach kostet CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung ab Aarau?", a: "Ab Aarau dauert die Ausbildung mindestens drei Vierteljahre am Standort Wallbach. Maximal zwei Fehltage sind erlaubt, ausgefallene Tage lassen sich in einer Parallelklasse nachholen." },
      { q: "Kann ich mich online für Aarau anmelden?", a: "Ja, die Anmeldung erfolgt online, schriftlich oder per E-Mail über den Hauptsitz in Asp. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung für den Raum Aarau verbindlich." },
      { q: "Brauche ich Vorkenntnisse in Steinheilkunde?", a: "Nein, ab Aarau starten Sie ohne Vorkenntnisse. Freude an Steinen und ein offenes Herz genügen – das Dozententeam führt Sie Schritt für Schritt in die Steinheilkunde ein." },
      { q: "Wo finden die Schultage für Aarau statt?", a: "Die Schultage finden am Standort Wallbach im Fricktal statt, organisiert über den Hauptsitz. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar für Aarau verpflichtend?", a: "Ja, das Alpenseminar ist obligatorisch für das Zertifikat. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Aarau ist als Kantonshauptstadt zentral im Aargau. Unser Einzugsgebiet umfasst die Stadt und die umliegenden Gemeinden im Aaretal.",
      places: ["Aarau", "Buchs", "Suhr", "Küttigen", "Rohr", "Oberentfelden", "Unterkulm", "Schöftland", "Lenzburg", "Wohlen"],
    },
    finalCta: {
      title: "Steinheilkunde ab Aarau erleben",
      text: "Melden Sie sich jetzt für die Heilsteinberater Ausbildung am Standort Wallbach an – ideal für Teilnehmer aus dem Raum Aarau.",
      button: "Termin buchen",
    },
  },
  {
    slug: "baden",
    city: "Baden",
    region: "Aargau / Limmattal",
    metaTitle: "Heilsteinberater Ausbildung Baden AG | Heilsteinschule Schweiz",
    metaDescription: "Heilsteinberater Ausbildung für Baden AG: SVNH-zertifiziert und praxisnah bei der Heilsteinschule Schweiz. Steinheilkunde am Schulstandort Wallbach im Fricktal erlernen.",
    hero: {
      eyebrow: "Heilsteine für Baden",
      h1: "Heilsteinberater Ausbildung für Baden – Steinheilkunde im Limmattal entdecken",
      description:
        "Für Interessierte aus Baden führt die Heilsteinschule Schweiz die SVNH-zertifizierte Ausbildung zum Heilsteinberater am nahen Standort Wallbach im Fricktal durch. Praxisnah, fundiert und mit Dozenten, die selbst in der Steinheilkunde tätig sind.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Etablierte Steinheilkunde-Ausbildung" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Offiziell anerkannter Abschluss" },
      { icon: "Users", title: "Erfahrenes Team", description: "Dozenten mit Praxiserfahrung" },
      { icon: "Hand", title: "Praxisnah", description: "Steine direkt in die Hand nehmen" },
    ],
    contact: {
      intro:
        "Für Interessierte aus Baden ist der nächste Ausbildungsstandort Wallbach im Fricktal. Beratung und Anmeldung erfolgen über den Hauptsitz der Heilsteinschule Schweiz in Asp.",
      address: WALLBACH_ADDRESS,
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "Im Raum Baden bieten wir die Grundausbildung am Standort Wallbach an – ergänzt durch Info-Nachmittage und das Alpenseminar in den Bergen. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "Die SVNH-zertifizierte Ausbildung für Baden findet in Wallbach statt und dauert mindestens drei Vierteljahre. Unterlagen und Zertifikat sind im Preis von CHF 4250 enthalten. Zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar",
          description:
            "Das Alpenseminar vertieft die Badener Ausbildung mit vier Übernachtungen in den Bergen und ist obligatorisch für das Schulzertifikat der Heilsteinschule.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag für Baden",
          description:
            "Am kostenlosen Info-Nachmittag in Asp oder Bern lernen Sie die Heilsteinschule und die Steinheilkunde unverbindlich kennen – ideal für Interessierte aus Baden.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Baden liegt verkehrsgünstig im Limmattal und ist über die A1 schnell im Fricktal. Der Schulstandort Wallbach liegt von Baden aus in rund 30 Autominuten. So profitieren Sie von der Thermalstadt aus von persönlicher Betreuung.",
      reasons: [
        { headline: "Schnell ab Baden", description: "Wallbach im Fricktal in rund 30 Minuten." },
        { headline: "Ruhiger Lernort", description: "Wallbach liegt idyllisch an der Rheinstrasse im Fricktal." },
        { headline: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss." },
        { headline: "Kleine Klassen", description: "Persönliche Betreuung in Wallbach." },
        { headline: "Flexible Schultage", description: "Nachholen an anderen Standorten möglich." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Die Ausbildung für Baden kostet CHF 4250 inklusive Unterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 reserviert Ihren Platz am Standort Wallbach.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Viele Absolventen aus Baden und dem Limmattal loben die fundierte, praxisnahe Ausbildung am Standort Wallbach im Fricktal.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung für Baden?", a: "Die SVNH-zertifizierte Grundausbildung am Standort Wallbach kostet CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung ab Baden?", a: "Ab Baden dauert die Ausbildung mindestens drei Vierteljahre am Standort Wallbach. Maximal zwei Fehltage sind erlaubt, ausgefallene Tage lassen sich in einer Parallelklasse nachholen." },
      { q: "Kann ich mich online für Baden anmelden?", a: "Ja, die Anmeldung erfolgt online, schriftlich oder per E-Mail über den Hauptsitz in Asp. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung für den Raum Baden verbindlich." },
      { q: "Brauche ich Vorkenntnisse in Steinheilkunde?", a: "Nein, ab Baden starten Sie ohne Vorkenntnisse. Freude an Steinen und ein offenes Herz genügen – das Dozententeam führt Sie Schritt für Schritt in die Steinheilkunde ein." },
      { q: "Wo finden die Schultage für Baden statt?", a: "Die Schultage finden am Standort Wallbach im Fricktal statt, organisiert über den Hauptsitz. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar für Baden verpflichtend?", a: "Ja, das Alpenseminar ist obligatorisch für das Zertifikat. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Baden liegt zentral im Limmattal und ist über die A1 schnell im Fricktal. Unser Einzugsgebiet umfasst die Stadt und die umliegenden Gemeinden.",
      places: ["Baden", "Wettingen", "Ennetbaden", "Obersiggenthal", "Turgi", "Brugg", "Windisch", "Bremgarten", "Mellingen", "Fislisbach"],
    },
    finalCta: {
      title: "Steinheilkunde ab Baden entdecken",
      text: "Melden Sie sich jetzt für die Heilsteinberater Ausbildung am Standort Wallbach an – ideal für Teilnehmer aus dem Raum Baden.",
      button: "Termin buchen",
    },
  },
  {
    slug: "brugg",
    city: "Brugg",
    region: "Aargau",
    metaTitle: "Heilsteinberater Ausbildung Brugg | Heilsteinschule Schweiz",
    metaDescription: "Heilsteinberater Ausbildung für Brugg AG: SVNH-zertifiziert und praxisnah bei der Heilsteinschule Schweiz. Steinheilkunde am Schulstandort Wallbach im Fricktal erlernen.",
    hero: {
      eyebrow: "Heilsteine für Brugg",
      h1: "Heilsteinberater Ausbildung für Brugg – Steinheilkunde am Zusammenfluss erleben",
      description:
        "Für Interessierte aus Brugg führt die Heilsteinschule Schweiz die SVNH-zertifizierte Ausbildung zum Heilsteinberater am nahen Standort Wallbach im Fricktal durch. Praxisnah, fundiert und mit Dozenten, die ihre Leidenschaft für Heilsteine weitergeben.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Über 250 ausgebildete Berater" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss" },
      { icon: "Users", title: "Erfahrenes Team", description: "Dozenten mit Praxiserfahrung" },
      { icon: "Hand", title: "Praxisnah", description: "Steine begreifen, nicht nur lesen" },
    ],
    contact: {
      intro:
        "Für Interessierte aus Brugg ist der nächste Ausbildungsstandort Wallbach im Fricktal. Beratung und Anmeldung erfolgen über den Hauptsitz der Heilsteinschule Schweiz in Asp.",
      address: WALLBACH_ADDRESS,
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "Im Raum Brugg bieten wir die Grundausbildung am Standort Wallbach an – ergänzt durch Info-Nachmittage und das Alpenseminar in den Bergen. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "Die SVNH-zertifizierte Ausbildung für Brugg findet in Wallbach statt und dauert mindestens drei Vierteljahre. Unterlagen und Zertifikat sind im Preis von CHF 4250 enthalten. Zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar",
          description:
            "Das Alpenseminar vertieft die Brugger Ausbildung mit vier Übernachtungen in den Bergen und ist obligatorisch für das Schulzertifikat der Heilsteinschule.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag für Brugg",
          description:
            "Am kostenlosen Info-Nachmittag in Asp oder Bern lernen Sie die Heilsteinschule und die Steinheilkunde unverbindlich kennen – ideal für Interessierte aus Brugg.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Brugg liegt am Zusammenfluss von Aare, Reuss und Limmat und ist schnell im Fricktal. Der Schulstandort Wallbach liegt von Brugg aus in rund 25 Autominuten. So profitieren Sie von der historischen Stadt aus von persönlicher Betreuung.",
      reasons: [
        { headline: "Schnell ab Brugg", description: "Wallbach im Fricktal in rund 25 Minuten." },
        { headline: "Ruhiger Lernort", description: "Wallbach liegt idyllisch an der Rheinstrasse im Fricktal." },
        { headline: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss." },
        { headline: "Kleine Klassen", description: "Persönliche Betreuung in Wallbach." },
        { headline: "Flexible Schultage", description: "Nachholen an anderen Standorten möglich." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Die Ausbildung für Brugg kostet CHF 4250 inklusive Unterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 reserviert Ihren Platz am Standort Wallbach.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Viele Absolventen aus Brugg und dem Aargau schätzen die fundierte, praxisnahe Ausbildung am Standort Wallbach im Fricktal.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung für Brugg?", a: "Die SVNH-zertifizierte Grundausbildung am Standort Wallbach kostet CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung ab Brugg?", a: "Ab Brugg dauert die Ausbildung mindestens drei Vierteljahre am Standort Wallbach. Maximal zwei Fehltage sind erlaubt, ausgefallene Tage lassen sich in einer Parallelklasse nachholen." },
      { q: "Kann ich mich online für Brugg anmelden?", a: "Ja, die Anmeldung erfolgt online, schriftlich oder per E-Mail über den Hauptsitz in Asp. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung für den Raum Brugg verbindlich." },
      { q: "Brauche ich Vorkenntnisse in Steinheilkunde?", a: "Nein, ab Brugg starten Sie ohne Vorkenntnisse. Freude an Steinen und ein offenes Herz genügen – das Dozententeam führt Sie Schritt für Schritt in die Steinheilkunde ein." },
      { q: "Wo finden die Schultage für Brugg statt?", a: "Die Schultage finden am Standort Wallbach im Fricktal statt, organisiert über den Hauptsitz. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar für Brugg verpflichtend?", a: "Ja, das Alpenseminar ist obligatorisch für das Zertifikat. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Brugg liegt zentral am Zusammenfluss der drei Flüsse und ist schnell im Fricktal. Unser Einzugsgebiet umfasst die Stadt und die umliegenden Gemeinden.",
      places: ["Brugg", "Windisch", "Umiken", "Hausen", "Birr", "Birrhard", "Lupfig", "Mülligen", "Veltheim", "Rüfenach"],
    },
    finalCta: {
      title: "Steinheilkunde ab Brugg erleben",
      text: "Melden Sie sich jetzt für die Heilsteinberater Ausbildung am Standort Wallbach an – ideal für Teilnehmer aus dem Raum Brugg.",
      button: "Termin buchen",
    },
  },
  {
    slug: "olten",
    city: "Olten",
    region: "Solothurn / Nordwestschweiz",
    metaTitle: "Heilsteinberater Ausbildung Olten | Heilsteinschule Schweiz",
    metaDescription: "Heilsteinberater Ausbildung für Olten SO: SVNH-zertifiziert und praxisnah bei der Heilsteinschule Schweiz. Steinheilkunde am Schulstandort Wallbach im Fricktal erlernen.",
    hero: {
      eyebrow: "Heilsteine für Olten",
      h1: "Heilsteinberater Ausbildung für Olten – Steinheilkunde im Raum Solothurn",
      description:
        "Für Interessierte aus Olten führt die Heilsteinschule Schweiz die SVNH-zertifizierte Ausbildung zum Heilsteinberater am nahen Standort Wallbach im Fricktal durch. Praxisnah, fundiert und mit Dozenten, die selbst in der Steinheilkunde arbeiten.",
    },
    usps: [
      { icon: "Sparkles", title: "Seit 2011", description: "Bewährte Steinheilkunde-Schule" },
      { icon: "Award", title: "SVNH-zertifiziert", description: "Offiziell anerkannter Abschluss" },
      { icon: "Users", title: "Erfahrenes Team", description: "Dozenten mit Praxiserfahrung" },
      { icon: "Hand", title: "Praxisnah", description: "Steine direkt in die Hand nehmen" },
    ],
    contact: {
      intro:
        "Für Interessierte aus Olten ist der nächste Ausbildungsstandort Wallbach im Fricktal. Beratung und Anmeldung erfolgen über den Hauptsitz der Heilsteinschule Schweiz in Asp.",
      address: WALLBACH_ADDRESS,
      phone: PHONE,
      email: EMAIL,
    },
    services: {
      intro:
        "Im Raum Olten bieten wir die Grundausbildung am Standort Wallbach an – ergänzt durch Info-Nachmittage und das Alpenseminar in den Bergen. " + KLASSENGROESSE,
      items: [
        {
          title: "Grundausbildung Heilsteinberater",
          description:
            "Die SVNH-zertifizierte Ausbildung für Olten findet in Wallbach statt und dauert mindestens drei Vierteljahre. Unterlagen und Zertifikat sind im Preis von CHF 4250 enthalten. Zahlbar in 2 Raten.",
        },
        {
          title: "Alpenseminar",
          description:
            "Das Alpenseminar vertieft die Oltner Ausbildung mit vier Übernachtungen in den Bergen und ist obligatorisch für das Schulzertifikat der Heilsteinschule.",
          link: "/ausbildung#exkursionen",
        },
        {
          title: "Info-Nachmittag für Olten",
          description:
            "Am kostenlosen Info-Nachmittag in Asp oder Bern lernen Sie die Heilsteinschule und die Steinheilkunde unverbindlich kennen – ideal für Interessierte aus Olten.",
          link: "/info-nachmittag",
        },
      ],
    },
    whyUs: {
      intro:
        "Olten liegt als Eisenbahnknotenpunkt zentral und ist über die A1 schnell im Fricktal. Der Schulstandort Wallbach liegt von Olten aus in rund 35 Autominuten. So profitieren Sie von der Stadt aus von persönlicher Betreuung.",
      reasons: [
        { headline: "Gut ab Olten erreichbar", description: "Wallbach im Fricktal in rund 35 Minuten." },
        { headline: "Ruhiger Lernort", description: "Wallbach liegt idyllisch an der Rheinstrasse im Fricktal." },
        { headline: "SVNH-zertifiziert", description: "Anerkannter Steinheilkunde-Abschluss." },
        { headline: "Kleine Klassen", description: "Persönliche Betreuung in Wallbach." },
        { headline: "Flexible Schultage", description: "Nachholen an anderen Standorten möglich." },
      ],
      cta: "Jetzt Offerte anfordern",
    },
    costs: {
      intro:
        "Die Ausbildung für Olten kostet CHF 4250 inklusive Unterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 reserviert Ihren Platz am Standort Wallbach.",
      items: COSTS_ITEMS,
      cta: "Jetzt Offerte anfordern",
    },
    reviews: {
      intro:
        "Viele Absolventen aus Olten und dem Raum Solothurn loben die fundierte, praxisnahe Ausbildung am Standort Wallbach im Fricktal.",
      rating: "5.0",
      count: "Über 250 Absolventen",
    },
    faq: [
      { q: "Was kostet die Heilsteinberater Ausbildung für Olten?", a: "Die SVNH-zertifizierte Grundausbildung am Standort Wallbach kostet CHF 4250 inklusive Schulungsunterlagen und Zertifizierung, zahlbar in 2 Raten. Die Anzahlung von CHF 250 sichert Ihren Platz und wird an die erste Rate angerechnet." },
      { q: "Wie lange dauert die Ausbildung ab Olten?", a: "Ab Olten dauert die Ausbildung mindestens drei Vierteljahre am Standort Wallbach. Maximal zwei Fehltage sind erlaubt, ausgefallene Tage lassen sich in einer Parallelklasse nachholen." },
      { q: "Kann ich mich online für Olten anmelden?", a: "Ja, die Anmeldung erfolgt online, schriftlich oder per E-Mail über den Hauptsitz in Asp. Mit der Anzahlung von CHF 250 wird Ihre Anmeldung für den Raum Olten verbindlich." },
      { q: "Brauche ich Vorkenntnisse in Steinheilkunde?", a: "Nein, ab Olten starten Sie ohne Vorkenntnisse. Freude an Steinen und ein offenes Herz genügen – das Dozententeam führt Sie Schritt für Schritt in die Steinheilkunde ein." },
      { q: "Wo finden die Schultage für Olten statt?", a: "Die Schultage finden am Standort Wallbach im Fricktal statt, organisiert über den Hauptsitz. Die Klassen umfassen 5 bis 8 Personen, der Beginn wird festgelegt, sobald 5 Anmeldungen vorliegen." },
      { q: "Ist das Alpenseminar für Olten verpflichtend?", a: "Ja, das Alpenseminar ist obligatorisch für das Zertifikat. Für vier Übernachtungen mit Halbpension fallen ca. CHF 490 an, zahlbar direkt im Seminarhotel." },
    ],
    otherServices: OTHER_SERVICES,
    area: {
      intro:
        "Olten ist als Eisenbahnknotenpunkt zentral gelegen und schnell im Fricktal. Unser Einzugsgebiet umfasst die Stadt und die umliegenden Gemeinden.",
      places: ["Olten", "Trimbach", "Wisen", "Kappel", "Hägendorf", "Wangen", "Däniken", "Schönenwerd", "Niederbuchsiten", "Gunzgen"],
    },
    finalCta: {
      title: "Steinheilkunde ab Olten entdecken",
      text: "Melden Sie sich jetzt für die Heilsteinberater Ausbildung am Standort Wallbach an – ideal für Teilnehmer aus dem Raum Olten.",
      button: "Termin buchen",
    },
  },
];

export const getRegionBySlug = (slug) => REGIONS.find((r) => r.slug === slug);