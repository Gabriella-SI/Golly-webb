import { Zap, Layout, Smartphone, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const solutions = [
  {
    icon: <Layout className="w-8 h-8 text-purple-400" />,
    title: "Landing Pages de Alta Conversão",
    description: "Páginas otimizadas e focadas em transformar visitantes em clientes reais para seu negócio.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    title: "Design 100% Responsivo",
    description: "Sua marca com presença impecável em celulares, tablets e computadores.",
  },
  {
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
    title: "Ultra Velocidade",
    description: "Carregamento instantâneo em menos de 1 segundo para não perder nenhum cliente.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
    title: "Otimização para Anúncios",
    description: "Estrutura pronta para receber tráfego pago do Meta Ads e Google Ads.",
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-gradient-jotta tracking-tight">
              Nossas <span className="text-gradient-purple">Soluções</span>
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Tudo o que seu negócio precisa para ter uma presença digital forte e lucrativa.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <Reveal key={index}>
              <div className="card-jotta group relative h-full p-6 rounded-3xl overflow-hidden">
                {/* Glow sutil ao passar o mouse */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-600/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-purple-500/25 pointer-events-none" />

                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-gradient-jotta mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 relative z-10 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
