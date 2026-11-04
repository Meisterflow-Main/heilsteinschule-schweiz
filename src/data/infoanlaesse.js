import { CalendarDays, Clock, MapPin, Wallet, Users, GraduationCap, HandHeart, MessageSquare, ArrowRight } from "lucide-react";

// ─── Infoanlass ────────────────────────────────────────────────────────────
export const INFOABEND = {
  title: "Infoabend – Analytische Steinheilkunde",
  description: "SVNH-zertifizierter Lehrgang in analytischer Steinheilkunde",
  displayDate: "Freitag, 13.11.2026",
  time: "Ab 19:30 Uhr",
  kosten: "Kostenlos",
  venue: "Praxis-Sunnestei",
  address: "Sägengasse 2, 3110 Münsingen",
  phone: "+41 79 389 66 22",
  phoneHref: "+41793896622",
};

// ─── Tagesseminar ──────────────────────────────────────────────────────────
export const TAGESSEMINAR = {
  time: "09:00–17:00 Uhr",
  displayDate: "16. Januar 2027",
  ort: "Asp",
  title: "Die 24 Heilsteine der Hildegard von Bingen",
  leitung: "Tagesseminar in Asp mit Bruno Vogler Pfeiffer",
  inklusive: [
    "Kurskosten inklusive Mittagessen",
    "Fachbuch über Hildegard von Bingen",
    "Kursunterlagen",
    "Zwischenverpflegung",
  ],
  preis: "Fr. 258.00",
  hinweis: "Anmeldung entspricht def. Buchung",
};

// ─── Programm Infoanlass ───────────────────────────────────────────────────
export const PROGRAMM = [
  {
    icon: HandHeart,
    title: "Begrüssung & Vorstellung",
    text: "Lernen Sie die Heilsteinschule Schweiz und die Menschen dahinter kennen.",
  },
  {
    icon: GraduationCap,
    title: "Die Ausbildung",
    text: "Erfahren Sie, was die Grundausbildung umfasst und wie sie strukturiert ist.",
  },
  {
    icon: Users,
    title: "Lernansatz",
    text: "Entdecken Sie die Philosophie des Lernens mit Kopf, Herz, Hand und Fuss.",
  },
  {
    icon: MessageSquare,
    title: "Fragen & Austausch",
    text: "Stellen Sie individuelle Fragen und sprechen Sie mit dem Team.",
  },
  {
    icon: ArrowRight,
    title: "Nächste Schritte",
    text: "Informationen zu Terminen, Standorten, Anmeldung und dem weiteren Vorgehen.",
  },
];

// ─── Infoanlass oder Seminar? ──────────────────────────────────────────────
export const FORMATE = [
  {
    icon: CalendarDays,
    label: "Infoanlässe",
    title: "Kostenlos & unverbindlich",
    text: "Am Info-Nachmittag/-Abend lernen Sie die Schule, das Dozententeam und die Steinheilkunde kennen — ohne Kosten und ohne Verpflichtung. Sie erhalten einen Überblick über die Ausbildung und können direkt Fragen stellen.",
    fakten: [
      { icon: Clock, text: "Ein Nachmittag bzw. Abend" },
      { icon: MapPin, text: "Münsingen und Asp" },
      { icon: Wallet, text: "Kostenlos" },
    ],
  },
  {
    icon: GraduationCap,
    label: "Seminare",
    title: "Fachwissen an einem Tag",
    text: "Die Tagesseminare vertiefen ein Thema der Steinheilkunde — zum Beispiel die 24 Heilsteine der Hildegard von Bingen. Kurskosten inklusive Mittagessen, Zwischenverpflegung, Kursunterlagen und Fachbuch.",
    fakten: [
      { icon: Clock, text: "09:00–17:00 Uhr" },
      { icon: MapPin, text: "Asp" },
      { icon: Users, text: "Mit Bruno Vogler Pfeiffer" },
    ],
  },
];