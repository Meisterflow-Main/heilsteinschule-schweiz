import React from "react";

// Spielt einen YouTube-Film direkt im Layout ab (datensparsam über youtube-nocookie).
export default function YouTubeEmbed({ id, title = "Lehrfilm", autoplay = true, className = "" }) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-muted ${className}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0${autoplay ? "&autoplay=1" : ""}`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}