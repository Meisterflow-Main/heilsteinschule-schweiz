import { base44 } from "@/api/base44Client";

export async function sendAnfrage({ topic, name, email, phone, message }) {
  const res = await base44.functions.invoke("sendAnfrage", {
    topic,
    name,
    email,
    phone,
    message,
  });
  if (!res.data?.ok) throw new Error("Versand fehlgeschlagen");
  return res.data;
}