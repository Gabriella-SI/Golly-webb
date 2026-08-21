import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/models";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-0 rounded-full border border-border bg-brand-gradient p-3.5 text-primary-foreground shadow-[0_18px_45px_-18px_rgba(60,50,200,0.9)] transition-all duration-300 hover:scale-105 hover:gap-2 hover:pr-5 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[9rem]">
        Falar no WhatsApp
      </span>
    </a>
  );
}
