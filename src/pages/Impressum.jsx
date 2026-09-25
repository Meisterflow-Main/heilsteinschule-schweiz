import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

export default function Impressum() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading center={false} eyebrow="Angaben gemäss Impressum" title="Impressum" />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <h3 className="font-heading text-lg font-semibold text-amethyst">Heilsteinschule Schweiz</h3>
            <p className="mt-3">Heilsteinshop-Asp</p>
            <p>Bruno Vogler Pfeiffer</p>
            <p className="mt-2">Dorfstrasse 22</p>
            <p>5025 Asp</p>
            <p>Schweiz</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <h3 className="font-heading text-base font-semibold text-amethyst">Kontakt</h3>
            <p className="mt-2">Tel. Nr.: 079 389 66 22</p>
            <p>Firmen Nr.: CHE-160.366.095</p>
            <p>E-Mail: anfragen(at)heilsteinschule(dot)ch</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <h3 className="font-heading text-base font-semibold text-amethyst">Hinweis</h3>
            <p className="mt-2">
              Templates und diverse Modules: Source wbce.org / wbce.at.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}