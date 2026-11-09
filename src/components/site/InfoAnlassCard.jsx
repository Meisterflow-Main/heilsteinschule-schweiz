import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Wallet, Phone, ArrowRight } from "lucide-react";
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

export default function InfoAnlassCard({ infoabend, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full flex-col rounded-3xl border border-citrine bg-white p-7 shadow-soft transition hover:shadow-lift">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-citrine px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amethyst-deep">
          <CalendarDays className="h-3.5 w-3.5" /> Infoanlässe
        </span>
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
          <Link
            to="/kontakt?anlass=Infoanlass"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-citrine px-5 py-2.5 text-sm font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light"
          >
            Online anmelden <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}