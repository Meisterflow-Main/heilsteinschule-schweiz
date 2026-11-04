import React from "react";
import { Link } from "react-router-dom";
import { Clock, Check, ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/site/Reveal";

export default function SeminarCard({ seminar, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:shadow-lift">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-citrine px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amethyst-deep">
          <GraduationCap className="h-3.5 w-3.5" /> Seminare
        </span>
        <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-citrine-deep">
          <Clock className="h-3.5 w-3.5" /> {seminar.time}
        </div>
        <h3 className="mt-2 font-heading text-lg font-semibold text-amethyst">{seminar.displayDate}</h3>
        <p className="mt-1 text-sm font-medium text-amethyst">{seminar.leitung}</p>
        <h4 className="mt-4 font-heading text-base font-semibold text-amethyst">{seminar.title}</h4>
        <ul className="mt-3 space-y-1.5">
          {seminar.inklusive.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" /> {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
            <span className="text-sm font-medium text-muted-foreground">Kurskosten Total</span>
            <span className="font-heading text-xl font-bold text-amethyst">{seminar.preis}</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{seminar.hinweis}</p>
          <Link
            to="/kontakt"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-citrine px-5 py-2.5 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
          >
            Anmelden <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}