import { Reveal } from "./Reveal";
import { Zap, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export function HeroMockup() {
  return (
    <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
      {/* Luzes neon de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-glow" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Landing Pages de Alta Performance
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Transforme visitantes em clientes com páginas modernas e flutuantes
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-6">
            Desenvolvemos landing pages exclusivas para o seu negócio, focadas em alta velocidade, design premium e máxima conversão.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5583998763599?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20para%20minha%20landing%20page."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-purple-500/25 hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        {/* Mockup Flutuante com dados reais */}
        <Reveal>
          <div className="mt-16 max-w-md mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            
            <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 animate-float">
              
              <div className="flex items-center gap-4 bg-slate-800/60 border border-white/5 p-4 rounded-2xl">
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white">Carregamento Ultrarrápido</h4>
                  <p className="text-xs text-slate-400">Páginas otimizadas para mobile e desktop</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800/60 border border-white/5 p-4 rounded-2xl">
                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white">Design Exclusivo & Seguro</h4>
                  <p className="text-xs text-slate-400">Estrutura moderna para passar confiança aos clientes</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800/60 border border-white/5 p-4 rounded-2xl">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white">Foco em Conversão</h4>
                  <p className="text-xs text-slate-400">Botões estratégicos direcionados ao WhatsApp</p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
