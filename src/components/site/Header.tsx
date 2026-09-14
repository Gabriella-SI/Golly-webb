import { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId =
      id === "solucoes" ? "inicio" :
      id === "planos" ? "depoimentos" :
      id === "faq" ? "orcamento" : id;

    const element =
      document.getElementById(id) ||
      document.getElementById(targetId) ||
      document.querySelector(`[data-section="${id}"]`);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { name: "Início", id: "inicio" },
    { name: "Soluções", id: "solucoes" },
    { name: "Modelos", id: "modelos" },
    { name: "Como funciona", id: "como-funciona" },
    { name: "Planos", id: "planos" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-6 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <button
          type="button"
          onClick={() => scrollToSection("inicio")}
          className="text-2xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer border-none bg-transparent"
        >
          Golly Web
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer border-none bg-transparent"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={() => scrollToSection("orcamento")}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer flex items-center gap-2 border-none"
          >
            <MessageSquare className="w-4 h-4" /> Orçamento
          </button>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none border-none bg-transparent"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mx-auto mt-3 max-w-6xl space-y-4 rounded-3xl border border-white/10 bg-slate-950/85 px-6 py-6 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.95)] backdrop-blur-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-base font-medium text-slate-300 hover:text-white py-2 border-none bg-transparent"
            >
              {link.name}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection("orcamento")}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 mt-4 border-none"
          >
            <MessageSquare className="w-4 h-4" /> Solicitar Orçamento
          </button>
        </div>
      )}
    </nav>
  );
}
