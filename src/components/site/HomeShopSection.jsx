import React from "react";
import { Link } from "react-router-dom";
import { Store, ShoppingBag, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const SHOP_URL = "https://heilstein-shop.com/";

export default function HomeShopSection() {
  return (
    <>
      {/* Shop & Praxis — physical location in Asp */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <OptimizedImage
                src="https://heilsteinschule.swiss/media/wunderblock/Schule_Asp_n_he_Quelle.jpg"
                alt="Heilsteinshop Asp"
                width={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading center={false} eyebrow="In Asp" title="Shop & Praxis vor Ort" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Der physische Heilsteinshop und die Praxis der Heilsteinschule befinden sich in{" "}
              <strong className="text-amethyst">Asp</strong> im Fricktal. Hier können Sie Steine
              in die Hand nehmen, sich persönlich beraten lassen und die Praxisräume besuchen.
            </p>
            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-citrine-deep" />
              <p className="text-sm text-muted-foreground">Dorfstrasse 22, 5025 Asp, Schweiz</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/laden-praxis" className="inline-flex items-center justify-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light">
                <Store className="h-4 w-4" /> Shop & Praxis entdecken <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-muted">
                <ShoppingBag className="h-4 w-4" /> Zum Online-Shop <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Online-Shop — separate section */}
      <section className="bg-amethyst text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
                  <ShoppingBag className="h-3.5 w-3.5" /> Online einkaufen
                </div>
                <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                  Heilsteine bequem online bestellen
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
                  Unter heilstein-shop.com finden Sie unser vollständiges Sortiment an Heilsteinen,
                  Mineralien und Schmuck. Schülerinnen und Schüler erhalten 20% Rabatt.
                </p>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light">
                  Zum Online-Shop <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
                <p className="text-sm leading-relaxed text-white/70">
                  <strong className="text-citrine-light">Gut zu wissen:</strong> Der Online-Shop
                  ist ein eigenständiges Angebot und nicht identisch mit dem physischen Laden in
                  Asp. Beide ergänzen sich — online bestellen, vor Ort erleben.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}