import React from "react";
import { ShieldCheck, Users } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Seit 2011" },
  { icon: ShieldCheck, label: "SVNH-zertifiziert" },
  { icon: Users, label: "5–8 Teilnehmer" },
];

export default function HomeTrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-citrine-deep" />
              <span className="text-sm font-medium text-amethyst">{item.label}</span>
              {i < ITEMS.length - 1 && <span className="hidden text-border sm:inline">·</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}