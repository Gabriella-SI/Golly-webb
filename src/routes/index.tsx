import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { HeroMockup } from "@/components/site/HeroMockup";
import { ModelsSection } from "@/components/site/ModelsSection";
import { ProcessStep } from "@/components/site/ProcessStep";
import { Testimonials } from "@/components/site/Testimonials";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-hidden selection:bg-purple-500 selection:text-white">
      <Header />
      <main>
        {/* Seção Início */}
        <section id="inicio">
          <HeroMockup />
        </section>

        {/* Seção Soluções (aponta para Hero/Recursos por enquanto) */}
        <section id="solucoes">
          <ModelsSection />
        </section>

        {/* Seção Como Funciona */}
        <section id="como-funciona">
          <ProcessStep />
        </section>

        {/* Seção Planos (aponta para Depoimentos/Preços por enquanto) */}
        <section id="planos">
          <Testimonials />
        </section>

        {/* Seção FAQ & Orçamento */}
        <section id="faq">
          <QuoteForm />
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default IndexPage;
