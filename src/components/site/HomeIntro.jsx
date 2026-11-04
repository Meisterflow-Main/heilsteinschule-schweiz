import React from "react";
import { BadgeCheck } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const ZERTIFIKATE = ["GKS-zertifiziert", "SVNH-zertifiziert nach AL2"];

export default function HomeIntro() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-px w-8 bg-citrine" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">
              Die Heilsteinschule Schweiz
            </span>
          </div>

          <p className="font-heading text-xl leading-relaxed text-amethyst sm:text-2xl">
            Seit 2008 beschäftige ich mich professionell mit Heilsteinen. Meine Ausbildung in analytischer
            Steinheilkunde durchlief ich in Deutschland bei Michael Gienger, Werner Kühni und Walter von Holst.
          </p>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Es ist mein innigster Wunsch, die analytische Steinheilkunde allen Menschen zugänglich zu machen.
            Aus diesem Grund wurde die Heilsteinschule Schweiz im Jahr 2011 gegründet.
          </p>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sie ist GKS-zertifiziert (gemmologisch kontrollierte Steinqualität) und zertifiziert vom SVNH
            nach AL2 (Schweizerischer Verband für natürliches Heilen).
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {ZERTIFIKATE.map((z) => (
              <span
                key={z}
                className="inline-flex items-center gap-1.5 rounded-full border border-citrine/40 bg-secondary px-3 py-1.5 text-xs font-semibold text-amethyst"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-citrine-deep" /> {z}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}