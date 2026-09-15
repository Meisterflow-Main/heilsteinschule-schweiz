import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getRegionBySlug } from "@/data/regions";
import RegionLanding from "@/components/regions/RegionLanding";
import PageNotFound from "@/lib/PageNotFound";

export default function RegionPage() {
  const { slug } = useParams();
  const region = getRegionBySlug(slug);

  useEffect(() => {
    if (region) {
      document.title = region.metaTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", region.metaDescription);
    }
    return () => {
      document.title = "Heilsteinschule Schweiz – Heilsteinberater Ausbildung";
    };
  }, [region]);

  if (!region) return <PageNotFound />;
  return <RegionLanding region={region} />;
}