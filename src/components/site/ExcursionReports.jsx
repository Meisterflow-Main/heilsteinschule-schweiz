import React from "react";
import { Calendar } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import AlpenseminarReport from "@/components/site/AlpenseminarReport";

const EXKURSIONEN = [
  { jahr: "2011–2021", ort: "Zentralalpen" },
  { jahr: "2015–2022", ort: "Jura Exkursionen" },
  { jahr: "2016", ort: "Portugal / Auroca" },
  { jahr: "2017", ort: "Azoren" },
  { jahr: "2013–2018", ort: "Vogesen / Odilienberg" },
  { jahr: "2018", ort: "Idar-Oberstein" },
  { jahr: "2020", ort: "Berchtesgaden" },
  { jahr: "2021", ort: "Tessin" },
  { jahr: "2021", ort: "Engadin" },
  { jahr: "2022", ort: "Zermatt" },
  { jahr: "2022", ort: "Heilsteinmuseum" },
];

export default function ExcursionReports() {
  return (
    <>
      {/* Übersicht Exkursionen */}
      <section id="exkursionen" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Praktischer Ausbildungsteil"
            title="Geologische Exkursionen & Alpenseminar"
            subtitle="Die Steine unterwegs in den Alpen und auf der ganzen Welt erfahren — seit 2011 bereisen wir die Welt der Steine, von den Zentralalpen über die Azoren bis in die Vogesen."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXKURSIONEN.map((e, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:border-citrine hover:shadow-lift">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-citrine-deep">{e.jahr}</p>
                  <h3 className="font-heading text-base font-semibold text-amethyst">{e.ort}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Alpenseminar 2025 — Rückblick von Pascal Bossard */}
      <div id="alpenseminar" className="scroll-mt-24">
        <AlpenseminarReport />
      </div>
    </>
  );
}