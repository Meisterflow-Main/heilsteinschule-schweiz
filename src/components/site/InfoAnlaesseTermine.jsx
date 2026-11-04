import React from "react";
import InfoAnlassCard from "@/components/site/InfoAnlassCard";
import SeminarCard from "@/components/site/SeminarCard";

export default function InfoAnlaesseTermine({ infoabend, seminar }) {
  return (
    <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
      <InfoAnlassCard infoabend={infoabend} delay={0.05} />
      <SeminarCard seminar={seminar} delay={0.1} />
    </div>
  );
}