import React from "react";
import { Mountain, Boxes, FlaskConical, Palette } from "lucide-react";
import ModulDetail from "@/components/site/ModulDetail";

const ITEMS = [
  {
    nr: "1",
    icon: Mountain,
    title: "Entstehung",
    lead: "in Beziehung zu Lebenssituationen",
    text: "Die Entstehungsgeschichte eines Heilsteins steht in Beziehung zu verschiedenen Lebenssituationen und deren Erfahrungen.",
  },
  {
    nr: "2",
    icon: Boxes,
    title: "Kristallstruktur",
    lead: "Spiegel der menschlichen Grundhaltung",
    text: "Die Kristallstruktur eines Heilsteins spiegelt die grundlegende Haltung und innere Ausrichtung des Menschen wider.",
  },
  {
    nr: "3",
    icon: FlaskConical,
    title: "Chemische Zusammensetzung",
    lead: "Verbindung zu Stoffwechselprozessen",
    text: "Die chemische Zusammensetzung der Heilsteine steht in Verbindung mit den Stoffwechselprozessen des menschlichen Körpers.",
  },
  {
    nr: "4",
    icon: Palette,
    title: "Farbenlehre",
    lead: "Einfluss auf Körper und Psyche",
    text: "Die Farbe eines Heilsteins beeinflusst die Organsysteme sowie seelische und mentale Reaktionen und das geistige Erleben.",
  },
];

export default function Modul1Grundlagen() {
  return (
    <ModulDetail
      eyebrow="Modul 1 · Theorie"
      title="Die vier Grundlagen der analytischen Steinheilkunde"
      subtitle="Die analytische Steinheilkunde nach Michael Gienger basiert auf vier wesentlichen Grundlagen: der geologischen Entstehung, der Kristallstruktur, der chemischen Zusammensetzung und der Farbe der Heilsteine."
      intro="Im Rahmen der Ausbildung vermitteln wir geologische Grundkenntnisse sowie ein fundiertes Verständnis für die Entstehung und die unterschiedlichen Eigenschaften der Heilsteine. Dabei betrachten wir die Zusammenhänge zwischen den vier Grundlagen und dem menschlichen Erleben:"
      items={ITEMS}
      closing="Durch die Verbindung dieser vier Grundlagen lernen die Teilnehmenden, Heilsteine ganzheitlich zu betrachten und ihre unterschiedlichen Eigenschaften und Zusammenhänge nach der analytischen Steinheilkunde zu verstehen."
      note="Hinweis: Die beschriebenen Wirkungszusammenhänge geben das Modell der analytischen Steinheilkunde nach Michael Gienger wieder."
    />
  );
}