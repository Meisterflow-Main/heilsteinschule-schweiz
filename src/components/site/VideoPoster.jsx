import React from "react";
import { Play } from "lucide-react";

// Vorschaubild des Films — ein Klick öffnet das Video auf YouTube.
export default function VideoPoster({ id, title = "Lehrfilm", poster }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Video auf YouTube ansehen: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden bg-quartz"
    >
      <img
        src={poster}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-amethyst-deep/20 transition group-hover:bg-amethyst-deep/30">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-citrine shadow-lift transition group-hover:scale-110 sm:h-20 sm:w-20">
          <Play className="h-8 w-8 fill-amethyst-deep text-amethyst-deep" />
        </span>
      </span>
    </a>
  );
}