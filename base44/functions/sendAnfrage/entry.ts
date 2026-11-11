import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';
import { waitUntil } from 'base44:runtime';

const RECIPIENTS = ["maja.pfeiffer@heilsteinschule.ch"];

const EXTRA_RECIPIENTS: Record<string, string[]> = {};

const CRM_WEBHOOK =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

const TOPICS = ["Kontaktanfrage", "Infoanlass", "Seminar", "Anmeldung Grundausbildung", "Terminanfrage Laden"];

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function (req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    const topic = TOPICS.includes(String(body.topic)) ? String(body.topic) : "Kontaktanfrage";
    const name = String(body.name || "").trim().slice(0, 120);
    const email = String(body.email || "").trim().slice(0, 160);
    const phone = String(body.phone || "").trim().slice(0, 60) || "nicht angegeben";
    const message = String(body.message || "").trim().slice(0, 4000);

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Name, E-Mail und Nachricht sind erforderlich." }, { status: 400 });
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2a1b4b;line-height:1.6">
        <h2 style="margin:0 0 16px;font-size:19px;color:#2a1b4b">Neue ${esc(topic)}</h2>
        <table style="border-collapse:collapse;margin-bottom:18px">
          <tr><td style="padding:3px 16px 3px 0;color:#665e78">Name</td><td style="padding:3px 0"><strong>${esc(name)}</strong></td></tr>
          <tr><td style="padding:3px 16px 3px 0;color:#665e78">E-Mail</td><td style="padding:3px 0">${esc(email)}</td></tr>
          <tr><td style="padding:3px 16px 3px 0;color:#665e78">Telefon</td><td style="padding:3px 0">${esc(phone)}</td></tr>
          <tr><td style="padding:3px 16px 3px 0;color:#665e78">Eingang</td><td style="padding:3px 0">${new Date().toLocaleString("de-CH", { timeZone: "Europe/Zurich" })}</td></tr>
        </table>
        <div style="border-top:1px solid #e5e7eb;padding-top:16px;white-space:pre-wrap">${esc(message)}</div>
      </div>
    `;

    const subject = `${topic} – ${name}`;
    const recipients = [...RECIPIENTS, ...(EXTRA_RECIPIENTS[topic] || [])];
    const results = await Promise.allSettled(
      recipients.map((to) =>
        base44.asServiceRole.integrations.Core.SendEmail({
          to,
          subject,
          html,
          category: "transactional",
        })
      )
    );

    const sent = results.filter(
      (r) => r.status === "fulfilled" && (r.value as any)?.success !== false
    ).length;

    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.log(`Versand an ${recipients[i]} fehlgeschlagen: ${String(r.reason)}`);
      } else if ((r.value as any)?.success === false) {
        console.log(
          `Versand an ${recipients[i]} abgelehnt: ${(r.value as any)?.reason || "unbekannt"}`
        );
      }
    });

    if (sent === 0) {
      return Response.json({ error: "E-Mail konnte nicht versendet werden." }, { status: 502 });
    }

    waitUntil(
      fetch(CRM_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          description: `${topic}\n${message}`,
        }),
        signal: AbortSignal.timeout(10000),
      }).catch(() => undefined)
    );

    return Response.json({ ok: true, sent });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}