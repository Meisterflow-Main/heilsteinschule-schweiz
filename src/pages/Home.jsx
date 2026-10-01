import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Hand, Brain, Footprints, Sparkles, Play } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import HistoryTimeline from "@/components/site/HistoryTimeline";
import StoneCollage from "@/components/site/StoneCollage";
import MineralSelection from "@/components/site/MineralSelection";
import WernerKuehniMemorial from "@/components/site/WernerKuehniMemorial";
import LearningActivities from "@/components/site/LearningActivities";
import BookPromo from "@/components/site/BookPromo";
import OptimizedImage from "@/components/site/OptimizedImage";

const PRINCIPLES = [
  { icon: Brain, label: "Kopf", text: "Analytisches Wissen, welches erklärt, warum und wie die Heilsteine wirken.", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/85e503e9c_WhatsAppImage2026-09-22at0205382.jpeg" },
  { icon: Hand, label: "Hand", text: "Die Kraft der Steine erleben und spüren, Methoden für Körper und Psyche erlernen.", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/e02f39734_WhatsAppImage2026-09-22at0205362.jpeg" },
  { icon: Footprints, label: "Fuss", text: "Die Steine unterwegs in den Alpen erfahren und die Mineralien unmittelbar erleben.", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/718ef1e15_WhatsAppImage2026-09-22at02053610.jpeg" },
  { icon: Heart, label: "Herz", text: "Neugierde und Faszination als Startkapital — Liebe und Leidenschaft entstehen.", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/d23c00bb6_WhatsAppImage2026-09-23at131934.jpeg" },
];

const TEAM = [
  { name: "Bruno Vogler Pfeiffer", role: "Schul-Gründer & Schulleiter", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/e7dc15219_ChatGPTImageSep30202602_17_44AM.png" },
  { name: "Ruth Rios", role: "Hauptdozentin", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/460e2670f_ChatGPTImageSep21202602_29_12PM.png" },
  { name: "Pascal Bossard", role: "Leiter Alpenseminar", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/057e4eb82_ChatGPTImageSep21202602_32_05PM.png" },
  { name: "Sarah Ziegenhagen", role: "Dozentin Uster ZH", img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/744f004b6_ChatGPTImageSep21202602_35_44PM.png" },
];

export default function Home() {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const v = heroVideoRef.current;
    if (v) {
      const setRate = () => { v.playbackRate = 0.35; };
      v.addEventListener("loadedmetadata", setRate);
      if (v.readyState >= 1) setRate();
      return () => v.removeEventListener("loadedmetadata", setRate);
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Nahaufnahme natürlicher Amethyst-Kristalle"
            className="h-full w-full object-cover object-center"
          >
            <source src="https://media.base44.com/videos/public/6aa92ec5274311c12da18ee6/dd0714200_Hero_Crystal_Macro.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-amethyst-deep/40 via-amethyst/10 to-amethyst-deep/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep/45 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-28 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Sparkles className="h-3.5 w-3.5" /> Seit 2011 · SVNH zertifiziert
            </div>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Heilsteinkraft
              <span className="block text-gradient-gold">erfahren, spüren, lernen</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
              An der Heilsteinschule Schweiz wird mit Kopf, Hand, Fuss und Herz gelehrt und gelernt.
              Wir vermitteln analytisches Wissen über die Heilsteine und lassen Sie ihre vielfältigen
              Wirkungen erfahren.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/ausbildung"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
              >
                Ausbildung entdecken
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/info-tag"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <Play className="h-4 w-4" /> Kostenloser Info-Tag
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-white/10 bg-amethyst-deep/40">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:grid-cols-4 sm:px-6">
            {[
              { n: "2011", l: "Gegründet" },
              { n: "4", l: "Schulstandorte" },
              { n: "SVNH", l: "Zertifiziert" },
              { n: "GKS", l: "Geprüfte Steine" },
            ].map((s) => (
              <div key={s.l} className="px-2 py-7 text-center">
                <div className="font-heading text-3xl font-bold text-citrine-light sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINERALIENAUSWAHL */}
      <MineralSelection />

      {/* LERNEN BEI UNS — Schule, Menschen & Naturerlebnis */}
      <LearningActivities />

      {/* LEITBILD */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-lift">
                <OptimizedImage
                  src="https://heilsteinschule.swiss/media/wunderblock/Bruno.jpg"
                  alt="Bruno Vogler Pfeiffer"
                  width={900}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 max-w-[16rem] rounded-2xl glass p-5 shadow-lift sm:-right-8">
                <p className="font-heading text-lg font-semibold italic text-amethyst">
                  „Steine sind mein Leben, meine Berufung und meine Erfüllung.“
                </p>
                <p className="mt-2 text-sm text-muted-foreground">— Bruno Vogler Pfeiffer</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              center={false}
              eyebrow="Unser Leitbild"
              title="Lehren und lernen mit Kopf, Hand, Fuss und Herz"
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Es ist mein innigster Wunsch, die Steinheilkunde den Menschen näher zu bringen. Die
              Ausbildung ist ein Weg, den wir mit Kopf, Hand, Fuss und Herz gemeinsam gehen. Seit 2008
              beschäftige ich mich professionell mit Heilsteinen, meine Ausbildung in analytischer
              Steinheilkunde durchlief ich in Deutschland bei Michael Gienger, Werner Kühni und Walter
              von Holst. Die Heilsteinschule Schweiz habe ich 2011 gegründet.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div key={p.label} className="flex gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-amethyst">{p.label}</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </Reveal>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Unser Team"
              title="Menschen mit Herz für Heilsteine"
              subtitle="Dozentinnen und Dozenten, die ihre Leidenschaft für die Steinheilkunde weitergeben."
            />
          </Reveal>
          {/* Dozenten-Team im Alpenseminar */}
          <Reveal>
            <div className="mb-10 overflow-hidden rounded-3xl border border-border bg-muted shadow-soft">
              <OptimizedImage
                src="https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/ffaf18a07_WhatsAppImage2026-09-23at105952.jpeg"
                alt="Dozenten-Team der Heilsteinschule Schweiz im Alpenseminar"
                width={1280}
                className="mx-auto w-full max-w-3xl object-contain"
              />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <Link to="/ueber-uns#team" className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:border-citrine hover:shadow-lift">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <OptimizedImage
                      src={m.img}
                      alt={m.name}
                      width={600}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
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
            <Link
              to="/ueber-uns#team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amethyst underline underline-offset-4 hover:text-citrine-deep"
            >
              Gesamtes Team ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BUCH-PROMOTION */}
      <BookPromo />

      {/* WERNER KÜHNI — IN LIEBEVOLLER ERINNERUNG */}
      <WernerKuehniMemorial />

      {/* HISTORIE TIMELINE */}
      <HistoryTimeline />

      {/* STEIN-COLLAGE */}
      <StoneCollage />

      {/* VIDEO */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="In bewegten Bildern"
            title="Die Heilsteinschule Schweiz stellt sich vor"
            subtitle="Wir stellen uns gerne vor — ein Einblick in unsere Werte, unsere Methode und unsere Leidenschaft."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-black shadow-lift">
            <video
              controls
              preload="none"
              poster="https://www.heilsteinschule.swiss/media/Filme/Vorstellung_Film.png"
              className="aspect-video w-full"
            >
              <source
                src="https://www.heilsteinschule.swiss/media/Filme/Heilsteinschule_Schweiz_Vorstellung.webm"
                type="video/webm"
              />
            </video>
          </div>
        </Reveal>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg"
            alt=""
            width={1600}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <svg viewBox="0 0 32 32" className="h-5 w-5" aria-label="Schweizer Flagge" role="img">
                <rect width="32" height="32" rx="4" fill="#D52B1E" />
                <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
                <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">Made in Switzerland</span>
            </div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
              Vertrauen Sie auf die <span className="text-gradient-gold">Kräfte der Natur</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
              Begleiten Sie uns auf unserer Reise und lassen Sie sich von der Steinheilkunde begeistern.
              Steine werden zu Heilsteinen und Lebensbegleitern und berühren unsere Seele.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
              >
                Jetzt anfragen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/info-tag"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Info-Tag besuchen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}