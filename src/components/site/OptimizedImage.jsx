import React, { useEffect, useMemo, useState } from "react";

const WSRV = "https://wsrv.nl/?";

function isOptimizable(src) {
  if (!src) return false;
  if (src.startsWith("data:") || src.startsWith("blob:")) return false;
  if (/\.svg($|\?)/i.test(src)) return false;
  return /^https?:\/\//i.test(src);
}

function buildUrl(src, width) {
  if (!isOptimizable(src)) return src;
  const params = new URLSearchParams({ url: src, output: "webp", q: "72" });
  if (width) params.set("w", String(width));
  return WSRV + params.toString();
}

/**
 * Drop-in <img> replacement that re-encodes remote images to WebP at the
 * requested width via a caching proxy (wsrv.nl), falling back to the
 * original URL on any error. Preserves the exact layout of a plain <img>.
 */
export default function OptimizedImage({
  src,
  width = 1000,
  alt = "",
  loading = "lazy",
  className = "",
  ...props
}) {
  const original = src;
  const optimized = useMemo(() => buildUrl(src, width), [src, width]);
  const [current, setCurrent] = useState(optimized);

  useEffect(() => {
    setCurrent(buildUrl(src, width));
  }, [src, width]);

  return (
    <img
      src={current}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => {
        if (current !== original) setCurrent(original);
      }}
      {...props}
    />
  );
}