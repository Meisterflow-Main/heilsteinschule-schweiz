// Öffnungsdaten Heilsteinshop-Asp (Shop & Praxis)
// Quelle: https://heilsteinschule.swiss/laden---praxis/
// "Dreimal im Monat geöffnet" — terminbasiert, keine festen Wochentage.
// Diese Liste zentral pflegen — LadenPraxis-Seite und Beratungsformular nutzen sie gemeinsam.

export const OEFFNUNGSDATEN = [
  // Oktober 2026
  { date: "2026-10-07", label: "Mi, 07. Oktober 2026" },
  { date: "2026-10-28", label: "Mi, 28. Oktober 2026" },
  { date: "2026-10-31", label: "Sa, 31. Oktober 2026" },
  // November 2026
  { date: "2026-11-04", label: "Mi, 04. November 2026" },
  { date: "2026-11-07", label: "Sa, 07. November 2026" },
  { date: "2026-11-18", label: "Mi, 18. November 2026" },
  // Dezember 2026
  { date: "2026-12-09", label: "Mi, 09. Dezember 2026" },
  { date: "2026-12-16", label: "Mi, 16. Dezember 2026" },
  { date: "2026-12-19", label: "Sa, 19. Dezember 2026" },
];

// Nur künftige Termine zurückgeben (ab heute)
export function getUpcomingDates() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return OEFFNUNGSDATEN.filter((d) => new Date(d.date) >= today);
}