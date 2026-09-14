import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const phoneNumber = "5583998763599";
  const message = encodeURIComponent("Olá! Vim pelo site da Golly Web e gostaria de solicitar um orçamento para uma Landing Page.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
    >
      <MessageCircle className="w-6 h-6 fill-slate-950 stroke-emerald-500 group-hover:rotate-12 transition-transform" />
      <span className="text-sm hidden sm:inline-block">Falar no WhatsApp</span>
    </a>
  );
}
