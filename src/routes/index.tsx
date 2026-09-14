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
        <HeroMockup />
        <ModelsSection />
        <ProcessStep />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default IndexPage;
