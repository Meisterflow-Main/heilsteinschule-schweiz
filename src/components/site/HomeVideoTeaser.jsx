import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Video } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const POSTER = "https://www.heilsteinschule.swiss/media/Filme/Vorstellung_Film.png";
const SRC = "https://www.heilsteinschule.swiss/media/Filme/Heilsteinschule_Schweiz_Vorstellung.webm";

export default function HomeVideoTeaser() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
      <Reveal>
        <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amethyst/10 text-amethyst">
                <Video className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-heading text-base font-semibold text-amethyst">
                  Die Heilsteinschule Schweiz stellt sich vor
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ein kurzer Einblick in unsere Werte und unsere Methode.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-citrine px-5 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
            >
              <Play className="h-4 w-4" /> {open ? "Video schliessen" : "Video ansehen"}
            </button>
          </div>

          {open && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-black">
              <video controls preload="none" poster={POSTER} className="aspect-video w-full">
                <source src={SRC} type="video/webm" />
              </video>
            </div>
          )}

          <div className="mt-5 text-center">
            <Link
              to="/lehrfilme"
              className="inline-flex items-center gap-2 text-sm font-semibold text-citrine-deep underline underline-offset-4 hover:text-citrine"
            >
              Weitere Lehrfilme ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}