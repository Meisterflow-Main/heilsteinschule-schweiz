import React from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "41793896622";

export default function FloatingActions() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hallo%20Heilsteinschule%20Schweiz%2C%20ich%20habe%20eine%20Frage.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105"
      aria-label="WhatsApp Nachricht senden"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}