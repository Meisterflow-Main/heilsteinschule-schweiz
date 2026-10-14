import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, Award, Users, Hand, MapPin, Phone, Mail, Clock, Navigation,
  ChevronDown, Star, ArrowRight, CheckCircle2, Calendar,
} from "lucide-react";

const iconMap = { Sparkles, Award, Users, Hand };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-base font-semibold text-amethyst sm:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-citrine-deep transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function RegionLanding({ region }) {
  const r = region;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.contact.address)}`;

  return (
    <div className="bg-background">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-amethyst-deep pt-32 pb-20 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--citrine) / 0.4), transparent 45%), radial-gradient(circle at 80% 70%, hsl(var(--amethyst-soft) / 0.6), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-citrine-light" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-light">{r.hero.eyebrow}</span>
            </div>
            <h1 className="max-w-4xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {r.hero.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {r.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/info-nachmittag" className="inline-flex items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light">
                <Calendar className="h-4 w-4" /> Jetzt Termin buchen
              </Link>
              <Link to="/ausbildung" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Preis berechnen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VERTRAUENSELEMENTE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {r.usps.map((u, i) => {
            const Icon = iconMap[u.icon] || Sparkles;
            return (
              <motion.div key={i} variants={item} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15">
                  <Icon className="h-5 w-5 text-citrine-deep" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-amethyst">{u.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{u.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 3. KONTAKT */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
          <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-10">
            <div>
              <h2 className="font-heading text-2xl font-bold text-amethyst">Kontakt &amp; Standort</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{r.contact.intro}</p>
              <ul className="mt-6 space-y-4 text-sm sm:text-base">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" /><span className="text-foreground/80">{r.contact.address}</span></li>
                <li><a href={`tel:${r.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground/80 transition hover:text-amethyst"><Phone className="h-5 w-5 shrink-0 text-citrine-deep" /> {r.contact.phone}</a></li>
                <li><a href={`mailto:${r.contact.email}`} className="flex items-center gap-3 text-foreground/80 transition hover:text-amethyst"><Mail className="h-5 w-5 shrink-0 text-citrine-deep" /> {r.contact.email}</a></li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" />
                  <Link to="/laden-praxis" className="text-citrine-deep underline underline-offset-2 hover:text-citrine">Termine / Öffnungszeiten ansehen</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-amethyst-soft">
                <Navigation className="h-4 w-4" /> Google Maps öffnen
              </a>
              <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-muted">
                Nachricht senden <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. LEISTUNGEN */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-amethyst sm:text-4xl">Unsere Leistungen in {r.city}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{r.services.intro}</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mt-12 grid gap-6 md:grid-cols-3">
          {r.services.items.map((s, i) => (
            <motion.div key={i} variants={item} className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amethyst/10"><Sparkles className="h-6 w-6 text-amethyst" /></div>
              <h3 className="font-heading text-lg font-bold text-amethyst">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Link to={s.link || "/ausbildung"} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-citrine-deep">Mehr erfahren <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. WARUM UNS */}
      <section className="bg-quartz py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold text-amethyst sm:text-4xl">Warum Kundinnen aus {r.city} uns wählen</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{r.whyUs.intro}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {r.whyUs.reasons.map((w, i) => (
              <motion.div key={i} variants={item} className="flex gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-amethyst">{w.headline}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="mt-10">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light">
              {r.whyUs.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. AUSBILDUNGSKOSTEN */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="overflow-hidden rounded-3xl bg-amethyst p-8 text-white shadow-lift lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ausbildungskosten</h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">{r.costs.intro}</p>
              <Link to="/kontakt" className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep transition hover:bg-citrine-light">
                {r.costs.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-3">
              {r.costs.items.map((c, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-citrine-light" />
                  <span className="text-sm text-white/90 sm:text-base">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 7. BEWERTUNGEN */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-amethyst sm:text-4xl">Bewertungen aus {r.city}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{r.reviews.intro}</p>
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-white px-8 py-5 shadow-soft">
            <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-citrine text-citrine" />)}</div>
            <div className="text-left">
              <div className="font-heading text-2xl font-bold text-amethyst">{r.reviews.rating}</div>
              <div className="text-xs text-muted-foreground">{r.reviews.count}</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/auftrag-bewerten" className="inline-flex items-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white transition hover:bg-amethyst-soft">
              Alle Bewertungen ansehen
            </Link>
            <Link to="/auftrag-bewerten" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-muted">
              Bewertung schreiben <Star className="h-4 w-4 text-citrine-deep" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-quartz py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="text-center">
            <h2 className="font-heading text-3xl font-bold text-amethyst sm:text-4xl">Häufige Fragen aus {r.city}</h2>
            <p className="mt-4 text-base text-muted-foreground">Antworten zu Ausbildung, Kosten und Ablauf am Standort {r.city}.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mt-10 space-y-3">
            {r.faq.map((f, i) => (
              <motion.div key={i} variants={item}><FAQItem q={f.q} a={f.a} index={i} /></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. WEITERE LEISTUNGEN */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <h2 className="font-heading text-2xl font-bold text-amethyst sm:text-3xl">Weitere Leistungen</h2>
          <p className="mt-3 text-sm text-muted-foreground">Entdecken Sie das gesamte Angebot der Heilsteinschule Schweiz.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {r.otherServices.map((s, i) => (
              <Link key={i} to={s.to} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-amethyst transition hover:border-citrine hover:bg-citrine/10">
                {s.label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 10. EINZUGSGEBIET */}
      <section className="bg-amethyst-deep py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeRight}>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Einzugsgebiet rund um {r.city}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">{r.area.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {r.area.places.map((p, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
                  <MapPin className="h-3.5 w-3.5 text-citrine-light" /> {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. ABSCHLUSS CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={zoomIn} className="overflow-hidden rounded-3xl bg-gradient-to-br from-amethyst to-amethyst-deep p-10 text-center text-white shadow-lift sm:p-16">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">{r.finalCta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{r.finalCta.text}</p>
          <Link to="/info-nachmittag" className="mt-8 inline-flex items-center gap-2 rounded-full bg-citrine px-8 py-3.5 text-sm font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light">
            <Calendar className="h-4 w-4" /> {r.finalCta.button}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}