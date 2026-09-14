import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const handleOpenWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const whatsappUrl = "https://wa.me/5583998673599?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Golly%20Web%20e%20gostaria%20de%20um%20or%C3%A7amento.";
    if (window.top) {
      window.top.location.href = whatsappUrl;
    } else {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <button
      type="button"
      onClick={handleOpenWhatsApp}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-400 hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer border-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
