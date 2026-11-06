import React from "react";
import { Gem, Droplets, HeartPulse, ShieldCheck, Brain } from "lucide-react";
import ModulDetail from "@/components/site/ModulDetail";

const ITEMS = [
  {
    nr: "1",
    icon: Gem,
    title: "Heilsteine kennenlernen und Fälschungen erkennen",
    text: "Vertiefte Kenntnisse über verschiedene Heilsteine und Kristalle erwerben, ihre Eigenschaften kennenlernen und echte Steine von Fälschungen und Imitationen unterscheiden.",
  },
  {
    nr: "2",
    icon: Droplets,
    title: "Heilsteine und Kristalle praktisch anwenden",
    text: "Unterschiedliche Anwendungsmöglichkeiten von Heilsteinen und Kristallen kennenlernen. Dazu gehören Heilsteinwasser sowie die Anwendung und Wirkung von Steinen in Wohn- und Arbeitsräumen.",
  },
  {
    nr: "3",
    icon: HeartPulse,
    title: "Krankheitsbilder und psychische Herausforderungen",
    text: "Sich mit verschiedenen Krankheitsbildern und psychischen Problemen auseinandersetzen und die unterstützende Rolle der Steinheilkunde auf dem persönlichen Lebensweg kennenlernen.",
  },
  {
    nr: "4",
    icon: ShieldCheck,
    title: "Strahlenschutz und ergänzende Themenbereiche",
    text: "Beschäftigung mit Strahlenschutz, ätherischen Ölen und kolloidalem Silber sowie deren Einordnung in die ergänzenden Themen der Steinheilkunde.",
  },
  {
    nr: "5",
    icon: Brain,
    title: "Analytisches und intuitives Wissen entwickeln",
    text: "Das analytische Verständnis und die intuitive Wahrnehmung schulen, um Heilsteine bewusster zu erkennen, ihre Eigenschaften besser zu verstehen und sie gezielt anzuwenden.",
  },
];

export default function Modul2Praxis() {
  return (
    <ModulDetail
      className="border-y border-border bg-quartz/60"
      eyebrow="Modul 2 · Vertiefung"
      title="Vertiefung und praktische Anwendung"
      subtitle="In diesem Ausbildungsbereich vertiefen die Teilnehmenden ihr Wissen über Heilsteine und Kristalle und lernen, die erworbenen Kenntnisse gezielt in der Praxis anzuwenden. Dabei stehen sowohl die praktische Erfahrung als auch die Weiterentwicklung des analytischen und intuitiven Verständnisses im Mittelpunkt."
      intro="Die Schwerpunkte umfassen:"
      items={ITEMS}
      closing="Ziel ist es, das erworbene Wissen zu vertiefen, praktische Fähigkeiten zu entwickeln und Sicherheit im bewussten Umgang mit Heilsteinen und Kristallen zu gewinnen."
    />
  );
}