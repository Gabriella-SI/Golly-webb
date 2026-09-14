import { MessageSquare, Layout, Code, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { number: "01", icon: MessageSquare, title: "Alinhamento & Ideia", desc: "Entendemos seu objetivo, público-alvo e a proposta da sua marca para planejar a estrutura ideal." },
  { number: "02", icon: Layout, title: "Design & Estratégia", desc: "Criamos a identidade visual, layout moderno e textos estratégicos focados na conversão." },
  { number: "03", icon: Code, title: "Desenvolvimento & Testes", desc: "Construímos uma página ultrarrápida, responsiva e otimizada para todas as telas." },
  { number: "04", icon: Rocket, title: "Publicação no Ar", desc: "Configuramos seu domínio, hospedagem e entregamos sua presença digital pronta para vender." },
];

export function ProcessStep() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full">Processo Transparente</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">Como colocamos sua página no ar</h2>
            <p className="text-slate-400 mt-4 text-base">Um caminho simples e ágil para transformar a presença digital do seu negócio.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx}>
                <div className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-purple-500/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-3xl font-black text-purple-500/30 group-hover:text-purple-400/80 transition-colors">{item.number}</span>
                      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
