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
    <section id="solucoes" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Nossas Soluções
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Tudo o que seu negócio precisa para ter uma presença digital forte e lucrativa.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <Reveal key={index}>
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-purple-500/50 transition-all h-full">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
