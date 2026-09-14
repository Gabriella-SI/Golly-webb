import { Reveal } from "./Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo de entrega da página?",
    answer: "O prazo médio de entrega é de 3 a 7 dias úteis após o envio de todas as informações do seu negócio.",
  },
  {
    question: "Preciso ter hospedagem e domínio?",
    answer: "Se você não tiver, nós ajudamos você a configurar tudo passo a passo sem complicações.",
  },
  {
    question: "A página funciona bem no celular?",
    answer: "Sim! Todas as nossas páginas são criadas com foco total na experiência mobile (smartphones).",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com 50% de entrada no início do projeto e 50% na entrega e aprovação final.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-400 mt-3 text-sm md:text-base">
              Tire suas dúvidas antes de dar o próximo passo.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="float-card px-6 hover:float-lift-hover hover:border-purple-500/40"
              >
                <AccordionTrigger className="text-left text-base font-semibold py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-sm pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
