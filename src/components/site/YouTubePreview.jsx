import React, { useState } from "react";
import { Play } from "lucide-react";
import YouTubeEmbed from "@/components/site/YouTubeEmbed";

// Zeigt das YouTube-Vorschaubild (kein schwarzer Kasten) und spielt den Film erst beim Klick.
export default function YouTubePreview({ id, title = "Lehrfilm" }) {
  const [playing, setPlaying] = useState(false);

  if (playing) return <YouTubeEmbed id={id} title={title} />;

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden bg-muted"
      aria-label={`Video abspielen: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        onError={(e) => {
          e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        }}
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-amethyst-deep/20 transition group-hover:bg-amethyst-deep/30">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-citrine/90 shadow-lift transition group-hover:scale-110">
          <Play className="h-7 w-7 fill-amethyst-deep text-amethyst-deep" />
        </span>
      </span>
    </button>
  );
}