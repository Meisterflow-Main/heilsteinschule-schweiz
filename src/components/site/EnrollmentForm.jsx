import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const WEBHOOK_URL =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

const STANDORTE = ["Schule Asp", "Wallbach AG", "Schule Bern", "Schule Uster ZH"];
const STARTS = [
  "Asp8 — ab 21.05.2026 (Donnerstags)",
  "Bern 2 — ab 23.01.2027 (Wochenenden)",
  "Wallbach 1 — ab 30.01.2027 (Wochenenden)",
  "Wallbach 2 — ab 21.01.2027 (Donnerstags)",
  "Uster — ab 2027 geplant",
  "Noch unentschieden / Beratung erwünscht",
];

export default function EnrollmentForm({ idPrefix = "enrol", showTerms = true }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    standort: "",
    start: "",
    message: "",
    confirm: false,
    website: "", // honeypot
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Bitte geben Sie Ihren Namen ein.";
    if (!form.email.trim()) e.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!form.standort) e.standort = "Bitte wählen Sie einen Schulort.";
    if (!form.start) e.start = "Bitte wählen Sie einen gewünschten Start.";
    if (!form.confirm) e.confirm = "Bitte bestätigen Sie die verbindliche Anmeldung.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return; // honeypot triggered
    if (submittedOnce) return; // duplicate protection
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "ausbildung_anmeldung",
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          standort: form.standort,
          start: form.start,
          description: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      setSubmittedOnce(true);
      setForm({ name: "", email: "", phone: "", standort: "", start: "", message: "", confirm: false, website: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-citrine/30 bg-citrine/5 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-citrine-deep" />
        <h3 className="font-heading text-xl font-semibold text-amethyst">Anmeldung eingegangen</h3>
        <p className="mt-2 text-muted-foreground">
          Vielen Dank für Ihre verbindliche Anmeldung. Wir bestätigen Ihren Platz und melden uns
          schnellstmöglich bezüglich der Anzahlung von CHF 250.– zur Platzreservation.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-amethyst underline underline-offset-4 hover:text-citrine-deep"
        >
          Neue Anmeldung senden
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-5">
        <div>
          <label htmlFor={`${idPrefix}name`} className="mb-1.5 block text-sm font-medium text-amethyst">
            Name <span className="text-citrine-deep">*</span>
          </label>
          <input
            id={`${idPrefix}name`}
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
            placeholder="Ihr Name"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}email`} className="mb-1.5 block text-sm font-medium text-amethyst">
              E-Mail-Adresse <span className="text-citrine-deep">*</span>
            </label>
            <input
              id={`${idPrefix}email`}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
              placeholder="ihre@email.ch"
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor={`${idPrefix}phone`} className="mb-1.5 block text-sm font-medium text-amethyst">
              Telefon
            </label>
            <input
              id={`${idPrefix}phone`}
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
              placeholder="+41 79 ..."
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}standort`} className="mb-1.5 block text-sm font-medium text-amethyst">
              Gewünschter Schulort <span className="text-citrine-deep">*</span>
            </label>
            <select
              id={`${idPrefix}standort`}
              name="standort"
              value={form.standort}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
            >
              <option value="">Bitte wählen…</option>
              {STANDORTE.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.standort && <p className="mt-1 text-xs text-destructive">{errors.standort}</p>}
          </div>
          <div>
            <label htmlFor={`${idPrefix}start`} className="mb-1.5 block text-sm font-medium text-amethyst">
              Gewünschter Start <span className="text-citrine-deep">*</span>
            </label>
            <select
              id={`${idPrefix}start`}
              name="start"
              value={form.start}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
            >
              <option value="">Bitte wählen…</option>
              {STARTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.start && <p className="mt-1 text-xs text-destructive">{errors.start}</p>}
          </div>
        </div>

        <div>
          <label htmlFor={`${idPrefix}message`} className="mb-1.5 block text-sm font-medium text-amethyst">
            Anmerkungen
          </label>
          <textarea
            id={`${idPrefix}message`}
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full resize-y rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
            placeholder="Optional — z. B. Fragen zum Ablauf, Vorkenntnisse, etc."
          />
        </div>

        {showTerms && (
          <div className="rounded-xl border border-citrine/30 bg-citrine/5 p-4 text-xs leading-relaxed text-muted-foreground">
            <strong className="text-amethyst">Anmeldebedingungen:</strong> Die Anmeldung ist verbindlich
            und wird mit der Anzahlung von CHF 250.– für die Platzreservation rechtsgültig. Dieser Betrag
            wird an die erste Rate angerechnet. Bei Rücktritt verfällt der Unkostenbeitrag.
          </div>
        )}
        <label className="flex items-start gap-3 rounded-xl bg-quartz p-4 text-sm text-foreground/80">
          <input
            type="checkbox"
            name="confirm"
            checked={form.confirm}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-citrine focus:ring-citrine/20"
          />
          <span>
            Ich habe die <strong className="text-amethyst">Anmeldebedingungen</strong> und die{" "}
            <Link to="/agb" className="text-citrine-deep underline underline-offset-2">AGB</Link> gelesen
            und akzeptiert. Ich bestätige die <strong className="text-amethyst">verbindliche Anmeldung</strong>{" "}
            mit der Anzahlung von <strong>CHF 250.–</strong> zur Platzreservation.
            <span className="text-citrine-deep">*</span>
          </span>
        </label>
        {errors.confirm && <p className="text-xs text-destructive">{errors.confirm}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || submittedOnce}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-citrine px-6 py-3.5 font-semibold text-amethyst-deep shadow-soft transition hover:bg-citrine-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Anmeldung wird gesendet…
          </>
        ) : (
          <>
            <GraduationCap className="h-4 w-4 transition group-hover:translate-x-0.5" /> Verbindliche Anmeldung absenden
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäss unserer Datenschutzerklärung zu.
      </p>
    </form>
  );
}