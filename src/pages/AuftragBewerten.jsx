import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Star, CheckCircle2, Loader2, AlertCircle, ExternalLink, Heart } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";

// >>> Bitte hier den echten Google-Bewertungs-Link eintragen <<<
const GOOGLE_REVIEW_LINK = "https://search.google.com/local/writereview?placeid=ChIJVxaKoeE4kEcROaMKmfGkyww";
const WEBHOOK_URL =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

const QUESTIONS = [
  "Wie zufrieden waren Sie mit der Beratung und Betreuung?",
  "Wie bewerten Sie die Qualität der Heilsteine / Dienstleistung?",
  "Würden Sie die Heilsteinschule Schweiz weiterempfehlen?",
];

export default function AuftragBewerten() {
  const [step, setStep] = useState(0); // 0 = questions, 1 = rating, 2 = result
  const [answers, setAnswers] = useState([null, null, null]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [kritik, setKritik] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");

  const allAnswered = answers.every((a) => a !== null);

  const submitLow = async () => {
    setStatus("loading");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Anonym",
          email: "feedback@heilsteinschule.swiss",
          phone: "",
          description: `[CRITICAL_FEEDBACK] Sterne: ${rating}/5 | Q1: ${answers[0]}/5 | Q2: ${answers[1]}/5 | Q3: ${answers[2]}/5 | Kritik: ${kritik}`,
        }),
      });
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  const finishHigh = () => {
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#C19A3B", "#DDB55C", "#2B1B4D", "#8E7BB5"],
    });
    setStep(2);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-amethyst text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://heilsteinschule.swiss/media/wunderblock/SchuleWeb72x.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amethyst-deep via-amethyst/80 to-amethyst/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-citrine-light">
              <Heart className="h-3.5 w-3.5" /> Ihre Meinung zählt
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">Auftrag bewerten</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Wir freuen uns über Ihr Feedback. Beantworten Sie drei kurze Fragen und geben Sie
              anschliessend Ihre Sterne-Bewertung ab.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        {/* Progress */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {[0, 1, 2].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                step >= s ? "w-12 bg-citrine" : "w-12 bg-border"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 0 — Fragen */}
          {step === 0 && (
            <motion.div
              key="q"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeading eyebrow="Schritt 1 von 2" title="Drei kurze Fragen" />
              <div className="mt-10 space-y-8">
                {QUESTIONS.map((q, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                    <p className="font-medium text-amethyst">{q}</p>
                    <div className="mt-4 flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          onClick={() => setAnswers((a) => a.map((v, idx) => (idx === i ? n : v)))}
                          className="group"
                          aria-label={`${n} von 5`}
                        >
                          <Star
                            className={`h-8 w-8 transition ${
                              (answers[i] || 0) >= n
                                ? "fill-citrine text-citrine"
                                : "text-border group-hover:text-citrine/50"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                disabled={!allAnswered}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-amethyst px-6 py-3.5 font-semibold text-white transition hover:bg-amethyst-deep disabled:cursor-not-allowed disabled:opacity-50"
              >
                Zur Sterne-Bewertung
              </button>
            </motion.div>
          )}

          {/* STEP 1 — Sterne */}
          {step === 1 && (
            <motion.div
              key="r"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeading eyebrow="Schritt 2 von 2" title="Wie viele Sterne geben Sie uns?" />
              <div className="mt-10 flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    aria-label={`${n} Sterne`}
                    className="transition hover:scale-110"
                  >
                    <Star
                      className={`h-12 w-12 transition sm:h-14 sm:w-14 ${
                        (hover || rating) >= n
                          ? "fill-citrine text-citrine"
                          : "text-border"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8">
                  {rating <= 3 ? (
                    <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                      <p className="font-medium text-amethyst">
                        Wir bedauern, dass wir Sie nicht voll überzeugen konnten.
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Ihr Feedback hilft uns, besser zu werden. Wir nehmen Ihre Kritik ernst —
                        sie bleibt intern.
                      </p>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ihr Name (optional)"
                        className="mt-4 w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-sm outline-none focus:border-citrine focus:ring-2 focus:ring-citrine/20"
                      />
                      <textarea
                        value={kritik}
                        onChange={(e) => setKritik(e.target.value)}
                        rows={4}
                        placeholder="Was können wir verbessern?"
                        className="mt-3 w-full resize-y rounded-xl border border-border bg-white/70 px-4 py-3 text-sm outline-none focus:border-citrine focus:ring-2 focus:ring-citrine/20"
                      />
                      {status === "error" && (
                        <div className="mt-3 flex items-center gap-2 text-sm text-destructive">
                          <AlertCircle className="h-4 w-4" /> Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                        </div>
                      )}
                      <button
                        onClick={submitLow}
                        disabled={status === "loading"}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amethyst px-6 py-3 font-semibold text-white transition hover:bg-amethyst-deep disabled:opacity-60"
                      >
                        {status === "loading" ? (
                          <><Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet…</>
                        ) : (
                          "Feedback senden"
                        )}
                      </button>
                      {status === "success" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-4 flex items-center gap-2 rounded-xl bg-citrine/10 p-4 text-sm text-amethyst"
                        >
                          <CheckCircle2 className="h-5 w-5 text-citrine-deep" />
                          Vielen Dank für Ihr ehrliches Feedback. Wir werden es intern prüfen.
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-citrine/30 bg-citrine/5 p-8 text-center shadow-soft">
                      <h3 className="font-heading text-xl font-semibold text-amethyst">
                        Vielen Dank für Ihre tolle Bewertung!
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground">
                        Würden Sie uns auch auf Google weiterempfehlen? Das hilft anderen Kunden,
                        uns zu finden.
                      </p>
                      <a
                        href={GOOGLE_REVIEW_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={finishHigh}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
                      >
                        Auf Google bewerten <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* STEP 2 — Danke (hoch) */}
          {step === 2 && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-citrine/30 bg-white p-10 text-center shadow-soft"
            >
              <CheckCircle2 className="mx-auto h-16 w-16 text-citrine-deep" />
              <h2 className="mt-5 font-heading text-2xl font-bold text-amethyst">Herzlichen Dank!</h2>
              <p className="mt-3 text-muted-foreground">
                Ihre Weiterempfehlung auf Google bedeutet uns sehr viel. Falls Sie den Link noch
                benötigen:
              </p>
              <a
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-citrine px-7 py-4 font-semibold text-amethyst-deep shadow-lift transition hover:bg-citrine-light"
              >
                Auf Google bewerten <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}