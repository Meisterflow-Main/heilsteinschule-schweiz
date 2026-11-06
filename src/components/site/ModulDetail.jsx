import React from "react";
import { Info } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

export default function ModulDetail({
  eyebrow,
  title,
  subtitle,
  intro,
  items,
  closing,
  note,
  className = "border-y border-border bg-background",
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </Reveal>

        {intro && (
          <Reveal delay={0.06}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          </Reveal>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.nr} delay={0.05 * i}>
              <div className="flex h-full gap-5 rounded-3xl border border-border bg-white p-7 shadow-soft">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrine/15 text-citrine-deep">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.15em] text-amethyst/40">{it.nr}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-amethyst">{it.title}</h3>
                  {it.lead && <p className="mt-1 text-sm font-medium text-citrine-deep">{it.lead}</p>}
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {closing && (
          <Reveal>
            <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-citrine/30 bg-citrine/5 p-6 text-center text-sm leading-relaxed text-amethyst">
              {closing}
            </p>
          </Reveal>
        )}

        {note && (
          <Reveal>
            <p className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-citrine-deep" />
              <span>{note}</span>
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}