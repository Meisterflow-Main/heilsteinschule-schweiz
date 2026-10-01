import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import OptimizedImage from "@/components/site/OptimizedImage";

export default function BookPromo() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border bg-white shadow-lift md:grid-cols-2">
          <div className="overflow-hidden">
            <OptimizedImage
              src="https://heilsteinschule.swiss/media/Brunos_Buch/20251103_132034.jpg"
              alt="Buch — Reise zu mir selbst — Bruno Vogler Pfeiffer"
              width={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8 sm:p-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-citrine/15 px-3 py-1 text-xs font-medium text-citrine-deep">
              <BookOpen className="h-3.5 w-3.5" /> Jetzt im Handel
            </div>
            <h3 className="font-heading text-2xl font-semibold text-amethyst">Reise zu mir selbst</h3>
            <p className="mt-1 text-sm text-muted-foreground">ISBN 9798269951614 · Bruno Vogler Pfeiffer</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Die Lebensgeschichte des Schulgründers — vom Handwerk über die Polizei zurück zu den
              eigenen Wurzeln, über Reisen, Heilung und die Hinwendung zur Steinheilkunde. Eine
              Biografie, die ohne grosse Gesten auskommt und gerade dadurch berührt.
            </p>
            <Link
              to="/brunos-buch"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-6 py-3 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
            >
              Zum Buch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}