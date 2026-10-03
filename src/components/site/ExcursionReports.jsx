import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Mountain, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

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

const TEASER_IMG = "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/ffaf18a07_WhatsAppImage2026-09-23at105952.jpeg";

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

      {/* Alpenseminar Teaser → Student Reports */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border bg-white shadow-lift md:grid-cols-2">
              <div className="overflow-hidden">
                <OptimizedImage src={TEASER_IMG} alt="Alpenseminar in den Schweizer Alpen" width={800} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-citrine/15 px-3 py-1 text-xs font-medium text-citrine-deep">
                  <Mountain className="h-3.5 w-3.5" /> Alpenseminar 2025
                </div>
                <h3 className="font-heading text-2xl font-semibold text-amethyst">Exkursion zu den Heilsteinen der Schweizer Hochalpen</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Ein 5-tägiger Rückblick von Pascal Bossard, Leiter Alpenseminar — von Innertkirchen über
                  die Rosenlaui-Gletscherschlucht bis zum Oberalppass. Ein praktischer Ausbildungsteil,
                  der das Erlernte vertieft und die Steine in ihrer natürlichen Umgebung erfahrbar macht.
                </p>
                <Link
                  to="/schueler-berichte#alpenseminar"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
                >
                  Den Alpenseminar-Bericht lesen <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}