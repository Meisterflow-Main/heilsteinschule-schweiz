import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, Send, Users, Calendar, MessageSquare } from "lucide-react";

const WEBHOOK_URL =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

export default function InfoNachmittagForm({ termine = [], idPrefix = "infon" }) {
  const upcoming = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return termine.filter((t) => new Date(t.datum) >= now);
  }, [termine]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    termin: "",
    personen: "1",
    nachricht: "",
    company: "", // honeypot
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Bitte geben Sie Ihren Namen ein.";
    if (!form.email.trim()) e.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!form.termin) e.termin = "Bitte wählen Sie einen Termin aus.";
    const n = parseInt(form.personen, 10);
    if (!form.personen || isNaN(n) || n < 1) e.personen = "Bitte geben Sie die Anzahl Personen an.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.company) return; // honeypot
    if (submittedOnce) return; // duplicate protection
    if (!validate()) return;
    setStatus("loading");
    try {
      const selectedTermin = upcoming.find((t) => t.id === form.termin);
      const personenCount = parseInt(form.personen, 10);
      const descriptionParts = [
        `Info-Nachmittag Anmeldung: ${selectedTermin ? selectedTermin.displayDate + " — " + selectedTermin.ort : ""}`,
        `Anzahl Personen: ${personenCount}`,
      ];
      if (form.nachricht.trim()) descriptionParts.push(`Nachricht: ${form.nachricht.trim()}`);
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || "nicht angegeben",
          description: descriptionParts.join("\n"),
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setSubmittedData({
        termin: selectedTermin,
        personen: form.personen,
        nachricht: form.nachricht.trim(),
      });
      setStatus("success");
      setSubmittedOnce(true);
      setForm({ name: "", email: "", phone: "", termin: "", personen: "1", nachricht: "", company: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  if (upcoming.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-quartz p-8 text-center">
        <Calendar className="mx-auto mb-4 h-10 w-10 text-citrine-deep" />
        <h3 className="font-heading text-lg font-semibold text-amethyst">Weitere Termine folgen</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Aktuell sind keine Info-Nachmittag-Termine verfügbar. Neue Termine werden hier
      veröffentlicht, sobald sie feststehen.
        </p>
      </div>
    );
  }

  if (status === "success" && submittedData) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-citrine/30 bg-citrine/5 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-citrine-deep" />
        <h3 className="font-heading text-xl font-semibold text-amethyst">Vielen Dank für Ihre Anmeldung!</h3>
        <div className="mt-4 space-y-2 text-left text-sm text-foreground/80">
          <div className="flex items-start gap-2">
            <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" />
            <span>
              <strong className="text-amethyst">Termin:</strong>{" "}
              {submittedData.termin
                ? `${submittedData.termin.displayDate}, ${submittedData.termin.time} — ${submittedData.termin.ort}`
                : "—"}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" />
            <span>
              <strong className="text-amethyst">Anzahl Personen:</strong> {submittedData.personen}
            </span>
          </div>
          {submittedData.nachricht && (
            <div className="flex items-start gap-2">
              <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-citrine-deep" />
              <span>
                <strong className="text-amethyst">Nachricht:</strong> {submittedData.nachricht}
              </span>
            </div>
          )}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Wir haben Ihre Anmeldung erhalten und melden uns schnellstmöglich bei Ihnen.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setSubmittedData(null);
          }}
          className="mt-6 text-sm font-medium text-amethyst underline underline-offset-4 hover:text-citrine-deep"
        >
          Neue Anmeldung erfassen
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

        {/* TERMIN */}
        <div>
          <label htmlFor={`${idPrefix}termin`} className="mb-1.5 block text-sm font-medium text-amethyst">
            Termin <span className="text-citrine-deep">*</span>
          </label>
          <select
            id={`${idPrefix}termin`}
            name="termin"
            value={form.termin}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
          >
            <option value="">— Bitte wählen —</option>
            {upcoming.map((t) => (
              <option key={t.id} value={t.id}>
                {t.displayDate} — {t.ort}
              </option>
            ))}
          </select>
          {errors.termin && <p className="mt-1 text-xs text-destructive">{errors.termin}</p>}
        </div>

        {/* ANZAHL PERSONEN */}
        <div>
          <label htmlFor={`${idPrefix}personen`} className="mb-1.5 block text-sm font-medium text-amethyst">
            Anzahl Personen <span className="text-citrine-deep">*</span>
          </label>
          <select
            id={`${idPrefix}personen`}
            name="personen"
            value={form.personen}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "Person" : "Personen"}
              </option>
            ))}
          </select>
          {errors.personen && <p className="mt-1 text-xs text-destructive">{errors.personen}</p>}
        </div>

        {/* NACHRICHT (optional) */}
        <div>
          <label htmlFor={`${idPrefix}nachricht`} className="mb-1.5 block text-sm font-medium text-amethyst">
            Nachricht <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <textarea
            id={`${idPrefix}nachricht`}
            name="nachricht"
            value={form.nachricht}
            onChange={handleChange}
            rows={4}
            className="w-full resize-y rounded-xl border border-border bg-white/70 px-4 py-3 text-foreground outline-none transition focus:border-citrine focus:ring-2 focus:ring-citrine/20"
            placeholder="Fragen oder zusätzliche Informationen"
          />
        </div>
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
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amethyst px-6 py-3.5 font-medium text-white shadow-soft transition hover:bg-amethyst-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet…
          </>
        ) : (
          <>
            <Send className="h-4 w-4 transition group-hover:translate-x-0.5" /> Anmeldung senden
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäss unserer Datenschutzerklärung zu.
      </p>
    </form>
  );
}