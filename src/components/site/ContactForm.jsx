import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

const WEBHOOK_URL =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

export default function ContactForm({ defaultDescription = "", compact = false, idPrefix = "", inquiryType = "allgemeine_anfrage", availableDates = null, showTerms = false }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    description: defaultDescription,
    confirm: false,
    company: "", // honeypot
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Bitte geben Sie Ihren Namen ein.";
    if (!form.email.trim()) e.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!form.description.trim()) e.description = "Bitte geben Sie eine Nachricht ein.";
    if (showTerms && !form.confirm) e.confirm = "Bitte akzeptieren Sie die AGB, um die Anfrage abzuschliessen.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.company) return; // honeypot triggered
    if (submittedOnce) return; // duplicate protection
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: inquiryType,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          preferred_date: form.preferredDate || null,
          description: form.description.trim(),
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      setSubmittedOnce(true);
      setForm({ name: "", email: "", phone: "", preferredDate: "", description: defaultDescription, confirm: false, company: "" });
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
        <h3 className="font-heading text-xl font-semibold text-amethyst">Vielen Dank!</h3>
        <p className="mt-2 text-muted-foreground">
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-amethyst underline underline-offset-4 hover:text-citrine-deep"
        >
          Neue Anfrage senden
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className={compact ? "grid gap-4" : "grid gap-5"}>
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

        <div>
          <label htmlFor={`${idPrefix}preferredDate`} className="mb-1.5 block text-sm font-medium text-amethyst">
            {availableDates ? "Öffnungstermin wählen" : "Wunschtermin"}
          </label>
          {availableDates && availableDates.length > 0 ? (
            <>
              <select
                id={`${idPrefix}preferredDate`}
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
              >
                <option value="">— Bitte wählen —</option>
                {availableDates.map((d) => (
                  <option key={d.date} value={d.date}>{d.label}</option>
                ))}
              </select>
              <p className="mt-1 text-xs text-muted-foreground">Wählen Sie einen der verfügbaren Öffnungstermine.</p>
            </>
          ) : (
            <>
              <input
                id={`${idPrefix}preferredDate`}
                name="preferredDate"
                type="date"
                value={form.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
              />
              <p className="mt-1 text-xs text-muted-foreground">Optional — wir bestätigen den Termin telefonisch oder per E-Mail.</p>
            </>
          )}
        </div>

        <div>
          <label htmlFor={`${idPrefix}description`} className="mb-1.5 block text-sm font-medium text-amethyst">
            Ihre Nachricht <span className="text-citrine-deep">*</span>
          </label>
          <textarea
            id={`${idPrefix}description`}
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={compact ? 4 : 5}
            className="w-full resize-y rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
            placeholder="Worum geht es?"
          />
          {errors.description && <p className="mt-1 text-xs text-destructive">{errors.description}</p>}
        </div>
      </div>

      {showTerms && (
        <>
          <label className="flex items-start gap-3 rounded-xl bg-quartz p-4 text-sm text-foreground/80">
            <input
              type="checkbox"
              name="confirm"
              checked={form.confirm}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-citrine focus:ring-citrine/20"
            />
            <span>
              Ich habe die{" "}
              <Link to="/agb" className="font-semibold text-citrine-deep underline underline-offset-2">
                Allgemeinen Geschäftsbedingungen (AGB)
              </Link>{" "}
              gelesen und <strong className="text-amethyst">akzeptiere sie verbindlich</strong>. Damit
              bestätige ich auch die <strong className="text-amethyst">verbindliche Anmeldung</strong> mit
              der Anzahlung von <strong>CHF 250.–</strong> zur Platzreservation.
              <span className="text-citrine-deep">*</span>
            </span>
          </label>
          {errors.confirm && <p className="text-xs text-destructive">{errors.confirm}</p>}
        </>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || submittedOnce}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amethyst px-6 py-3.5 font-medium text-white shadow-soft transition hover:bg-amethyst-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet…
          </>
        ) : (
          <>
            <Send className="h-4 w-4 transition group-hover:translate-x-0.5" /> Anfrage senden
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäss unserer Datenschutzerklärung zu.
      </p>
    </form>
  );
}