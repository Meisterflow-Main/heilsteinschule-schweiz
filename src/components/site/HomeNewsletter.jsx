import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

const WEBHOOK_URL = "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

export default function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !consent) return;
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter_signup", email: email.trim() }),
      });
      if (!res.ok) throw new Error("error");
      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
          <Reveal>
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-citrine-deep" />
            <h2 className="font-heading text-2xl font-bold text-amethyst">Vielen Dank!</h2>
            <p className="mt-2 text-muted-foreground">Ihre Anmeldung ist eingegangen. Wir melden uns schnellstmöglich.</p>
            <Link to="/news" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-citrine-deep hover:underline">
              Zum Newsletter-Archiv <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-quartz/60">
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Newsletter"
            title="Bleiben Sie informiert"
            subtitle="Erhalten Sie News, Termine und Inspirationen rund um die Heilsteinschule Schweiz."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-soft">
              <Mail className="h-5 w-5 shrink-0 text-citrine-deep" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                required
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <label className="flex items-start gap-3 text-xs text-muted-foreground">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-citrine focus:ring-citrine/20" />
              <span>Ich möchte den Newsletter abonnieren und stimme der Verarbeitung meiner Daten gemäss Datenschutzerklärung zu.</span>
            </label>
            <button type="submit" disabled={status === "loading" || !consent || !email.trim()} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amethyst px-6 py-3.5 font-semibold text-white shadow-soft transition hover:bg-amethyst-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet…</> : <>Newsletter abonnieren <ArrowRight className="h-4 w-4" /></>}
            </button>
            {status === "error" && <p className="text-xs text-destructive">Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</p>}
          </form>
          <div className="mt-6 text-center">
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-medium text-citrine-deep hover:underline">
              Zum Newsletter-Archiv <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}