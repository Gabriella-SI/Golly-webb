import { Star, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Lucas Mendes",
    role: "Proprietário",
    company: "Studio Fit",
    comment: "A Landing Page que a Golly Web criou superou totalmente minhas expectativas. O design é impecável e minhas conversões aumentaram na primeira semana!",
    rating: 5,
    tag: "Landing Page Personalizada",
  },
  {
    name: "Camila Rocha",
    role: "Consultora Financeira",
    company: "CR Consultoria",
    comment: "Precisava de algo moderno que passasse total confiança. O resultado ficou incrível, passei a fechar muito mais clientes pelo Instagram.",
    rating: 5,
    tag: "Design Premium",
  },
  {
    name: "Rafael Torres",
    role: "Infoprodutor",
    company: "Método Pro",
    comment: "Agilidade na entrega e uma estética impressionante. O efeito e a fluidez do site deixaram meu projeto com uma cara extremamente profissional.",
    rating: 5,
    tag: "Alta Conversão",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              O que dizem sobre a Golly Web
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Páginas pensadas estrategicamente para gerar impacto, autoridade e conversões reais.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={index}>
              <div className="group relative rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                      {item.tag}
                    </span>
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{item.comment}"</p>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <h3 className="font-bold text-white text-base">{item.name}</h3>
                  <p className="text-xs text-slate-400">{item.role} • <span className="text-slate-300">{item.company}</span></p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <a
              href="https://www.instagram.com/gollyweeb/"
              target="_top"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/60 text-white font-medium border border-white/10 hover:border-purple-500/50 hover:bg-slate-900 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-purple-400" />
              Siga o Instagram <span className="text-purple-300 font-bold">@gollyweeb</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
