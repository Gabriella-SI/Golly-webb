import { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";

export function Cabeçalho() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
        <div className="md:hidden bg-slate-950 border-b border-white/10 px-6 py-6 space-y-4">
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
