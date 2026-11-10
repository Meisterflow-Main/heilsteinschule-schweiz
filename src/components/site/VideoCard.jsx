import React, { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import YouTubeEmbed from "@/components/site/YouTubeEmbed";

/**
 * VideoCard — Thumbnail mit Play-Button-Overlay, der Film wird erst beim Klick geladen.
 * Der Film läuft als YouTube-Einbettung, das Vorschaubild kommt von YouTube.
 */
export default function VideoCard({ title, category, date, dateLabel, text, youtubeId, shop }) {
  const [playing, setPlaying] = useState(false);

  const label = `${category} · ${dateLabel || date}`;
  const thumbnail = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:shadow-lift">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {playing ? (
          <YouTubeEmbed id={youtubeId} title={title} />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group relative h-full w-full"
            aria-label={`Video abspielen: ${title}`}
          >
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
              }}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-citrine/90 shadow-lift transition group-hover:scale-110">
                <Play className="h-7 w-7 fill-amethyst-deep text-amethyst-deep" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <span className="font-mono text-xs uppercase tracking-wider text-citrine-deep">{label}</span>
        <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug text-amethyst">{title}</h3>
        {text && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {!playing && (
            <button
              onClick={() => setPlaying(true)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amethyst underline underline-offset-2 hover:text-citrine-deep"
            >
              <Play className="h-4 w-4" /> Video ansehen
            </button>
          )}
          {shop && (
            <a
              href={shop}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep underline underline-offset-2 hover:text-citrine"
            >
              <ExternalLink className="h-4 w-4" /> Zum Online-Shop
            </a>
          )}
        </div>
      </div>
    </div>
  );
}