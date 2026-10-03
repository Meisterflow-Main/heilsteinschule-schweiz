import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ExternalLink, Store, ArrowRight, Truck, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const SHOP_URL = "https://heilstein-shop.com/";

const BENEFITS = [
  { icon: Truck, title: "Versand in die ganze Schweiz", text: "Bequem nach Hause bestellt — Heilsteine, Schmuck und Accessoires." },
  { icon: ShieldCheck, title: "GKS-geprüfte Qualität", text: "Jeder Stein wird auf Echtheit und Qualität geprüft — direkt vom Fachgeschäft." },
  { icon: Sparkles, title: "Grosses Sortiment", text: "Über 100 verschiedene Heilsteine, Mineralien und handgefertigte Unikate." },
];

export default function OnlineShop() {
  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <ShoppingBag className="h-3.5 w-3.5" /> Online einkaufen
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Der <span className="text-gradient-gold">Online-Shop</span> der Heilsteinschule
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Heilsteine, Mineralien und Schmuckstücke bequem von zu Hause bestellen —
              mit der Qualität und Expertise der Heilsteinschule Schweiz.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
            >
              Zum Online-Shop <ExternalLink className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading center={false} eyebrow="heilstein-shop.com" title="Heilsteine online bestellen" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Unter <strong className="text-amethyst">heilstein-shop.com</strong> finden Sie
              unser vollständiges Sortiment an Heilsteinen, Mineralien, Rohsteinen und
              handgefertigten Schmuckstücken. Der Online-Shop ist die ideale Möglichkeit,
              Heilsteine bequem von zu Hause aus zu bestellen — egal, ob Sie Schülerin oder
              Schüler der Heilsteinschule sind oder sich einfach für die Kraft der Steine
              interessieren.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Schülerinnen und Schüler der Heilsteinschule erhalten im Online-Shop 20% Rabatt
              auf die meisten Artikel.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
            >
              Jetzt stöbern <ExternalLink className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-citrine/15">
                    <b.icon className="h-5 w-5 text-citrine-deep" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-amethyst">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-lift sm:p-10">
              <div className="flex items-center gap-3">
                <Store className="h-6 w-6 text-citrine-deep" />
                <h2 className="font-heading text-xl font-semibold text-amethyst">
                  Shop & Praxis in Asp
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Der Online-Shop ist <strong className="text-amethyst">nicht</strong> identisch mit
                dem physischen Laden. Unser Heilsteinshop vor Ort befindet sich in Asp — dort
                können Sie Steine in die Hand nehmen, sich persönlich beraten lassen und die
                Praxisräume besuchen.
              </p>
              <Link
                to="/laden-praxis"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-quartz"
              >
                Shop & Praxis in Asp entdecken <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}