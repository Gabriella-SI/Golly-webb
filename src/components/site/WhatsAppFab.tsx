import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/message/XMNL46P6JIWJC1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex animate-float cursor-pointer items-center justify-center rounded-full border border-white/15 bg-emerald-500 p-4 text-white shadow-[0_25px_50px_-20px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-110 hover:bg-emerald-400"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
