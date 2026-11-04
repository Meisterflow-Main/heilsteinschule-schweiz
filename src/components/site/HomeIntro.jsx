import React from "react";
import { BadgeCheck } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const ZERTIFIKATE = ["GKS-zertifiziert", "SVNH-zertifiziert nach AL2"];

const INTRO_IMG = "https://base44.app/api/apps/6aa92ec5274311c12da18ee6/files/mp/public/6aa92ec5274311c12da18ee6/c4bc3321f_heilsteinschule-berg.jpg";

export default function HomeIntro() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={INTRO_IMG}
                alt="Teilnehmerinnen der Heilsteinschule Schweiz im Hoodie vor Berg und Gletscher"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-px w-8 bg-citrine" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">
                Die Heilsteinschule Schweiz
              </span>
            </div>

            <p className="font-heading text-lg leading-relaxed text-amethyst sm:text-xl">
              Seit 2011 widmen wir uns mit grosser Leidenschaft der analytischen Steinheilkunde. Unser Wissen
              basiert auf langjähriger Erfahrung und fundierten Ausbildungen in Deutschland bei Michael Gienger,
              Werner Kühni und Walter von Holst. Aus dem Herzenswunsch heraus, die faszinierende Welt der
              Heilsteine allen Menschen zugänglich zu machen, wurde die Heilsteinschule Schweiz gegründet.
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wir verbinden fundiertes theoretisches Wissen mit praktischer Erfahrung und der unmittelbaren
              Begegnung mit den Steinen. Unser Unterricht folgt dem Leitgedanken Kopf, Herz, Hand und Fuss:
              verstehen, fühlen, anwenden und erleben. Dazu gehören auch gemeinsame Erfahrungen in der Natur
              und unterwegs in den Alpen.
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Unsere grösste Motivation ist die Liebe und Faszination für die Schönheit und Vielfalt der Steine.
              Wir möchten diese Begeisterung weitergeben und Menschen dabei begleiten, Heilsteine nicht nur
              kennenzulernen, sondern sie als wertvolle Lebensbegleiter zu entdecken.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {ZERTIFIKATE.map((z) => (
                <span
                  key={z}
                  className="inline-flex items-center gap-1.5 rounded-full border border-citrine/40 bg-secondary px-3 py-1.5 text-xs font-semibold text-amethyst"
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-citrine-deep" /> {z}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}