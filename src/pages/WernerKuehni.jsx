import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import WernerKuehniMemorial from "@/components/site/WernerKuehniMemorial";

export default function WernerKuehni() {
  return (
    <>
      <WernerKuehniMemorial />
      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
        <Link
          to="/michael-gienger"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-amethyst transition hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" /> Zur analytischen Steinheilkunde
        </Link>
      </section>
    </>
  );
}