import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Wallet, Phone, Check, ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/site/Reveal";

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-citrine/15 text-citrine-deep">
        <Icon className="h-4 w-4" />
      </span>
      <div className="text-sm leading-relaxed">
        <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="text-foreground/85">{children}</span>
      </div>
    </div>
  );
}

function CardLabel({ icon: Icon, children }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-citrine px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amethyst-deep">
      <Icon className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

export default function InfoAnlaesseTermine({ infoabend, seminar }) {
  return (
    <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
      {/* Infoanlässe */}
      <Reveal delay={0.05}>
        <div className="flex h-full flex-col rounded-3xl border border-citrine bg-white p-7 shadow-soft transition hover:shadow-lift">
          <CardLabel icon={CalendarDays}>Infoanlässe</CardLabel>
          <h3 className="mt-4 font-heading text-xl font-semibold text-amethyst">{infoabend.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{infoabend.description}</p>
          <div className="mt-5 space-y-3">
            <Row icon={CalendarDays} label="Datum">{infoabend.displayDate}</Row>
            <Row icon={Clock} label="Zeit">{infoabend.time}</Row>
            <Row icon={Wallet} label="Kosten">{infoabend.kosten}</Row>
            <Row icon={MapPin} label="Veranstaltungsort">
              {infoabend.venue}
              <br />
              {infoabend.address}
            </Row>
            <Row icon={Phone} label="Kontakt">
              <a
                href={`tel:${infoabend.phoneHref}`}
                className="font-medium text-amethyst underline underline-offset-2 hover:text-citrine-deep"
              >
                {infoabend.phone}
              </a>
            </Row>
          </div>
          <div className="mt-auto pt-6">
            <a
              href="#anmeldung"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-citrine px-5 py-2.5 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
            >
              Online anmelden <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>

      {/* Seminare */}
      <Reveal delay={0.1}>
        <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:shadow-lift">
          <CardLabel icon={GraduationCap}>Seminare</CardLabel>
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
    </div>
  );
}