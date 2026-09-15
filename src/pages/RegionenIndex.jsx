import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { REGIONS } from "@/data/regions";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";

export default function RegionenIndex() {
  return (
    <div className="bg-background pt-28">
      <section className="relative overflow-hidden bg-amethyst-deep py-20 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, hsl(var(--citrine) / 0.4), transparent 45%), radial-gradient(circle at 85% 70%, hsl(var(--amethyst-soft) / 0.6), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
              <MapPin className="h-4 w-4 text-citrine-light" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-light">Regionen</span>
            </div>
            <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Heilsteinberater Ausbildung in deiner Region
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Die Heilsteinschule Schweiz bildet an vier Standorten aus und erreicht damit die ganze Deutschschweiz. Wähle deine Region und erfahre, wie die SVNH-zertifizierte Ausbildung zum Heilsteinberater bei dir vor Ort abläuft.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Lokale Standortseiten"
          title="Zehn Regionen – eine Steinheilkunde"
          subtitle="Jede Region hat ihre eigene Seite mit lokalen Infos, Kosten, FAQ und Anlaufstelle."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.05}>
              <Link
                to={`/regionen/${r.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrine/15">
                  <MapPin className="h-6 w-6 text-citrine-deep" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-amethyst">{r.city}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.region}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-citrine-deep">
                  Zur Standortseite <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}