import React from "react";
import { HandHeart, Sparkles, Footprints, Mountain, Cloud, Award } from "lucide-react";
import ModulDetail from "@/components/site/ModulDetail";

const ITEMS = [
  {
    nr: "1",
    icon: HandHeart,
    title: "Heilsteinberatung und Integration in die Praxis",
    text: "Wie finde ich den passenden Heilstein? Wie kann ich mein erworbenes Wissen sinnvoll und gezielt in meine eigene Praxis integrieren? Wir vermitteln Grundlagen für eine fundierte und individuelle Heilsteinberatung.",
  },
  {
    nr: "2",
    icon: Sparkles,
    title: "Selbsterfahrung und persönliche Entwicklung",
    text: "Durch praktische Übungen und eigene Erfahrungen vertiefen die Teilnehmenden ihr Verständnis für Heilsteine und gewinnen Sicherheit im Umgang mit deren Anwendungsmöglichkeiten.",
  },
  {
    nr: "3",
    icon: Footprints,
    title: "Exkursion ins Fricktal",
    text: "Die Natur hautnah erleben: Bei einer Exkursion ins Fricktal lernen die Teilnehmenden, Versteinerungen zu finden und sich mit der Geomantie auseinanderzusetzen.",
  },
  {
    nr: "4",
    icon: Mountain,
    title: "Alpenseminar – obligatorischer Praxisteil",
    text: "Das Alpenseminar ist ein obligatorischer Bestandteil der Ausbildung. Dabei begeben sich die Teilnehmenden auf die Suche nach Schweizer Heilsteinen und vertiefen ihre praktischen Kenntnisse direkt in der Natur.",
  },
  {
    nr: "5",
    icon: Cloud,
    title: "Ausführliche Ausbildungsunterlagen und Cloud-Zugang",
    text: "Alle Teilnehmenden erhalten ausführliche Ausbildungsunterlagen sowie Zugang zur Heilsteinschule-Cloud mit ergänzenden Lernmaterialien.",
  },
  {
    nr: "6",
    icon: Award,
    title: "Abschlussprüfung und Zertifizierung",
    text: "Nach erfolgreichem Abschluss der Ausbildung und bestandener Prüfung wird das SVNH-Zertifikat feierlich überreicht.",
  },
];

export default function Modul3Abschluss() {
  return (
    <ModulDetail
      eyebrow="Modul 3 · Praxis & Abschluss"
      title="Beratung, Natur und Zertifizierung"
      subtitle="In diesem Ausbildungsbereich verbinden wir das erworbene Fachwissen mit praktischer Beratung, persönlichen Erfahrungen und dem direkten Erleben der Natur. Die Teilnehmenden lernen, ihr Wissen gezielt einzusetzen, Heilsteine individuell auszuwählen und die Steinheilkunde in ihre berufliche Praxis zu integrieren."
      intro="Die Schwerpunkte umfassen:"
      items={ITEMS}
      closing="Ziel ist es, die Teilnehmenden optimal auf die praktische Anwendung und Beratung vorzubereiten und ihnen das notwendige Wissen sowie die Erfahrung für ihren weiteren Weg in der Steinheilkunde mitzugeben."
    />
  );
}