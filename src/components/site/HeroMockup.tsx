import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { BrowserFrame } from "@/components/site/BrowserFrame";

const WHATSAPP_URL =
  "https://wa.me/5583998673599?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Golly%20Web%20e%20gostaria%20de%20um%20or%C3%A7amento.";

export function HeroMockup() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-[32rem] h-[32rem] bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 right-0 w-[28rem] h-[28rem] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Landing pages de alta conversão
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
            Seu negócio merece mais do que{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              uma página
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-400 max-w-xl">
            Criamos páginas rápidas, elegantes e pensadas para transformar visitantes em clientes.
            Design premium, responsivo e sob medida para a sua marca.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo("orcamento")}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-purple-900/30 flex items-center gap-2 cursor-pointer border-none"
            >
              Solicitar orçamento <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur text-slate-200 font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            {[
              { value: "48h", label: "Entrega média" },
              { value: "100%", label: "Responsivo" },
              { value: "+90", label: "Nota performance" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-black text-white">{item.value}</p>
                <p className="text-xs text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 blur-3xl rounded-[3rem] pointer-events-none" />
          <div className="relative animate-float">
            <BrowserFrame url="gollyweb.com/sua-marca">
              <div className="bg-slate-950 p-8 space-y-5">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
                  Sua marca
                </span>
                <h3 className="text-xl font-black leading-tight text-white">
                  Atendimento premium para quem quer resultado
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  Uma página feita para apresentar o seu serviço e receber contatos todos os dias.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <span className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-[11px] font-semibold text-white">
                    Quero um orçamento
                  </span>
                  <span className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold text-slate-200">
                    Ver serviços
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {[
                    { title: "Design próprio", text: "Visual único da sua marca" },
                    { title: "Conversão", text: "Textos que geram contato" },
                    { title: "Velocidade", text: "Abre em menos de 1s" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      <p className="text-[11px] font-bold text-white">{item.title}</p>
                      <p className="mt-1 text-[10px] leading-snug text-slate-400">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
