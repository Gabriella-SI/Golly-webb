import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Standard",
    price: "R$ 497",
    description: "Perfeito para quem busca uma página rápida e eficiente.",
    features: ["Landing Page Essencial", "Design Responsivo", "Otimização de Velocidade", "Botões para WhatsApp"],
    popular: false,
  },
  {
    name: "Premium Flutuante",
    price: "R$ 897",
    description: "A escolha ideal para se destacar totalmente da concorrência.",
    features: ["Design Exclusivo e Animações", "Análise de Copy / Texto", "Integração com Métricas", "Domínio e SSL Inclusos", "Suporte Prioritário"],
    popular: true,
  },
  {
    name: "Personalizado",
    price: "Sob Consulta",
    description: "Para projetos sob medida, sistemas e necessidades específicas.",
    features: ["Multi-páginas / E-commerce", "Painel Administrativo", "Integrações de API", "Consultoria Estratégica"],
    popular: false,
  },
];

export function PlansSection() {
  return (
    <section id="planos" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-gradient-jotta tracking-tight">
              Investimento <span className="text-gradient-purple">Transparente</span>
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Escolha o plano ideal para alavancar os resultados do seu negócio.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Reveal key={index}>
              <div
                className={`card-jotta group relative p-8 rounded-3xl overflow-hidden flex flex-col justify-between h-full transition-all duration-300 ${
                  plan.popular ? "border-purple-500/50 shadow-purple-500/20 shadow-2xl" : ""
                }`}
              >
                {/* Glow sutil ao passar o mouse */}
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple-600/15 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-purple-500/30 pointer-events-none" />

                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full text-white tracking-wider z-10 shadow-md">
                    Mais Vendido
                  </span>
                )}

                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-display text-gradient-jotta">{plan.name}</h3>
                  <div className="my-4">
                    <span className="text-3xl md:text-4xl font-extrabold font-display text-white">{plan.price}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-purple-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#orcamento"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] hover:shadow-purple-600/50 relative z-10 block"
                >
                  Escolher Plano
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
