import React from "react";

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-citrine" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">{eyebrow}</span>
          <span className="h-px w-8 bg-citrine" />
        </div>
      )}
      <h2 className={`font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem] ${light ? "text-white" : "text-amethyst"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}