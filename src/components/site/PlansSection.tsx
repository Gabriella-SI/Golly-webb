import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Standard",
    price: "R$ 250",
    description: "Perfeito para quem busca uma página rápida e eficiente.",
    features: ["Landing Page Essencial", "Design Responsivo", "Otimização de Velocidade", "Botões para WhatsApp"],
    popular: false,
  },
  {
    name: "Premium Flutuante",
    price: "R$ 350",
    description: "A escolha ideal para se destacar da concorrência.",
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
    <section id="planos" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Investimento Transparente
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Escolha o plano ideal para alavancar os resultados da sua empresa.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Reveal key={index}>
              <div
                className={`float-card flex h-full flex-col justify-between p-8 hover:float-lift-hover ${
                  plan.popular
                    ? "relative border-purple-500/60 md:-translate-y-4 glow-brand"
                    : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-bold px-4 py-1 rounded-full uppercase">
                    Mais Vendido
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="my-4">
                    <span className="text-3xl md:text-4xl font-extrabold">{plan.price}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-purple-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#orcamento"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-center text-sm font-bold block hover:opacity-90 transition-opacity"
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
