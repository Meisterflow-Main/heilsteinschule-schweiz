import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";
import HomeTrainingOverview from "@/components/site/HomeTrainingOverview";
import TeachingMethod from "@/components/site/TeachingMethod";
import HomeImageCollage from "@/components/site/HomeImageCollage";
import HeroActivityCards from "@/components/site/HeroActivityCards";
import SchoolVideoTeaser from "@/components/site/SchoolVideoTeaser";
import HomeClosingCta from "@/components/site/HomeClosingCta";

const TEAM = [
  { name: "Bruno Vogler Pfeiffer", role: "Schul-Gründer & Schulleiter", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/e7dc15219_ChatGPTImageSep30202602_17_44AM.png" },
  { name: "Ruth Rios", role: "Hauptdozentin", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/460e2670f_ChatGPTImageSep21202602_29_12PM.png" },
  { name: "Pascal Bossard", role: "Leiter Alpenseminar", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/057e4eb82_ChatGPTImageSep21202602_32_05PM.png" },
  { name: "Joe Schnarwiler", role: "Dozent", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/8ed080c78_ChatGPTImageSep21202602_36_58PM.png" },
];

function SwissCross({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-label="Schweizer Flagge" role="img">
      <rect width="32" height="32" rx="4" fill="#D52B1E" />
      <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
      <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/1574e0313_Hero_crystal_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-amethyst-deep/70 via-amethyst/40 to-amethyst-deep/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep/60 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 pt-28 pb-14 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <SwissCross className="h-4 w-4" /> Seit 2011 · SVNH-zertifiziert · 5–8 Teilnehmer
            </div>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Heilsteinberater-Ausbildung
              <span className="block text-gradient-gold">mit SVNH-Zertifizierung</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
              Zertifizierte Grundausbildung in der Schweiz — mit Kopf, Hand, Fuss und Herz.
            </p>
            <div className="mt-9">
              <Link to="/ausbildung-anmeldung" className="group inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light">
                Jetzt anmelden <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1B. DREI-KARTEN-BLOCK — direkt unter dem Hero */}
      <HeroActivityCards />

      {/* 2. AUSBILDUNG AUF EINEN BLICK */}
      <HomeTrainingOverview />

      {/* 3. METHODE */}
      <TeachingMethod />

      {/* 4. GALERIE */}
      <HomeImageCollage />
      <section className="pb-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Link to="/ueber-uns" className="inline-flex items-center gap-2 text-sm font-semibold text-citrine-deep underline underline-offset-4 hover:text-citrine">
              Zur Schule <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. GRÜNDER-STORY */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-lift">
                  <OptimizedImage src="https://heilsteinschule.swiss/media/wunderblock/Bruno.jpg" alt="Bruno Vogler Pfeiffer" width={900} className="aspect-[4/5] w-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-4 max-w-[16rem] rounded-2xl glass p-5 shadow-lift sm:-right-8">
                  <p className="font-heading text-lg font-semibold italic text-amethyst">„Steine sind mein Leben, meine Berufung und meine Erfüllung.“</p>
                  <p className="mt-2 text-sm text-muted-foreground">— Bruno Vogler Pfeiffer</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading center={false} eyebrow="Der Gründer" title="Bruno Vogler Pfeiffer" />
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Es ist mein innigster Wunsch, die Steinheilkunde den Menschen näher zu bringen. Die
                Ausbildung ist ein Weg, den wir gemeinsam gehen. Seit 2008
                beschäftige ich mich professionell mit Heilsteinen, meine Ausbildung in analytischer
                Steinheilkunde durchlief ich in Deutschland bei Michael Gienger, Werner Kühni und Walter
                von Holst. Die Heilsteinschule Schweiz habe ich 2011 gegründet.
              </p>
              <Link to="/ueber-uns" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-citrine-deep underline underline-offset-4 hover:text-citrine">
                Mehr über uns <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. TEAM TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Unser Team" title="Menschen mit Herz für Heilsteine" subtitle="Dozentinnen und Dozenten, die ihre Leidenschaft für die Steinheilkunde weitergeben." />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <Link to="/ueber-uns#team" className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift">
                <div className="aspect-square overflow-hidden bg-muted">
                  <OptimizedImage src={m.img} alt={m.name} width={600} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading text-base font-semibold text-amethyst">{m.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{m.role}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/ueber-uns#team" className="inline-flex items-center gap-2 text-sm font-semibold text-amethyst underline underline-offset-4 hover:text-citrine-deep">
            Gesamtes Team ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 7. VIDEO (kompakt) */}
      <SchoolVideoTeaser />

      {/* 8. ABSCHLUSS-CTA (konsolidiert) */}
      <HomeClosingCta />
    </>
  );
}