import React from "react";
import { Star } from "lucide-react";

export const GOOGLE_REVIEWS_URL =
  "https://search.google.com/local/writereview?placeid=ChIJVxaKoeE4kEcROaMKmfGkyww";

export default function GoogleReviewCard({
  title = "Bewerten Sie uns auf Google",
  text = "Sie waren bei uns in der Ausbildung oder im Shop? Wir freuen uns sehr über Ihre Bewertung auf Google.",
}) {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-8 text-center shadow-soft">
      <div className="flex items-center justify-center gap-2">
        <Star className="h-5 w-5 fill-citrine text-citrine" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-citrine-deep">Google-Bewertungen</span>
        <Star className="h-5 w-5 fill-citrine text-citrine" />
      </div>
      <h2 className="mt-4 font-heading text-xl font-bold text-amethyst sm:text-2xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{text}</p>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-amethyst px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-amethyst-deep"
      >
        <Star className="h-4 w-4" /> Auf Google bewerten
      </a>
    </div>
  );
}