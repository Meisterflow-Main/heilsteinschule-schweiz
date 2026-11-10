import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Video, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import YouTubeEmbed from "@/components/site/YouTubeEmbed";

const SHOP_HEILSTEINE = "https://heilstein-shop.com/heilsteine/";

export default function SchoolVideoTeaser() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
      <Reveal>
        <div className="rounded-3xl border border-border bg-white p-6 text-center shadow-soft sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-amethyst sm:text-2xl">
            Die Heilsteinschule Schweiz stellt sich vor
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ein Einblick in unsere Werte, unsere Methode und unsere Leidenschaft.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex items-center gap-2 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-amethyst-soft"
            >
              <Play className="h-4 w-4" /> {open ? "Video schliessen" : "Video ansehen"}
            </button>
            <Link
              to="/lehrfilme"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-amethyst transition hover:bg-muted"
            >
              <Video className="h-4 w-4" /> Weitere Lehrfilme ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {open && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-black shadow-lift">
              <YouTubeEmbed id="Xy5rBRUfoSs" title="Die Heilsteinschule Schweiz stellt sich vor" />
            </div>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <a
            href={SHOP_HEILSTEINE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 underline underline-offset-4 transition hover:text-citrine-deep"
          >
            Mineralien im Porträt <ArrowRight className="h-3.5 w-3.5" /> Shop
          </a>
        </p>
      </Reveal>
    </section>
  );
}