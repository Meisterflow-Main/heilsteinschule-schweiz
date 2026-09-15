import React, { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("hss_cookie_consent");
      if (!consent) {
        const t = setTimeout(() => setVisible(true), 900);
        return () => clearTimeout(t);
      }
    } catch (e) {}
  }, []);

  const decide = (value) => {
    try {
      localStorage.setItem("hss_cookie_consent", value);
    } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-3xl rounded-2xl glass shadow-lift p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-citrine-deep" />
            <p className="text-sm text-foreground/80">
              Auf dieser Website werden Session-Cookies gesetzt, die technisch erforderlich sind.{" "}
              <a href="/datenschutz" className="font-medium text-amethyst underline underline-offset-2 hover:text-citrine-deep">
                Weitere Informationen zum Datenschutz.
              </a>
            </p>
          </div>
          <div className="flex shrink-0 gap-2 sm:ml-auto">
            <button
              onClick={() => decide("denied")}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-muted"
            >
              Ablehnen
            </button>
            <button
              onClick={() => decide("accepted")}
              className="rounded-full bg-amethyst px-4 py-2 text-sm font-semibold text-white transition hover:bg-amethyst-deep"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}