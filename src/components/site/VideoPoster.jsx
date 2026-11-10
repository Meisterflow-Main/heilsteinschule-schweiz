import React, { useState } from "react";
import { Play } from "lucide-react";
import YouTubeEmbed from "@/components/site/YouTubeEmbed";

// Vorschaubild des Films — erst beim Klick startet das Video.
export default function VideoPoster({ id, title = "Lehrfilm" }) {
  const [playing, setPlaying] = useState(false);

  if (playing) return <YouTubeEmbed id={id} title={title} autoplay />;

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Video abspielen: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden bg-quartz"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        }}
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-amethyst-deep/25 transition group-hover:bg-amethyst-deep/35">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-citrine shadow-lift transition group-hover:scale-110 sm:h-20 sm:w-20">
          <Play className="h-8 w-8 fill-amethyst-deep text-amethyst-deep" />
        </span>
      </span>
    </button>
  );
}