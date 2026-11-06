import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Newspaper, Mail, Loader2, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import OptimizedImage from "@/components/site/OptimizedImage";

const NEWSLETTER_WEBHOOK = "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

const NEWS = [
  {
    date: "16.09.2026",
    title: "Neue Schultermine für Münsingen + Wallbach",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/2e1c57b67_ChatGPTImageSep29202610_05_47PM.png",
    text: "Neue Schultermine für Münsingen 2 (ab 23.01.2027), Wallbach 1 (ab 30.01.2027) und Wallbach 2 (ab 21.01.2027). Alpenseminar 2027: 23.06.–27.06.2027.",
    to: "/ausbildung",
    external: false,
    cta: "Zu den Schulterminen",
  },
  {
    date: "03.09.2026",
    title: "Werner Kühni in Erinnerung",
    img: "https://heilsteinschule.swiss/media/Werner%20Kühni_passt_a_way.jpeg",
    text: "R.I.P. Werner Kühni! Unser letztes Treffen — Heilstein Museum in Stockholm mit Werner Kühni.",
    to: "https://heilsteinschule.swiss/diverses/geologische-reisen/heilstein-museum-2022/",
    external: true,
    cta: "Zum Rückblick",
  },
  {
    date: "11.07.2026",
    title: "Neuer Standort Wallbach AG",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/4a4023a9b_ChatGPTImageSep29202610_11_06PM.png",
    text: "Neuer Ausbildungsstandort der Heilsteinschule Schweiz im Fricktal. Geplanter Lehrgangsstart: Donnerstag, 15. Oktober 2026.",
    to: "/ausbildung",
    external: false,
    cta: "Jetzt anmelden",
  },
  {
    date: "07.03.2026",
    title: "Rückblick der Gesundheitsmesse",
    img: "https://heilsteinschule.swiss/media/Messe_Sempach1_2026.jpeg",
    text: "Wir waren Aussteller an der Gesundheitsmesse der SVNH in Sempach 7.3.26 — interessante Begegnungen und freudvolle Gespräche. Unser Einblick in die wundervolle Welt der Heilsteine durfte berühren.",
    to: "https://svnh.ch/svnh-gesundheitsmesse-in-sempach/",
    external: true,
    cta: "Zum Rückblick",
  },
  {
    date: "01.03.2026",
    title: "Aktion 40% auf ausgewählte Armbänder",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/f4acbf042_ChatGPTImageSep29202610_14_46PM.png",
    fit: "contain",
    text: "Aktuell laufende Aktion: 40% Rabatt auf ausgewählte Armbänder der Kreation diopteia. Diese Armbänder möchten DIR gerne Unterstützung und Schönheit bringen.",
    to: "https://heilstein-shop.com/action/",
    external: true,
    cta: "Zur Aktion im Shop",
  },
  {
    date: "12.11.2025",
    title: "Reise zu mir selbst",
    img: "https://media.base44.com/images/public/6aa92ec5274311c12da18ee6/4e5328fba_Reisezumirselbst_MediterraneLebensreise.png",
    aspect: "aspect-square",
    fit: "contain",
    text: "Jetzt erhältlich. Das neue Buch von Bruno Vogler Pfeiffer — nur per Vorkasse erhältlich.",
    to: "/brunos-buch",
    external: false,
    cta: "Zur Buchseite",
  },
  {
    date: "17.10.2025",
    title: "Zertifizierung Lehrgang Asp6",
    img: "https://heilsteinschule.swiss/media/Zertifizierung_Lehrgang_Asp6_13.jpg",
    text: "Steinheilkunde Grundausbildung — herzliche Gratulation! Feierliche Übergabe der Zertifikate auf der Historischen Burgruine Alt-Tierstein. Klassendurchschnitt mit grandiosen 84 Punkten.",
    to: "https://heilsteinschule.swiss/posts/zertifizierung-lehrgang-asp6-37/",
    external: true,
    cta: "Weiterlesen",
  },
];

const NEWSLETTER = [
  { d: "Oktober 2025", l: "Newsletter Oktober 2025", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=16&a=" },
  { d: "September 2025", l: "Newsletter September 2025", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=15&a=" },
  { d: "März 2025", l: "Newsletter März 2025", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=13&a=" },
  { d: "Januar 2025", l: "Newsletter Januar 2025", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=11&a=" },
  { d: "Dezember 2024", l: "Newsletter Dezember 2024", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=10&a=" },
  { d: "November 2024", l: "Newsletter November 2024", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=9&a=" },
  { d: "Juni 2024", l: "Newsletter Juni 2024", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=8&a=" },
  { d: "April 2024", l: "Newsletter April 2024", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=6&a=" },
  { d: "März 2024", l: "Newsletter März 2024", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=4&a=" },
  { d: "Februar 2024", l: "Newsletter Februar 2024", url: "https://heilsteinschule.swiss/modules/tiny_newsletter/web.php?n=1&a=" },
];

export default function Aktuelles() {
  const [nlName, setNlName] = React.useState("");
  const [nlEmail, setNlEmail] = React.useState("");
  const [nlConsent, setNlConsent] = React.useState(false);
  const [nlStatus, setNlStatus] = React.useState("idle");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!nlEmail.trim() || !nlConsent) return;
    setNlStatus("loading");
    try {
      const res = await fetch(NEWSLETTER_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nlName.trim() || "Newsletter Anmeldung",
          email: nlEmail.trim(),
          phone: "nicht angegeben",
          description: "Newsletter Anmeldung über die News-Seite",
        }),
      });
      if (!res.ok) throw new Error("error");
      setNlStatus("success");
      setNlName("");
      setNlEmail("");
      setNlConsent(false);
    } catch {
      setNlStatus("error");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage src="https://heilsteinschule.swiss/media/Ruth_Bruno_Aug_25_2.jpg" width={1600} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Newspaper className="h-3.5 w-3.5" /> Aktuelles
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">News & „Nius Lätter"</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Bleiben Sie auf dem Laufenden — Neuigkeiten aus der Heilsteinschule, neue Standorte,
              Aktionen und Veranstaltungen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className={`${n.aspect ?? "aspect-[16/10]"} overflow-hidden bg-muted`}>
                  <OptimizedImage src={n.img} width={800} alt={n.title} className={`h-full w-full ${n.fit === "contain" ? "object-contain" : "object-cover"} transition duration-700 ${n.fit === "contain" ? "" : "group-hover:scale-105"} ${n.objectPos ?? ""}`} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {n.date}
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-amethyst">{n.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
                  {n.to && (
                    <div className="mt-4">
                      {n.external ? (
                        <a
                          href={n.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep transition hover:text-citrine"
                        >
                          {n.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <Link
                          to={n.to}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-citrine-deep transition hover:text-citrine"
                        >
                          {n.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter History */}
      <section className="bg-quartz/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="„Nius Lätter" title="Newsletter History" subtitle="Für Ansicht bitte jeweils auf das Symbol klicken." />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {NEWSLETTER.map((nl) => (
                <a
                  key={nl.l}
                  href={nl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-soft transition hover:border-citrine hover:shadow-lift"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-citrine-deep">{nl.d}</p>
                    <p className="mt-0.5 font-medium text-amethyst">{nl.l}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </Reveal>
          {/* Newsletter Registration Form */}
          <div className="mt-16 mx-auto max-w-xl">
            {nlStatus === "success" ? (
              <Reveal>
                <div className="rounded-2xl border border-citrine/30 bg-white p-8 text-center shadow-soft">
                  <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-citrine-deep" />
                  <h3 className="font-heading text-xl font-bold text-amethyst">Vielen Dank!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Ihre Newsletter-Anmeldung ist eingegangen. Wir melden uns schnellstmöglich.</p>
                  <button
                    onClick={() => setNlStatus("idle")}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-citrine-deep hover:underline"
                  >
                    Neue Anmeldung erfassen <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-white p-8 shadow-soft">
                  <h3 className="font-heading text-xl font-bold text-amethyst">Newsletter abonnieren</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Erhalten Sie News, Termine und Inspirationen rund um die Heilsteinschule Schweiz.</p>
                  <form onSubmit={handleNewsletterSubmit} className="mt-6 space-y-4">
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-quartz/40 px-4 py-3">
                      <Mail className="h-5 w-5 shrink-0 text-citrine-deep" />
                      <input
                        type="text"
                        value={nlName}
                        onChange={(e) => setNlName(e.target.value)}
                        placeholder="Ihr Name (optional)"
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-quartz/40 px-4 py-3">
                      <Mail className="h-5 w-5 shrink-0 text-citrine-deep" />
                      <input
                        type="email"
                        value={nlEmail}
                        onChange={(e) => setNlEmail(e.target.value)}
                        placeholder="Ihre E-Mail-Adresse"
                        required
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                      />
                    </div>
                    <label className="flex items-start gap-3 text-xs text-muted-foreground">
                      <input type="checkbox" checked={nlConsent} onChange={(e) => setNlConsent(e.target.checked)} required className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-citrine focus:ring-citrine/20" />
                      <span>Ich möchte den Newsletter abonnieren und stimme der Verarbeitung meiner Daten gemäss Datenschutzerklärung zu.</span>
                    </label>
                    <button
                      type="submit"
                      disabled={nlStatus === "loading" || !nlConsent || !nlEmail.trim()}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amethyst px-6 py-3.5 font-semibold text-white shadow-soft transition hover:bg-amethyst-soft disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {nlStatus === "loading" ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet…</>
                      ) : (
                        <>Newsletter abonnieren <ArrowRight className="h-4 w-4" /></>
                      )}
                    </button>
                    {nlStatus === "error" && (
                      <p className="text-xs text-destructive">Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</p>
                    )}
                  </form>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}